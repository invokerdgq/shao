(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"353":function(t,e,o){"use strict";var n=o(16),r=function(){function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}(),i=function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){return function step(n,r){try{var i=e[n](r),a=i.value}catch(t){return void o(t)}if(!i.done)return Promise.resolve(a).then(function(t){step("next",t)},function(t){step("throw",t)});t(a)}("next")})}}var a={"WILL_MOUNT":0,"DID_MOUNT":1,"DID_SHOW":2};function withLogin(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.WILL_MOUNT;return void 0!==a[e]?(console.warn("lifeCycle is not in defined types: "+e),function(t){return t}):function withLoginComponent(t){return function(o){function WithLogin(t){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WithLogin),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(WithLogin.__proto__||Object.getPrototypeOf(WithLogin)).call(this,t))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(WithLogin,t),r(WithLogin,[{"key":"componentWillMount","value":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var t;return regeneratorRuntime.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(e!==a.WILL_MOUNT){o.next=9;break}return o.next=3,this.$__autoLogin();case 3:if(o.sent){o.next=6;break}return o.abrupt("return");case 6:i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentWillMount",this)&&i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentWillMount",this).call(this),o.next=13;break;case 9:return o.next=11,this.$__autoLoginDone();case 11:t=o.sent,i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentWillMount",this)&&t&&i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentWillMount",this).call(this);case 13:case"end":return o.stop()}},_callee,this)}));return function componentWillMount(){return t.apply(this,arguments)}}()},{"key":"componentDidMount","value":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){var t;return regeneratorRuntime.wrap(function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:if(e!==a.DID_MOUNT){o.next=9;break}return o.next=3,this.$__autoLogin();case 3:if(o.sent){o.next=6;break}return o.abrupt("return");case 6:i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidMount",this)&&i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidMount",this).call(this),o.next=13;break;case 9:return o.next=11,this.$__autoLoginDone();case 11:t=o.sent,i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidMount",this)&&t&&i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidMount",this).call(this);case 13:case"end":return o.stop()}},_callee2,this)}));return function componentDidMount(){return t.apply(this,arguments)}}()},{"key":"componentDidShow","value":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var t;return regeneratorRuntime.wrap(function _callee3$(o){for(;;)switch(o.prev=o.next){case 0:if(e!==a.DID_SHOW){o.next=9;break}return o.next=3,this.$__autoLogin();case 3:if(o.sent){o.next=6;break}return o.abrupt("return");case 6:i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidShow",this)&&i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidShow",this).call(this),o.next=13;break;case 9:return o.next=11,this.$__autoLoginDone();case 11:t=o.sent,i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidShow",this)&&t&&i(WithLogin.prototype.__proto__||Object.getPrototypeOf(WithLogin.prototype),"componentDidShow",this).call(this);case 13:case"end":return o.stop()}},_callee3,this)}));return function componentDidShow(){return t.apply(this,arguments)}}()},{"key":"$__autoLogin","value":function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(){var t;return regeneratorRuntime.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:return this.$__autoLogin_state="pending",t=void 0,e.prev=2,e.next=5,n.a.autoLogin(this);case 5:t=e.sent,this.$__autoLogin_state=t?"success":"fail",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.$__autoLogin_state="fail";case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}},_callee4,this,[[2,9]])}));return function $__autoLogin(){return t.apply(this,arguments)}}()},{"key":"$__autoLoginDone","value":function $__autoLoginDone(){var t=void 0,e=8,o=this;return new Promise(function(n){!function next(){t&&clearTimeout(t),t=setTimeout(function(){var r=o.$__autoLogin_state;"success"===r||"fail"===r?(clearTimeout(t),t=null,n("success"===r)):e>0?(e--,next()):n(!1)},70)}()})}}]),WithLogin}()}}var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},s=function(){function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}();function withPager(t){var e,o;return e=function(e){function WithPagerComponent(t){!function withPager_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WithPagerComponent);var e=function withPager_possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(WithPagerComponent.__proto__||Object.getPrototypeOf(WithPagerComponent)).call(this,t));o.call(e);var n=t||{},r=n.pageSize,i=void 0===r?10:r,a=n.pageNo,c=void 0===a?0:a,s=n.pageTotal,u={"hasNext":!0,"isLoading":!1,"total":void 0===s?0:s,"page_no":c,"page_size":i};return e.state.page=u,e}return function withPager_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(WithPagerComponent,t),s(WithPagerComponent,[{"key":"resetPage","value":function resetPage(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=c({},this.state.page||{},{"page_no":0,"total":0,"isLoading":!1,"hasNext":!0});this.setState({"page":e},t)}}]),WithPagerComponent}(),o=function _initialiseProps(){var t=this;this.nextPage=function withPager_asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){return function step(n,r){try{var i=e[n](r),a=i.value}catch(t){return void o(t)}if(!i.done)return Promise.resolve(a).then(function(t){step("next",t)},function(t){step("throw",t)});t(a)}("next")})}}(regeneratorRuntime.mark(function _callee(){var e,o,n,r,i,a;return regeneratorRuntime.wrap(function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if((e=t.state.page).hasNext&&!e.isLoading){s.next=3;break}return s.abrupt("return");case 3:return e.isLoading=!0,t.setState({"page":e}),o=e.page_no,n=e.page_size,r=o+1,s.next=9,t.fetch({"page_no":r,"page_size":n});case 9:i=s.sent,(!(a=i.total)||r>=Math.ceil(+a/n))&&(e.hasNext=!1),t.setState({"page":c({},e,{"total":a,"page_no":r,"isLoading":!1})});case 13:case"end":return s.stop()}},_callee,t)}))},e}var u=o(13),p=o(50),l=o.n(p),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};function withBackToTop(t){return function(e){function WithBackToTopComponent(t){!function withBackToTop_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WithBackToTopComponent);var e=function withBackToTop_possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(WithBackToTopComponent.__proto__||Object.getPrototypeOf(WithBackToTopComponent)).call(this,t));return e.scrollBackToTop=function(){e.setState({"scrollTop":1},function(){})},e.handleScroll=l()(function(t){var o=t.detail,n=o.scrollTop;o.scrollHeight<600||(n>300&&!e.state.showBackToTop?(u.n.debug("[BackToTop] showBackToTop, scrollTop: "+n),e.setState({"showBackToTop":!0})):e.state.showBackToTop&&n<=300&&(u.n.debug("[BackToTop] hideBackToTop, scrollTop: "+n),e.setState({"showBackToTop":!1})))},70),e.state=f({},e.state,{"scrollTop":null,"showBackToTop":!1}),e}return function withBackToTop_inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(WithBackToTopComponent,t),WithBackToTopComponent}()}o.d(e,"b",function(){return withLogin}),o.d(e,"c",function(){return withPager}),o.d(e,"a",function(){return withBackToTop})},"688":function(t,e,o){},"788":function(t,e,o){"use strict";o.r(e);var n,r=o(3),i=o(4),a=o(747),c=o(748),s=o(353),u=o(351),p=o(15),l=o(13),f=(o(688),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}),h=function(){function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}(),_=function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}e.default=Object(s.c)(n=Object(s.a)(n=function(t){function ItemGuess(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ItemGuess);var e=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(ItemGuess.__proto__||Object.getPrototypeOf(ItemGuess)).call(this,t));return e.handleClickItem=function(t){var e="/pages/item/espier-detail?id="+t.item_id;i.a.navigateTo({"url":e})},e.state=f({},e.state,{"list":[]}),e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ItemGuess,i["a"].Component),h(ItemGuess,[{"key":"componentDidMount","value":function componentDidMount(){this.nextPage()}},{"key":"fetch","value":function(){var t=function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){return function step(n,r){try{var i=e[n](r),a=i.value}catch(t){return void o(t)}if(!i.done)return Promise.resolve(a).then(function(t){step("next",t)},function(t){step("throw",t)});t(a)}("next")})}}(regeneratorRuntime.mark(function _callee(t){var e,o,n,r,i,a,c;return regeneratorRuntime.wrap(function _callee$(s){for(;;)switch(s.prev=s.next){case 0:return e=t.page_no,o=t.page_size,n={"item_type":"normal","is_point":"false","approve_status":"onsale,only_show","page":e,"pageSize":o},s.next=4,p.a.cart.likeList(n);case 4:return r=s.sent,i=r.list,a=r.total_count,c=Object(l.q)(i,{"img":"pics[0]","item_id":"item_id","title":"itemName","desc":"brief"}),this.setState({"list":[].concat(_toConsumableArray(this.state.list),_toConsumableArray(c)),"query":n}),s.abrupt("return",{"total":a});case 10:case"end":return s.stop()}},_callee,this)}));return function fetch(e){return t.apply(this,arguments)}}()},{"key":"render","value":function render(){var t=this,e=this.state,o=e.list,n=e.showBackToTop,i=e.scrollTop,s=e.page;return r.l.createElement(a.a,{"className":"page-goods-list page-goods-guess"},r.l.createElement(a.a,{"className":"goods-list__toolbar"},r.l.createElement(u.k,{"leftIconType":"chevron-left","fixed":"true"})),r.l.createElement(c.a,{"className":"goods-list__scroll","scrollY":!0,"scrollTop":i,"scrollWithAnimation":!0,"onScroll":this.handleScroll,"onScrollToLower":this.nextPage},r.l.createElement(a.a,{"className":"goods-list goods-list__type-grid"},o.map(function(e){return r.l.createElement(u.i,{"key":e.item_id,"info":e,"onClick":function onClick(){return t.handleClickItem(e)}})})),s.isLoading?r.l.createElement(u.j,null,"正在加载..."):null,!s.isLoading&&!s.hasNext&&!o.length&&r.l.createElement(u.s,{"img":"trades_empty.png"},"暂无数据~")),r.l.createElement(u.b,{"show":n,"onClick":this.scrollBackToTop}))}},{"key":"componentDidShow","value":function componentDidShow(){_(ItemGuess.prototype.__proto__||Object.getPrototypeOf(ItemGuess.prototype),"componentDidShow",this)&&_(ItemGuess.prototype.__proto__||Object.getPrototypeOf(ItemGuess.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){_(ItemGuess.prototype.__proto__||Object.getPrototypeOf(ItemGuess.prototype),"componentDidHide",this)&&_(ItemGuess.prototype.__proto__||Object.getPrototypeOf(ItemGuess.prototype),"componentDidHide",this).call(this)}}]),ItemGuess}())||n)||n}}]);