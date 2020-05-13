var baseIsEqual=require("./_baseIsEqual.js"),get=require("./get.js"),hasIn=require("./hasIn.js"),isKey=require("./_isKey.js"),isStrictComparable=require("./_isStrictComparable.js"),matchesStrictComparable=require("./_matchesStrictComparable.js"),toKey=require("./_toKey.js"),COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(a,s){return isKey(a)&&isStrictComparable(s)?matchesStrictComparable(toKey(a),s):function(e){var r=get(e,a);return void 0===r&&r===s?hasIn(e,a):baseIsEqual(s,r,3)}}module.exports=baseMatchesProperty;