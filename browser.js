// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,r,a){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(n,r)||f.call(n,r)?(c=n.__proto__,n.__proto__=t,delete n[r],n[r]=a.value,n.__proto__=c):n[r]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(n,r,a.get),p&&u&&u.call(n,r,a.set),n};function c(n,r,t){a(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(n){return n!=n}var y=Math.floor,p=Math.ceil;function v(n){return n<0?p(n):y(n)}var b=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;function d(n){return n===s||n===b}var w,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,m=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",h=A&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,o,u;if(null==n)return _.call(n);t=n[N],u=N,r=null!=(o=n)&&m.call(o,u);try{n[N]=void 0}catch(r){return _.call(n)}return e=_.call(n),r?n[N]=t:delete n[N],e}:function(n){return _.call(n)},U="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var n,r,t;if("function"!=typeof g)return!1;try{r=new g(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(U&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?j:function(){throw new Error("not implemented")};var I,O=w,S="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;I=function(){var n,r,t;if("function"!=typeof E)return!1;try{r=new E([1,3.14,-3.14,NaN]),t=r,n=(S&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var n,r,t;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),t=r,n=(G&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?L:function(){throw new Error("not implemented")};var M,V=T,W="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var n,r,t;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,65536,65537]),t=r,n=(W&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?k:function(){throw new Error("not implemented")};var Y,q={uint16:M,uint8:V};(Y=new q.uint16(1))[0]=4660;var C,z,B=52===new q.uint8(Y.buffer)[0];!0===B?(C=1,z=0):(C=0,z=1);var D={HIGH:C,LOW:z},J=new H(1),K=new O(J.buffer),Q=D.HIGH,R=D.LOW;function X(n,r,t,e){return J[0]=n,r[e]=K[Q],r[e+t]=K[R],r}function Z(n){return X(n,[0,0],1,0)}c(Z,"assign",X);var $,nn,rn=!0===B?1:0,tn=new H(1),en=new O(tn.buffer);function on(n){return tn[0]=n,en[rn]}!0===B?($=1,nn=0):($=0,nn=1);var un={HIGH:$,LOW:nn},fn=new H(1),an=new O(fn.buffer),cn=un.HIGH,ln=un.LOW;function yn(n,r){return an[cn]=n,an[ln]=r,fn[0]}var pn=[0,0];function vn(n,r,t,e){return l(n)||d(n)?(r[e]=n,r[e+t]=0,r):0!==n&&function(n){return Math.abs(n)}(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}c((function(n){return vn(n,[0,0],1,0)}),"assign",vn);var bn=[0,0],sn=[0,0];function dn(n,r){var t,e,o,u,i,f;return 0===r||0===n||l(n)||d(n)?n:(vn(n,bn,1,0),r+=bn[1],r+=function(n){var r=on(n);return(r=(2146435072&r)>>>20)-1023|0}(n=bn[0]),r<-1074?(o=0,u=n,Z.assign(o,pn,1,0),i=pn[0],i&=2147483647,f=on(u),yn(i|=f&=2147483648,pn[1])):r>1023?n<0?b:s:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Z.assign(n,sn,1,0),t=sn[0],t&=2148532223,e*yn(t|=r+1023<<20,sn[1])))}var wn=1.4426950408889634,An=1/(1<<28);function _n(n){var r;return l(n)||n===s?n:n===b?0:n>709.782712893384?s:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<An?1+n:function(n,r,t){var e,o,u,i;return dn(1-(r-(e=n-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-n),t)}(n-.6931471803691238*(r=v(n<0?wn*n-.5:wn*n+.5)),1.9082149292705877e-10*r,r)}var mn=!0===B?0:1,Nn=new H(1),hn=new O(Nn.buffer),Un=.8450629115104675;function gn(n){var r,t,e,o,u,i,f,a;if(l(n))return NaN;if(n===s)return 0;if(n===b)return 2;if(0===n)return 1;if(n<0?(r=!0,t=-n):(r=!1,t=n),t<.84375)return t<13877787807814457e-33?1-n:(o=.12837916709551256+(e=n*n)*function(n){return 0===n?-.3250421072470015:n*(n*(-23763016656650163e-21*n-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(n){return 0===n?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+-3960228278775368e-21*n)))}(e),i=o/u,n<.25?1-(n+n*i):(o=n*i,.5-(o+=n-.5)));if(t<1.25)return f=(u=t-1)*function(n){return 0===n?.41485611868374833:.41485611868374833+n*(n*(.31834661990116175+n*(n*(.035478304325618236+-.002166375594868791*n)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(n){return 0===n?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+.011984499846799107*n))))}(u),r?1+Un+f/a:1-Un-f/a;if(t<28){if(u=1/(t*t),t<2.857142857142857)o=u*function(n){return 0===n?-.6938585727071818:n*(n*(n*(n*(n*(-9.814329344169145*n-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(n){return 0===n?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+-.0604244152148581*n))))))}(u);else{if(n<-6)return 2;o=u*function(n){return 0===n?-.799283237680523:n*(n*(n*(n*(-483.5191916086514*n-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(n){return 0===n?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+-22.44095244658582*n)))))}(u)}return e=function(n,r){return Nn[0]=n,hn[mn]=r>>>0,Nn[0]}(t,0),o=_n(-e*e-.5625)*_n((e-t)*(e+t)+o/u),r?2-o/t:o/t}return r?2:0}var jn=Math.sqrt;function In(n,r,t){return l(n)||l(r)||l(t)||t<0?NaN:0===t?n<r?0:1:.5*gn(-(n-r)/(t*jn(2)))}function On(n){return function(){return n}}function Sn(n){return l(n)?On(NaN):function(r){return l(r)?NaN:r<n?0:1}}return c((function(n,r){return l(n)||l(r)?NaN:n<r?0:1}),"factory",Sn),c(In,"factory",(function(n,r){var t;return l(n)||l(r)||r<0?On(NaN):0===r?Sn(n):(t=r*jn(2),function(r){return l(r)?NaN:.5*gn(-(r-n)/t)})})),In},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).cdf=r();
//# sourceMappingURL=browser.js.map
