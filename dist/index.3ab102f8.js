var e,t,r,n,o,i,a,s,c,u,l,d,p,f,h,v,g,m,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire3a11;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire3a11=E);var S={},O={},L=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
O=L("object"==typeof globalThis&&globalThis)||L("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
L("object"==typeof self&&self)||L("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||O||Function("return this")();var j={},F={};// Detect IE8's incomplete defineProperty implementation
j=!(F=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},M={};M=!F(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;$=M?P.bind(P):function(){return P.apply(P,arguments)};var x={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;i=T&&!x.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:x;var I={};I=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var N={},H={},q={},D=Function.prototype,R=D.call,C=M&&D.bind.bind(R,R),U={},A=(q=M?C:function(e){return function(){return R.apply(e,arguments)}})({}.toString),z=q("".slice);U=function(e){return z(A(e),8,-1)};var W=Object,G=q("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
H=F(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===U(e)?G(e,""):W(e)}:W;var B={},J={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
J=function(e){return null==e};var Y=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(e){if(J(e))throw new Y("Can't call method on "+e);return e},N=function(e){return H(B(e))};var Q={},K={},V={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;V=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},eo={};eo=function(e,t){var r;return arguments.length<2?(r=O[e],X(r)?r:void 0):O[e]&&O[e][t]};var ei={};ei=q({}.isPrototypeOf);var ea={},es={},ec={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=O.process,ed=O.Deno,ep=el&&el.versions||ed&&ed.version,ef=ep&&ep.v8;ef&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eu&&(!(a=eu.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eu.match(/Chrome\/(\d+)/))&&(s=+a[1]),ec=s;var eh=O.String;ea=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(es=!!Object.getOwnPropertySymbols&&!F(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eh(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ev=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=eo("Symbol");return X(t)&&ei(t.prototype,ev(e))};var eg={},em={},ey={},eb=String;ey=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;// `Assert: IsCallable(argument) is true`
em=function(e){if(X(e))return e;throw new e_(ey(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eg=function(e,t){var r=e[t];return J(r)?void 0:em(r)};var ew={},ek=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!V(n=$(r,e))||X(r=e.valueOf)&&!V(n=$(r,e))||"string"!==t&&X(r=e.toString)&&!V(n=$(r,e)))return n;throw new ek("Can't convert object to primitive value")};var eE={},eS={};eS=!1;var eO={},eL={},ej=Object.defineProperty;eL=function(e,t){try{ej(O,e,{value:t,configurable:!0,writable:!0})}catch(r){O[e]=t}return t};var eF="__core-js_shared__";eO=O[eF]||eL(eF,{}),(eE=function(e,t){return eO[e]||(eO[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var e$={},eM={},eP=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eM=function(e){return eP(B(e))};var ex=q({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
e$=Object.hasOwn||function(e,t){return ex(eM(e),t)};var eT={},eI=0,eN=Math.random(),eH=q(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eH(++eI+eN,36)};var eq=O.Symbol,eD=eE("wks"),eR=ea?eq.for||eq:eq&&eq.withoutSetter||eT,eC=TypeError,eU=(e$(eD,e="toPrimitive")||(eD[e]=es&&e$(eq,e)?eq[e]:eR("Symbol."+e)),eD[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
K=function(e,t){if(!V(e)||en(e))return e;var r,n=eg(e,eU);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!V(r)||en(r))return r;throw new eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Q=function(e){var t=K(e,"string");return en(t)?t:t+""};var eA={},ez={},eW=O.document,eG=V(eW)&&V(eW.createElement);ez=function(e){return eG?eW.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eA=!j&&!F(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ez("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eB=Object.getOwnPropertyDescriptor;o=j?eB:function(e,t){if(e=N(e),t=Q(t),eA)try{return eB(e,t)}catch(e){}if(e$(e,t))return I(!$(i,e,t),e[t])};var eJ={},eY={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eY=j&&F(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eQ={},eK=String,eV=TypeError;// `Assert: Type(argument) is Object`
eQ=function(e){if(V(e))return e;throw new eV(eK(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e3="writable";c=j?eY?function(e,t,r){if(eQ(e),t=Q(t),eQ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e3 in r&&!r[e3]){var n=e0(e,t);n&&n[e3]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eQ(e),t=Q(t),eQ(r),eA)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eJ=j?function(e,t,r){return c(e,t,I(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e7={},e9=Function.prototype,e6=j&&Object.getOwnPropertyDescriptor,e8=e$(e9,"name")&&(!j||j&&e6(e9,"name").configurable),e5={},te=q(Function.toString);X(eO.inspectSource)||(eO.inspectSource=function(e){return te(e)}),e5=eO.inspectSource;var tt={},tr={},tn=O.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var to={},ti=eE("keys");to=function(e){return ti[e]||(ti[e]=eT(e))};var ta={};ta={};var ts="Object already initialized",tc=O.TypeError,tu=O.WeakMap;if(tr||eO.state){var tl=eO.state||(eO.state=new tu);/* eslint-disable no-self-assign -- prototype methods protection */tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(tl.has(e))throw new tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},d=function(e){return tl.has(e)}}else{var tp=to("state");ta[tp]=!0,u=function(e,t){if(e$(e,tp))throw new tc(ts);return t.facade=e,eJ(e,tp,t),t},l=function(e){return e$(e,tp)?e[tp]:{}},d=function(e){return e$(e,tp)}}var tf=(tt={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=l(t)).type!==e)throw new tc("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,tg=Object.defineProperty,tm=q("".slice),ty=q("".replace),tb=q([].join),t_=j&&!F(function(){return 8!==tg(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tm(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e8&&e.name!==t)&&(j?tg(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&e$(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?j&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return e$(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tk(function(){return X(this)&&th(this).source||e5(this)},"toString"),e4=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(X(r)&&e7(r,i,n),n.global)o?e[t]=r:eL(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tO={},tL={},tj={},tF={},t$=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tF=Math.trunc||function(e){var t=+e;return(t>0?tM:t$)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tF(t)};var tP=Math.max,tx=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tL=function(e,t){var r=tj(e);return r<0?tP(r+t,0):tx(r,t)};var tT={},tI={},tN=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tI=function(e){return e>0?tN(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tT=function(e){return tI(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tH=function(e){return function(t,r,n){var o,i=N(t),a=tT(i),s=tL(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[s++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tq={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tH(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tH(!1)}.indexOf,tD=q([].push);tO=function(e,t){var r,n=N(e),o=0,i=[];for(r in n)!e$(ta,r)&&e$(n,r)&&tD(i,r);// Don't enum bug & hidden keys
for(;t.length>o;)e$(n,r=t[o++])&&(~tq(i,r)||tD(i,r));return i};var tR=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tO(e,tR)},f=Object.getOwnPropertySymbols;var tC=q([].concat);// all object keys, includes non-enumerable and symbols
tS=eo("Reflect","ownKeys")||function(e){var t=p(eQ(e));return f?tC(t,f(e)):t},tE=function(e,t,r){for(var n=tS(t),i=0;i<n.length;i++){var a=n[i];e$(e,a)||r&&e$(r,a)||c(e,a,o(t,a))}};var tU={},tA=/#|\.prototype\./,tz=function(e,t){var r=tG[tW(e)];return r===tJ||r!==tB&&(X(t)?F(t):!!t)},tW=tz.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tG=tz.data={},tB=tz.NATIVE="N",tJ=tz.POLYFILL="P";tU=tz,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/S=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?O:l?O[c]||eL(c,{}):(O[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tU(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tE(a,i)}(e.sham||i&&i.sham)&&eJ(a,"sham",!0),e4(r,n,a,e)}};var tY={},tQ={},tK=Function.prototype,tV=tK.apply,tX=tK.call;// eslint-disable-next-line es/no-reflect -- safe
tQ="object"==typeof Reflect&&Reflect.apply||(M?tX.bind(tV):function(){return tX.apply(tV,arguments)});var tZ={},t0={},t1=(t0=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===U(e))return q(e)})(t0.bind);// optional / simple context binding
tZ=function(e,t){return em(e),void 0===t?e:M?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=eo("document","documentElement");var t3={};t3=q([].slice);var t4={},t7=TypeError;t4=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t9={};// eslint-disable-next-line redos/no-vulnerable -- safe
t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t6={};t6="process"===U(O.process);var t8=O.setImmediate,t5=O.clearImmediate,re=O.process,rt=O.Dispatch,rr=O.Function,rn=O.MessageChannel,ro=O.String,ri=0,ra={},rs="onreadystatechange";F(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=O.location});var rc=function(e){if(e$(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){// old engines have not location.origin
O.postMessage(ro(e),h.protocol+"//"+h.host)};t8&&t5||(t8=function(e){t4(arguments.length,1);var t=X(e)?e:rr(e),r=t3(arguments,1);return ra[++ri]=function(){tQ(t,void 0,r)},v(ri),ri},t5=function(e){delete ra[e]},t6?v=function(e){re.nextTick(ru(e))}:rt&&rt.now?v=function(e){rt.now(ru(e))}:rn&&!t9?(m=(g=new rn).port2,g.port1.onmessage=rl,v=tZ(m.postMessage,m)):O.addEventListener&&X(O.postMessage)&&!O.importScripts&&h&&"file:"!==h.protocol&&!F(rd)?(v=rd,O.addEventListener("message",rl,!1)):v=rs in ez("script")?function(e){t2.appendChild(ez("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tY={set:t8,clear:t5}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
S({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==rp},{clearImmediate:rp});var rf=tY.set,rh={},rv={};/* global Bun -- Deno case */rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rg=O.Function,rm=/MSIE .\./.test(eu)||rv&&((t=O.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rh=function(e,t){var r=t?2:1;return rm?function(n,o/* , ...arguments */){var i=t4(arguments.length,1)>r,a=X(n)?n:rg(n),s=i?t3(arguments,r):[],c=i?function(){tQ(a,this,s)}:a;return t?e(c,o):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var ry=O.setImmediate?rh(rf,!1):rf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
S({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==ry},{setImmediate:ry});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(c,"_invoke",{value:(a=new j(i||[]),s=p,function(r,o){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v);var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(i,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=d(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=F,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rb}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.herokuapp.com/api/v2/recipes/",rw="16b3f609-cd35-4e23-ae7b-7a86bbef5566",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(!n.ok)throw Error(`${o.message}`);return o}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,source_url:t.source_url,image_url:t.image_url,servings:t.servings,cooking_time:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),console.log(rE.recipe),rE.bookmarks.some(e=>e.id===rE.recipe.id)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1}catch(e){throw e}},rL=async function(e){try{let t=await rk(`${r_}?search=${e}&key=${rw}`);if(0===t.results)throw err;rE.search.query=e,rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image_url:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw e}rE.search.page=1},rj=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;/**0 */return rE.search.results.slice(t,r)},rF=function(e){rE.recipe.ingredients.forEach(t=>{console.log(t),t.quantity=t.quantity*e/rE.recipe.servings;/**2 * (8/4) = 2 *//**newQuantity = oldQuantity * (newServing/oldseving) */}),/**UPDATE THE SERVINGS IN STATE OBJECT TO NEWSERVING AFTER ALL ELEMENTS ARE UPDATED(AFTER LOOP)*/rE.recipe.servings=e},r$=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rM=function(e){/**PUSH THE RECIPE INTP BOOKMARKS ARRAY */rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0,r$())},rP=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1,r$())};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}();const rx=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(console.log(t),3!==t.length)throw Error("Wrong ingredient format . Please use correct format :)");let[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?key=${rw}`,r);console.log(n),rE.recipe=rS(n),rM(rE.recipe)}catch(e){throw e}};/**16b3f609-cd35-4e23-ae7b-7a86bbef5566 */var rT={};rT=new URL(E("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rI{_data;render(e,t=!0){this._data=e;let r=this._generateMarkUp();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}/**RENDER THE SPINNER */renderSpinner(){let e=`
         <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/_(rT)}.svg#icon-loader"></use>
          </svg>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}/**HANDLING ERRORS */renderError(e=this._errorMessage){let t=`<div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/_(rT)}/icons.svg#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,o=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var i=r.split("/");this.numerator=i[0],this.denominator=i[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;class rN extends rI{_parentElement=document.querySelector(".recipe");_errorMessage="WE COULD NOT FIND THAT RECIPE PLEASE TRY ANOTHER ONE";/**HANDLING BOOKMARK EVENT */addHandlerBookMark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--round");console.log(r),r&&e()})}/**HANDLING CLICK EVENT ON + AND - */addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;console.log(r),console.log(r.dataset.updateto);let n=+r.dataset.updateto;n<1||e(n)})}/**HANDLING LOAD AND CLICK EVENT */addHandlerRender(e){/**I WANT TO CALL controlRecipes METHOD FOR MULTIPLE EVENTS *//**METHOD 1 */// window.addEventListener('click', controlRecipes);  window.addEventListener('load', controlRecipes);
["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkUpIngredients(e){return` 
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/_(rT)}.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():" "}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>`}_generateMarkUp(){return`
     <figure class="recipe__fig">
          <img src="${this._data.image_url}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rT)}.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rT)}.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button   class="btn--tiny btn--update-servings" data-updateTo=${this._data.servings-1}>
                <svg>
                  <use href="${/*@__PURE__*/_(rT)}.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-updateTo=${this._data.servings+1}
              >
                <svg>
                  <use href="${/*@__PURE__*/_(rT)}.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

           <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${/*@__PURE__*/_(rT)}.svg#icon-user"></use>
                  </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${/*@__PURE__*/_(rT)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkUpIngredients).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.source_url}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rT)}.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}}var rH=new rN;class rq{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput1(),e}_clearInput1(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rD=new rq;class rR extends rI{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkUp(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return /**PAGE 1 AND OTHER PAGES */1===t&&e>1?`
       <button data-goto="${t+1}" class="btn--inline pagination__btn--next">         
          <span>Page ${t+1}</span>
          <svg class="search__icon">
          <use href="${/*@__PURE__*/_(rT)}#icon-arrow-right"></use>
          </svg>
      </button>
      `:t<e?`
       <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
       </button>
       <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
           <span>Page ${t+1}</span>
           <svg class="search__icon">
             <use href="${/*@__PURE__*/_(rT)}#icon-arrow-right"></use>
           </svg>
       </button>
      `:t===e&&e>1?`
 <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
       </button>     
      `:""}}var rC=new rR,rU=new class extends rI{_parentElement="";_generateMarkUp(){let e=window.location.hash.slice(1);return console.log(this._data),`
    <li class="preview">
      <a class="preview__link  ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image_url}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${this._data.key?"":"hidden"}">
          <svg>
          <use href="${/*@__PURE__*/_(rT)}.svg#icon-user"></use>
          </svg>
          </div>
          </div>
      </a>
    </li>  
    `}};class rA extends rI{_parentElement=document.querySelector(".results");_errorMessage="No recipe was found for your query . Please try another one";_generateMarkUp(){return this._data.map(e=>rU.render(e,!1)).join("")}}var rz=new rA;class rW extends rI{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet . Find a nice recipe and bookmark it :)";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkUp(){return this._data.map(e=>rU.render(e,!1)).join("")}}var rG=new rW;class rB extends rI{_parentElement=document.querySelector(".upload");_errorMessage="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_openbtn=document.querySelector(".nav__btn--add-recipe");_closebtn=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._openbtn.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._closebtn.addEventListener("click",this.toggleWindow.bind(this));// this._overlay.addEventListener('click', this.toggleWindow.bind(this));
}addHandlerUpload(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".upload__btn");if(!r)return;let n=[...new FormData(this)],o=Object.fromEntries(n);e(o)})}}var rJ=new rB;document.querySelector(".recipe");// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
/**COMING FROM PARCEL NOT PART OF JS */// // if (module.hot) {
// //   module.hot.accept();
// }
const rY=async function(){try{let e=window.location.hash.slice(1);e&&rH.renderSpinner(),/**LOADING  RECIPES */await rO(e),rH.render(rE.recipe),rz.render(rj()),0===rE.bookmarks.length?rG.renderError():rG.render(rE.bookmarks)}catch(e){rH.renderError(),console.error(e),rD.addHandlerSearch(rQ)}},rQ=async function(){try{rz.renderSpinner();/**GET SEARCH QUERY */let e=rD.getQuery();if(!e)return;/**LOAD SEARCH RESULTS */await rL(e),rz.render(rj()),rC.render(rE.search)}catch(e){console.log(e),rz.renderError()}},rK=async function(e){try{rJ.renderSpinner(),/**UPLOAD RECIPE DATA */await rx(e),rH.render(rE.recipe),rJ.renderError(),rG.render(rE.bookmarks),// // /**CHANGE ID IN URL */
window.history.pushState(null,"",`#${rE.recipe.id}`)}catch(e){console.log(e.message),rJ.renderError(e.message)}};rH.addHandlerRender(rY),rH.addHandlerUpdateServings(function(e){/**UPDATE THE RECIPE SERVINGS (STATE) -->DATA-->MODEL.JS*/rF(e),rH.render(rE.recipe)}),rH.addHandlerBookMark(function(){rE.recipe.bookmarked?rP(rE.recipe.id):rM(rE.recipe),rH.render(rE.recipe),rG.render(rE.bookmarks),0===rE.bookmarks.length&&rG.renderError()}),rD.addHandlerSearch(rQ),rC.addHandlerClick(function(e){console.log("PAGE CONTROLLER"),rz.render(rj(e)),rC.render(rE.search)}),rG.addHandlerRender(function(){rG.render(rE.bookmarks)}),rJ.addHandlerUpload(rK);//# sourceMappingURL=index.3ab102f8.js.map

//# sourceMappingURL=index.3ab102f8.js.map
