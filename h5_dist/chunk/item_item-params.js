(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"356":function(e,t,n){"use strict";n.d(t,"a",function(){return delayQuerySelector}),n.d(t,"e",function(){return uuid}),n.d(t,"c",function(){return initTestEnv}),n.d(t,"d",function(){return isTest}),n.d(t,"b",function(){return handleTouchScroll});var r=n(4),o=n(363),a=r.a.getEnv();function delay(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return new Promise(function(t){[r.a.ENV_TYPE.WEB,r.a.ENV_TYPE.SWAN].includes(a)?setTimeout(function(){t()},e):t()})}function delayQuerySelector(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,i=a===r.a.ENV_TYPE.WEB?e:e.$scope,l=Object(o.a)().in(i);return new Promise(function(e){delay(n).then(function(){l.select(t).boundingClientRect().exec(function(t){e(t)})})})}function uuid(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],o=0;if(t=t||n.length,e)for(o=0;o<e;o++)r[o]=n[0|Math.random()*t];else{var a=void 0;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",o=0;o<36;o++)r[o]||(a=0|16*Math.random(),r[o]=n[19===o?3&a|8:a])}return r.join("")}function initTestEnv(){0}function isTest(){return!1}var i=0;function handleTouchScroll(e){a===r.a.ENV_TYPE.WEB&&(e?(i=document.documentElement.scrollTop,document.body.classList.add("at-frozen"),document.body.style.top=-i+"px"):(document.body.style.top=null,document.body.classList.remove("at-frozen"),document.documentElement.scrollTop=i))}},"363":function(e,t,n){"use strict";n.d(t,"a",function(){return createSelectorQuery});var r=n(3),o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function filter(e,t,n){if(!t)return null;var r=e.id,o=e.dataset,a=e.rect,i=e.size,l=e.scrollOffset,s=e.properties,c=void 0===s?[]:s,u=e.computedStyle,p=void 0===u?[]:u,f=t.getBoundingClientRect(),m=f.left,d=f.right,h=f.top,b=f.bottom,y=f.width,_=f.height,v="html"===n,g={};if(r&&(g.id=t.id),o&&(g.dataset=Object.assign({},t.dataset)),a&&(v?(g.left=0,g.right=0,g.top=0,g.bottom=0):(g.left=m,g.right=d,g.top=h,g.bottom=b)),i&&(v?(g.width=t.clientWidth,g.height=t.clientHeight):(g.width=y,g.height=_)),l&&(g.scrollLeft=t.scrollLeft,g.scrollTop=t.scrollTop),c.length&&c.forEach(function(e){var n=t.getAttribute(e);n&&(g[e]=n)}),p.length){var P=window.getComputedStyle(t);p.forEach(function(e){var t=P.getPropertyValue(e);t&&(g[e]=t)})}return g}var a=function(){function Query(){_classCallCheck(this,Query),this._defaultWebviewId=null,this._webviewId=null,this._queue=[],this._queueCb=[],this._component=null}return o(Query,[{"key":"in","value":function _in(e){return this._component=e,this}},{"key":"select","value":function select(e){return"string"==typeof e&&(e=e.replace(">>>",">")),new i(e,this,!0)}},{"key":"selectAll","value":function selectAll(e){return"string"==typeof e&&(e=e.replace(">>>",">")),new i(e,this,!1)}},{"key":"selectViewport","value":function selectViewport(){return new i("html",this,!0)}},{"key":"exec","value":function exec(e){var t=this;!function queryBat(e,t){var n=[];e.forEach(function(e){var t=e.selector,o=e.single,a=e.fields,i=e.component,l=null!==i&&r.l.findDOMNode(i)||document,s=!1;if(l!==document)for(var c=l.parentNode.querySelectorAll(t),u=0,p=c.length;u<p;++u)if(l===c[u]){s=!0;break}if(o){var f=!0===s?l:l.querySelector(t);n.push(filter(a,f,t))}else{var m=l.querySelectorAll(t),d=[];!0===s&&d.push(l);for(var h=0,b=m.length;h<b;++h)d.push(m[h]);n.push(d.map(function(e){return filter(a,e)}))}}),t(n)}(this._queue,function(n){var r=t._queueCb;n.forEach(function(e,n){"function"==typeof r[n]&&r[n].call(t,e)}),"function"==typeof e&&e.call(t,n)})}},{"key":"_push","value":function _push(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._queue.push({"component":t,"selector":e,"single":n,"fields":r}),this._queueCb.push(o)}}]),Query}(),i=function(){function NodesRef(e,t,n){_classCallCheck(this,NodesRef),this._component=t._component,this._selector=e,this._selectorQuery=t,this._single=n}return o(NodesRef,[{"key":"boundingClientRect","value":function boundingClientRect(e){var t=this._selector,n=this._component,r=this._single,o=this._selectorQuery;return o._push(t,n,r,{"id":!0,"dataset":!0,"rect":!0,"size":!0},e),o}},{"key":"scrollOffset","value":function scrollOffset(e){var t=this._selector,n=this._component,r=this._single,o=this._selectorQuery;return o._push(t,n,r,{"id":!0,"dataset":!0,"scrollOffset":!0},e),o}},{"key":"fields","value":function fields(e,t){var n=this._selector,r=this._component,o=this._single,a=this._selectorQuery,i=e.id,l=e.dataset,s=e.rect,c=e.size,u=e.scrollOffset,p=e.properties,f=void 0===p?[]:p,m=e.computedStyle,d=void 0===m?[]:m;return a._push(n,r,o,{"id":i,"dataset":l,"rect":s,"size":c,"scrollOffset":u,"properties":f,"computedStyle":d},t),a}}]),NodesRef}();function createSelectorQuery(){return new a}},"475":function(e,t,n){},"477":function(e,t,n){},"479":function(e,t,n){},"481":function(e,t,n){},"483":function(e,t,n){},"485":function(e,t,n){},"487":function(e,t,n){},"502":function(e,t,n){"use strict";var r,o,a=n(3),i=n(4),l=n(747),s=n(550),c=n(351),u=(n(475),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,f,m=(o=r=function(e){function GoodsBuyToolbar(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GoodsBuyToolbar);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=GoodsBuyToolbar.__proto__||Object.getPrototypeOf(GoodsBuyToolbar)).call.apply(e,[this].concat(o))),n.handleClickCart=function(e,t){i.a.navigateTo({"url":"/pages/cart/espier-index?type="+t})},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GoodsBuyToolbar,i["a"].Component),u(GoodsBuyToolbar,[{"key":"render","value":function render(){var e=this.props,t=e.onClickAddCart,n=e.onClickFastBuy,r=e.cartCount,o=e.type,i=e.info,u=null;i&&(u=i.special_type);var p="drug"===u,f="normal"===o?"立即购买":"seckill"===o?"立即抢购":"我要开团";return a.l.createElement(l.a,{"className":"goods-buy-toolbar"},a.l.createElement(l.a,{"className":"goods-buy-toolbar__menus"},a.l.createElement(l.a,{"className":"goods-buy-toolbar__menu-item","onClick":this.props.onFavItem},a.l.createElement(l.a,{"className":"in-icon "+(i.is_fav?"in-icon-fav-f":"in-icon-fav")})),a.l.createElement(l.a,{"className":"goods-buy-toolbar__menu-item","onClick":this.handleClickCart.bind(this,i.item_id,p?"drug":"distributor")},a.l.createElement(s.a,{"value":r||null},a.l.createElement(l.a,{"className":"in-icon in-icon-cart"})))),this.props.customRender?this.props.children:a.l.createElement(l.a,{"className":"goods-buy-toolbar__btns"},"normal"===o&&a.l.createElement(c.g,{"sync":!0,"onClick":t},a.l.createElement(l.a,{"className":"goods-buy-toolbar__btn btn-add-cart "+(p&&"drug-btn")},p?"加入药品清单":"添加至购物车")),!p&&a.l.createElement(c.g,{"sync":!0,"onClick":n},a.l.createElement(l.a,{"className":"goods-buy-toolbar__btn btn-fast-buy "+("normal"!==o&&"marketing-btn")},f))))}}]),GoodsBuyToolbar}(),r.options={"addGlobalClass":!0},r.defaultProps={"type":"normal","onClickAddCart":function onClickAddCart(){},"onClickFastBuy":function onClickFastBuy(){},"onFavItem":function onFavItem(){},"cartCount":"","info":null},o),d=n(462),h=(n(477),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var b,y,_=(f=p=function(e){function ItemImg(){return function item_img_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ItemImg),function item_img_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ItemImg.__proto__||Object.getPrototypeOf(ItemImg)).apply(this,arguments))}return function item_img_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ItemImg,i["a"].Component),h(ItemImg,[{"key":"render","value":function render(){var e=this.props.src;return a.l.createElement(l.a,{"className":"item-img"},a.l.createElement(d.a,{"className":"item-img__img","mode":"aspectFill","src":e}))}}]),ItemImg}(),p.options={"addGlobalClass":!0},p.defaultProps={"src":null},f),v=n(748),g=n(13),P=(n(479),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());function img_spec_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w,C,E=(y=b=function(e){function ImgSpec(){var e,t,n;!function img_spec_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ImgSpec);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=img_spec_possibleConstructorReturn(this,(e=ImgSpec.__proto__||Object.getPrototypeOf(ImgSpec)).call.apply(e,[this].concat(o))),n.handleSepcClick=function(e){n.props.onClick(e)},img_spec_possibleConstructorReturn(n,t)}return function img_spec_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ImgSpec,i["a"].Component),P(ImgSpec,[{"key":"render","value":function render(){var e=this,t=this.props,n=t.info,r=t.current;t.onClick;return n?a.l.createElement(l.a,{"className":"goods-sec-specs"},a.l.createElement(v.a,{"className":"specs-scroller","scrollX":!0},a.l.createElement(l.a,{"className":"specs-imgs"},a.l.createElement(Text,null,n.length,"色可选"),n.map(function(t,n){return a.l.createElement(d.a,{"className":Object(g.d)("specs-imgs__item",r===n&&"specs-imgs__item-active"),"src":t.url,"key":t.specValueId,"mode":"aspectFill","onClick":e.handleSepcClick.bind(e,n)})})))):null}}]),ImgSpec}(),b.options={"addGlobalClass":!0},b.defaultProps={"info":null},y),O=(n(481),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var k,T,S=(C=w=function(e){function ParamsItem(){return function params_item_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ParamsItem),function params_item_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ParamsItem.__proto__||Object.getPrototypeOf(ParamsItem)).apply(this,arguments))}return function params_item_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ParamsItem,i["a"].Component),O(ParamsItem,[{"key":"render","value":function render(){var e=this.props.info;return e?a.l.createElement(l.a,{"className":"goods-params__item"},a.l.createElement(l.a,{"className":"goods-params__item-label"},e.label),a.l.createElement(l.a,{"className":"goods-params__item-value"},e.value)):null}}]),ParamsItem}(),w.options={"addGlobalClass":!0},w.defaultProps={"info":{}},C),j=n(16),N=n(15),I=(n(483),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var R,x,F=(T=k=function(e){function StoreInfo(e){var t=this;!function store_info_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,StoreInfo);var n,r=function store_info_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(StoreInfo.__proto__||Object.getPrototypeOf(StoreInfo)).call(this,e));return r.handleClickLink=function(){i.a.navigateTo({"url":"/pages/store/index"})},r.handleStoreFav=(n=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function _callee(e){var n;return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(j.a.getAuthToken()){t.next=4;break}return j.a.toast("请先登录"),setTimeout(function(){j.a.login(r)},2e3),t.abrupt("return");case 4:if(!r.state.isFav){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,N.a.member.storeFav(e);case 9:n=t.sent,n.fav_id&&r.setState({"isFav":!0});case 12:case"end":return t.stop()}},_callee,t)})),function(e){return n.apply(this,arguments)}),r.state={"isFav":!1},r}return function store_info_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(StoreInfo,i["a"].Component),I(StoreInfo,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;if(j.a.getAuthToken()){var t=this.props.info;N.a.member.storeIsFav(t.distributor_id).then(function(t){t.is_fav&&e.setState({"isFav":!0})})}}},{"key":"render","value":function render(){var e=this.props.info,t=this.state.isFav;return e?a.l.createElement(l.a,{"className":"goods-sec-specs store-info"},a.l.createElement(l.a,{"className":"view-flex view-flex-middle"},a.l.createElement(d.a,{"className":"store-brand","src":e.imgUrl||"https://fakeimg.pl/120x120/EFEFEF/CCC/?text=brand&font=lobster","mode":"aspectFit"}),a.l.createElement(l.a,null,a.l.createElement(l.a,{"className":"store-name"},e.name))),a.l.createElement(l.a,{"className":"view-flex"},a.l.createElement(l.a,{"className":"view-flex-item"},a.l.createElement(l.a,{"className":"store-attention-btn","onClick":this.handleStoreFav.bind(this,e.distributor_id)},t?"已关注":"关注店铺")),a.l.createElement(l.a,{"className":"view-flex-item"},a.l.createElement(l.a,{"className":"store-enter-btn","onClick":this.handleClickLink},"进入店铺")))):null}}]),StoreInfo}(),k.options={"addGlobalClass":!0},k.defaultProps={"info":null},T),A=n(456),G=n(510),L=(n(485),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var D,B,V=(x=R=function(e){function SharePanel(){return function share_panel_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SharePanel),function share_panel_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SharePanel.__proto__||Object.getPrototypeOf(SharePanel)).apply(this,arguments))}return function share_panel_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SharePanel,i["a"].Component),L(SharePanel,[{"key":"render","value":function render(){var e=this.props,t=(e.info,e.isOpen),n=e.onClose,r=e.onClick;return a.l.createElement(G.a,{"isOpened":t,"title":" ","onClose":n,"scrollX":!1,"scrollY":!1},a.l.createElement(l.a,{"className":"share-panel"},a.l.createElement(l.a,{"className":"share-panel__item","onClick":r},a.l.createElement(l.a,{"className":"icon-picture1"}),a.l.createElement(l.a,null,"分享到朋友圈")),a.l.createElement(l.a,{"className":"share-panel__item"},a.l.createElement(A.a,{"openType":"share","className":"icon-weChart"}),a.l.createElement(l.a,null,"分享给微信好友"))))}}]),SharePanel}(),R.options={"addGlobalClass":!0},R.defaultProps={"info":null,"onClose":function onClose(){},"onClick":function onClick(){}},x),Q=n(376),W=(n(487),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());function vip_guide_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var q=(B=D=function(e){function VipGuide(){var e,t,n;!function vip_guide_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,VipGuide);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=vip_guide_possibleConstructorReturn(this,(e=VipGuide.__proto__||Object.getPrototypeOf(VipGuide)).call.apply(e,[this].concat(o))),n.handleClick=function(){i.a.navigateTo({"url":"/pages/vip/vipgrades"})},vip_guide_possibleConstructorReturn(n,t)}return function vip_guide_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(VipGuide,i["a"].Component),W(VipGuide,[{"key":"render","value":function render(){var e=this.props,t=e.info,n=e.isVip,r=void 0===n?null:n;return t?a.l.createElement(l.a,{"className":"vip-guide"},a.l.createElement(l.a,{"className":"vip-guide-content"},r?a.l.createElement(l.a,{"className":"vip-price"},a.l.createElement(l.a,{"className":"vip-tag"},t.vipgrade_desc),(t.memberPrice||t.gradeDiscount)&&a.l.createElement(l.a,null,t.memberPrice&&a.l.createElement(l.a,{"className":"vip-price-amount"},a.l.createElement(Q.a,{"className":"cur"},"¥ "),t.memberPrice),t.gradeDiscount&&a.l.createElement(l.a,null,t.gradeDiscount,"折"))):a.l.createElement(l.a,null,t.memberPrice&&a.l.createElement(l.a,{"className":"vip-price-amount"},a.l.createElement(Q.a,{"className":"cur"},"¥ "),t.memberPrice),t.gradeDiscount&&a.l.createElement(l.a,null,t.gradeDiscount,"折")),a.l.createElement(l.a,{"className":"vip-guide-text"},t.guide_title_desc)),r&&a.l.createElement(l.a,{"className":"vip-apply","onClick":this.handleClick.bind(this)},"立即加入")):null}}]),VipGuide}(),D.options={"addGlobalClass":!0},D.defaultProps={"info":null},B);n.d(t,"a",function(){return m}),n.d(t,"c",function(){return _}),n.d(t,"b",function(){return E}),n.d(t,"d",function(){return S}),n.d(t,"f",function(){return F}),n.d(t,"e",function(){return V}),n.d(t,"g",function(){return q})},"510":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(3),o=n(747),a=n(376),i=n(748),l=n(350),s=n.n(l),c=n(49),u=n.n(c),p=n(52),f=n.n(p),m=n(349),d=n(356),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var b=function(e){function AtFloatLayout(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtFloatLayout);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtFloatLayout.__proto__||Object.getPrototypeOf(AtFloatLayout)).apply(this,arguments));t.handleClose=function(){f()(t.props.onClose)&&t.props.onClose()},t.close=function(){t.setState({"_isOpened":!1},t.handleClose)},t.handleTouchMove=function(e){e.stopPropagation()};var n=e.isOpened;return t.state={"_isOpened":n},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtFloatLayout,m["a"]),h(AtFloatLayout,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;this.props.isOpened!==t&&Object(d.b)(t),t!==this.state._isOpened&&this.setState({"_isOpened":t})}},{"key":"render","value":function render(){var e=this.state._isOpened,t=this.props,n=t.title,l=t.scrollY,s=t.scrollX,c=t.scrollTop,p=t.scrollLeft,f=t.upperThreshold,m=t.lowerThreshold,d=t.scrollWithAnimation,h=u()("at-float-layout",{"at-float-layout--active":e},this.props.className);return r.l.createElement(o.a,{"className":h,"onTouchMove":this.handleTouchMove},r.l.createElement(o.a,{"onClick":this.close,"className":"at-float-layout__overlay"}),r.l.createElement(o.a,{"className":"at-float-layout__container layout"},n?r.l.createElement(o.a,{"className":"layout-header"},r.l.createElement(a.a,{"className":"layout-header__title"},n),r.l.createElement(o.a,{"className":"layout-header__btn-close","onClick":this.close})):null,r.l.createElement(o.a,{"className":"layout-body"},r.l.createElement(i.a,{"scrollY":l,"scrollX":s,"scrollTop":c,"scrollLeft":p,"upperThreshold":f,"lowerThreshold":m,"scrollWithAnimation":d,"onScroll":this.props.onScroll,"onScrollToLower":this.props.onScrollToLower,"onScrollToUpper":this.props.onScrollToUpper,"className":"layout-body__content"},this.props.children))))}}]),AtFloatLayout}();b.defaultProps={"title":"","isOpened":!1,"scrollY":!0,"scrollX":!1,"scrollWithAnimation":!1,"onClose":function onClose(){},"onScroll":function onScroll(){},"onScrollToLower":function onScrollToLower(){},"onScrollToUpper":function onScrollToUpper(){}},b.propType={"title":s.a.string,"isOpened":s.a.bool,"scrollY":s.a.bool,"scrollX":s.a.bool,"scrollTop":s.a.number,"scrollLeft":s.a.number,"upperThreshold":s.a.number,"lowerThreshold":s.a.number,"scrollWithAnimation":s.a.bool,"onClose":s.a.func,"onScroll":s.a.func,"onScrollToLower":s.a.func,"onScrollToUpper":s.a.func}},"596":function(e,t,n){},"764":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r,o,a=n(3),i=n(4),l=n(747),s=n(502),c=n(13),u=n(15),p=(n(596),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),f=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};var m=(o=r=function(e){function ItemParams(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ItemParams);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ItemParams.__proto__||Object.getPrototypeOf(ItemParams)).call(this,e));return t.state={"list":[]},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ItemParams,i["a"].Component),p(ItemParams,[{"key":"componentDidMount","value":function componentDidMount(){this.fetch()}},{"key":"fetch","value":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function _callee(){var e,t,n,r;return regeneratorRuntime.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:return e=this.$router.params.id,o.next=3,u.a.item.detail(e);case 3:t=o.sent,n=t.item_params,r=Object(c.q)(n,{"label":"attribute_name","value":"attribute_value_name"}),this.setState({"list":r});case 7:case"end":return o.stop()}},_callee,this)}));return function fetch(){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){var e=this.state.list;return a.l.createElement(l.a,{"className":"goods-params-wrap"},a.l.createElement(l.a,{"className":"goods-params"},e.map(function(e,t){return a.l.createElement(s.d,{"key":t,"info":e})})))}},{"key":"componentDidShow","value":function componentDidShow(){f(ItemParams.prototype.__proto__||Object.getPrototypeOf(ItemParams.prototype),"componentDidShow",this)&&f(ItemParams.prototype.__proto__||Object.getPrototypeOf(ItemParams.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){f(ItemParams.prototype.__proto__||Object.getPrototypeOf(ItemParams.prototype),"componentDidHide",this)&&f(ItemParams.prototype.__proto__||Object.getPrototypeOf(ItemParams.prototype),"componentDidHide",this).call(this)}}]),ItemParams}(),r.config={"navigationBarTitleText":"商品参数"},o)}}]);