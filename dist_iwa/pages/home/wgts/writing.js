"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_get=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_helper=require("./helper.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var WgtWriting=(_temp2=_class=function(e){function a(){var e,t,r;_classCallCheck(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=r=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).$usedState=["info","base","config","contentArr","curIdx"],r.handleClickItem=_helper.linkPage,r.handleSwiperChange=function(e){var t=e.detail.current;r.setState({curIdx:t})},r.$$refs=[],_possibleConstructorReturn(r,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(e){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).call(this,e),this.state={curIdx:0}}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};arguments[2];var e=this.__props.info,t=this.__state.curIdx;if(!e)return null;var r=e.config,n=e.base,o=(e.data[t]||{}).content,i=[];return o&&(i=o.split("\n")),Object.assign(this.__state,{info:e,base:n,config:r,contentArr:i}),this.__state}}]),a}(),_class.properties={info:{type:null,value:null}},_class.$$events=[],_class.options={addGlobalClass:!0},_class.defaultProps={info:null},_temp2);exports.default=WgtWriting,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(WgtWriting));