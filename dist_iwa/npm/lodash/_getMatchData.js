var isStrictComparable=require("./_isStrictComparable.js"),keys=require("./keys.js");function getMatchData(r){for(var e=keys(r),t=e.length;t--;){var a=e[t],i=r[a];e[t]=[a,i,isStrictComparable(i)]}return e}module.exports=getMatchData;