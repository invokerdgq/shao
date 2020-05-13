"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),_get=function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};exports.default=withLogin;var _index=require("../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../spx/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _asyncToGenerator(t){return function(){var u=t.apply(this,arguments);return new Promise(function(i,a){return function e(t,o){try{var n=u[t](o),r=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(r).then(function(t){e("next",t)},function(t){e("throw",t)});i(r)}("next")})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var LIFE_CYCLE_TYPES={WILL_MOUNT:0,DID_MOUNT:1,DID_SHOW:2};function withLogin(t){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:LIFE_CYCLE_TYPES.WILL_MOUNT;return void 0!==LIFE_CYCLE_TYPES[u]?(console.warn("lifeCycle is not in defined types: "+u),function(t){return t}):function(a){return function(t){function o(t){return _classCallCheck(this,o),_possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t))}var e,n,r,i;return _inherits(o,a),_createClass(o,[{key:"componentWillMount",value:(i=_asyncToGenerator(getApp().regeneratorRuntime.mark(function t(){var e;return getApp().regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u===LIFE_CYCLE_TYPES.WILL_MOUNT)return t.next=3,this.$__autoLogin();t.next=9;break;case 3:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentWillMount",this)&&_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentWillMount",this).call(this),t.next=13;break;case 9:return t.next=11,this.$__autoLoginDone();case 11:e=t.sent,_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentWillMount",this)&&e&&_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentWillMount",this).call(this);case 13:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)})},{key:"componentDidMount",value:(r=_asyncToGenerator(getApp().regeneratorRuntime.mark(function t(){var e;return getApp().regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u===LIFE_CYCLE_TYPES.DID_MOUNT)return t.next=3,this.$__autoLogin();t.next=9;break;case 3:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidMount",this)&&_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidMount",this).call(this),t.next=13;break;case 9:return t.next=11,this.$__autoLoginDone();case 11:e=t.sent,_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidMount",this)&&e&&_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidMount",this).call(this);case 13:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"componentDidShow",value:(n=_asyncToGenerator(getApp().regeneratorRuntime.mark(function t(){var e;return getApp().regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u===LIFE_CYCLE_TYPES.DID_SHOW)return t.next=3,this.$__autoLogin();t.next=9;break;case 3:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidShow",this)&&_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidShow",this).call(this),t.next=13;break;case 9:return t.next=11,this.$__autoLoginDone();case 11:e=t.sent,_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidShow",this)&&e&&_get(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"componentDidShow",this).call(this);case 13:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})},{key:"$__autoLogin",value:(e=_asyncToGenerator(getApp().regeneratorRuntime.mark(function t(){var e;return getApp().regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$__autoLogin_state="pending",e=void 0,t.prev=2,t.next=5,_index4.default.autoLogin(this);case 5:e=t.sent,this.$__autoLogin_state=e?"success":"fail",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.$__autoLogin_state="fail";case 12:return t.abrupt("return",e);case 13:case"end":return t.stop()}},t,this,[[2,9]])})),function(){return e.apply(this,arguments)})},{key:"$__autoLoginDone",value:function(){var n=void 0,r=8,i=this;return new Promise(function(o){!function e(){n&&clearTimeout(n),n=setTimeout(function(){var t=i.$__autoLogin_state;"success"===t||"fail"===t?(clearTimeout(n),n=null,o("success"===t)):0<r?(r--,e()):o(!1)},70)}()})}}]),o}()}}