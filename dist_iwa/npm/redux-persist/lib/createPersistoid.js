"use strict";exports.__esModule=!0,exports.default=createPersistoid;var _constants=require("./constants.js");function createPersistoid(e){var r=e.blacklist||null,n=e.whitelist||null,t=e.transforms||[],i=e.throttle||0,s=""+(void 0!==e.keyPrefix?e.keyPrefix:_constants.KEY_PREFIX)+e.key,o=e.storage,u=!1===e.serialize?function(e){return e}:defaultSerialize,l={},c={},f=[],a=null,d=null;function h(){if(0===f.length)return a&&clearInterval(a),void(a=null);var r=f.shift(),e=t.reduce(function(e,t){return t.in(e,r,l)},l[r]);if(void 0!==e)try{c[r]=u(e)}catch(e){console.error("redux-persist/createPersistoid: error serializing state",e)}else delete c[r];0===f.length&&(Object.keys(c).forEach(function(e){void 0===l[e]&&delete c[e]}),d=o.setItem(s,u(c)).catch(v))}function v(e){}return{update:function(t){Object.keys(t).forEach(function(e){(function(e){return!(n&&-1===n.indexOf(e)&&"_persist"!==e||r&&-1!==r.indexOf(e))})(e)&&l[e]!==t[e]&&-1===f.indexOf(e)&&f.push(e)}),Object.keys(l).forEach(function(e){void 0===t[e]&&f.push(e)}),null===a&&(a=setInterval(h,i)),l=t},flush:function(){for(;0!==f.length;)h();return d||Promise.resolve()}}}function defaultSerialize(e){return JSON.stringify(e)}