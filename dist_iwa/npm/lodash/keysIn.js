var arrayLikeKeys=require("./_arrayLikeKeys.js"),baseKeysIn=require("./_baseKeysIn.js"),isArrayLike=require("./isArrayLike.js");function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}module.exports=keysIn;