// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,t,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(t=(-c).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=c.toString(e),c||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor,M=Math.ceil;function Z(r){return r<0?M(r):R(r)}var X=Number.NEGATIVE_INFINITY,Y=Number.POSITIVE_INFINITY;function q(r){return r===Y||r===X}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return B.call(r);n=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[K]=n:delete r[K],t}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,tr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var cr,ur="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),n=e,r=(ar&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=cr,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,yr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),n=e,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=pr,vr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:gr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Nr={HIGH:Ar,LOW:_r},Ur=new fr(1),Ir=new ir(Ur.buffer),Sr=Nr.HIGH,kr=Nr.LOW;function xr(r,e,n,t){return Ur[0]=r,e[t]=Ir[Sr],e[t+n]=Ir[kr],e}function Fr(r){return xr(r,[0,0],1,0)}L(Fr,"assign",xr);var jr,Tr,Or=!0===Er?1:0,Vr=new fr(1),$r=new ir(Vr.buffer);function Gr(r){return Vr[0]=r,$r[Or]}!0===Er?(jr=1,Tr=0):(jr=0,Tr=1);var Hr={HIGH:jr,LOW:Tr},Wr=new fr(1),Cr=new ir(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Mr=[0,0];function Zr(r,e,n,t){return P(r)||q(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Zr(r,[0,0],1,0)}),"assign",Zr);var Xr=[0,0],Yr=[0,0];function qr(r,e){var n,t,i,a,o,c;return 0===e||0===r||P(r)||q(r)?r:(Zr(r,Xr,1,0),e+=Xr[1],e+=function(r){var e=Gr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Xr[0]),e<-1074?(i=0,a=r,Fr.assign(i,Mr,1,0),o=Mr[0],o&=2147483647,c=Gr(a),Rr(o|=c&=2147483648,Mr[1])):e>1023?r<0?X:Y:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Fr.assign(r,Yr,1,0),n=Yr[0],n&=2148532223,t*Rr(n|=e+1023<<20,Yr[1])))}function zr(r){var e;return P(r)||r===Y?r:r===X?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return qr(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Z(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}var Br=!0===Er?0:1,Dr=new fr(1),Jr=new ir(Dr.buffer);var Kr=.8450629115104675;function Qr(r){var e,n,t,i,a,o,c,u;if(P(r))return NaN;if(r===Y)return 0;if(r===X)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),a=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),o=i/a,r<.25?1-(r+r*o):(i=r*o,.5-(i+=r-.5)));if(n<1.25)return c=(a=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,u=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),e?1+Kr+c/u:1-Kr-c/u;if(n<28){if(a=1/(n*n),n<2.857142857142857)i=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a);else{if(r<-6)return 2;i=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)}return t=function(r,e){return Dr[0]=r,Jr[Br]=e>>>0,Dr[0]}(n,0),i=zr(-t*t-.5625)*zr((t-n)*(t+n)+i/a),e?2-i/n:i/n}return e?2:0}var re=Math.sqrt;function ee(r,e,n){return P(r)||P(e)||P(n)||n<0?NaN:0===n?r<e?0:1:.5*Qr(-(r-e)/(n*re(2)))}function ne(r){return function(){return r}}function te(r){return P(r)?ne(NaN):function(e){if(P(e))return NaN;return e<r?0:1}}function ie(r,e){var n;return P(r)||P(e)||e<0?ne(NaN):0===e?te(r):(n=e*re(2),function(e){if(P(e))return NaN;return.5*Qr(-(e-r)/n)})}L((function(r,e){return P(r)||P(e)?NaN:r<e?0:1}),"factory",te),L(ee,"factory",ie);export{ee as default,ie as factory};
//# sourceMappingURL=mod.js.map
