"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function styleNames(e){if(!e||"object"!==(void 0===e?"undefined":_typeof(e)))return'""';var t="",o=!0,r=!1,n=void 0;try{for(var y,f=Object.keys(e)[Symbol.iterator]();!(o=(y=f.next()).done);o=!0){var l=y.value;if("string"!=typeof e[l]){if("object"===_typeof(e[l])&&0!==e[l].length){var i=e[l],u=!0,a=!1,s=void 0;try{for(var c,p=Object.keys(i)[Symbol.iterator]();!(u=(c=p.next()).done);u=!0){var b=c.value;if("function"!=typeof i[b]&&i[b]||"function"==typeof i[b]&&i[b]()){t+=l+":"+b+";";break}}}catch(e){a=!0,s=e}finally{try{!u&&p.return&&p.return()}finally{if(a)throw s}}}}else t+=l+":"+e[l]+";"}}catch(e){r=!0,n=e}finally{try{!o&&f.return&&f.return()}finally{if(r)throw n}}return""+t}exports.default=styleNames,require("../../es6-symbol/implement.js"),module.exports=exports.default;