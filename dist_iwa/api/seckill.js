"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.seckillList=seckillList;var _req=require("./req.js"),_req2=_interopRequireDefault(_req);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function seckillList(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return _req2.default.get("/promotion/seckillactivity/getlist",e)}