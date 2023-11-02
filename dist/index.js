"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(k,v){
var N=require('@stdlib/math-base-special-erfc/dist'),y=require('@stdlib/math-base-special-sqrt/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function p(e,r,t){var a,n;return u(e)||u(r)||u(t)||t<0?NaN:t===0?e<r?0:1:(a=t*y(2),n=e-r,.5*N(-n/a))}v.exports=p
});var s=f(function(w,q){
var x=require('@stdlib/utils-constant-function/dist'),l=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,i=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-sqrt/dist'),O=require('@stdlib/math-base-special-erfc/dist');function R(e,r){var t;if(i(e)||i(r)||r<0)return x(NaN);if(r===0)return l(e);return t=r*F(2),a;function a(n){var c;return i(n)?NaN:(c=n-e,.5*O(-c/t))}}q.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=o(),h=s();b(d,"factory",h);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
