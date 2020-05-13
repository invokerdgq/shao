import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton, AtInput } from 'taro-ui'
import { Loading, Price, SpCell, AddressChoose, SpToast, NavBar } from '@/components'
import api from '@/api'
import S from '@/spx'
import { withLogin } from '@/hocs'
import { pickBy, log, classNames, isArray } from '@/utils'
import { lockScreen } from '@/utils/dom'
import find from 'lodash/find'
import _cloneDeep from 'lodash/cloneDeep'
import CheckoutItems from './checkout-items'
import PaymentPicker from './comps/payment-picker'
import DrugInfo from './comps/drug-info'
import OrderItem from '../trade/comps/order-item'

import './espier-checkout.scss'

const transformCartList = (list) => {
  return pickBy(list, {
    item_id: 'item_id',
    cart_id: 'cart_id',
    title: 'item_name',
    curSymbol: 'fee_symbol',
    discount_info: 'discount_info',
    order_item_type: 'order_item_type',
    pics: 'pic',
    price: ({ price }) => (+price / 100).toFixed(2),
    num: 'num',
    item_spec_desc:'item_spec_desc',
  }).sort((a) => a.order_item_type !== 'gift' ? -1 : 1)
}

@connect(({ address, cart, colors }) => ({
  address: address.current,
  coupon: cart.coupon,
  colors: colors.current
}), (dispatch) => ({
  onClearFastbuy: () => dispatch({ type: 'cart/clearFastbuy' }),
  onClearCart: () => dispatch({ type: 'cart/clear' }),
  onClearCoupon: () => dispatch({ type: 'cart/clearCoupon' }),
  onAddressChoose: (address) => dispatch({ type: 'address/choose', payload: address })
}))
@withLogin()
export default class CartCheckout extends Component {
  static defaultProps = {
    list: []
  }

  constructor (props) {
    super(props)

    this.state = {
      info: null,
      submitLoading: false,
      address_list: [],
      shop: null,
      showShippingPicker: false,
      showAddressPicker: false,
      showCheckoutItems: false,
      showCoupons: false,
      express: true,
      receiptType: 'logistics',
      curCheckoutItems: [],
      coupons: [],
      drug: null,
      total: {
        items_count: '',
        total_fee: '0.00',
        item_fee: '',
        freight_fee: '',
        member_discount: '',
        coupon_discount: '',
        point: ''
      },
      payType: 'wxpay',
      disabledPayment: null,
      isPaymentOpend: false,
      isDrugInfoOpend: false,
      invoiceTitle: ''
    }
  }

  componentDidShow () {
    this.setState({
      isPaymentOpend: false,
      isDrugInfoOpend: false
    })
    this.fetchAddress()
  }

  componentDidMount () {
    // this.fetchAddress()

    const { cart_type, pay_type: payType, shop_id } = this.$router.params
    let curStore = null, info = null

    if (cart_type === 'fastbuy') {
      curStore = Taro.getStorageSync('curStore')
      this.props.onClearFastbuy()
      info = null
    } else if (cart_type === 'cart') {
      const { shop_id, name, store_address, is_delivery, is_ziti, lat, lng, hour, phone } = this.$router.params
      // 积分购买不在此种情况
      curStore = {
        shop_id,
        name,
        store_address,
        is_delivery: JSON.parse(is_delivery),
        is_ziti: JSON.parse(is_ziti),
        lat,
        lng,
        hour,
        phone
      }
      this.props.onClearFastbuy()
      info = null
    }

    this.setState({
      curStore,
      express: JSON.parse(curStore.is_delivery) ? true : false,
      receiptType: JSON.parse(curStore.is_delivery) ? 'logistics' : 'ziti',
      info,
      payType: payType || this.state.payType
    })

    let total_fee = 0
    let items_count = 0
    const items = (info && info.cart) ? info.cart[0].list.map((item) => {
      const { item_id, num } = item
      total_fee += +(item.price)
      items_count += +(item.num)
      return {
        item_id,
        num
      }
    })
    : []

    this.params = {
      cart_type,
      items,
      pay_type: payType || 'wxpay'
    }

    this.setState({
      total: {
        items_count,
        total_fee: total_fee.toFixed(2)
      }
    })
    this.handleAddressChange(this.props.defaultAddress)
  }

  componentWillUnmount() {
    // teardown clean
    this.props.onClearCoupon()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.address !== this.props.address) {
      this.fetchAddress()
    }
  }

  async fetchAddress (cb) {
    const { type } = this.$router.params
    const isDrug = type === 'drug'
    Taro.showLoading({
      mask: true
    })
    // if (!isDrug) {
      const { list } = await api.member.addressList()
      this.setState({
        address_list: list
      }, () => {
        this.changeSelection()
        cb && cb(list)
      })
    /* } else {
      const { store_name, store_address, shop_id, hour } = await api.shop.getShop()
      this.setState({
        shop: {
          store_name,
          store_address,
          shop_id,
          hour
        }
      }, () => {
        this.calcOrder()
      })
    } */
    Taro.hideLoading()
  }

  changeSelection (params = {}) {
    const { address_list } = this.state
    if (address_list.length === 0) {
      // this.props.address = {
      //   current: null
      // }
      this.props.onAddressChoose(null)
      this.setState({
        address: null
      })
      // this.handleAddressChange()
      this.calcOrder()
      /*Taro.navigateTo({
        url: '/pages/member/edit-address'
      })*/
      return
    }

    let address = this.props.address
    if (!address) {
      const { address_id } = params
      address = find(address_list, addr => address_id ? address_id === addr.address_id : addr.is_def > 0) || address_list[0] || null
    }

    log.debug('[address picker] selection: ', address)
    this.props.onAddressChoose(address)
    this.handleAddressChange(address)
  }

  getParams () {
    const { type, seckill_id = null, ticket = null, group_id = null, team_id = null, shop_id } = this.$router.params
    let orderType = ''
    let activity = {}
    orderType = (() => {
      const key = type
      let value = ''
      switch (key) {
        case 'drug':
          value = 'normal_drug'
          break;
        case 'group':
          value = 'normal_groups'
          activity = Object.assign(activity, { bargain_id: group_id})
          if (team_id) {
            activity = Object.assign(activity, {team_id})
          }
          break;
        case 'seckill':
          value = 'normal_seckill'
          activity = Object.assign(activity, {seckill_id: seckill_id, seckill_ticket: ticket})
          break;
        default:
          value = 'normal'
      }
      return value
    })()
    const receiver = pickBy(this.state.address, {
      receiver_name: 'name',
      receiver_mobile: 'mobile',
      receiver_state: 'state',
      receiver_city: 'city',
      receiver_district: 'district',
      receiver_address: 'address',
      receiver_zip: 'zip'
    })
    let buyerInfo = {}
    if (type === 'drug') {
      buyerInfo = pickBy(this.state.drug, {
        drug_buyer_name: 'name',
        drug_buyer_id_card: 'id_card',
        drug_list_image: 'imgs',
      })
    }
    const trackParams = Taro.getStorageSync('trackParams')
    let tracks = {}
    if (trackParams) {
      tracks = {
        source_id: trackParams.source_id,
        monitor_id: trackParams.monitor_id
      }
    }
    const distributionShopId = Taro.getStorageSync('distribution_shop_id')
    let miniShopId = {}
    if (distributionShopId) {
      miniShopId = {
        promoter_shop_id: distributionShopId
      }
    }
    const { payType, receiptType } = this.state
    const { coupon } = this.props
    const params = {
      ...this.params,
      ...receiver,
      ...buyerInfo,
      ...tracks,
      ...miniShopId,
      ...activity,
      receipt_type: receiptType,
      order_type: orderType,
      promotion: 'normal',
      member_discount: 0,
      coupon_discount: 0,
			pay_type: payType,
			distributor_id: shop_id === 'undefined' ? 0 : shop_id
    }

    log.debug('[checkout] params: ', params)

    if (coupon) {
      if (coupon.type === 'coupon' && coupon.value.code) {
        params.coupon_discount = coupon.value.code
      } else if (coupon.type === 'member') {
        params.member_discount = coupon.value ? 1 : 0
      }
    }

    this.params = params

    return _cloneDeep(params)
  }

  async calcOrder () {
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
    const params = this.getParams()
    console.log(params)
    let data
    try {
      data = await api.cart.total(params)
    } catch (e) {
      this.resolvePayError(e)
    }

    if (!data) return

    const { items, item_fee, totalItemNum, member_discount = 0, coupon_discount = 0, discount_fee, freight_fee = 0, freight_point = 0, point = 0, total_fee, remainpt, deduction } = data
    const total = {
      ...this.state.total,
      item_fee,
      discount_fee: -1 * discount_fee,
      member_discount: -1 * member_discount,
      coupon_discount: -1 * coupon_discount,
      freight_fee,
      total_fee: params.pay_type === 'point' ? 0 : total_fee,
      items_count: totalItemNum,
      point,
      freight_point,
      remainpt, // 总积分
      deduction // 抵扣
    }

    let info = this.state.info
    if (items && !this.state.info) {
      // 从后端获取订单item
      info = {
        cart: [{
          list: transformCartList(items),
          cart_total_num: items.reduce((acc, item) => (+item.num) + acc, 0)
        }]
      }
      this.params.items = items
    }

    Taro.hideLoading()
    this.setState({
      total,
      info
    })
  }

  handleSwitchExpress = (key) => {
    const receiptType = JSON.parse(key) ? 'logistics' : 'ziti'

    this.setState({
      express: JSON.parse(key),
      receiptType
    }, () => {
      this.calcOrder()
    })
  }

  handleAddressChange = (address) => {
    if (!address) {
      return
    }
    address = pickBy(address, {
      state: 'province',
      city: 'city',
      district: 'county',
      address_id: 'address_id',
      mobile: 'telephone',
      name: 'username',
      zip: 'postalCode',
      address: 'adrdetail',
      area: 'area'
    })

    this.setState({
      address
    }, () => {
      this.calcOrder()
    })
    if (!address) {
      this.setState({
        showAddressPicker: true
      })
    }
  }

  handleMapClick = () => {
    const { lat, lng } = Taro.getStorageSync('curStore')

    Taro.openLocation({
      latitude: Number(lat),
      longitude: Number(lng),
      scale: 18
    })
  }

  handleShippingChange = (type) => {
    console.log(type)
  }

  handleClickItems (items) {
    this.setState({
      curCheckoutItems: items
    })
    this.toggleCheckoutItems()
  }

  handleInvoiceClick = async () => {
    const res = await Taro.chooseInvoiceTitle()

    if (res.errMsg === 'chooseInvoiceTitle:ok') {
      log.debug('[invoice] info:', res)
      const { type, title: content, companyAddress: company_address, taxNumber: registration_number, bankName: bankname, bankAccount: bankaccount, telephone: company_phone } = res
      this.params = {
        ...this.params,
        invoice_type: 'normal',
        invoice_content: {
          title: type !== 0 ? 'individual' : 'unit',
          content,
          company_address,
          registration_number,
          bankname,
          bankaccount,
          company_phone
        }
      }
      this.setState({
        invoiceTitle: content
      })
    }
  }

  handleChange = (val) => {
    let drug = null
    const arr = Object.values(val)
    console.log(arr)
    const isNan = arr.length > 0 && arr.find(item => item !== '')
    if (isNan) drug = val
    this.setState({
      drug,
      isDrugInfoOpend: false
    })
  }

  toggleCheckoutItems (isOpened) {
    if (isOpened === undefined) {
      isOpened = !this.state.showCheckoutItems
    }

    lockScreen(isOpened)
    this.setState({ showCheckoutItems: isOpened })
  }

  toggleState (key, val) {
    if (val === undefined) {
      val = !this.state[key]
    }

    this.setState({
      [key]: val
    })
  }

  handlePaymentShow = () => {
    this.setState({
      isPaymentOpend: true,
      isDrugInfoOpend: false
    })
  }

  handleDrugInfoShow = () => {
    this.setState({
      isPaymentOpend: false,
      isDrugInfoOpend: true
    })
  }

  handleDrugChange = (val) => {
    console.log(val)
  }

  resolvePayError (e) {
    const { payType } = this.state
    if (payType === 'point') {
      // let payTypeNeedsChange = ['当前积分不足以支付本次订单费用', '当月使用积分已达限额'].includes(e.message)
      this.setState({
        disabledPayment: { name: 'point', message: e.message },
        payType: 'wxpay'
      }, () => {
        this.calcOrder()
      })
    }
  }

  submitPay = () => {
    let { receiptType, submitLoading } = this.state;
    if (receiptType === 'logistics') {
      if (this.state.curStore.is_delivery && !this.state.address) {
        return S.toast('请选择地址')
      }
    }
    if (submitLoading) {
      return false
    }
    this.setState({
      submitLoading: true
    })
    let _this=this
    let templeparams = {
      'temp_name': 'yykweishop',
      'source_type': receiptType === 'logistics' ? 'logistics_order' : 'ziti_order',
    }
    api.user.newWxaMsgTmpl(templeparams).then(tmlres => {
      console.log('templeparams---1', tmlres)
      if (tmlres.template_id && tmlres.template_id.length > 0) {
        wx.requestSubscribeMessage({
          tmplIds: tmlres.template_id,
          success() {
            _this.handlePay()
          },
          fail(){
            _this.handlePay()
          }
        })
      } else {
        _this.handlePay()
      }
    },()=>{
      _this.handlePay()
    })
  }


  handlePay = async () => {
    // if (!this.state.address) {
    //   return S.toast('请选择地址')
    // }

    const { payType, total } = this.state
    const { type } = this.$router.params
    const isDrug = type === 'drug'

    if (payType === 'point') {
      try {
        const { confirm } = await Taro.showModal({
          title: '积分支付',
          content: `确认使用${total.remainpt}积分全额抵扣商品总价吗`,
          confirmColor: '#0b4137',
          confirmText: '确认使用',
          cancelText: '取消'
        })
        if (!confirm) {
          this.setState({
            submitLoading: false
          })
          return 
        }
      } catch (e) {
        this.setState({
          submitLoading: false
        })
        console.log(e)
        return
      }
    }

    Taro.showLoading({
      title: '正在提交',
      mask: true
    })

    this.setState({
      submitLoading: true
    })

    let order_id, config, payErr
    try {
      let params = this.getParams()
      delete params.items
      // 积分不开票
      if (payType === 'point') {
        delete params.invoice_type
        delete params.invoice_content
      }
      config = await api.trade.create(params)
      order_id = isDrug ? config.order_id : config.trade_info.order_id
    } catch (e) {
      Taro.showToast({
        title: e.message,
        icon: 'none'
      })
      payErr = e
      this.resolvePayError(e)

      // point 判断
      if (payType === 'point') {
        this.setState({
          submitLoading: false
        })
      }
    }

    Taro.hideLoading()
    if (!order_id) return

    if (isDrug) {
      Taro.redirectTo({
        url: '/pages/trade/drug-list'
      })
      return
    }
    // 支付流程
    const paymentParams = {
      order_id,
      pay_type: this.state.payType,
      order_type: config.order_type
    }

    this.setState({
      submitLoading: false
    })
    // 积分流程
    if (payType === 'point') {
      if (!payErr) {
        Taro.showToast({
          title: '支付成功',
          icon: 'none'
        })

        this.props.onClearCart()
        Taro.redirectTo({
          url: `/pages/trade/detail?id=${order_id}`
        })
      }


      return
    }

    payErr = null
    try {
      const payRes = await Taro.requestPayment(config)
      log.debug(`[order pay]: `, payRes)
    } catch (e) {
      payErr = e
      Taro.showToast({
        title: e.err_desc || e.errMsg || '支付失败',
        icon: 'none'
      })
    }

    if (!payErr) {
      await Taro.showToast({
        title: '支付成功',
        icon: 'success'
      })

      this.props.onClearCart()
      Taro.redirectTo({
        url: type === 'group' ? `/pages/item/group-detail?team_id=${config.team_id}` : `/pages/trade/detail?id=${order_id}`
      })

      /*this.props.onClearCart()
      Taro.redirectTo({
        url: `/pages/trade/detail?id=${order_id}`
      })*/
    } else {
      if (payErr.errMsg.indexOf('fail cancel') >= 0) {
        Taro.redirectTo({
          url: `/pages/trade/detail?id=${order_id}`
        })
      }
    }
    return

    // const url = `/pages/cashier/index?order_id=${order_id}`
    // this.props.onClearCart()
    // Taro.navigateTo({ url })
  }

  handleRemarkChange = (val) => {
    this.params = {
      ...this.params,
      remark: val
    }
  }

  handleCouponsClick = () => {
    console.log(this.params.order_type, 630)
    if (this.state.payType === 'point'){
      return
    }
    // if (this.params.order_type === 'normal' || this.params.order_type === 'normal_seckill' || this.params.order_type === 'single_group' || this.params.order_type === 'limited_time_sale') {
    //   return S.toast('该活动不支持使用优惠券')
    // }

    const items = this.params.items
      .filter(item => item.order_item_type !== 'gift')
      .map(item => {
        const { item_id, num, total_fee: price } = item
        return {
          item_id,
          price,
          num
        }
      })

    const { shop_id } = this.$router.params

    Taro.navigateTo({
      url: `/pages/cart/coupon-picker?items=${JSON.stringify(items)}&is_checkout=true&cart_type=${this.params.cart_type}&distributor_id=${shop_id}`
    })
  }

  handlePaymentChange = async (payType) => {
    if (payType === 'point') {
      this.props.onClearCoupon()
    }
    this.setState({
      payType,
      isPaymentOpend: false
    }, () => {
      this.calcOrder()
    })
  }

  handleLayoutClose = () => {
    this.setState({
      isPaymentOpend: false,
      isDrugInfoOpend: false
    })
  }

  render () {
    // 支付方式文字
    const payTypeText = {
      point: '积分支付',
      wxpay: process.env.TARO_ENV === 'weapp' ? '微信支付' : '现金支付',
      balance: '余额支付'
    }   
    const { coupon, colors } = this.props
    const { info, express, address, total, showAddressPicker, showCheckoutItems, curCheckoutItems, payType, invoiceTitle, submitLoading, disabledPayment, isPaymentOpend, isDrugInfoOpend, drug } = this.state
    const curStore = Taro.getStorageSync('curStore')
    const { type } = this.$router.params
    const isDrug = type === 'drug'

    if (!info) {
      return <Loading />
    }

    const couponText = !coupon
      ? ''
      : coupon.type === 'member'
        ? '会员折扣'
        : ((coupon.value && coupon.value.title) || '')
    //const isBtnDisabled = !address
    const isBtnDisabled = express
     ? !address
     : false

    return (
      <View className='page-checkout'>
        {
          showAddressPicker === false
            ? <NavBar
              title='填写订单信息'
              leftIconType='chevron-left'
              fixed='true'
            />
            : null
        }
        <ScrollView
          scrollY
          className='checkout__wrap'
        >
          {
            !isArray(curStore) && curStore.is_ziti && curStore.is_delivery &&
              <View className='switch-tab'>
                <View
                  className={classNames('switch-item', express ? 'active' : '')}
                  onClick={this.handleSwitchExpress.bind(this, true)}
                >配送</View>
                <View
                  className={classNames('switch-item', !express ? 'active' : '')}
                  onClick={this.handleSwitchExpress.bind(this, false)}
                >自提</View>
              </View>
          }
          {
            (express && curStore.is_delivery) || (!curStore.is_delivery && !curStore.is_ziti)
              ? <AddressChoose
                isAddress={address}
              />
              : <View className='address-module'>
                  <View className='addr'>
                    <View className='view-flex-item'>
                      <View className='addr-title'>{curStore.name}</View>
                      <View className='addr-detail'>{curStore.store_address}</View>
                    </View>
                    <View
                      className='icon-location'
                      onClick={this.handleMapClick.bind(this)}
                    ></View>
                  </View>
                  <View className='view-flex'>
                    <View className='view-flex-item'>
                      <View className='text-muted'>营业时间：</View>
                      <View>{curStore.hour}</View>
                    </View>
                    <View className='view-flex-item'>
                      <View className='text-muted'>联系电话：</View>
                      <View>{curStore.phone}</View>
                    </View>
                  </View>
                </View>
          }
{/* && type !== 'limited_time_sale' */}
          {(payType !== 'point' && payType !== 'point' && type !== 'group' && type !== 'seckill') && (
            <SpCell
              isLink
              className='coupons-list'
              title='选择优惠券'
              onClick={this.handleCouponsClick}
              value={couponText || ''}
            />
          )}

          <View className='cart-list'>
            {
              info.cart.map(cart => {
                return (
                  <View
                    className='cart-group'
                    key={cart.shop_id}
                  >
                    <View className='sec cart-group__cont'>
                      {
                        cart.list.map((item, idx) => {
                          return (
                            <View
                              className='order-item__wrap'
                              key={item.item_id}
                            >
                              {
                                item.order_item_type === 'gift'
                                  ? (<View className='order-item__idx'><Text>赠品</Text></View>)
                                  : (<View className='order-item__idx'><Text>第{idx + 1}件商品</Text></View>)
                              }
                              <OrderItem
                                info={item}
                                showExtra={false}
                                showDesc = {true}
                                renderDesc={
                                  <View className='order-item__desc'>
                                    {item.discount_info && item.discount_info.map((discount) =>
                                        <Text
                                          className='order-item__discount'
                                          key={discount.type}
                                        >{discount.info}</Text>
                                      )}
                                  </View>
                                }
                                customFooter
                                renderFooter={
                                  <View className='order-item__ft'>
                                    {
                                      // payType === 'point'
                                      // ? <Price className='order-item__price' appendText='积分' noSymbol noDecimal value={item.point}></Price>
                                      // : <Price className='order-item__price' value={item.price}></Price>
                                      <Price className='order-item__price' value={item.price}></Price>
                                    }
                                    <Text className='order-item__num'>x {item.num}</Text>
                                  </View>
                                }
                              />
                            </View>
                          )
                        })
                      }
                    </View>
                    {/*<View className='cart-group__shop'>{cart.shop_name}</View>*/}
                    {
                      isDrug &&
                      <SpCell
                        isLink
                        className='coupons-list'
                        title='用药人信息'
                        onClick={this.handleDrugInfoShow}
                        onChange={this.handleDrugChange}
                        value={drug ? '已上传' : '用药人及处方上传'}
                      />
                    }
                    <View className='sec cart-group__cont'>
                      <SpCell
                        className='sec trade-remark'
                        border={false}
                      >
                        <AtInput
                          className='trade-remark__input'
                          placeholder='给商家留言：选填（50字以内）'
                          onChange={this.handleRemarkChange.bind(this)}
                        />
                      </SpCell>
                    </View>
                  </View>
                )
              })
            }
          </View>

          {/*<SpCell
            isLink
            className='trade-invoice'
            title='开发票'
            onClick={this.handleInvoiceClick}
          >
            <Text>{invoiceTitle || '否'}</Text>
          </SpCell>*/}

          {/*<SpCell
            className='trade-shipping'
            title='配送方式'
            value='[快递免邮]'
          >
          </SpCell>*/}
          <View className='trade-payment'>
            <SpCell
              isLink
              border={false}
              title='支付方式'
              onClick={this.handlePaymentShow}
            >
              <Text>{payTypeText[payType]}</Text>
            </SpCell>
            {total.deduction && (
              <View className='trade-payment__hint'>
                可用{total.remainpt}积分，抵扣 <Price unit='cent' value={total.deduction} /> (包含运费 <Price unit='cent' value={total.freight_fee}></Price>)
              </View>
            )}
          </View>

          {payType === 'point' && (
            <View className='sec trade-sub-total'>
              <SpCell
                className='trade-sub-total__item'
                title='运费'
              >
                <Price
                  unit='cent'
                  value={total.freight_fee}
                />
              </SpCell>
              {/*
                <SpCell
                  className='trade-sub-total__item'
                  title='积分'
                >
                  <Price
                    noSymbol
                    noDecimal
                    appendText='积分'
                    value={total.point}
                  />
                </SpCell>
              */}
            </View>
          )}

          {payType !== 'point' && (
            <View className='sec trade-sub-total'>
              <SpCell
                className='trade-sub-total__item'
                title='商品金额：'
              >
                <Price
                  unit='cent'
                  value={total.item_fee}
                />
              </SpCell>
              {/*<SpCell
                className='trade-sub-total__item'
                title='会员折扣：'
              >
                <Price
                  unit='cent'
                  value={total.member_discount}
                />
              </SpCell>*/}
              <SpCell
                className='trade-sub-total__item'
                title='优惠金额：'
              >
                <Price
                  unit='cent'
                  value={total.discount_fee}
                />
              </SpCell>
              <SpCell
                className='trade-sub-total__item'
                title='运费：'
              >
                <Price
                  unit='cent'
                  value={total.freight_fee}
                />
              </SpCell>
            </View>
          )}
        </ScrollView>

        <CheckoutItems
          isOpened={showCheckoutItems}
          list={curCheckoutItems}
          onClickBack={this.toggleCheckoutItems.bind(this, false)}
        />

        <View className='toolbar checkout-toolbar'>
          <View className='checkout__total'>
            共<Text className='total-items'>{total.items_count}</Text>件商品　总计:
            {
              payType !== 'point'
                ? <Price primary unit='cent' value={total.total_fee} />
                : (total.point && <Price primary value={total.point} noSymbol noDecimal appendText='积分' />)
            }
          </View>
          <AtButton
            type='primary'
            className='btn-confirm-order'
            customStyle={`background: ${colors.data[0].primary}; border-color: ${colors.data[0].primary}`}
            loading={submitLoading}
            disabled={isBtnDisabled}
            onClick={this.submitPay}
          >{isDrug ? '提交预约' : '提交订单'}</AtButton>
        </View>

        {
          <DrugInfo
            isOpened={isDrugInfoOpend}
            info={drug}
            onClose={this.handleLayoutClose}
            onChange={this.handleChange}
          />
        }

        <PaymentPicker
          isOpened={isPaymentOpend}
          type={payType}
          isShowPoint
          isShowBalance={false}
          disabledPayment={disabledPayment}
          onClose={this.handleLayoutClose}
          onChange={this.handlePaymentChange}
        ></PaymentPicker>

        <SpToast />
      </View>
    )
  }
}
