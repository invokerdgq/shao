var Stack=require("./_Stack.js"),baseIsEqual=require("./_baseIsEqual.js"),COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseIsMatch(r,e,a,s){var t=a.length,i=t,u=!s;if(null==r)return!i;for(r=Object(r);t--;){var n=a[t];if(u&&n[2]?n[1]!==r[n[0]]:!(n[0]in r))return!1}for(;++t<i;){var f=(n=a[t])[0],l=r[f],v=n[1];if(u&&n[2]){if(void 0===l&&!(f in r))return!1}else{var c=new Stack;if(s)var o=s(l,v,f,r,e,c);if(!(void 0===o?baseIsEqual(v,l,3,s,c):o))return!1}}return!0}module.exports=baseIsMatch;