"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_get=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var l=Object.getPrototypeOf(t);return null===l?void 0:e(l,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../utils/index.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var a=e.apply(this,arguments);return new Promise(function(l,i){return function t(e,n){try{var r=a[e](n),o=r.value}catch(e){return void i(e)}if(!r.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});l(o)}("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var GoodsItem=(_temp2=_class=function(e){function a(){var e,t,o,l=this;_classCallCheck(this,a);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","info","img","type","showMarketPrice","noCurSymbol","noCurDecimal","appendText","className","isPointDraw","children","renderFooter"],o.handleFavClick=_asyncToGenerator(getApp().regeneratorRuntime.mark(function e(){var t,n,r;return getApp().regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=o.props.info,n=t.item_id,r=t.is_fav,console.log(r,n);case 2:case"end":return e.stop()}},e,l)})),o.$$refs=[],_possibleConstructorReturn(o,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e)}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var e=this.__props,t=e.info,n=(e.showMarketPrice,e.noCurSymbol,e.noCurDecimal,e.onClick,e.appendText,e.className),r=(e.isPointDraw,e.type);if(!t)return null;(0,_index3.isObject)(t.price)?t.price.total_price:t.price;var o=t.img||t.image_default_id,l=(0,_index3.classNames)("goods-item",n);return Object.assign(this.__state,{anonymousState__temp:l,info:t,img:o,type:r}),this.__state}},{key:"funPrivatevueSK",value:function(){this.__triggerPropsFn("onClick",[].concat(Array.prototype.slice.call(arguments)))}}]),a}(),_class.properties={info:{type:null,value:null},showMarketPrice:{type:null,value:null},noCurSymbol:{type:null,value:null},noCurDecimal:{type:null,value:null},onClick:{type:null,value:null},appendText:{type:null,value:null},className:{type:null,value:null},isPointDraw:{type:null,value:null},type:{type:null,value:null},__fn_onClick:{type:null,value:null}},_class.$$events=["funPrivatevueSK","handleFavClick","handleLikeClick"],_class.defaultProps={onClick:function(){},showMarketPrice:!0,noCurSymbol:!1,type:"item"},_class.options={addGlobalClass:!0},_class.multipleSlots=!0,_temp2);exports.default=GoodsItem,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(GoodsItem));