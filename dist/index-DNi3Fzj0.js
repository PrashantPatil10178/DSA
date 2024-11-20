(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ua={exports:{}},hi={},ca={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Lc=Symbol.for("react.portal"),Mc=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Wc=Symbol.for("react.memo"),$c=Symbol.for("react.lazy"),Gl=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fa=Object.assign,pa={};function gn(e,t,n){this.props=e,this.context=t,this.refs=pa,this.updater=n||da}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ma(){}ma.prototype=gn.prototype;function el(e,t,n){this.props=e,this.context=t,this.refs=pa,this.updater=n||da}var tl=el.prototype=new ma;tl.constructor=el;fa(tl,gn.prototype);tl.isPureReactComponent=!0;var Kl=Array.isArray,ha=Object.prototype.hasOwnProperty,nl={current:null},va={key:!0,ref:!0,__self:!0,__source:!0};function ga(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ha.call(t,r)&&!va.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:l,props:i,_owner:nl.current}}function Zc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function qc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yl=/\/+/g;function Di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qc(""+e.key):t.toString(36)}function Dr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sr:case Lc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Di(l,0):r,Kl(i)?(n="",e!=null&&(n=e.replace(Yl,"$&/")+"/"),Dr(i,t,n,"",function(c){return c})):i!=null&&(rl(i)&&(i=Zc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Yl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Kl(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Di(o,s);l+=Dr(o,t,n,a,i)}else if(a=Hc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Di(o,s++),l+=Dr(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hr(e,t,n){if(e==null)return e;var r=[],i=0;return Dr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},zr={transition:null},Xc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:zr,ReactCurrentOwner:nl};function ya(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=gn;D.Fragment=Mc;D.Profiler=Rc;D.PureComponent=el;D.StrictMode=Fc;D.Suspense=Vc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;D.act=ya;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fa({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=nl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ha.call(t,a)&&!va.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:sr,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Oc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};D.createElement=ga;D.createFactory=function(e){var t=ga.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Uc,render:e}};D.isValidElement=rl;D.lazy=function(e){return{$$typeof:$c,_payload:{_status:-1,_result:e},_init:Qc}};D.memo=function(e,t){return{$$typeof:Wc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};D.unstable_act=ya;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";ca.exports=D;var F=ca.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc=F,Kc=Symbol.for("react.element"),Yc=Symbol.for("react.fragment"),Jc=Object.prototype.hasOwnProperty,ed=Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,td={key:!0,ref:!0,__self:!0,__source:!0};function wa(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jc.call(t,r)&&!td.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Kc,type:e,key:o,ref:l,props:i,_owner:ed.current}}hi.Fragment=Yc;hi.jsx=wa;hi.jsxs=wa;ua.exports=hi;var M=ua.exports,ka={exports:{}},Se={},xa={exports:{}},ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,P){var j=b.length;b.push(P);e:for(;0<j;){var A=j-1>>>1,J=b[A];if(0<i(J,P))b[A]=P,b[j]=J,j=A;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],j=b.pop();if(j!==P){b[0]=j;e:for(var A=0,J=b.length,pr=J>>>1;A<pr;){var It=2*(A+1)-1,Ti=b[It],Ct=It+1,mr=b[Ct];if(0>i(Ti,j))Ct<J&&0>i(mr,Ti)?(b[A]=mr,b[Ct]=j,A=Ct):(b[A]=Ti,b[It]=j,A=It);else if(Ct<J&&0>i(mr,j))b[A]=mr,b[Ct]=j,A=Ct;else break e}}return P}function i(b,P){var j=b.sortIndex-P.sortIndex;return j!==0?j:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,h=null,p=3,w=!1,k=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(b){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=b)r(c),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(c)}}function v(b){if(y=!1,f(b),!k)if(n(a)!==null)k=!0,tt(x);else{var P=n(c);P!==null&&Vt(v,P.startTime-b)}}function x(b,P){k=!1,y&&(y=!1,d(C),C=-1),w=!0;var j=p;try{for(f(P),h=n(a);h!==null&&(!(h.expirationTime>P)||b&&!ue());){var A=h.callback;if(typeof A=="function"){h.callback=null,p=h.priorityLevel;var J=A(h.expirationTime<=P);P=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(a)&&r(a),f(P)}else r(a);h=n(a)}if(h!==null)var pr=!0;else{var It=n(c);It!==null&&Vt(v,It.startTime-P),pr=!1}return pr}finally{h=null,p=j,w=!1}}var E=!1,I=null,C=-1,O=5,T=-1;function ue(){return!(e.unstable_now()-T<O)}function L(){if(I!==null){var b=e.unstable_now();T=b;var P=!0;try{P=I(!0,b)}finally{P?et():(E=!1,I=null)}}else E=!1}var et;if(typeof u=="function")et=function(){u(L)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,fr=Et.port2;Et.port1.onmessage=L,et=function(){fr.postMessage(null)}}else et=function(){N(L,0)};function tt(b){I=b,E||(E=!0,et())}function Vt(b,P){C=N(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,tt(x))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var j=p;p=P;try{return b()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=p;p=b;try{return P()}finally{p=j}},e.unstable_scheduleCallback=function(b,P,j){var A=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?A+j:A):j=A,b){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,b={id:m++,callback:P,priorityLevel:b,startTime:j,expirationTime:J,sortIndex:-1},j>A?(b.sortIndex=j,t(c,b),n(a)===null&&b===n(c)&&(y?(d(C),C=-1):y=!0,Vt(v,j-A))):(b.sortIndex=J,t(a,b),k||w||(k=!0,tt(x))),b},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(b){var P=p;return function(){var j=p;p=P;try{return b.apply(this,arguments)}finally{p=j}}}})(ba);xa.exports=ba;var nd=xa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=F,be=nd;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sa=new Set,$n={};function Bt(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for($n[e]=t,e=0;e<t.length;e++)Sa.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=Object.prototype.hasOwnProperty,id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jl={},es={};function od(e){return oo.call(es,e)?!0:oo.call(Jl,e)?!1:id.test(e)?es[e]=!0:(Jl[e]=!0,!1)}function ld(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sd(e,t,n,r){if(t===null||typeof t>"u"||ld(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,ol);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,ol);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,ol);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ll(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sd(t,n,i,r)&&(n=null),r||i===null?od(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),lo=Symbol.for("react.profiler"),Ea=Symbol.for("react.provider"),Ia=Symbol.for("react.context"),al=Symbol.for("react.forward_ref"),so=Symbol.for("react.suspense"),ao=Symbol.for("react.suspense_list"),ul=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Ca=Symbol.for("react.offscreen"),ts=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,zi;function Tn(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Ai=!1;function Li(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function ad(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case $t:return"Portal";case lo:return"Profiler";case sl:return"StrictMode";case so:return"Suspense";case ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ia:return(e.displayName||"Context")+".Consumer";case Ea:return(e._context.displayName||"Context")+".Provider";case al:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ul:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Na(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cd(e){var t=Na(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=cd(e))}function Pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Na(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function co(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ns(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ja(e,t){t=t.checked,t!=null&&ll(e,"checked",t,!1)}function fo(e,t){ja(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?po(e,t.type,n):t.hasOwnProperty("defaultValue")&&po(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function po(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function is(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(Dn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function _a(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function os(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ta(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ta(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Da=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){dd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function za(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Aa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=za(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(fd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,rn=null,on=null;function ls(e){if(e=cr(e)){if(typeof wo!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ki(t),wo(e.stateNode,e.type,t))}}function La(e){rn?on?on.push(e):on=[e]:rn=e}function Ma(){if(rn){var e=rn,t=on;if(on=rn=null,ls(e),t)for(e=0;e<t.length;e++)ls(t[e])}}function Fa(e,t){return e(t)}function Ra(){}var Mi=!1;function Ba(e,t,n){if(Mi)return e(t,n);Mi=!0;try{return Fa(e,t,n)}finally{Mi=!1,(rn!==null||on!==null)&&(Ra(),Ma())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var ko=!1;if(Xe)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{ko=!1}function pd(e,t,n,r,i,o,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Mn=!1,Zr=null,qr=!1,xo=null,md={onError:function(e){Mn=!0,Zr=e}};function hd(e,t,n,r,i,o,l,s,a){Mn=!1,Zr=null,pd.apply(md,arguments)}function vd(e,t,n,r,i,o,l,s,a){if(hd.apply(this,arguments),Mn){if(Mn){var c=Zr;Mn=!1,Zr=null}else throw Error(g(198));qr||(qr=!0,xo=c)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ss(e){if(Ot(e)!==e)throw Error(g(188))}function gd(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ss(i),e;if(o===r)return ss(i),t;o=o.sibling}throw Error(g(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Ua(e){return e=gd(e),e!==null?Va(e):null}function Va(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Va(e);if(t!==null)return t;e=e.sibling}return null}var Wa=be.unstable_scheduleCallback,as=be.unstable_cancelCallback,yd=be.unstable_shouldYield,wd=be.unstable_requestPaint,X=be.unstable_now,kd=be.unstable_getCurrentPriorityLevel,dl=be.unstable_ImmediatePriority,$a=be.unstable_UserBlockingPriority,Qr=be.unstable_NormalPriority,xd=be.unstable_LowPriority,Ha=be.unstable_IdlePriority,vi=null,Ue=null;function bd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Id,Sd=Math.log,Ed=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Sd(e)/Ed|0)|0}var wr=64,kr=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=zn(s):(o&=l,o!==0&&(r=zn(o)))}else l=n&~i,l!==0?r=zn(l):o!==0&&(r=zn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function Cd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Le(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=Cd(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Za(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Pd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function qa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qa,pl,Xa,Ga,Ka,So=!1,xr=[],dt=null,ft=null,pt=null,qn=new Map,Qn=new Map,st=[],jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function us(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Sn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _d(e,t,n,r,i){switch(t){case"focusin":return dt=Sn(dt,e,t,n,r,i),!0;case"dragenter":return ft=Sn(ft,e,t,n,r,i),!0;case"mouseover":return pt=Sn(pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qn.set(o,Sn(qn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qn.set(o,Sn(Qn.get(o)||null,e,t,n,r,i)),!0}return!1}function Ya(e){var t=jt(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Oa(n),t!==null){e.blockedOn=t,Ka(e.priority,function(){Xa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=cr(n),t!==null&&pl(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){Ar(e)&&n.delete(t)}function Td(){So=!1,dt!==null&&Ar(dt)&&(dt=null),ft!==null&&Ar(ft)&&(ft=null),pt!==null&&Ar(pt)&&(pt=null),qn.forEach(cs),Qn.forEach(cs)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,So||(So=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Td)))}function Xn(e){function t(i){return En(i,e)}if(0<xr.length){En(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&En(dt,e),ft!==null&&En(ft,e),pt!==null&&En(pt,e),qn.forEach(t),Qn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)Ya(n),n.blockedOn===null&&st.shift()}var ln=Je.ReactCurrentBatchConfig,Gr=!0;function Dd(e,t,n,r){var i=R,o=ln.transition;ln.transition=null;try{R=1,ml(e,t,n,r)}finally{R=i,ln.transition=o}}function zd(e,t,n,r){var i=R,o=ln.transition;ln.transition=null;try{R=4,ml(e,t,n,r)}finally{R=i,ln.transition=o}}function ml(e,t,n,r){if(Gr){var i=Eo(e,t,n,r);if(i===null)qi(e,t,r,Kr,n),us(e,r);else if(_d(i,e,t,n,r))r.stopPropagation();else if(us(e,r),t&4&&-1<jd.indexOf(e)){for(;i!==null;){var o=cr(i);if(o!==null&&Qa(o),o=Eo(e,t,n,r),o===null&&qi(e,t,r,Kr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qi(e,t,r,null,n)}}var Kr=null;function Eo(e,t,n,r){if(Kr=null,e=cl(r),e=jt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function Ja(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case dl:return 1;case $a:return 4;case Qr:case xd:return 16;case Ha:return 536870912;default:return 16}default:return 16}}var ut=null,hl=null,Lr=null;function eu(){if(Lr)return Lr;var e,t=hl,n=t.length,r,i="value"in ut?ut.value:ut.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function ds(){return!1}function Ee(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?br:ds,this.isPropagationStopped=ds,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Ee(yn),ur=q({},yn,{view:0,detail:0}),Ad=Ee(ur),Ri,Bi,In,gi=q({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(Ri=e.screenX-In.screenX,Bi=e.screenY-In.screenY):Bi=Ri=0,In=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),fs=Ee(gi),Ld=q({},gi,{dataTransfer:0}),Md=Ee(Ld),Fd=q({},ur,{relatedTarget:0}),Oi=Ee(Fd),Rd=q({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Ee(Rd),Od=q({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=Ee(Od),Vd=q({},yn,{data:0}),ps=Ee(Vd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hd[e])?!!t[e]:!1}function gl(){return Zd}var qd=q({},ur,{key:function(e){if(e.key){var t=Wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qd=Ee(qd),Xd=q({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ms=Ee(Xd),Gd=q({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),Kd=Ee(Gd),Yd=q({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Ee(Yd),ef=q({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=Ee(ef),nf=[9,13,27,32],yl=Xe&&"CompositionEvent"in window,Fn=null;Xe&&"documentMode"in document&&(Fn=document.documentMode);var rf=Xe&&"TextEvent"in window&&!Fn,tu=Xe&&(!yl||Fn&&8<Fn&&11>=Fn),hs=" ",vs=!1;function nu(e,t){switch(e){case"keyup":return nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function of(e,t){switch(e){case"compositionend":return ru(t);case"keypress":return t.which!==32?null:(vs=!0,hs);case"textInput":return e=t.data,e===hs&&vs?null:e;default:return null}}function lf(e,t){if(Zt)return e==="compositionend"||!yl&&nu(e,t)?(e=eu(),Lr=hl=ut=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tu&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function iu(e,t,n,r){La(r),t=Yr(t,"onChange"),0<t.length&&(n=new vl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Gn=null;function af(e){hu(e,0)}function yi(e){var t=Xt(e);if(Pa(t))return e}function uf(e,t){if(e==="change")return t}var ou=!1;if(Xe){var Ui;if(Xe){var Vi="oninput"in document;if(!Vi){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),Vi=typeof ys.oninput=="function"}Ui=Vi}else Ui=!1;ou=Ui&&(!document.documentMode||9<document.documentMode)}function ws(){Rn&&(Rn.detachEvent("onpropertychange",lu),Gn=Rn=null)}function lu(e){if(e.propertyName==="value"&&yi(Gn)){var t=[];iu(t,Gn,e,cl(e)),Ba(af,t)}}function cf(e,t,n){e==="focusin"?(ws(),Rn=t,Gn=n,Rn.attachEvent("onpropertychange",lu)):e==="focusout"&&ws()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(Gn)}function ff(e,t){if(e==="click")return yi(t)}function pf(e,t){if(e==="input"||e==="change")return yi(t)}function mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:mf;function Kn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oo.call(t,i)||!Fe(e[i],t[i]))return!1}return!0}function ks(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=ks(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ks(n)}}function su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function au(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=au(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&su(n.ownerDocument.documentElement,n)){if(r!==null&&wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xs(n,o);var l=xs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=Xe&&"documentMode"in document&&11>=document.documentMode,qt=null,Io=null,Bn=null,Co=!1;function bs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Co||qt==null||qt!==Hr(r)||(r=qt,"selectionStart"in r&&wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Kn(Bn,r)||(Bn=r,r=Yr(Io,"onSelect"),0<r.length&&(t=new vl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Wi={},uu={};Xe&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function wi(e){if(Wi[e])return Wi[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uu)return Wi[e]=t[n];return e}var cu=wi("animationend"),du=wi("animationiteration"),fu=wi("animationstart"),pu=wi("transitionend"),mu=new Map,Ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){mu.set(e,t),Bt(t,[e])}for(var $i=0;$i<Ss.length;$i++){var Hi=Ss[$i],gf=Hi.toLowerCase(),yf=Hi[0].toUpperCase()+Hi.slice(1);xt(gf,"on"+yf)}xt(cu,"onAnimationEnd");xt(du,"onAnimationIteration");xt(fu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(pu,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Es(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vd(r,t,void 0,e),e.currentTarget=null}function hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Es(i,s,c),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Es(i,s,c),o=a}}}if(qr)throw e=xo,qr=!1,xo=null,e}function V(e,t){var n=t[To];n===void 0&&(n=t[To]=new Set);var r=e+"__bubble";n.has(r)||(vu(t,e,2,!1),n.add(r))}function Zi(e,t,n){var r=0;t&&(r|=4),vu(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[Er]){e[Er]=!0,Sa.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Zi(n,!1,e),Zi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Zi("selectionchange",!1,t))}}function vu(e,t,n,r){switch(Ja(t)){case 1:var i=Dd;break;case 4:i=zd;break;default:i=ml}n=i.bind(null,t,n,e),i=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=jt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ba(function(){var c=o,m=cl(n),h=[];e:{var p=mu.get(e);if(p!==void 0){var w=vl,k=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":w=Qd;break;case"focusin":k="focus",w=Oi;break;case"focusout":k="blur",w=Oi;break;case"beforeblur":case"afterblur":w=Oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Kd;break;case cu:case du:case fu:w=Bd;break;case pu:w=Jd;break;case"scroll":w=Ad;break;case"wheel":w=tf;break;case"copy":case"cut":case"paste":w=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ms}var y=(t&4)!==0,N=!y&&e==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var u=c,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Zn(u,d),v!=null&&y.push(Jn(u,v,f)))),N)break;u=u.return}0<y.length&&(p=new w(p,k,null,n,m),h.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==yo&&(k=n.relatedTarget||n.fromElement)&&(jt(k)||k[Ge]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?jt(k):null,k!==null&&(N=Ot(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(y=fs,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=ms,v="onPointerLeave",d="onPointerEnter",u="pointer"),N=w==null?p:Xt(w),f=k==null?p:Xt(k),p=new y(v,u+"leave",w,n,m),p.target=N,p.relatedTarget=f,v=null,jt(m)===c&&(y=new y(d,u+"enter",k,n,m),y.target=f,y.relatedTarget=N,v=y),N=v,w&&k)t:{for(y=w,d=k,u=0,f=y;f;f=Wt(f))u++;for(f=0,v=d;v;v=Wt(v))f++;for(;0<u-f;)y=Wt(y),u--;for(;0<f-u;)d=Wt(d),f--;for(;u--;){if(y===d||d!==null&&y===d.alternate)break t;y=Wt(y),d=Wt(d)}y=null}else y=null;w!==null&&Is(h,p,w,y,!1),k!==null&&N!==null&&Is(h,N,k,y,!0)}}e:{if(p=c?Xt(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var x=uf;else if(gs(p))if(ou)x=pf;else{x=df;var E=cf}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=ff);if(x&&(x=x(e,c))){iu(h,x,n,m);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&po(p,"number",p.value)}switch(E=c?Xt(c):window,e){case"focusin":(gs(E)||E.contentEditable==="true")&&(qt=E,Io=c,Bn=null);break;case"focusout":Bn=Io=qt=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,bs(h,n,m);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":bs(h,n,m)}var I;if(yl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Zt?nu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(tu&&n.locale!=="ko"&&(Zt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Zt&&(I=eu()):(ut=m,hl="value"in ut?ut.value:ut.textContent,Zt=!0)),E=Yr(c,C),0<E.length&&(C=new ps(C,e,null,n,m),h.push({event:C,listeners:E}),I?C.data=I:(I=ru(n),I!==null&&(C.data=I)))),(I=rf?of(e,n):lf(e,n))&&(c=Yr(c,"onBeforeInput"),0<c.length&&(m=new ps("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=I))}hu(h,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zn(e,n),o!=null&&r.unshift(Jn(e,o,i)),o=Zn(e,t),o!=null&&r.push(Jn(e,o,i))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Zn(n,o),a!=null&&l.unshift(Jn(n,a,s))):i||(a=Zn(n,o),a!=null&&l.push(Jn(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var kf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function Cs(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(xf,"")}function Ir(e,t,n){if(t=Cs(t),Cs(e)!==t&&n)throw Error(g(425))}function Jr(){}var No=null,Po=null;function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,Ns=typeof Promise=="function"?Promise:void 0,Sf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ns<"u"?function(e){return Ns.resolve(null).then(e).catch(Ef)}:_o;function Ef(e){setTimeout(function(){throw e})}function Qi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+wn,er="__reactProps$"+wn,Ge="__reactContainer$"+wn,To="__reactEvents$"+wn,If="__reactListeners$"+wn,Cf="__reactHandles$"+wn;function jt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ps(e);e!==null;){if(n=e[Oe])return n;e=Ps(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Oe]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ki(e){return e[er]||null}var Do=[],Gt=-1;function bt(e){return{current:e}}function W(e){0>Gt||(e.current=Do[Gt],Do[Gt]=null,Gt--)}function B(e,t){Gt++,Do[Gt]=e.current,e.current=t}var kt={},ae=bt(kt),ve=bt(!1),At=kt;function dn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ei(){W(ve),W(ae)}function js(e,t,n){if(ae.current!==kt)throw Error(g(168));B(ae,t),B(ve,n)}function gu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(g(108,ud(e)||"Unknown",i));return q({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,At=ae.current,B(ae,e),B(ve,ve.current),!0}function _s(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=gu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(ae),B(ae,e)):W(ve),B(ve,n)}var He=null,xi=!1,Xi=!1;function yu(e){He===null?He=[e]:He.push(e)}function Nf(e){xi=!0,yu(e)}function St(){if(!Xi&&He!==null){Xi=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,xi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),Wa(dl,St),i}finally{R=t,Xi=!1}}return null}var Kt=[],Yt=0,ni=null,ri=0,Ie=[],Ce=0,Lt=null,Ze=1,qe="";function Nt(e,t){Kt[Yt++]=ri,Kt[Yt++]=ni,ni=e,ri=t}function wu(e,t,n){Ie[Ce++]=Ze,Ie[Ce++]=qe,Ie[Ce++]=Lt,Lt=e;var r=Ze;e=qe;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var o=32-Le(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ze=1<<32-Le(t)+i|n<<i|r,qe=o+e}else Ze=1<<o|n<<i|r,qe=e}function kl(e){e.return!==null&&(Nt(e,1),wu(e,1,0))}function xl(e){for(;e===ni;)ni=Kt[--Yt],Kt[Yt]=null,ri=Kt[--Yt],Kt[Yt]=null;for(;e===Lt;)Lt=Ie[--Ce],Ie[Ce]=null,qe=Ie[--Ce],Ie[Ce]=null,Ze=Ie[--Ce],Ie[Ce]=null}var xe=null,ke=null,$=!1,Ae=null;function ku(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ke=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ze,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ke=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ao(e){if($){var t=ke;if(t){var n=t;if(!Ts(e,t)){if(zo(e))throw Error(g(418));t=mt(n.nextSibling);var r=xe;t&&Ts(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,$=!1,xe=e)}}else{if(zo(e))throw Error(g(418));e.flags=e.flags&-4097|2,$=!1,xe=e}}}function Ds(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Cr(e){if(e!==xe)return!1;if(!$)return Ds(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jo(e.type,e.memoizedProps)),t&&(t=ke)){if(zo(e))throw xu(),Error(g(418));for(;t;)ku(e,t),t=mt(t.nextSibling)}if(Ds(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=xe?mt(e.stateNode.nextSibling):null;return!0}function xu(){for(var e=ke;e;)e=mt(e.nextSibling)}function fn(){ke=xe=null,$=!1}function bl(e){Ae===null?Ae=[e]:Ae.push(e)}var Pf=Je.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zs(e){var t=e._init;return t(e._payload)}function bu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=yt(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,v){return u===null||u.tag!==6?(u=no(f,d.mode,v),u.return=d,u):(u=i(u,f),u.return=d,u)}function a(d,u,f,v){var x=f.type;return x===Ht?m(d,u,f.props.children,v,f.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ot&&zs(x)===u.type)?(v=i(u,f.props),v.ref=Cn(d,u,f),v.return=d,v):(v=Wr(f.type,f.key,f.props,null,d.mode,v),v.ref=Cn(d,u,f),v.return=d,v)}function c(d,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ro(f,d.mode,v),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function m(d,u,f,v,x){return u===null||u.tag!==7?(u=zt(f,d.mode,v,x),u.return=d,u):(u=i(u,f),u.return=d,u)}function h(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=no(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case vr:return f=Wr(u.type,u.key,u.props,null,d.mode,f),f.ref=Cn(d,null,u),f.return=d,f;case $t:return u=ro(u,d.mode,f),u.return=d,u;case ot:var v=u._init;return h(d,v(u._payload),f)}if(Dn(u)||xn(u))return u=zt(u,d.mode,f,null),u.return=d,u;Nr(d,u)}return null}function p(d,u,f,v){var x=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:s(d,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===x?a(d,u,f,v):null;case $t:return f.key===x?c(d,u,f,v):null;case ot:return x=f._init,p(d,u,x(f._payload),v)}if(Dn(f)||xn(f))return x!==null?null:m(d,u,f,v,null);Nr(d,f)}return null}function w(d,u,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,s(u,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vr:return d=d.get(v.key===null?f:v.key)||null,a(u,d,v,x);case $t:return d=d.get(v.key===null?f:v.key)||null,c(u,d,v,x);case ot:var E=v._init;return w(d,u,f,E(v._payload),x)}if(Dn(v)||xn(v))return d=d.get(f)||null,m(u,d,v,x,null);Nr(u,v)}return null}function k(d,u,f,v){for(var x=null,E=null,I=u,C=u=0,O=null;I!==null&&C<f.length;C++){I.index>C?(O=I,I=null):O=I.sibling;var T=p(d,I,f[C],v);if(T===null){I===null&&(I=O);break}e&&I&&T.alternate===null&&t(d,I),u=o(T,u,C),E===null?x=T:E.sibling=T,E=T,I=O}if(C===f.length)return n(d,I),$&&Nt(d,C),x;if(I===null){for(;C<f.length;C++)I=h(d,f[C],v),I!==null&&(u=o(I,u,C),E===null?x=I:E.sibling=I,E=I);return $&&Nt(d,C),x}for(I=r(d,I);C<f.length;C++)O=w(I,d,C,f[C],v),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?C:O.key),u=o(O,u,C),E===null?x=O:E.sibling=O,E=O);return e&&I.forEach(function(ue){return t(d,ue)}),$&&Nt(d,C),x}function y(d,u,f,v){var x=xn(f);if(typeof x!="function")throw Error(g(150));if(f=x.call(f),f==null)throw Error(g(151));for(var E=x=null,I=u,C=u=0,O=null,T=f.next();I!==null&&!T.done;C++,T=f.next()){I.index>C?(O=I,I=null):O=I.sibling;var ue=p(d,I,T.value,v);if(ue===null){I===null&&(I=O);break}e&&I&&ue.alternate===null&&t(d,I),u=o(ue,u,C),E===null?x=ue:E.sibling=ue,E=ue,I=O}if(T.done)return n(d,I),$&&Nt(d,C),x;if(I===null){for(;!T.done;C++,T=f.next())T=h(d,T.value,v),T!==null&&(u=o(T,u,C),E===null?x=T:E.sibling=T,E=T);return $&&Nt(d,C),x}for(I=r(d,I);!T.done;C++,T=f.next())T=w(I,d,C,T.value,v),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?C:T.key),u=o(T,u,C),E===null?x=T:E.sibling=T,E=T);return e&&I.forEach(function(L){return t(d,L)}),$&&Nt(d,C),x}function N(d,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Ht&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var x=f.key,E=u;E!==null;){if(E.key===x){if(x=f.type,x===Ht){if(E.tag===7){n(d,E.sibling),u=i(E,f.props.children),u.return=d,d=u;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ot&&zs(x)===E.type){n(d,E.sibling),u=i(E,f.props),u.ref=Cn(d,E,f),u.return=d,d=u;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===Ht?(u=zt(f.props.children,d.mode,v,f.key),u.return=d,d=u):(v=Wr(f.type,f.key,f.props,null,d.mode,v),v.ref=Cn(d,u,f),v.return=d,d=v)}return l(d);case $t:e:{for(E=f.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ro(f,d.mode,v),u.return=d,d=u}return l(d);case ot:return E=f._init,N(d,u,E(f._payload),v)}if(Dn(f))return k(d,u,f,v);if(xn(f))return y(d,u,f,v);Nr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=no(f,d.mode,v),u.return=d,d=u),l(d)):n(d,u)}return N}var pn=bu(!0),Su=bu(!1),ii=bt(null),oi=null,Jt=null,Sl=null;function El(){Sl=Jt=oi=null}function Il(e){var t=ii.current;W(ii),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){oi=e,Sl=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(Sl!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(oi===null)throw Error(g(308));Jt=e,oi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var _t=null;function Cl(e){_t===null?_t=[e]:_t.push(e)}function Eu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ke(e,n)}return i=r.interleaved,i===null?(t.next=t,Cl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ke(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}function As(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var i=e.updateQueue;lt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,m=c=a=null,s=o;do{var p=s.lane,w=s.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(p=t,w=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){h=k.call(w,h,p);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,p=typeof k=="function"?k.call(w,h,p):k,p==null)break e;h=q({},h,p);break e;case 2:lt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,a=h):m=m.next=w,l|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ft|=l,e.lanes=l,e.memoizedState=h}}function Ls(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(g(191,i));i.call(r)}}}var dr={},Ve=bt(dr),tr=bt(dr),nr=bt(dr);function Tt(e){if(e===dr)throw Error(g(174));return e}function Pl(e,t){switch(B(nr,t),B(tr,e),B(Ve,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ho(t,e)}W(Ve),B(Ve,t)}function mn(){W(Ve),W(tr),W(nr)}function Cu(e){Tt(nr.current);var t=Tt(Ve.current),n=ho(t,e.type);t!==n&&(B(tr,e),B(Ve,n))}function jl(e){tr.current===e&&(W(Ve),W(tr))}var H=bt(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function _l(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var Rr=Je.ReactCurrentDispatcher,Ki=Je.ReactCurrentBatchConfig,Mt=0,Z=null,K=null,ee=null,ai=!1,On=!1,rr=0,jf=0;function oe(){throw Error(g(321))}function Tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,i,o){if(Mt=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?zf:Af,e=n(r,i),On){o=0;do{if(On=!1,rr=0,25<=o)throw Error(g(301));o+=1,ee=K=null,t.updateQueue=null,Rr.current=Lf,e=n(r,i)}while(On)}if(Rr.current=ui,t=K!==null&&K.next!==null,Mt=0,ee=K=Z=null,ai=!1,t)throw Error(g(300));return e}function zl(){var e=rr!==0;return rr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Z.memoizedState=ee=e:ee=ee.next=e,ee}function _e(){if(K===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?Z.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(g(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?Z.memoizedState=ee=e:ee=ee.next=e}return ee}function ir(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=_e(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,c=o;do{var m=c.lane;if((Mt&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,Z.lanes|=m,Ft|=m}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=s,Fe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Ft|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=_e(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Fe(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nu(){}function Pu(e,t){var n=Z,r=_e(),i=t(),o=!Fe(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Al(Tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,or(9,_u.bind(null,n,r,i,t),void 0,null),te===null)throw Error(g(349));Mt&30||ju(n,t,i)}return i}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _u(e,t,n,r){t.value=n,t.getSnapshot=r,Du(t)&&zu(e)}function Tu(e,t,n){return n(function(){Du(t)&&zu(e)})}function Du(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function zu(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function Ms(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Df.bind(null,Z,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Au(){return _e().memoizedState}function Br(e,t,n,r){var i=Be();Z.flags|=e,i.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function bi(e,t,n,r){var i=_e();r=r===void 0?null:r;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,r!==null&&Tl(r,l.deps)){i.memoizedState=or(t,n,o,r);return}}Z.flags|=e,i.memoizedState=or(1|t,n,o,r)}function Fs(e,t){return Br(8390656,8,e,t)}function Al(e,t){return bi(2048,8,e,t)}function Lu(e,t){return bi(4,2,e,t)}function Mu(e,t){return bi(4,4,e,t)}function Fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,n){return n=n!=null?n.concat([e]):null,bi(4,4,Fu.bind(null,t,e),n)}function Ll(){}function Bu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ou(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uu(e,t,n){return Mt&21?(Fe(n,t)||(n=Za(),Z.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function _f(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ki.transition;Ki.transition={};try{e(!1),t()}finally{R=n,Ki.transition=r}}function Vu(){return _e().memoizedState}function Tf(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wu(e))$u(t,n);else if(n=Eu(e,t,n,r),n!==null){var i=de();Me(n,e,r,i),Hu(n,t,r)}}function Df(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wu(e))$u(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Fe(s,l)){var a=t.interleaved;a===null?(i.next=i,Cl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Eu(e,t,i,r),n!==null&&(i=de(),Me(n,e,r,i),Hu(n,t,r))}}function Wu(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function $u(e,t){On=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}var ui={readContext:je,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},zf={readContext:je,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Fs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Fu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tf.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Ms,useDebugValue:Ll,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Ms(!1),t=e[0];return e=_f.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=Be();if($){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),te===null)throw Error(g(349));Mt&30||ju(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fs(Tu.bind(null,r,o,e),[e]),r.flags|=2048,or(9,_u.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if($){var n=qe,r=Ze;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Af={readContext:je,useCallback:Bu,useContext:je,useEffect:Al,useImperativeHandle:Ru,useInsertionEffect:Lu,useLayoutEffect:Mu,useMemo:Ou,useReducer:Yi,useRef:Au,useState:function(){return Yi(ir)},useDebugValue:Ll,useDeferredValue:function(e){var t=_e();return Uu(t,K.memoizedState,e)},useTransition:function(){var e=Yi(ir)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Pu,useId:Vu,unstable_isNewReconciler:!1},Lf={readContext:je,useCallback:Bu,useContext:je,useEffect:Al,useImperativeHandle:Ru,useInsertionEffect:Lu,useLayoutEffect:Mu,useMemo:Ou,useReducer:Ji,useRef:Au,useState:function(){return Ji(ir)},useDebugValue:Ll,useDeferredValue:function(e){var t=_e();return K===null?t.memoizedState=e:Uu(t,K.memoizedState,e)},useTransition:function(){var e=Ji(ir)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Pu,useId:Vu,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=gt(e),o=Qe(r,i);o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(Me(t,e,i,r),Fr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=gt(e),o=Qe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(Me(t,e,i,r),Fr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=gt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(Me(t,e,r,n),Fr(t,e,r))}};function Rs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,o):!0}function Zu(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=je(o):(i=ge(t)?At:ae.current,r=t.contextTypes,o=(r=r!=null)?dn(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Fo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=je(o):(o=ge(t)?At:ae.current,i.context=dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),li(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=ad(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function qu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,Qo=r),Ro(e,t)},n}function Qu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ro(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ro(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gf.bind(null,e,t,n),t.then(e,e))}function Us(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Ff=Je.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?Su(t,null,n,r):pn(t,e.child,n,r)}function Ws(e,t,n,r,i){n=n.render;var o=t.ref;return sn(t,i),r=Dl(e,t,n,r,o,i),n=zl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):($&&n&&kl(t),t.flags|=1,ce(e,t,r,i),t.child)}function $s(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Wl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xu(e,t,o,r,i)):(e=Wr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(l,r)&&e.ref===t.ref)return Ye(e,t,i)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ye(e,t,i)}return Bo(e,t,n,r,i)}function Gu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(tn,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(tn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(tn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(tn,we),we|=r;return ce(e,t,i,n),t.child}function Ku(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bo(e,t,n,r,i){var o=ge(n)?At:ae.current;return o=dn(t,o),sn(t,i),n=Dl(e,t,n,r,o,i),r=zl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):($&&r&&kl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Hs(e,t,n,r,i){if(ge(n)){var o=!0;ti(t)}else o=!1;if(sn(t,i),t.stateNode===null)Or(e,t),Zu(t,n,r),Fo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=je(c):(c=ge(n)?At:ae.current,c=dn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Bs(t,l,r,c),lt=!1;var p=t.memoizedState;l.state=p,li(t,r,l,i),a=t.memoizedState,s!==r||p!==a||ve.current||lt?(typeof m=="function"&&(Mo(t,n,m,r),a=t.memoizedState),(s=lt||Rs(t,n,s,r,p,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Iu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:De(t.type,s),l.props=c,h=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=je(a):(a=ge(n)?At:ae.current,a=dn(t,a));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||p!==a)&&Bs(t,l,r,a),lt=!1,p=t.memoizedState,l.state=p,li(t,r,l,i);var k=t.memoizedState;s!==h||p!==k||ve.current||lt?(typeof w=="function"&&(Mo(t,n,w,r),k=t.memoizedState),(c=lt||Rs(t,n,c,r,p,k,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Oo(e,t,n,r,o,i)}function Oo(e,t,n,r,i,o){Ku(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&_s(t,n,!1),Ye(e,t,o);r=t.stateNode,Ff.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=pn(t,e.child,null,o),t.child=pn(t,null,s,o)):ce(e,t,s,o),t.memoizedState=r.state,i&&_s(t,n,!0),t.child}function Yu(e){var t=e.stateNode;t.pendingContext?js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&js(e,t.context,!1),Pl(e,t.containerInfo)}function Zs(e,t,n,r,i){return fn(),bl(i),t.flags|=256,ce(e,t,n,r),t.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ju(e,t,n){var r=t.pendingProps,i=H.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(H,i&1),e===null)return Ao(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ci(l,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Uo,e):Ml(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Rf(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=yt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=yt(s,o):(o=zt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Vo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Uo,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ml(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&bl(r),pn(t,e.child,null,n),e=Ml(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(g(422))),Pr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ci({mode:"visible",children:r.children},i,0,null),o=zt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pn(t,e.child,null,l),t.child.memoizedState=Vo(l),t.memoizedState=Uo,o);if(!(t.mode&1))return Pr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(g(419)),r=eo(o,r,void 0),Pr(e,t,l,r)}if(s=(l&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(e,i),Me(r,e,i,-1))}return Vl(),r=eo(Error(g(421))),Pr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ke=mt(i.nextSibling),xe=t,$=!0,Ae=null,e!==null&&(Ie[Ce++]=Ze,Ie[Ce++]=qe,Ie[Ce++]=Lt,Ze=e.id,qe=e.overflow,Lt=t),t=Ml(t,r.children),t.flags|=4096,t)}function qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lo(e.return,t,n)}function to(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qs(e,n,t);else if(e.tag===19)qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:Yu(t),fn();break;case 5:Cu(t);break;case 1:ge(t.type)&&ti(t);break;case 4:Pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(ii,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Ju(e,t,n):(B(H,H.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Gu(e,t,n)}return Ye(e,t,n)}var tc,Wo,nc,rc;tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};nc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tt(Ve.current);var o=null;switch(n){case"input":i=co(e,i),r=co(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=mo(e,i),r=mo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}vo(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($n.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($n.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Of(e,t,n){var r=t.pendingProps;switch(xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&ei(),le(t),null;case 3:return r=t.stateNode,mn(),W(ve),W(ae),_l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Ko(Ae),Ae=null))),Wo(e,t),le(t),null;case 5:jl(t);var i=Tt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)nc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return le(t),null}if(e=Tt(Ve.current),Cr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Oe]=t,r[er]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<An.length;i++)V(An[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ns(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":is(r,o),V("invalid",r)}vo(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,s,e),i=["children",""+s]):$n.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":gr(r),rs(r,o,!0);break;case"textarea":gr(r),os(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ta(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Oe]=t,e[er]=r,tc(e,t,!1,!1),t.stateNode=e;e:{switch(l=go(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<An.length;i++)V(An[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":ns(e,r),i=co(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),V("invalid",e);break;case"textarea":is(e,r),i=mo(e,r),V("invalid",e);break;default:i=r}vo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Aa(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Da(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hn(e,a):typeof a=="number"&&Hn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($n.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&ll(e,o,a,l))}switch(n){case"input":gr(e),rs(e,r,!1);break;case"textarea":gr(e),os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Tt(nr.current),Tt(Ve.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return le(t),null;case 13:if(W(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ke!==null&&t.mode&1&&!(t.flags&128))xu(),fn(),t.flags|=98560,o=!1;else if(o=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Oe]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Ae!==null&&(Ko(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Y===0&&(Y=3):Vl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return mn(),Wo(e,t),e===null&&Yn(t.stateNode.containerInfo),le(t),null;case 10:return Il(t.type._context),le(t),null;case 17:return ge(t.type)&&ei(),le(t),null;case 19:if(W(H),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Nn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=si(e),l!==null){for(t.flags|=128,Nn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>vn&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304)}else{if(!r)if(e=si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return le(t),null}else 2*X()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=H.current,B(H,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ul(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function Uf(e,t){switch(xl(t),t.tag){case 1:return ge(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),W(ve),W(ae),_l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(W(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(H),null;case 4:return mn(),null;case 10:return Il(t.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var jr=!1,se=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,S=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function $o(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qs=!1;function Wf(e,t){if(No=Gr,e=au(),wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++c===i&&(s=l),p===o&&++m===r&&(a=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Po={focusedElem:e,selectionRange:n},Gr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,N=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:De(t.type,y),N);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Qs,Qs=!1,k}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$o(t,n,o)}i=i.next}while(i!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ic(e){var t=e.alternate;t!==null&&(e.alternate=null,ic(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[er],delete t[To],delete t[If],delete t[Cf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oc(e){return e.tag===5||e.tag===3||e.tag===4}function Xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Zo(e,t,n),e=e.sibling;e!==null;)Zo(e,t,n),e=e.sibling}function qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qo(e,t,n),e=e.sibling;e!==null;)qo(e,t,n),e=e.sibling}var ne=null,ze=!1;function nt(e,t,n){for(n=n.child;n!==null;)lc(e,t,n),n=n.sibling}function lc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:se||en(n,t);case 6:var r=ne,i=ze;ne=null,nt(e,t,n),ne=r,ze=i,ne!==null&&(ze?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(ze?(e=ne,n=n.stateNode,e.nodeType===8?Qi(e.parentNode,n):e.nodeType===1&&Qi(e,n),Xn(e)):Qi(ne,n.stateNode));break;case 4:r=ne,i=ze,ne=n.stateNode.containerInfo,ze=!0,nt(e,t,n),ne=r,ze=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&$o(n,t,l),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!se&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,nt(e,t,n),se=r):nt(e,t,n);break;default:nt(e,t,n)}}function Gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var i=Yf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,ze=!1;break e;case 3:ne=s.stateNode.containerInfo,ze=!0;break e;case 4:ne=s.stateNode.containerInfo,ze=!0;break e}s=s.return}if(ne===null)throw Error(g(160));lc(o,l,i),ne=null,ze=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){Q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sc(t,e),t=t.sibling}function sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Re(e),r&4){try{Un(3,e,e.return),Ei(3,e)}catch(y){Q(e,e.return,y)}try{Un(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Te(t,e),Re(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Te(t,e),Re(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(y){Q(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ja(i,o),go(s,l);var c=go(s,o);for(l=0;l<a.length;l+=2){var m=a[l],h=a[l+1];m==="style"?Aa(i,h):m==="dangerouslySetInnerHTML"?Da(i,h):m==="children"?Hn(i,h):ll(i,m,h,c)}switch(s){case"input":fo(i,o);break;case"textarea":_a(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?nn(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?nn(i,!!o.multiple,o.defaultValue,!0):nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[er]=o}catch(y){Q(e,e.return,y)}}break;case 6:if(Te(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(g(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Q(e,e.return,y)}}break;case 3:if(Te(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Te(t,e),Re(e);break;case 13:Te(t,e),Re(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bl=X())),r&4&&Gs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||m,Te(t,e),se=c):Te(t,e),Re(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(h=S=m;S!==null;){switch(p=S,w=p.child,p.tag){case 0:case 11:case 14:case 15:Un(4,p,p.return);break;case 1:en(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){Q(r,n,y)}}break;case 5:en(p,p.return);break;case 22:if(p.memoizedState!==null){Ys(h);continue}}w!==null?(w.return=p,S=w):Ys(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=za("display",l))}catch(y){Q(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Q(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Te(t,e),Re(e),r&4&&Gs(e);break;case 21:break;default:Te(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oc(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var o=Xs(e);qo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Xs(e);Zo(e,s,l);break;default:throw Error(g(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e,t,n){S=e,ac(e)}function ac(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||jr;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||se;s=jr;var c=se;if(jr=l,(se=a)&&!c)for(S=i;S!==null;)l=S,a=l.child,l.tag===22&&l.memoizedState!==null?Js(i):a!==null?(a.return=l,S=a):Js(i);for(;o!==null;)S=o,ac(o),o=o.sibling;S=i,jr=s,se=c}Ks(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,S=o):Ks(e)}}function Ks(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ls(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ls(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Xn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}se||t.flags&512&&Ho(t)}catch(p){Q(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ys(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Js(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Q(t,i,a)}}var o=t.return;try{Ho(t)}catch(a){Q(t,o,a)}break;case 5:var l=t.return;try{Ho(t)}catch(a){Q(t,l,a)}}}catch(a){Q(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Hf=Math.ceil,ci=Je.ReactCurrentDispatcher,Fl=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,z=0,te=null,G=null,re=0,we=0,tn=bt(0),Y=0,lr=null,Ft=0,Ii=0,Rl=0,Vn=null,me=null,Bl=0,vn=1/0,$e=null,di=!1,Qo=null,vt=null,_r=!1,ct=null,fi=0,Wn=0,Xo=null,Ur=-1,Vr=0;function de(){return z&6?X():Ur!==-1?Ur:Ur=X()}function gt(e){return e.mode&1?z&2&&re!==0?re&-re:Pf.transition!==null?(Vr===0&&(Vr=Za()),Vr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ja(e.type)),e):1}function Me(e,t,n,r){if(50<Wn)throw Wn=0,Xo=null,Error(g(185));ar(e,n,r),(!(z&2)||e!==te)&&(e===te&&(!(z&2)&&(Ii|=n),Y===4&&at(e,re)),ye(e,r),n===1&&z===0&&!(t.mode&1)&&(vn=X()+500,xi&&St()))}function ye(e,t){var n=e.callbackNode;Nd(e,t);var r=Xr(e,e===te?re:0);if(r===0)n!==null&&as(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&as(n),t===1)e.tag===0?Nf(ea.bind(null,e)):yu(ea.bind(null,e)),Sf(function(){!(z&6)&&St()}),n=null;else{switch(qa(r)){case 1:n=dl;break;case 4:n=$a;break;case 16:n=Qr;break;case 536870912:n=Ha;break;default:n=Qr}n=vc(n,uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uc(e,t){if(Ur=-1,Vr=0,z&6)throw Error(g(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Xr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pi(e,r);else{t=r;var i=z;z|=2;var o=dc();(te!==e||re!==t)&&($e=null,vn=X()+500,Dt(e,t));do try{Qf();break}catch(s){cc(e,s)}while(!0);El(),ci.current=o,z=i,G!==null?t=0:(te=null,re=0,t=Y)}if(t!==0){if(t===2&&(i=bo(e),i!==0&&(r=i,t=Go(e,i))),t===1)throw n=lr,Dt(e,0),at(e,r),ye(e,X()),n;if(t===6)at(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zf(i)&&(t=pi(e,r),t===2&&(o=bo(e),o!==0&&(r=o,t=Go(e,o))),t===1))throw n=lr,Dt(e,0),at(e,r),ye(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:Pt(e,me,$e);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Bl+500-X(),10<t)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_o(Pt.bind(null,e,me,$e),t);break}Pt(e,me,$e);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Le(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hf(r/1960))-r,10<r){e.timeoutHandle=_o(Pt.bind(null,e,me,$e),r);break}Pt(e,me,$e);break;case 5:Pt(e,me,$e);break;default:throw Error(g(329))}}}return ye(e,X()),e.callbackNode===n?uc.bind(null,e):null}function Go(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=pi(e,t),e!==2&&(t=me,me=n,t!==null&&Ko(t)),e}function Ko(e){me===null?me=e:me.push.apply(me,e)}function Zf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Rl,t&=~Ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function ea(e){if(z&6)throw Error(g(327));an();var t=Xr(e,0);if(!(t&1))return ye(e,X()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=bo(e);r!==0&&(t=r,n=Go(e,r))}if(n===1)throw n=lr,Dt(e,0),at(e,t),ye(e,X()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,me,$e),ye(e,X()),null}function Ol(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(vn=X()+500,xi&&St())}}function Rt(e){ct!==null&&ct.tag===0&&!(z&6)&&an();var t=z;z|=1;var n=Pe.transition,r=R;try{if(Pe.transition=null,R=1,e)return e()}finally{R=r,Pe.transition=n,z=t,!(z&6)&&St()}}function Ul(){we=tn.current,W(tn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:mn(),W(ve),W(ae),_l();break;case 5:jl(r);break;case 4:mn();break;case 13:W(H);break;case 19:W(H);break;case 10:Il(r.type._context);break;case 22:case 23:Ul()}n=n.return}if(te=e,G=e=yt(e.current,null),re=we=t,Y=0,lr=null,Rl=Ii=Ft=0,me=Vn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}_t=null}return e}function cc(e,t){do{var n=G;try{if(El(),Rr.current=ui,ai){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(Mt=0,ee=K=Z=null,On=!1,rr=0,Fl.current=null,n===null||n.return===null){Y=1,lr=t,G=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=re,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Us(l);if(w!==null){w.flags&=-257,Vs(w,l,s,o,t),w.mode&1&&Os(o,c,t),t=w,a=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(a),t.updateQueue=y}else k.add(a);break e}else{if(!(t&1)){Os(o,c,t),Vl();break e}a=Error(g(426))}}else if($&&s.mode&1){var N=Us(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Vs(N,l,s,o,t),bl(hn(a,s));break e}}o=a=hn(a,s),Y!==4&&(Y=2),Vn===null?Vn=[o]:Vn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=qu(o,a,t);As(o,d);break e;case 1:s=a;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vt===null||!vt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Qu(o,s,t);As(o,v);break e}}o=o.return}while(o!==null)}pc(n)}catch(x){t=x,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function dc(){var e=ci.current;return ci.current=ui,e===null?ui:e}function Vl(){(Y===0||Y===3||Y===2)&&(Y=4),te===null||!(Ft&268435455)&&!(Ii&268435455)||at(te,re)}function pi(e,t){var n=z;z|=2;var r=dc();(te!==e||re!==t)&&($e=null,Dt(e,t));do try{qf();break}catch(i){cc(e,i)}while(!0);if(El(),z=n,ci.current=r,G!==null)throw Error(g(261));return te=null,re=0,Y}function qf(){for(;G!==null;)fc(G)}function Qf(){for(;G!==null&&!yd();)fc(G)}function fc(e){var t=hc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?pc(e):G=t,Fl.current=null}function pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,G=null;return}}else if(n=Of(n,t,we),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Y===0&&(Y=5)}function Pt(e,t,n){var r=R,i=Pe.transition;try{Pe.transition=null,R=1,Xf(e,t,n,r)}finally{Pe.transition=i,R=r}return null}function Xf(e,t,n,r){do an();while(ct!==null);if(z&6)throw Error(g(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pd(e,o),e===te&&(G=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,vc(Qr,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var l=R;R=1;var s=z;z|=4,Fl.current=null,Wf(e,n),sc(n,e),hf(Po),Gr=!!No,Po=No=null,e.current=n,$f(n),wd(),z=s,R=l,Pe.transition=o}else e.current=n;if(_r&&(_r=!1,ct=e,fi=i),o=e.pendingLanes,o===0&&(vt=null),bd(n.stateNode),ye(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(di)throw di=!1,e=Qo,Qo=null,e;return fi&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===Xo?Wn++:(Wn=0,Xo=e):Wn=0,St(),null}function an(){if(ct!==null){var e=qa(fi),t=Pe.transition,n=R;try{if(Pe.transition=null,R=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,fi=0,z&6)throw Error(g(331));var i=z;for(z|=4,S=e.current;S!==null;){var o=S,l=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(S=c;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:Un(8,m,o)}var h=m.child;if(h!==null)h.return=m,S=h;else for(;S!==null;){m=S;var p=m.sibling,w=m.return;if(ic(m),m===c){S=null;break}if(p!==null){p.return=w,S=p;break}S=w}}}var k=o.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}S=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,S=l;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){l=S;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,S=f;else e:for(l=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ei(9,s)}}catch(x){Q(s,s.return,x)}if(s===l){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(z=i,St(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{R=n,Pe.transition=t}}return!1}function ta(e,t,n){t=hn(n,t),t=qu(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(ar(e,1,t),ye(e,t))}function Q(e,t,n){if(e.tag===3)ta(e,e,n);else for(;t!==null;){if(t.tag===3){ta(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=hn(n,e),e=Qu(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(ar(t,1,e),ye(t,e));break}}t=t.return}}function Gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Y===4||Y===3&&(re&130023424)===re&&500>X()-Bl?Dt(e,0):Rl|=n),ye(e,t)}function mc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=de();e=Ke(e,t),e!==null&&(ar(e,t,n),ye(e,n))}function Kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mc(e,n)}function Yf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),mc(e,n)}var hc;hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Bf(e,t,n);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&wu(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var i=dn(t,ae.current);sn(t,n),i=Dl(null,t,r,e,i,n);var o=zl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,ti(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nl(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,Fo(t,r,e,n),t=Oo(null,t,r,!0,o,n)):(t.tag=0,$&&o&&kl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ep(r),e=De(r,e),i){case 0:t=Bo(null,t,r,e,n);break e;case 1:t=Hs(null,t,r,e,n);break e;case 11:t=Ws(null,t,r,e,n);break e;case 14:t=$s(null,t,r,De(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Bo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Hs(e,t,r,i,n);case 3:e:{if(Yu(t),e===null)throw Error(g(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Iu(e,t),li(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=hn(Error(g(423)),t),t=Zs(e,t,r,n,i);break e}else if(r!==i){i=hn(Error(g(424)),t),t=Zs(e,t,r,n,i);break e}else for(ke=mt(t.stateNode.containerInfo.firstChild),xe=t,$=!0,Ae=null,n=Su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===i){t=Ye(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Cu(t),e===null&&Ao(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,jo(r,i)?l=null:o!==null&&jo(r,o)&&(t.flags|=32),Ku(e,t),ce(e,t,l,n),t.child;case 6:return e===null&&Ao(t),null;case 13:return Ju(e,t,n);case 4:return Pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ws(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(ii,r._currentValue),r._currentValue=l,o!==null)if(Fe(o.value,l)){if(o.children===i.children&&!ve.current){t=Ye(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Qe(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lo(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(g(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Lo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sn(t,n),i=je(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),$s(e,t,r,i,n);case 15:return Xu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Or(e,t),t.tag=1,ge(r)?(e=!0,ti(t)):e=!1,sn(t,n),Zu(t,r,i),Fo(t,r,i,n),Oo(null,t,r,!0,e,n);case 19:return ec(e,t,n);case 22:return Gu(e,t,n)}throw Error(g(156,t.tag))};function vc(e,t){return Wa(e,t)}function Jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Jf(e,t,n,r)}function Wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ep(e){if(typeof e=="function")return Wl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===al)return 11;if(e===ul)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Wl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ht:return zt(n.children,i,o,t);case sl:l=8,i|=8;break;case lo:return e=Ne(12,n,t,i|2),e.elementType=lo,e.lanes=o,e;case so:return e=Ne(13,n,t,i),e.elementType=so,e.lanes=o,e;case ao:return e=Ne(19,n,t,i),e.elementType=ao,e.lanes=o,e;case Ca:return Ci(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ea:l=10;break e;case Ia:l=9;break e;case al:l=11;break e;case ul:l=14;break e;case ot:l=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Ne(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Ca,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $l(e,t,n,r,i,o,l,s,a){return e=new tp(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(o),e}function np(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gc(e){if(!e)return kt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(ge(n))return gu(e,n,t)}return t}function yc(e,t,n,r,i,o,l,s,a){return e=$l(n,r,!0,e,i,o,l,s,a),e.context=gc(null),n=e.current,r=de(),i=gt(n),o=Qe(r,i),o.callback=t??null,ht(n,o,i),e.current.lanes=i,ar(e,i,r),ye(e,r),e}function Ni(e,t,n,r){var i=t.current,o=de(),l=gt(i);return n=gc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,l),e!==null&&(Me(e,i,l,o),Fr(e,i,l)),l}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function na(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hl(e,t){na(e,t),(e=e.alternate)&&na(e,t)}function rp(){return null}var wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}Pi.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));Ni(e,t,null,null)};Pi.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){Ni(null,e,null,null)}),t[Ge]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ga();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&Ya(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ra(){}function ip(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=mi(l);o.call(c)}}var l=yc(t,r,e,0,null,!1,!1,"",ra);return e._reactRootContainer=l,e[Ge]=l.current,Yn(e.nodeType===8?e.parentNode:e),Rt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=mi(a);s.call(c)}}var a=$l(e,0,!1,null,null,!1,!1,"",ra);return e._reactRootContainer=a,e[Ge]=a.current,Yn(e.nodeType===8?e.parentNode:e),Rt(function(){Ni(t,a,n,r)}),a}function _i(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=mi(l);s.call(a)}}Ni(t,l,e,i)}else l=ip(n,t,e,i,r);return mi(l)}Qa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(fl(t,n|1),ye(t,X()),!(z&6)&&(vn=X()+500,St()))}break;case 13:Rt(function(){var r=Ke(e,1);if(r!==null){var i=de();Me(r,e,1,i)}}),Hl(e,1)}};pl=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=de();Me(t,e,134217728,n)}Hl(e,134217728)}};Xa=function(e){if(e.tag===13){var t=gt(e),n=Ke(e,t);if(n!==null){var r=de();Me(n,e,t,r)}Hl(e,t)}};Ga=function(){return R};Ka=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};wo=function(e,t,n){switch(t){case"input":if(fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(g(90));Pa(r),fo(r,i)}}}break;case"textarea":_a(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Fa=Ol;Ra=Rt;var op={usingClientEntryPoint:!1,Events:[cr,Xt,ki,La,Ma,Ol]},Pn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lp={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ua(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{vi=Tr.inject(lp),Ue=Tr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(g(200));return np(e,t,null,n)};Se.createRoot=function(e,t){if(!ql(e))throw Error(g(299));var n=!1,r="",i=wc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$l(e,1,!1,null,null,n,!1,r,i),e[Ge]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Zl(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ua(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Rt(e)};Se.hydrate=function(e,t,n){if(!ji(t))throw Error(g(200));return _i(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ql(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=wc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yc(t,null,e,1,n??null,i,!1,o,l),e[Ge]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pi(t)};Se.render=function(e,t,n){if(!ji(t))throw Error(g(200));return _i(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!ji(e))throw Error(g(40));return e._reactRootContainer?(Rt(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};Se.unstable_batchedUpdates=Ol;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return _i(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ka.exports=Se;var sp=ka.exports,xc,ia=sp;xc=ia.createRoot,ia.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=F.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...s},a)=>F.createElement("svg",{ref:a,...up,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bc("lucide",i),...s},[...l.map(([c,m])=>F.createElement(c,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=(e,t)=>{const n=F.forwardRef(({className:r,...i},o)=>F.createElement(cp,{ref:o,iconNode:t,className:bc(`lucide-${ap(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Ql("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Ql("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Ql("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);function mp(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function hp(...e){return t=>e.forEach(n=>mp(n,t))}var Sc=F.forwardRef((e,t)=>{const{children:n,...r}=e,i=F.Children.toArray(n),o=i.find(gp);if(o){const l=o.props.children,s=i.map(a=>a===o?F.Children.count(l)>1?F.Children.only(null):F.isValidElement(l)?l.props.children:null:a);return M.jsx(Yo,{...r,ref:t,children:F.isValidElement(l)?F.cloneElement(l,void 0,s):null})}return M.jsx(Yo,{...r,ref:t,children:n})});Sc.displayName="Slot";var Yo=F.forwardRef((e,t)=>{const{children:n,...r}=e;if(F.isValidElement(n)){const i=wp(n);return F.cloneElement(n,{...yp(r,n.props),ref:t?hp(t,i):i})}return F.Children.count(n)>1?F.Children.only(null):null});Yo.displayName="SlotClone";var vp=({children:e})=>M.jsx(M.Fragment,{children:e});function gp(e){return F.isValidElement(e)&&e.type===vp}function yp(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function wp(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ec(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ec(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function kp(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ec(e))&&(r&&(r+=" "),r+=t);return r}const oa=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,la=kp,xp=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return la(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,l=Object.keys(i).map(c=>{const m=n==null?void 0:n[c],h=o==null?void 0:o[c];if(m===null)return null;const p=oa(m)||oa(h);return i[c][p]}),s=n&&Object.entries(n).reduce((c,m)=>{let[h,p]=m;return p===void 0||(c[h]=p),c},{}),a=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,m)=>{let{class:h,className:p,...w}=m;return Object.entries(w).every(k=>{let[y,N]=k;return Array.isArray(N)?N.includes({...o,...s}[y]):{...o,...s}[y]===N})?[...c,h,p]:c},[]);return la(e,l,a,n==null?void 0:n.class,n==null?void 0:n.className)};function Ic(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ic(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function bp(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ic(e))&&(r&&(r+=" "),r+=t);return r}const Xl="-",Sp=e=>{const t=Ip(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const s=l.split(Xl);return s[0]===""&&s.length!==1&&s.shift(),Cc(s,t)||Ep(l)},getConflictingClassGroupIds:(l,s)=>{const a=n[l]||[];return s&&r[l]?[...a,...r[l]]:a}}},Cc=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?Cc(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Xl);return(l=t.validators.find(({validator:s})=>s(o)))==null?void 0:l.classGroupId},sa=/^\[(.+)\]$/,Ep=e=>{if(sa.test(e)){const t=sa.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Ip=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Np(Object.entries(e.classGroups),n).forEach(([o,l])=>{Jo(l,r,o,t)}),r},Jo=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:aa(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(Cp(i)){Jo(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,l])=>{Jo(l,aa(t,o),n,r)})})},aa=(e,t)=>{let n=e;return t.split(Xl).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Cp=e=>e.isThemeGetter,Np=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([l,s])=>[t+l,s])):o);return[n,i]}):e,Pp=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,l)=>{n.set(o,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let l=n.get(o);if(l!==void 0)return l;if((l=r.get(o))!==void 0)return i(o,l),l},set(o,l){n.has(o)?n.set(o,l):i(o,l)}}},Nc="!",jp=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,l=s=>{const a=[];let c=0,m=0,h;for(let N=0;N<s.length;N++){let d=s[N];if(c===0){if(d===i&&(r||s.slice(N,N+o)===t)){a.push(s.slice(m,N)),m=N+o;continue}if(d==="/"){h=N;continue}}d==="["?c++:d==="]"&&c--}const p=a.length===0?s:s.substring(m),w=p.startsWith(Nc),k=w?p.substring(1):p,y=h&&h>m?h-m:void 0;return{modifiers:a,hasImportantModifier:w,baseClassName:k,maybePostfixModifierPosition:y}};return n?s=>n({className:s,parseClassName:l}):l},_p=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Tp=e=>({cache:Pp(e.cacheSize),parseClassName:jp(e),...Sp(e)}),Dp=/\s+/,zp=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],l=e.trim().split(Dp);let s="";for(let a=l.length-1;a>=0;a-=1){const c=l[a],{modifiers:m,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:w}=n(c);let k=!!w,y=r(k?p.substring(0,w):p);if(!y){if(!k){s=c+(s.length>0?" "+s:s);continue}if(y=r(p),!y){s=c+(s.length>0?" "+s:s);continue}k=!1}const N=_p(m).join(":"),d=h?N+Nc:N,u=d+y;if(o.includes(u))continue;o.push(u);const f=i(y,k);for(let v=0;v<f.length;++v){const x=f[v];o.push(d+x)}s=c+(s.length>0?" "+s:s)}return s};function Ap(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Pc(t))&&(r&&(r+=" "),r+=n);return r}const Pc=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Pc(e[r]))&&(n&&(n+=" "),n+=t);return n};function Lp(e,...t){let n,r,i,o=l;function l(a){const c=t.reduce((m,h)=>h(m),e());return n=Tp(c),r=n.cache.get,i=n.cache.set,o=s,s(a)}function s(a){const c=r(a);if(c)return c;const m=zp(a,n);return i(a,m),m}return function(){return o(Ap.apply(null,arguments))}}const U=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},jc=/^\[(?:([a-z-]+):)?(.+)\]$/i,Mp=/^\d+\/\d+$/,Fp=new Set(["px","full","screen"]),Rp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Bp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Op=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Up=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,We=e=>un(e)||Fp.has(e)||Mp.test(e),rt=e=>kn(e,"length",Gp),un=e=>!!e&&!Number.isNaN(Number(e)),io=e=>kn(e,"number",un),jn=e=>!!e&&Number.isInteger(Number(e)),Wp=e=>e.endsWith("%")&&un(e.slice(0,-1)),_=e=>jc.test(e),it=e=>Rp.test(e),$p=new Set(["length","size","percentage"]),Hp=e=>kn(e,$p,_c),Zp=e=>kn(e,"position",_c),qp=new Set(["image","url"]),Qp=e=>kn(e,qp,Yp),Xp=e=>kn(e,"",Kp),_n=()=>!0,kn=(e,t,n)=>{const r=jc.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Gp=e=>Bp.test(e)&&!Op.test(e),_c=()=>!1,Kp=e=>Up.test(e),Yp=e=>Vp.test(e),Jp=()=>{const e=U("colors"),t=U("spacing"),n=U("blur"),r=U("brightness"),i=U("borderColor"),o=U("borderRadius"),l=U("borderSpacing"),s=U("borderWidth"),a=U("contrast"),c=U("grayscale"),m=U("hueRotate"),h=U("invert"),p=U("gap"),w=U("gradientColorStops"),k=U("gradientColorStopPositions"),y=U("inset"),N=U("margin"),d=U("opacity"),u=U("padding"),f=U("saturate"),v=U("scale"),x=U("sepia"),E=U("skew"),I=U("space"),C=U("translate"),O=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],ue=()=>["auto",_,t],L=()=>[_,t],et=()=>["",We,rt],Et=()=>["auto",un,_],fr=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],tt=()=>["solid","dashed","dotted","double","none"],Vt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],b=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",_],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[un,_];return{cacheSize:500,separator:":",theme:{colors:[_n],spacing:[We,rt],blur:["none","",it,_],brightness:A(),borderColor:[e],borderRadius:["none","","full",it,_],borderSpacing:L(),borderWidth:et(),contrast:A(),grayscale:P(),hueRotate:A(),invert:P(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[Wp,rt],inset:ue(),margin:ue(),opacity:A(),padding:L(),saturate:A(),scale:A(),sepia:P(),skew:A(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",_]}],container:["container"],columns:[{columns:[it]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...fr(),_]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",jn,_]}],basis:[{basis:ue()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",_]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",jn,_]}],"grid-cols":[{"grid-cols":[_n]}],"col-start-end":[{col:["auto",{span:["full",jn,_]},_]}],"col-start":[{"col-start":Et()}],"col-end":[{"col-end":Et()}],"grid-rows":[{"grid-rows":[_n]}],"row-start-end":[{row:["auto",{span:[jn,_]},_]}],"row-start":[{"row-start":Et()}],"row-end":[{"row-end":Et()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",_]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",_]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...b()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...b(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...b(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",_,t]}],"min-w":[{"min-w":[_,t,"min","max","fit"]}],"max-w":[{"max-w":[_,t,"none","full","min","max","fit","prose",{screen:[it]},it]}],h:[{h:[_,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[_,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[_,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[_,t,"auto","min","max","fit"]}],"font-size":[{text:["base",it,rt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",io]}],"font-family":[{font:[_n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",_]}],"line-clamp":[{"line-clamp":["none",un,io]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",We,_]}],"list-image":[{"list-image":["none",_]}],"list-style-type":[{list:["none","disc","decimal",_]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...tt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",We,rt]}],"underline-offset":[{"underline-offset":["auto",We,_]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...fr(),Zp]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Hp]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qp]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...tt(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:tt()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...tt()]}],"outline-offset":[{"outline-offset":[We,_]}],"outline-w":[{outline:[We,rt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[We,rt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",it,Xp]}],"shadow-color":[{shadow:[_n]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...Vt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Vt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",it,_]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[h]}],saturate:[{saturate:[f]}],sepia:[{sepia:[x]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[f]}],"backdrop-sepia":[{"backdrop-sepia":[x]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",_]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",_]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",_]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[jn,_]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",_]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[We,rt,io]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},em=Lp(Jp);function Ut(...e){return em(bp(e))}const tm=xp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),$r=F.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const l=r?Sc:"button";return M.jsx(l,{className:Ut(tm({variant:t,size:n,className:e})),ref:o,...i})});$r.displayName="Button";const Tc=F.forwardRef(({className:e,...t},n)=>M.jsx("div",{ref:n,className:Ut("rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",e),...t}));Tc.displayName="Card";const Dc=F.forwardRef(({className:e,...t},n)=>M.jsx("div",{ref:n,className:Ut("flex flex-col space-y-1.5 p-6",e),...t}));Dc.displayName="CardHeader";const zc=F.forwardRef(({className:e,...t},n)=>M.jsx("div",{ref:n,className:Ut("font-semibold leading-none tracking-tight",e),...t}));zc.displayName="CardTitle";const nm=F.forwardRef(({className:e,...t},n)=>M.jsx("div",{ref:n,className:Ut("text-sm text-neutral-500 dark:text-neutral-400",e),...t}));nm.displayName="CardDescription";const Ac=F.forwardRef(({className:e,...t},n)=>M.jsx("div",{ref:n,className:Ut("p-6 pt-0",e),...t}));Ac.displayName="CardContent";const rm=F.forwardRef(({className:e,...t},n)=>M.jsx("div",{ref:n,className:Ut("flex items-center p-6 pt-0",e),...t}));rm.displayName="CardFooter";const im=[{title:" Design a hash table to manage a product catalog. Each product has a unique product ID, name, and price. Use linear probing for collision resolu on. Implement opera ons to add, search, update, and delete a product. ",description:"unit 3.1",code:`#include <iostream>
#include <string>
using namespace std;

const int TABLE_SIZE = 100;

struct Product {
    int productID;
    string name;
    double price;
    bool isDeleted;

    Product() : productID(-1), name(""), price(0.0), isDeleted(false) {}
    Product(int id, string name, double price) : productID(id), name(name), price(price), isDeleted(false) {}
};

class HashTable {
private:
    Product table[TABLE_SIZE];

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void addProduct(int productID, string name, double price) {
        int index = hashFunction(productID);
        int originalIndex = index;
        bool placed = false;

        while (!placed) {
            if (table[index].productID == -1 || table[index].isDeleted) {
                table[index] = Product(productID, name, price);
                placed = true;
            } else {
                index = (index + 1) % TABLE_SIZE;
                if (index == originalIndex) {
                    cout << "Hash table is full!" << endl;
                    return;
                }
            }
        }
    }

    Product* searchProduct(int productID) {
        int index = hashFunction(productID);
        int originalIndex = index;

        while (table[index].productID != -1) {
            if (table[index].productID == productID && !table[index].isDeleted) {
                return &table[index];
            }
            index = (index + 1) % TABLE_SIZE;
            if (index == originalIndex) break;
        }
        return nullptr;
    }

    void updateProduct(int productID, string name, double price) {
        Product* product = searchProduct(productID);
        if (product) {
            product->name = name;
            product->price = price;
            cout << "Product updated successfully." << endl;
        } else {
            cout << "Product not found." << endl;
        }
    }

    void deleteProduct(int productID) {
        Product* product = searchProduct(productID);
        if (product) {
            product->isDeleted = true;
            cout << "Product deleted successfully." << endl;
        } else {
            cout << "Product not found." << endl;
        }
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            if (table[i].productID != -1 && !table[i].isDeleted) {
                cout << "Index " << i << ": "
                     << "ProductID: " << table[i].productID << ", "
                     << "Name: " << table[i].name << ", "
                     << "Price: " << table[i].price << endl;
            }
        }
    }
};

int main() {
    HashTable catalog;

    catalog.addProduct(101, "Laptop", 1500.0);
    catalog.addProduct(102, "Smartphone", 800.0);
    catalog.addProduct(103, "Headphones", 150.0);

    catalog.displayTable();

    Product* found = catalog.searchProduct(102);
    if (found) {
        cout << "Product found: " << found->name << " - $" << found->price << endl;
    }

    catalog.updateProduct(103, "Wireless Headphones", 200.0);
    catalog.deleteProduct(101);

    cout << "
After Updates:" << endl;
    catalog.displayTable();

    return 0;
}`},{title:"Create a hash table to manage employee records. Each record should include an employee ID, name, and department. Use chaining with linked lists for collision handling. Support adding, searching, and dele ng employee records ",description:"unit 3.2",code:`#include <iostream>
#include <string>
#include <list>
using namespace std;

struct Employee {
    int employeeID;
    string name;
    string department;

    Employee(int id, string name, string department) : employeeID(id), name(name), department(department) {}
};

const int TABLE_SIZE = 10;

class HashTable {
private:
    list<Employee> table[TABLE_SIZE];

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void addEmployee(int employeeID, string name, string department) {
        int index = hashFunction(employeeID);
        table[index].emplace_back(employeeID, name, department);
        cout << "Employee added successfully." << endl;
    }

    Employee* searchEmployee(int employeeID) {
        int index = hashFunction(employeeID);
        for (auto& emp : table[index]) {
            if (emp.employeeID == employeeID) {
                return &emp;
            }
        }
        return nullptr;
    }

    void deleteEmployee(int employeeID) {
        int index = hashFunction(employeeID);
        for (auto it = table[index].begin(); it != table[index].end(); ++it) {
            if (it->employeeID == employeeID) {
                table[index].erase(it);
                cout << "Employee deleted successfully." << endl;
                return;
            }
        }
        cout << "Employee not found." << endl;
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            cout << "Index " << i << ": ";
            for (const auto& emp : table[i]) {
                cout << "[ID: " << emp.employeeID << ", Name: " << emp.name << ", Dept: " << emp.department << "] -> ";
            }
            cout << "nullptr" << endl;
        }
    }
};

int main() {
    HashTable employees;

    employees.addEmployee(101, "Alice", "HR");
    employees.addEmployee(102, "Bob", "Engineering");
    employees.addEmployee(203, "Charlie", "Finance");

    employees.displayTable();

    Employee* found = employees.searchEmployee(102);
    if (found) {
        cout << "Employee found: " << found->name << ", Department: " << found->department << endl;
    }

    employees.deleteEmployee(101);

    cout << "
After Deletion:" << endl;
    employees.displayTable();

    return 0;
}`},{title:" Develop a hash table that stores students’ roll numbers as keys and their grades as values. Use quadra c probing for collision resolu on. Implement insert, search, and delete func ons to manage grades efficiently ",description:"unit 3.3",code:`#include <iostream>
using namespace std;

const int TABLE_SIZE = 100;

struct Student {
    int rollNumber;
    char grade;
    bool isDeleted;

    Student() : rollNumber(-1), grade(' '), isDeleted(false) {}
    Student(int roll, char g) : rollNumber(roll), grade(g), isDeleted(false) {}
};

class HashTable {
private:
    Student table[TABLE_SIZE];

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void insert(int rollNumber, char grade) {
        int index = hashFunction(rollNumber);
        int i = 0;

        while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1 &&
               !table[(index + i * i) % TABLE_SIZE].isDeleted &&
               table[(index + i * i) % TABLE_SIZE].rollNumber != rollNumber) {
            i++;
            if (i >= TABLE_SIZE) {
                cout << "Hash table is full!" << endl;
                return;
            }
        }

        int finalIndex = (index + i * i) % TABLE_SIZE;
        table[finalIndex] = Student(rollNumber, grade);
        cout << "Student grade added successfully." << endl;
    }

    char search(int rollNumber) {
        int index = hashFunction(rollNumber);
        int i = 0;

        while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
            int finalIndex = (index + i * i) % TABLE_SIZE;
            if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                return table[finalIndex].grade;
            }
            i++;
            if (i >= TABLE_SIZE) break;
        }
        return ' ';
    }

    void deleteStudent(int rollNumber) {
        int index = hashFunction(rollNumber);
        int i = 0;

        while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
            int finalIndex = (index + i * i) % TABLE_SIZE;
            if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                table[finalIndex].isDeleted = true;
                cout << "Student grade deleted successfully." << endl;
                return;
            }
            i++;
            if (i >= TABLE_SIZE) break;
        }
        cout << "Student not found." << endl;
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            if (table[i].rollNumber != -1 && !table[i].isDeleted) {
                cout << "Index " << i << ": Roll Number: " << table[i].rollNumber 
                     << ", Grade: " << table[i].grade << endl;
            }
        }
    }
};

int main() {
    HashTable grades;

    grades.insert(101, 'A');
    grades.insert(102, 'B');
    grades.insert(203, 'C');

    grades.displayTable();

    char foundGrade = grades.search(102);
    if (foundGrade != ' ') {
        cout << "Grade for roll number 102: " << foundGrade << endl;
    } else {
        cout << "Student not found." << endl;
    }

    grades.deleteStudent(101);

    cout << "
After Deletion:" << endl;
    grades.displayTable();

    return 0;
}`},{title:"Implement a hash table to store integer values using a simple modulo-based hash func on. Define the size of the hash table as 10. Implement insert and search func ons, and demonstrate them by inser ng values into the table and searching for specific values. ",description:"unit 3.4",code:`#include <iostream>
#include <vector>
using namespace std;

const int TABLE_SIZE = 10;

class HashTable {
private:
    vector<int> table[TABLE_SIZE];  // Using separate chaining with vectors

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void insert(int value) {
        int index = hashFunction(value);
        table[index].push_back(value);
        cout << "Inserted value " << value << " at index " << index << "." << endl;
    }

    bool search(int value) {
        int index = hashFunction(value);
        for (int i = 0; i < table[index].size(); ++i) {
            if (table[index][i] == value) {
                cout << "Found value " << value << " at index " << index << "." << endl;
                return true;
            }
        }
        cout << "Value " << value << " not found in the table." << endl;
        return false;
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            cout << "Index " << i << ": ";
            for (int value : table[i]) {
                cout << value << " -> ";
            }
            cout << "nullptr" << endl;
        }
    }
};

int main() {
    HashTable ht;

    // Insert values
    ht.insert(5);
    ht.insert(15);
    ht.insert(25);
    ht.insert(35);

    // Display hash table
    cout << "
Hash Table contents:" << endl;
    ht.displayTable();

    // Search for specific values
    ht.search(15);
    ht.search(7);

    return 0;
}`},{title:"Create a system to manage a parking lot. Each slot has a unique ID, and each vehicle has a registra on number. Use a hash table with linear probing to store vehicle informa on by slot ID and support func ons for adding, searching, and removing vehicles ",description:"unit 3.5",code:`#include <iostream>
#include <string>
using namespace std;

const int PARKING_SIZE = 20;

struct Vehicle {
    int slotID;
    string regNumber;
    bool isOccupied;

    Vehicle() : slotID(-1), regNumber(""), isOccupied(false) {}
    Vehicle(int id, string reg) : slotID(id), regNumber(reg), isOccupied(true) {}
};

class ParkingLot {
private:
    Vehicle parkingSlots[PARKING_SIZE];

    int hashFunction(int slotID) {
        return slotID % PARKING_SIZE;
    }

public:
    void addVehicle(int slotID, string regNumber) {
        int index = hashFunction(slotID);
        int originalIndex = index;
        int i = 0;

        while (parkingSlots[index].isOccupied && parkingSlots[index].slotID != slotID) {
            index = (originalIndex + i) % PARKING_SIZE;
            i++;
            if (i >= PARKING_SIZE) {
                cout << "Parking lot is full, cannot add vehicle." << endl;
                return;
            }
        }

        parkingSlots[index] = Vehicle(slotID, regNumber);
        cout << "Vehicle with registration number " << regNumber << " added to slot " << slotID << "." << endl;
    }

    Vehicle* searchVehicle(int slotID) {
        int index = hashFunction(slotID);
        int originalIndex = index;
        int i = 0;

        while (parkingSlots[index].isOccupied) {
            if (parkingSlots[index].slotID == slotID) {
                return &parkingSlots[index];
            }
            index = (originalIndex + i) % PARKING_SIZE;
            i++;
            if (i >= PARKING_SIZE) break;
        }
        return nullptr;
    }

    void removeVehicle(int slotID) {
        Vehicle* vehicle = searchVehicle(slotID);
        if (vehicle && vehicle->isOccupied) {
            vehicle->isOccupied = false;
            vehicle->slotID = -1;
            vehicle->regNumber = "";
            cout << "Vehicle removed from slot " << slotID << "." << endl;
        } else {
            cout << "Vehicle not found in slot " << slotID << "." << endl;
        }
    }

    void displayParkingLot() {
        for (int i = 0; i < PARKING_SIZE; ++i) {
            if (parkingSlots[i].isOccupied) {
                cout << "Slot " << i << ": Registration Number: " << parkingSlots[i].regNumber << endl;
            } else {
                cout << "Slot " << i << ": Empty" << endl;
            }
        }
    }
};

int main() {
    ParkingLot lot;

    // Add vehicles
    lot.addVehicle(1, "ABC123");
    lot.addVehicle(5, "XYZ987");
    lot.addVehicle(12, "LMN456");

    // Display parking lot
    cout << "
Parking Lot Status:" << endl;
    lot.displayParkingLot();

    // Search for a specific vehicle
    Vehicle* found = lot.searchVehicle(5);
    if (found) {
        cout << "Vehicle found in slot " << found->slotID << " with registration number: " << found->regNumber << endl;
    } else {
        cout << "Vehicle not found in slot 5." << endl;
    }

    // Remove a vehicle
    lot.removeVehicle(1);

    // Display parking lot after removal
    cout << "
Parking Lot Status after Removal:" << endl;
    lot.displayParkingLot();

    return 0;
}`},{title:"Implement a system to track student a endance, with student roll numbers as keys and a counter for the number of classes a ended. Use chaining to handle collisions and provide functions for adding a endance, viewing total a endance, and reseting data.",description:"unit 3.6",code:`#include <iostream>
#include <list>
#include <string>
using namespace std;

const int TABLE_SIZE = 10;

struct Student {
    int rollNumber;
    int attendanceCount;

    Student(int roll) : rollNumber(roll), attendanceCount(0) {}
};

class AttendanceSystem {
private:
    list<Student> table[TABLE_SIZE];

    int hashFunction(int rollNumber) {
        return rollNumber % TABLE_SIZE;
    }

public:
    // Add attendance for a student
    void addAttendance(int rollNumber) {
        int index = hashFunction(rollNumber);

        // Search for the student in the chain
        for (auto& student : table[index]) {
            if (student.rollNumber == rollNumber) {
                student.attendanceCount++;
                cout << "Added attendance for student roll number " << rollNumber << "." << endl;
                return;
            }
        }

        // If student is not found, add a new entry
        table[index].emplace_back(rollNumber);
        table[index].back().attendanceCount++;
        cout << "Student roll number " << rollNumber << " added with attendance count initialized to 1." << endl;
    }

    // View total attendance for a student
    int viewAttendance(int rollNumber) {
        int index = hashFunction(rollNumber);

        // Search for the student in the chain
        for (const auto& student : table[index]) {
            if (student.rollNumber == rollNumber) {
                cout << "Total attendance for student roll number " << rollNumber << " is " << student.attendanceCount << " classes." << endl;
                return student.attendanceCount;
            }
        }

        cout << "Student roll number " << rollNumber << " not found." << endl;
        return -1;
    }

    // Reset all attendance data
    void resetAttendance() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            table[i].clear();
        }
        cout << "All attendance data has been reset." << endl;
    }

    // Display attendance data for all students
    void displayAllAttendance() {
        cout << "Attendance data:" << endl;
        for (int i = 0; i < TABLE_SIZE; ++i) {
            cout << "Index " << i << ": ";
            for (const auto& student : table[i]) {
                cout << "[Roll Number: " << student.rollNumber << ", Attendance: " << student.attendanceCount << "] -> ";
            }
            cout << "nullptr" << endl;
        }
    }
};

int main() {
    AttendanceSystem attendance;

    // Add attendance for students
    attendance.addAttendance(101);
    attendance.addAttendance(102);
    attendance.addAttendance(103);
    attendance.addAttendance(101);  // Increment attendance for roll number 101

    // Display all attendance
    cout << "
Displaying all attendance:" << endl;
    attendance.displayAllAttendance();

    // View total attendance for a specific student
    attendance.viewAttendance(101);
    attendance.viewAttendance(104);  // Test for a non-existent student

    // Reset attendance data
    attendance.resetAttendance();

    // Display all attendance after reset
    cout << "
Displaying all attendance after reset:" << endl;
    attendance.displayAllAttendance();

    return 0;
}`},{title:"Write a program to implement chaining with linked lists as a collision resolution technique in a hash table. Store student records (Student ID and Name) and provide options to insert, delete, and search for a student record. ",description:"unit 3.7",code:`#include <iostream> 
#include <list> 
#include <string> 
using namespace std; 
 
const int TABLE_SIZE = 10; 
 
struct Student { 
    int studentID; 
    string name; 
 
    Student(int id, const string& studentName) : studentID(id), name(studentName) {} 
}; 
 
class HashTable { 
private: 
    list<Student> table[TABLE_SIZE]; 
 
    int hashFunction(int studentID) { 
        return studentID % TABLE_SIZE; 
    } 
 
public: 
    // Insert a student record 
    void insert(int studentID, const string& name) { 
        int index = hashFunction(studentID); 
 
        // Check if the student already exists, and if so, return without inser ng 
        for (const auto& student : table[index]) { 
            if (student.studentID == studentID) { 
                cout << "Student with ID " << studentID << " already exists." << endl; 
                return; 
            } 
        } 
 
        // Insert the new student 
        table[index].emplace_back(studentID, name); 
        cout << "Inserted student with ID " << studentID << " and Name " << name << "." << endl; 
    } 
 
    // Delete a student record 
    void remove(int studentID) { 
        int index = hashFunction(studentID); 
 
        for (auto it = table[index].begin(); it != table[index].end(); ++it) { 
            if (it->studentID == studentID) { 
                table[index].erase(it); 
                cout << "Deleted student with ID " << studentID << "." << endl; 
                return; 
            } 
        } 
 
        cout << "Student with ID " << studentID << " not found." << endl; 
    } 
 
    // Search for a student record 
    void search(int studentID) { 
        int index = hashFunction(studentID); 
         for (const auto& student : table[index]) { 
            if (student.studentID == studentID) { 
                cout << "Found student with ID " << studentID << " and Name " << student.name << "." << 
endl; 
                return; 
            } 
        } 
 
        cout << "Student with ID " << studentID << " not found." << endl; 
    } 
 
    // Display all student records 
    void displayTable() { 
        for (int i = 0; i < TABLE_SIZE; ++i) { 
            cout << "Index " << i << ": "; 
            for (const auto& student : table[i]) { 
                cout << "[ID: " << student.studentID << ", Name: " << student.name << "] -> "; 
            } 
            cout << "nullptr" << endl; 
        } 
    } 
}; 
 
int main() { 
    HashTable ht; 
 
    // Insert student records 
    ht.insert(101, "Alice"); 
    ht.insert(102, "Bob"); 
    ht.insert(112, "Charlie");  // Causes a collision with ID 102 
    ht.insert(203, "David"); 
 
    // Display hash table contents 
    cout << "
Hash Table contents:" << endl; 
    ht.displayTable(); 
 
    // Search for a student 
    ht.search(102); 
    ht.search(999);  // Test for a non-existent student 
 
    // Delete a student record 
    ht.remove(112); 
 
    // Display hash table contents a er dele on 
    cout << "
Hash Table a er dele on:" << endl; 
    ht.displayTable(); 
 
    return 0; 
}`},{title:"Implement a divide-and-conquer algorithm to find the closest pair of points in a 2D plane. This is a classic problem that can be efficiently solved with divide and conquer by recursively finding the minimum distance in subarrays ",description:"unit 4.1",code:`#include <iostream> 
#include <vector> 
#include <cmath> 
#include <algorithm> 
#include <float.h> 
using namespace std; 
struct Point { 
int x, y; 
}; 
// Compare points based on x-coordinate 
bool compareX(const Point& p1, const Point& p2) { 
return p1.x < p2.x; 
} 
// Compare points based on y-coordinate 
bool compareY(const Point& p1, const Point& p2) { 
return p1.y < p2.y; 
} 
// Calculate Euclidean distance between two points 
double distance(const Point& p1, const Point& p2) { 
return sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)); 
} 
 
// Brute-force approach to find the smallest distance for small point sets 
double bruteForce(vector<Point>& points, int le , int right) { 
    double minDist = DBL_MAX; 
    for (int i = le ; i < right; ++i) { 
        for (int j = i + 1; j <= right; ++j) { 
            double dist = distance(points[i], points[j]); 
            if (dist < minDist) { 
                minDist = dist; 
            } 
        } 
    } 
    return minDist; 
} 
 
// Find the minimum distance in a strip of points 
double stripClosest(vector<Point>& strip, double d) { 
    double minDist = d; 
    sort(strip.begin(), strip.end(), compareY); 
 
    for (int i = 0; i < strip.size(); ++i) { 
        for (int j = i + 1; j < strip.size() && (strip[j].y - strip[i].y) < minDist; ++j) { 
            double dist = distance(strip[i], strip[j]); 
            if (dist < minDist) { 
                minDist = dist; 
            } 
        } 
    } 
    return minDist; 
} 
 
// Recursive divide-and-conquer func on to find the smallest distance 
double closestPairRec(vector<Point>& points, int le , int right) { 
    if (right - le <= 3) { 
        return bruteForce(points, le , right); 
    } 
 
    int mid = le + (right - le ) / 2; 
    Point midPoint = points[mid]; 
 
    double dl = closestPairRec(points, le , mid); 
    double dr = closestPairRec(points, mid + 1, right); 
 
    double d = min(dl, dr); 
 
    vector<Point> strip; 
    for (int i = le ; i <= right; ++i) { 
        if (abs(points[i].x - midPoint.x) < d) { 
            strip.push_back(points[i]); 
        } 
    } 
 
    return min(d, stripClosest(strip, d)); 
} 
 
// Main func on to find the closest pair of points 
double closestPair(vector<Point>& points) { 
    sort(points.begin(), points.end(), compareX); 
    return closestPairRec(points, 0, points.size() - 1); 
} 
 
int main() { 
    vector<Point> points = {{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}}; 
 
    double minDistance = closestPair(points); 
    cout << "The smallest distance between a pair of points is: " << minDistance << endl; 
 
    return 0; 
}`},{title:"Use the QuickSort algorithm to sort an array of transac on records by transac on amount. Implement the algorithm recursively and allow the user to input transac on records. ",description:"unit 4.2",code:`#include <iostream> 
#include <vector> 
using namespace std; 
 
struct Transaction { 
    int id; 
    double amount; 
 
    Transaction(int id, double amount) : id(id), amount(amount) {} 
}; 
 
int partion(vector<Transaction>& transactions, int low, int high) { 
    double pivot = transactions[high].amount; 
    int i = low - 1; 
 
    for (int j = low; j < high; ++j) { 
        if (transactions[j].amount < pivot) { 
            ++i; 
            swap(transactions[i], transactions[j]); 
        } 
    } 
    swap(transactions[i + 1], transactions[high]); 
    return i + 1; 
} 
 
void quickSort(vector<Transaction>& transactions, int low, int high) { 
    if (low < high) { 
        int pi = partion(transactions, low, high); 
        quickSort(transactions, low, pi - 1); 
        quickSort(transactions, pi + 1, high); 
    } 
} 
 
void displayTransactions(const vector<Transaction>& transactions) { 
   cout << "Sorted Transactions by Amount:
"; 
    for (const auto& t : transactions) { 
        cout << "ID: " << t.id << ", Amount: " << t.amount << endl; 
    } 
} 
 
int main() { 
    int n; 
    cout << "Enter the number of transati ons: "; 
    cin >> n; 
 
    vector<Transaction> transactions; 
    for (int i = 0; i < n; ++i) { 
        int id; 
        double amount; 
        cout << "Enter transaction ID and amount: "; 
        cin >> id >> amount; 
        transactions.emplace_back(id, amount); 
    } 
 
    quickSort(transactions, 0, n - 1); 
    displayTransactions(transactions); 
 
    return 0; 
    /*
    Enter the number of transactions: 5
Enter transaction ID and amount: 101 500.75
Enter transaction ID and amount: 102 250.50
Enter transaction ID and amount: 103 750.30
Enter transaction ID and amount: 104 100.00
Enter transaction ID and amount: 105 300.00

    */
}`},{title:" Implement the Merge Sort technique to merge two pre-sorted arrays of customer orders into one sorted array. Display the combined sorted list of orders ",description:"unit 4.3",code:`#include <iostream> 
#include <vector> 
using namespace std; 
 
void mergeArrays(const vector<int>& arr1, const vector<int>& arr2, vector<int>& mergedArray) { 
    int i = 0, j = 0; 
    while (i < arr1.size() && j < arr2.size()) { 
        if (arr1[i] <= arr2[j]) { 
            mergedArray.push_back(arr1[i++]); 
        } else { 
            mergedArray.push_back(arr2[j++]); 
        } 
    } 
    while (i < arr1.size()) mergedArray.push_back(arr1[i++]); 
    while (j < arr2.size()) mergedArray.push_back(arr2[j++]); 
} 
 
void displayOrders(const vector<int>& orders) { 
    cout << "Merged Sorted Orders:
"; 
    for (int order : orders) { 
        cout << order << " "; 
    } 
    cout << endl; 
} 
 
int main() { 
    vector<int> arr1 = {1, 5, 9, 12}; 
    vector<int> arr2 = {3, 6, 7, 10, 15}; 
 
    vector<int> mergedArray; 
    mergeArrays(arr1, arr2, mergedArray); 
    displayOrders(mergedArray); 
 
    return 0; 
}`},{title:"Simulate a network rou ng algorithm using Dijkstra’s algorithm. The program should determine the shortest path from a source node to all other nodes in a given network.",description:"unit 4.4",code:`#include <iostream> 
#include <vector> 
#include <queue> 
#include <limits> 
using namespace std; 
 
const int INF = numeric_limits<int>::max(); 
 
void dijkstra(const vector<vector<pair<int, int>>>& graph, int source) { 
    int n = graph.size(); 
    vector<int> dist(n, INF); 
    dist[source] = 0; 
 
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
    pq.emplace(0, source); 
 
    while (!pq.empty()) { 
        int d = pq.top().first; 
        int u = pq.top().second; 
        pq.pop(); 
 
        if (d > dist[u]) continue; 
 
        for (const auto& edge : graph[u]) { 
            int v = edge.first; 
            int weight = edge.second; 
            if (dist[u] + weight < dist[v]) { 
                dist[v] = dist[u] + weight; 
                pq.emplace(dist[v], v); 
            } 
        } 
    } 
 
    cout << "Shortest distances from source node " << source << ":
"; 
    for (int i = 0; i < n; ++i) { 
        if (dist[i] == INF) 
            cout << "Node " << i << ": INF
"; 
        else 
            cout << "Node " << i << ": " << dist[i] << endl; 
    } 
} 
 
int main() { 
    int n = 5; 
    vector<vector<pair<int, int>>> graph(n); 
     
    graph[0].push_back({1, 10}); 
    graph[0].push_back({2, 3}); 
    graph[1].push_back({3, 2}); 
    graph[2].push_back({1, 1}); 
    graph[2].push_back({3, 8}); 
    graph[3].push_back({4, 7}); 
    graph[4].push_back({0, 9}); 
 
    int source = 0; 
    dijkstra(graph, source); 
 
    return 0; 
}`},{title:"Develop a program that finds the minimum spanning tree of a graph represen ng a telecommunica ons network using Prim's algorithm. The user should be able to view the total minimized connec on cost.",description:"unit 4.5",code:`#include <iostream> 
#include <vector> 
#include <queue> 
using namespace std; 
 
struct Edge { 
    int to, weight; 
}; 
 
int primMST(const vector<vector<Edge>>& graph) { 
    int n = graph.size(); 
    vector<bool> inMST(n, false); 
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
    pq.emplace(0, 0); 
 
    int totalCost = 0; 
    while (!pq.empty()) { 
        int weight = pq.top().first; 
        int u = pq.top().second; 
        pq.pop(); 
 
        if (inMST[u]) continue; 
        inMST[u] = true; 
        totalCost += weight; 
 
        for (const Edge& edge : graph[u]) { 
            if (!inMST[edge.to]) { 
                pq.emplace(edge.weight, edge.to); 
            } 
        } 
    } 
    return totalCost; 
} 
 
int main() { 
    int n = 5; 
    vector<vector<Edge>> graph(n); 
 
    graph[0].push_back({1, 2}); 
    graph[0].push_back({3, 6}); 
    graph[1].push_back({0, 2}); 
    graph[1].push_back({2, 3}); 
    graph[1].push_back({3, 8}); 
    graph[1].push_back({4, 5}); 
    graph[2].push_back({1, 3}); 
    graph[2].push_back({4, 7}); 
    graph[3].push_back({0, 6}); 
    graph[3].push_back({1, 8}); 
    graph[4].push_back({1, 5}); 
    graph[4].push_back({2, 7}); 
 
    int totalCost = primMST(graph); 
    cout << "Total minimized connec on cost for the network: " << totalCost << endl; 
 
    return 0; 
}`},{title:"A company wants to maximize its profit by selecting projects based on available resources. Use the Fractional Knapsack problem to select the projects that yield the highest return within the resource limit.",description:"unit 4.6",code:`#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Structure to represent a project
struct Project {
    int id;
    double profit;
    double resource;

    Project(int id, double profit, double resource) : id(id), profit(profit), resource(resource) {}
};

// Comparator function to sort projects by profit-to-resource ratio in descending order
bool compare(const Project& a, const Project& b) {
    return (a.profit / a.resource) > (b.profit / b.resource);
}

// Function to solve the Fractional Knapsack problem
double fractionalKnapsack(vector<Project>& projects, double maxResources) {
    // Sort projects based on profit-to-resource ratio
    sort(projects.begin(), projects.end(), compare);

    double totalProfit = 0.0;
    for (const auto& project : projects) {
        if (maxResources >= project.resource) {
            maxResources -= project.resource;
            totalProfit += project.profit;
        } else {
            totalProfit += project.profit * (maxResources / project.resource);
            break;
        }
    }
    return totalProfit;
}

int main() {
    int n;
    double maxResources;

    cout << "Enter the number of projects: ";
    cin >> n;

    vector<Project> projects;
    cout << "Enter the profit and resource required for each project:
";
    for (int i = 0; i < n; ++i) {
        double profit, resource;
        cout << "Project " << i + 1 << ": ";
        cin >> profit >> resource;
        projects.emplace_back(i + 1, profit, resource);
    }

    cout << "Enter the maximum available resources: ";
    cin >> maxResources;

    double maxProfit = fractionalKnapsack(projects, maxResources);

    cout << "Maximum profit within resource limit: " << maxProfit << endl;

    return 0;
    /*
    Enter the number of projects: 3
    Enter the profit and resource required for each project:
    Project 1: 60 10
    Project 2: 100 20
    Project 3: 120 30
    Enter the maximum available resources: 50
    */
}`},{title:"Implement a binary search algorithm to quickly find the posi on of a specific book in a sorted list of ISBN numbers.",description:"unit 4.7",code:`#include <iostream> 
#include <vector> 
using namespace std; 
 
int binarySearch(const vector<int>& isbns, int target) { 
    int le = 0, right = isbns.size() - 1; 
 
    while (le <= right) { 
        int mid = le + (right - le ) / 2; 
        if (isbns[mid] == target) { 
            return mid; 
        } else if (isbns[mid] < target) { 
            le = mid + 1; 
        } else { 
            right = mid - 1; 
        } 
    } 
    return -1; 
} 
 
int main() { 
    vector<int> isbns = {12345, 23456, 34567, 45678, 56789}; 
    int targetISBN = 34567; 
 
    int pos = binarySearch(isbns, targetISBN); 
    if (pos != -1) { 
        cout << "ISBN " << targetISBN << " found at posi on: " << pos << endl; 
    } else { 
        cout << "ISBN " << targetISBN << " not found." << endl; 
    } 
 
    return 0; 
}`},{title:"Design a program to find the minimum cost to connect all ci es in a region by construc ng roads using Kruskal's algorithm. Input should include city pairs and road construction costs.",description:"unit 4.8",code:`#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>

using namespace std;

// Structure to represent a union-find data structure (disjoint set)
class UnionFind {
private:
    vector<int> parent, rank;

public:
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i;
        }
    }

    // Find the representative of a set
    int find(int u) {
        if (u != parent[u]) {
            parent[u] = find(parent[u]); // Path compression
        }
        return parent[u];
    }

    // Union by rank
    bool unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);

        if (rootU == rootV) return false; // They are already in the same set

        if (rank[rootU] > rank[rootV]) {
            parent[rootV] = rootU;
        } else if (rank[rootU] < rank[rootV]) {
            parent[rootU] = rootV;
        } else {
            parent[rootV] = rootU;
            rank[rootU]++;
        }
        return true;
    }
};

// Kruskal's algorithm to find MST
int kruskal(int n, vector<tuple<int, int, int>>& edges) {
    // Sort edges by weight
    sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
        return get<2>(a) < get<2>(b);
    });

    UnionFind uf(n);
    int minCost = 0;

    cout << "Selected roads for the minimum spanning tree:
";

    for (const auto& edge : edges) {
        int u, v, cost;
        tie(u, v, cost) = edge;

        if (uf.unionSets(u, v)) {
            minCost += cost;
            cout << "Road between city " << u << " and city " << v << " with cost " << cost << "
";
        }
    }

    return minCost;
}

int main() {
    int n, m;

    cout << "Enter the number of cities: ";
    cin >> n;

    cout << "Enter the number of possible roads: ";
    cin >> m;

    vector<tuple<int, int, int>> edges;

    cout << "Enter the roads in the format (city1 city2 cost):
";
    for (int i = 0; i < m; ++i) {
        int u, v, cost;
        cin >> u >> v >> cost;
        edges.emplace_back(u, v, cost);
    }

    int minCost = kruskal(n, edges);

    cout << "Minimum cost to connect all cities: " << minCost << endl;

    return 0;
    /*
    Enter the number of cities: 4
Enter the number of possible roads: 5
Enter the roads in the format (city1 city2 cost):
0 1 10
0 2 6
0 3 5
1 3 15
2 3 4
    */
}`},{title:"Implement a greedy algorithm to schedule jobs within their deadlines to maximize profit. Each job has a profit and a deadline, and only one job can be performed at a time.",description:"unit 4.9",code:`#include <iostream> 
#include <vector> 
#include <algorithm> 
using namespace std; 
 
struct Job { 
    int id, deadline, profit; 
}; 
 
bool compare(const Job& a, const Job& b) { 
    return a.profit > b.profit; 
} 
 
int jobScheduling(vector<Job>& jobs) { 
    sort(jobs.begin(), jobs.end(), compare); 
 
    int maxDeadline = 0; 
    for (const auto& job : jobs) { 
        maxDeadline = max(maxDeadline, job.deadline); 
    } 
 
    vector<int> schedule(maxDeadline + 1, -1); 
    int maxProfit = 0; 
 
    for (const auto& job : jobs) { 
        for (int j = job.deadline; j > 0; --j) { 
            if (schedule[j] == -1) { 
                schedule[j] = job.id; 
                maxProfit += job.profit; 
                break; 
            } 
        } 
    } 
    return maxProfit; 
} 
 
int main() { 
    vector<Job> jobs = {{1, 2, 100}, {2, 1, 19}, {3, 2, 27}, {4, 1, 25}, {5, 3, 15}}; 
    int maxProfit = jobScheduling(jobs); 
    cout << "Maximum profit by scheduling jobs: " << maxProfit << endl; 
 
    return 0; 
}`},{title:"Use the Floyd-Warshall algorithm to calculate the shortest path between all pairs of ci es in a network.",description:"unit 5.1",code:`#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
void floydWarshall(vector<vector<int>>& distances) { 
    int n = distances.size(); 
    vector<vector<int>> shortestPaths = distances; 
 
    // Floyd-Warshall algorithm 
    for (int k = 0; k < n; ++k) { 
        for (int i = 0; i < n; ++i) { 
            for (int j = 0; j < n; ++j) { 
                if (shortestPaths[i][k] != INT_MAX && shortestPaths[k][j] != INT_MAX  
                    && shortestPaths[i][j] > shortestPaths[i][k] + shortestPaths[k][j]) { 
                    shortestPaths[i][j] = shortestPaths[i][k] + shortestPaths[k][j]; 
                } 
            } 
        } 
    } 
 
    // Print the shortest path matrix 
    cout << "Shortest path distances between each pair of ci es:
"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            if (shortestPaths[i][j] == INT_MAX) 
                cout << "INF "; 
            else 
                cout << shortestPaths[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
int main() { 
    // Example network of ci es with distances 
    vector<vector<int>> distances = { 
        {0, 5, INT_MAX, 10}, 
        {INT_MAX, 0, 3, INT_MAX}, 
        {INT_MAX, INT_MAX, 0, 1}, 
        {INT_MAX, INT_MAX, INT_MAX, 0} 
    }; 
 
    floydWarshall(distances); 
    return 0; 
}`},{title:"Implement the Bellman-Ford algorithm to find the shortest path from a source warehouse to all other delivery locations in a logistics network, considering possible nega ve weights for certain routes.",description:"unit 5.2",code:`#include <iostream>
#include <vector>
#include <tuple>
#include <climits>

using namespace std;

// Function to implement Bellman-Ford algorithm
bool bellmanFord(int vertices, int edges, int source, 
                 const vector<tuple<int, int, int>>& edgeList,
                 vector<int>& distances, vector<int>& predecessors) {
    // Initialize distances and predecessors
    distances.assign(vertices, INT_MAX);
    predecessors.assign(vertices, -1);
    distances[source] = 0;

    // Relax edges |V| - 1 times
    for (int i = 0; i < vertices - 1; ++i) {
        for (const auto& edge : edgeList) {
            int u, v, weight;
            tie(u, v, weight) = edge;

            if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                predecessors[v] = u;
            }
        }
    }

    // Check for negative-weight cycles
    for (const auto& edge : edgeList) {
        int u, v, weight;
        tie(u, v, weight) = edge;

        if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
            cout << "Graph contains a negative-weight cycle.
";
            return false;
        }
    }

    return true;
}

// Function to print the shortest paths
void printPaths(int source, const vector<int>& distances, const vector<int>& predecessors) {
    cout << "Shortest distances from source location " << source << ":
";
    for (size_t i = 0; i < distances.size(); ++i) {
        cout << "To location " << i << ": ";
        if (distances[i] == INT_MAX) {
            cout << "No path
";
        } else {
            cout << distances[i] << " (Path: ";
            int current = i;
            vector<int> path;

            while (current != -1) {
                path.push_back(current);
                current = predecessors[current];
            }

            for (auto it = path.rbegin(); it != path.rend(); ++it) {
                cout << *it << (next(it) == path.rend() ? ")" : " -> ");
            }
            cout << "
";
        }
    }
}

int main() {
    int vertices, edges, source;

    // Input number of vertices and edges
    cout << "Enter the number of locations (vertices): ";
    cin >> vertices;
    cout << "Enter the number of routes (edges): ";
    cin >> edges;

    vector<tuple<int, int, int>> edgeList;

    // Input the edges (u, v, weight)
    cout << "Enter the routes in the format (source destination weight):
";
    for (int i = 0; i < edges; ++i) {
        int u, v, weight;
        cin >> u >> v >> weight;
        edgeList.emplace_back(u, v, weight);
    }

    // Input the source vertex
    cout << "Enter the source location: ";
    cin >> source;

    vector<int> distances, predecessors;

    // Run Bellman-Ford algorithm
    if (bellmanFord(vertices, edges, source, edgeList, distances, predecessors)) {
        printPaths(source, distances, predecessors);
    }

    return 0;
    /*
    Enter the number of locations (vertices): 5
Enter the number of routes (edges): 8
Enter the routes in the format (source destination weight):
0 1 -1
0 2 4
1 2 3
1 3 2
1 4 2
3 2 5
3 1 1
4 3 -3
Enter the source location: 0
    */
}`},{title:"Implement the Travelling Salesman Problem (TSP) using dynamic programming to opmize the delivery route for a company, minimizing travel distance and returning to the start location.",description:"unit 5.3",code:`#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp) { 
    int n = dist.size(); 
 
    // If all ci es are visited, return cost to return to star ng city 
    if (visited == (1 << n) - 1) { 
        return dist[pos][0]; 
    } 
 
    // If result is already computed, return it 
    if (dp[pos][visited] != -1) { 
        return dp[pos][visited]; 
    } 
 
    int minCost = INT_MAX; 
 
    // Try visi ng all unvisited ci es and take the minimum cost 
    for (int city = 0; city < n; ++city) { 
        if ((visited & (1 << city)) == 0) { // Check if city is not visited 
            int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp); 
            minCost = min(minCost, newCost); 
        } 
    } 
 
    // Store and return the result 
    return dp[pos][visited] = minCost; 
} 
 
int main() { 
    // Example distance matrix for 4 ci es 
    vector<vector<int>> dist = { 
        {0, 20, 42, 35}, 
        {20, 0, 30, 34}, 
        {42, 30, 0, 12}, 
        {35, 34, 12, 0} 
    };

    // for input matrix
    // int n; 
    // cout << "Enter the number of cities: "; 
    // cin >> n; 
    // vector<vector<int>> dist(n, vector<int>(n)); 
    // cout << "Enter the distance matrix (use a large number like 1000000 for no path):
"; 
    // for (int i = 0; i < n; ++i) { 
    //     for (int j = 0; j < n; ++j) { 
    //         cin >> dist[i][j]; 
    //     } 
    // }  
 
    int n = dist.size(); 
    vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
 
    int minCost = tsp(0, 1, dist, dp); // Start from city 0 with only city 0 visited 
 
    cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
    return 0; 
} `},{title:" Implement the Floyd-Warshall algorithm to compute the shortest paths between all pairs of ver ces in a weighted, directed graph. Accept the graph as an adjacency matrix input, and display the final shortest path matrix, showing the minimum distances between each pair of vertices.  ",description:"unit 5.4",code:`#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
void floydWarshall(vector<vector<int>>& graph) { 
    int n = graph.size(); 
    vector<vector<int>> dist = graph; 
 
    // Floyd-Warshall algorithm to compute shortest paths 
    for (int k = 0; k < n; ++k) { 
        for (int i = 0; i < n; ++i) { 
            for (int j = 0; j < n; ++j) { 
                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX  
                    && dist[i][j] > dist[i][k] + dist[k][j]) { 
                    dist[i][j] = dist[i][k] + dist[k][j]; 
                } 
            } 
        } 
    } 
 
    // Display the shortest path matrix 
    cout << "Shortest path matrix:
"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            if (dist[i][j] == INT_MAX) 
                cout << "INF "; 
            else 
                cout << dist[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
int main() { 
    // Input adjacency matrix for the graph 
    int n; 
    cout << "Enter the number of ver ces: "; 
    cin >> n; 
 
    vector<vector<int>> graph(n, vector<int>(n)); 
    cout << "Enter the adjacency matrix (use " << INT_MAX << " for infinity):
"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            cin >> graph[i][j]; 
        } 
    } 
 
    floydWarshall(graph); 
    return 0; 
    /*
        Enter the number of vertices: 4
Enter the adjacency matrix (use 2147483647 for infinity):
0 3 2147483647 5
2 0 2147483647 4
2147483647 1 0 2147483647
2147483647 2147483647 2 0

    */
}`},{title:" Implement the Travelling Salesman Problem (TSP) using dynamic programming to find the minimum cost of visiting a set of cities exactly once and returning to the starting city. Allow the user to input the distance matrix and output the minimum travel cost and the optimal path.",description:"unit 5.5",code:`#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp, 
vector<vector<int>>& path) { 
    int n = dist.size(); 
 
    // Base case: All ci es are visited, return cost to return to star ng city 
    if (visited == (1 << n) - 1) { 
        return dist[pos][0]; 
    } 
 
    // If result is already computed, return it 
    if (dp[pos][visited] != -1) { 
        return dp[pos][visited]; 
    } 
 
    int minCost = INT_MAX; 
    int bestCity = -1; 
 
    // Try visi ng all unvisited ci es and take the minimum cost path 
    for (int city = 0; city < n; ++city) { 
        if ((visited & (1 << city)) == 0) { // Check if city is not visited 
            int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp, path); 
            if (newCost < minCost) { 
                minCost = newCost; 
                bestCity = city; 
            } 
        } 
    } 
 
    // Store the result and update the path 
    dp[pos][visited] = minCost; 
    path[pos][visited] = bestCity; 
    return minCost; 
} 
 
void printPath(int start, const vector<vector<int>>& path) { 
    int n = path.size(); 
    int visited = 1; 
    int pos = start; 
 
    cout << "Optimal path: " << pos << " "; 
    while (path[pos][visited] != -1) { 
        pos = path[pos][visited]; 
        visited |= (1 << pos); 
        cout << "-> " << pos << " "; 
    } 
    cout << "-> " << start << endl; 
} 
 
int main() { 
    int n; 
    cout << "Enter the number of cities: "; 
    cin >> n; 
 
    vector<vector<int>> dist(n, vector<int>(n)); 
    cout << "Enter the distance matrix (use a large number like 1000000 for no path):
"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            cin >> dist[i][j]; 
        } 
    } 
 
    vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
    vector<vector<int>> path(n, vector<int>(1 << n, -1)); // Path table to reconstruct the route 
 
    int minCost = tsp(0, 1, dist, dp, path); // Start from city 0 with only the star ng city visited 
 
    cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
    printPath(0, path); 
 
    return 0; 
    /*
        Enter the number of cities: 4
Enter the distance matrix (use a large number like 1000000 for no path):
0 10 15 20
10 0 35 25
15 35 0 30
20 25 30 0

    */
}`},{title:"Given a set of projects, each with a profit and a resource requirement, determine the combination of projects that maximizes total profit without exceeding a given resource limit using 0/1 knapsack problem.",description:"unit 5.6",code:`#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Function to solve the 0/1 Knapsack problem
int knapsack(const vector<int>& profits, const vector<int>& resources, int resourceLimit, vector<vector<int>>& dp) {
    int n = profits.size();

    // Fill dp table
    for (int i = 1; i <= n; ++i) {
        for (int j = 0; j <= resourceLimit; ++j) {
            if (resources[i - 1] <= j) {
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - resources[i - 1]] + profits[i - 1]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // Maximum profit is found at dp[n][resourceLimit]
    return dp[n][resourceLimit];
}

// Function to reconstruct the selected projects
vector<int> getSelectedProjects(const vector<int>& profits, const vector<int>& resources, int resourceLimit, const vector<vector<int>>& dp) {
    int n = profits.size();
    vector<int> selectedProjects;

    int w = resourceLimit;
    for (int i = n; i > 0 && w > 0; --i) {
        if (dp[i][w] != dp[i - 1][w]) {
            selectedProjects.push_back(i - 1); // Add project index to selectedProjects
            w -= resources[i - 1];
        }
    }

    reverse(selectedProjects.begin(), selectedProjects.end());
    return selectedProjects;
}

int main() {
    int n, resourceLimit;

    cout << "Enter the number of projects: ";
    cin >> n;

    vector<int> profits(n), resources(n);

    cout << "Enter the profits of the projects: ";
    for (int i = 0; i < n; ++i) {
        cin >> profits[i];
    }

    cout << "Enter the resource requirements of the projects: ";
    for (int i = 0; i < n; ++i) {
        cin >> resources[i];
    }

    cout << "Enter the resource limit: ";
    cin >> resourceLimit;

    // Initialize dp table
    vector<vector<int>> dp(n + 1, vector<int>(resourceLimit + 1, 0));

    // Calculate the maximum profit using knapsack
    int maxProfit = knapsack(profits, resources, resourceLimit, dp);

    // Get the selected projects
    vector<int> selectedProjects = getSelectedProjects(profits, resources, resourceLimit, dp);

    cout << "Maximum profit: " << maxProfit << endl;
    cout << "Selected projects: ";
    for (int project : selectedProjects) {
        cout << project + 1 << " "; // Print project indices (1-based)
    }
    cout << endl;

    return 0; 
    /*
    Enter the number of projects: 4
Enter the profits of the projects: 60 100 120 80
Enter the resource requirements of the projects: 10 20 30 25
Enter the resource limit: 50

    */
} `},{title:"Write a program to solve the Eight Queens problem using backtracking. The program should place eight queens on an 8x8 chessboard such that no two queens threaten each other. Display one of the possible solutions with the placement of queens.",description:"unit 6.1",code:`#include <iostream> 
#include <vector> 
 
using namespace std; 
 
// Size of the chessboard 
const int N = 8; 
 
// Func on to print the chessboard with queens placed 
void printSolution(const vector<vector<int>>& board) { 
    for (int i = 0; i < N; ++i) { 
        for (int j = 0; j < N; ++j) { 
            if (board[i][j] == 1) 
                cout << "Q "; 
            else 
                cout << ". "; 
        } 
        cout << endl; 
    } 
    cout << endl; 
} 
 
// Check if a queen can be placed at board[row][col] 
bool isSafe(const vector<vector<int>>& board, int row, int col) { 
    // Check this row on le side 
    for (int i = 0; i < col; ++i) 
        if (board[row][i] == 1) 
            return false; 
 
    // Check upper diagonal on le side 
    for (int i = row, j = col; i >= 0 && j >= 0; --i, --j) 
        if (board[i][j] == 1) 
            return false; 
 
    // Check lower diagonal on le side 
    for (int i = row, j = col; j >= 0 && i < N; ++i, --j) 
        if (board[i][j] == 1) 
            return false; 
 
    return true; 
} 
 
// Func on to solve the N-Queens problem using backtracking 
bool solveNQueens(vector<vector<int>>& board, int col) { 
    // Base case: All queens are placed 
    if (col >= N) 
        return true; 
 
    // Consider this column and try placing this queen in all rows one by one 
    for (int i = 0; i < N; ++i) { 
        if (isSafe(board, i, col)) { 
            board[i][col] = 1; // Place the queen 
 
            // Recursively place the rest of the queens 
            if (solveNQueens(board, col + 1)) 
                return true; 
 
            // If placing queen in board[i][col] doesn't lead to a solu on, 
            // then remove queen from board[i][col] (backtrack) 
            board[i][col] = 0; 
        } 
    } 
    return false; // If the queen cannot be placed in any row in this column 
} 
 
int main() { 
    vector<vector<int>> board(N, vector<int>(N, 0)); // Initialize board with 0s 
 
    if (solveNQueens(board, 0)) { 
        cout << "One of the solutions to the Eight Queens problem:
"; 
        printSolution(board); 
    } else { 
        cout << "No solution exists for the Eight Queens problem.
"; 
    } 
 
    return 0; 
} `},{title:"Implement a program to solve a 9x9 Sudoku puzzle using backtracking. Accept a partially filled board as input and display the completed board if a solution exists. ",description:"unit 6.2",code:`#include <iostream> 
#include <vector> 
 
using namespace std; 
 
#define N 9 
 
// Function to print the Sudoku board 
void printBoard(const vector<vector<int>>& board) { 
    for (int row = 0; row < N; ++row) { 
        for (int col = 0; col < N; ++col) { 
            cout << board[row][col] << " "; 
        } 
        cout << endl; 
    } 
} 
 
// Func on to check if placing num in board[row][col] is valid 
bool isSafe(const vector<vector<int>>& board, int row, int col, int num) { 
    // Check the row 
    for (int x = 0; x < N; ++x) { 
        if (board[row][x] == num) { 
            return false; 
        } 
    } 
 
    // Check the column 
    for (int x = 0; x < N; ++x) { 
        if (board[x][col] == num) { 
            return false; 
        } 
    } 
 
    // Check the 3x3 sub-grid 
    int startRow = row - row % 3; 
    int startCol = col - col % 3; 
    for (int i = 0; i < 3; ++i) { 
        for (int j = 0; j < 3; ++j) { 
            if (board[i + startRow][j + startCol] == num) { 
                return false; 
            } 
        } 
    } 
 
    return true; 
} 
 
// Recursive func on to solve the Sudoku board using backtracking 
bool solveSudoku(vector<vector<int>>& board) { 
    int row = -1; 
    int col = -1; 
    bool isEmpty = false; 
 
    // Find an empty cell 
    for (int i = 0; i < N; ++i) { 
        for (int j = 0; j < N; ++j) { 
            if (board[i][j] == 0) { 
                row = i; 
                col = j; 
                isEmpty = true; 
                break; 
            } 
        } 
        if (isEmpty) break; 
    } 
 
    // No empty cell le , board is solved 
    if (!isEmpty) return true; 
 
    // Try placing digits 1 to 9 in the empty cell 
    for (int num = 1; num <= 9; ++num) { 
        if (isSafe(board, row, col, num)) { 
            board[row][col] = num; // Place num 
 
            if (solveSudoku(board)) { 
                return true; 
            } 
 
            board[row][col] = 0; // Backtrack 
        } 
    } 
 
    return false; // Trigger backtracking 
} 
 
int main() { 
    vector<vector<int>> board(N, vector<int>(N)); 
 
    cout << "Enter the Sudoku puzzle (enter 0 for empty cells):
"; 
    for (int i = 0; i < N; ++i) { 
        for (int j = 0; j < N; ++j) { 
            cin >> board[i][j]; 
        } 
    } 
 
    if (solveSudoku(board)) { 
        cout << "Solved Sudoku puzzle:
"; 
        printBoard(board); 
    } else { 
        cout << "No solution exists.
"; 
    } 
 
    return 0;  
    /*5 3 0 0 7 0 0 0 0
      6 0 0 1 9 5 0 0 0
      0 9 8 0 0 0 0 6 0
      8 0 0 0 6 0 0 0 3
      4 0 0 8 0 3 0 0 1
      7 0 0 0 2 0 0 0 6
      0 6 0 0 0 0 2 8 0
      0 0 0 4 1 9 0 0 5
      0 0 0 0 8 0 0 7 9
      */
} `},{title:"Implement the Travelling Salesman Problem (TSP) using backtracking to find the minimum-cost path that visits each city exactly once and returns to the starting city. Accept a distance matrix as input and display the minimum path and cost. ",description:"unit 6.3",code:`#include <iostream>
#include <vector>
#include <climits>

using namespace std;

// Function to find the minimum-cost path using backtracking
void tspBacktracking(vector<vector<int>>& dist, vector<bool>& visited, vector<int>& currentPath, vector<int>& bestPath, int& minCost, int currentCost, int level, int currentCity, int n) {
    if (level == n) {
        // Add the cost of returning to the starting city
        int totalCost = currentCost + dist[currentCity][0];
        if (totalCost < minCost) {
            minCost = totalCost;
            bestPath = currentPath;
        }
        return;
    }

    // Explore all cities not yet visited
    for (int i = 0; i < n; i++) {
        if (!visited[i] && dist[currentCity][i] != 0) {
            visited[i] = true;
            currentPath[level] = i;
            tspBacktracking(dist, visited, currentPath, bestPath, minCost, currentCost + dist[currentCity][i], level + 1, i, n);
            visited[i] = false;
        }
    }
}

void solveTSP(vector<vector<int>>& dist, int n) {
    vector<bool> visited(n, false);
    vector<int> currentPath(n), bestPath(n);
    int minCost = INT_MAX;

    visited[0] = true; // Start from the first city (0)
    currentPath[0] = 0;

    // Perform backtracking to find the optimal path
    tspBacktracking(dist, visited, currentPath, bestPath, minCost, 0, 1, 0, n);

    // Output the results
    cout << "Minimum Cost: " << minCost << endl;
    cout << "Optimal Path: ";
    for (int i = 0; i < n; i++) {
        cout << bestPath[i] << " ";
    }
    cout << "0" << endl; // Return to the starting city
}

int main() {
    int n;

    cout << "Enter the number of cities: ";
    cin >> n;

    vector<vector<int>> dist(n, vector<int>(n));

    cout << "Enter the distance matrix:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> dist[i][j];
        }
    }

    solveTSP(dist, n);

    return 0;
}`},{title:"Write a program to solve the Travelling Salesman Problem (TSP) using Branch and Bound to find the minimum-cost tour. Accept a distance matrix as input, and display the minimum cost and the path of the tour. ",description:"unit 6.4",code:`#include <iostream>
#include <climits>
#include <vector>
#include <algorithm>
#include <functional>

using namespace std;

// Function to calculate the lower bound for a node
int calculateLowerBound(vector<vector<int>>& dist, vector<int>& path, int n, int currentNode) {
    int lowerBound = 0;

    // Calculate the sum of distances for the current path
    for (size_t i = 0; i < path.size() - 1; i++) {
        lowerBound += dist[path[i]][path[i + 1]];
    }

    // Add the distance from the current node to the nearest unvisited node
    int minEdge = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (find(path.begin(), path.end(), i) == path.end() && dist[currentNode][i] != 0) {
            minEdge = min(minEdge, dist[currentNode][i]);
        }
    }
    lowerBound += (minEdge == INT_MAX) ? 0 : minEdge;

    return lowerBound;
}

// Branch and Bound to solve TSP
void branchAndBound(vector<vector<int>>& dist, int n) {
    vector<int> path(1, 0); // Start with the first city (0)
    vector<bool> visited(n, false);
    visited[0] = true;
    int minCost = INT_MAX;
    vector<int> bestPath;

    function<void(int, int)> dfs = [&](int currentNode, int count) {
        if (count == n) {
            // Add the cost of returning to the starting point
            int cost = 0;
            for (size_t i = 0; i < path.size() - 1; i++) {
                cost += dist[path[i]][path[i + 1]];
            }
            cost += dist[path.back()][path[0]];

            // Check if we found a better path
            if (cost < minCost) {
                minCost = cost;
                bestPath = path;
            }
            return;
        }

        // Try each node and branch
        for (int i = 0; i < n; i++) {
            if (!visited[i] && dist[currentNode][i] != 0) {
                visited[i] = true;
                path.push_back(i);

                // Lower bound calculation to prune the branch
                int lowerBound = calculateLowerBound(dist, path, n, i);

                if (lowerBound < minCost) {
                    dfs(i, count + 1);
                }

                path.pop_back();
                visited[i] = false;
            }
        }
    };

    dfs(0, 1);

    // Output the result
    cout << "Minimum Cost: " << minCost << endl;
    cout << "Optimal Path: ";`},{title:"Solve the 0-1 knapsack problem using branch and bound to maximize the profit without exceeding the weight limit.",description:"unit 6.5",code:`#include <iostream> 
#include <vector> 
#include <algorithm> 
#include <climits> 
using namespace std; 
// Structure to store an item 
struct Item { 
int weight; 
int profit; 
}; 
// Structure to store a node in the Branch and Bound tree 
struct Node { 
int level;   // Level of the node (index of the item considered) 
int profit;  // Profit accumulated so far 
int weight;  // Weight accumulated so far 
float bound; // Upper bound of the profit 
}; 
// Func on to calculate the upper bound of profit for the current node 
float calculateBound(Node u, int n, int W, vector<Item>& items) { 
    if (u.weight >= W) return 0;  // If the weight exceeds capacity, return 0 
 
    // Ini alize bound with the profit accumulated so far 
    float bound = u.profit; 
 
    // Start including items in the bound calcula on un l we exceed capacity 
    int j = u.level + 1; 
    int totalWeight = u.weight; 
 
    while (j < n && totalWeight + items[j].weight <= W) { 
        totalWeight += items[j].weight; 
        bound += items[j].profit; 
        j++; 
    } 
 
    // If there's s ll room, take a frac on of the next item (frac onal knapsack) 
    if (j < n) { 
        bound += (W - totalWeight) * items[j].profit / float(items[j].weight); 
    } 
 
    return bound; 
} 
 
// Func on to solve 0/1 Knapsack Problem using Branch and Bound 
void knapsackBranchAndBound(int n, int W, vector<Item>& items) { 
    // Sort the items based on profit/weight ra o 
    sort(items.begin(), items.end(), [](Item a, Item b) { 
        return (float(a.profit) / a.weight) > (float(b.profit) / b.weight); 
    }); 
 
    // Priority queue or deque to store nodes (nodes with higher bound should be processed first) 
    vector<Node> queue; 
    Node u, v; 
    u.level = -1; 
    u.profit = 0; 
    u.weight = 0; 
    u.bound = 0.0; 
 
    // Compute the bound of the root node 
    u.bound = calculateBound(u, n, W, items); 
    queue.push_back(u); 
 
    int maxProfit = 0;  // To store the maximum profit found 
    vector<int> solution(n, 0);  // To store the opmal solu on 
 
    while (!queue.empty()) { 
        u = queue.back(); 
        queue.pop_back(); 
 
        // If the bound is greater than the maxProfit found, process the node 
        if (u.bound > maxProfit) { 
            // Consider the next item (include it) 
            v.level = u.level + 1; 
            v.weight = u.weight + items[v.level].weight; 
            v.profit = u.profit + items[v.level].profit; 
 
            if (v.weight <= W && v.profit > maxProfit) { 
                maxProfit = v.profit; 
                solution[v.level] = 1; 
            } 
 
            // Compute the bound for this new node 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
 
            // Consider the next item (exclude it) 
            v.weight = u.weight; 
            v.profit = u.profit; 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
        } 
    } 
 
    // Display the results 
    cout << "Maximum profit: " << maxProfit << endl; 
    cout << "Items selected: "; 
    for (int i = 0; i < n; i++) { 
        if (solution[i]) { 
            cout << i << " "; 
        } 
    } 
    cout << endl; 
} 
 
int main() { 
    // Example input 
    int n = 4; // Number of items 
    int W = 50; // Maximum weight capacity 
 
    vector<Item> items = {{10, 60}, {20, 100}, {30, 120}, {40, 80}}; // {weight, profit} 
 
    cout << "Solving 0/1 Knapsack Problem using Branch and Bound...
"; 
    knapsackBranchAndBound(n, W, items); 
 
    return 0; 
} `},{title:"Solve a maze where a rat has to reach the destination from the starting point using backtracking. Print all possible paths if multiple solutions exist.  ",description:"unit 6.6",code:`#include <iostream> 
#include <vector> 
 
using namespace std; 
 
#define N 4  // Size of the maze (4x4 in this case) 
 
// Func on to print the path 
void printSolution(vector<vector<int>>& solution) { 
    for (int i = 0; i < N; i++) { 
        for (int j = 0; j < N; j++) { 
            cout << solution[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
// Func on to check if a posi on is safe to move (within bounds and not an obstacle) 
bool isSafe(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // Check if (x, y) is inside the maze and not a blocked cell (0) 
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1 && solution[x][y] == 0); 
} 
 
// Recursive func on to solve the maze using backtracking 
bool solveMazeUtil(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // If the des na on is reached, mark the current posi on and return true 
    if (x == N - 1 && y == N - 1) { 
        solution[x][y] = 1; 
        return true; 
    } 
 
    // Check if maze[x][y] is a valid move 
    if (isSafe(x, y, maze, solution)) { 
        // Mark the current cell as part of the solu on path 
        solution[x][y] = 1; 
 
        // Move forward in the x direc on (downwards) 
        if (solveMazeUtil(x + 1, y, maze, solution)) { 
            return true; 
        } 
 
        // Move downwards in the y direc on (rightwards) 
        if (solveMazeUtil(x, y + 1, maze, solution)) { 
            return true; 
        } 
 
        // If moving in either direc on doesn't work, backtrack 
        solution[x][y] = 0; 
        return false; 
    } 
 
    return false; 
} 
 
// Func on to solve the maze 
bool solveMaze(vector<vector<int>>& maze) { 
    vector<vector<int>> solution(N, vector<int>(N, 0)); 
 
    // Start solving the maze from the top-le corner (0, 0) 
    if (solveMazeUtil(0, 0, maze, solution)) { 
        printSolution(solution); 
        return true; 
    } 
 
    cout << "No solu on exists" << endl; 
    return false; 
} 
 
int main() { 
    // Example maze (1 - open cell, 0 - blocked cell) 
    vector<vector<int>> maze = { 
        {1, 0, 0, 0}, 
        {1, 1, 0, 1}, 
        {0, 1, 0, 0}, 
        {1, 1, 1, 1} 
    }; 
 
    cout << "Solving maze using backtracking..." << endl; 
    if (!solveMaze(maze)) { 
        cout << "No path exists from the start to the des na on." << endl; 
} 
return 0; 
} `},{title:"ALL",description:"All Programs",code:`#include <iostream> // Design a hash table to manage a product catalog. Each product has a unique product ID, name, and price. Use linear probing for collision resolu on. Implement opera ons to add, search, update, and delete a product. 
  #include <string>
  using namespace std;
  
  const int TABLE_SIZE = 100;
  
  struct Product {
      int productID;
      string name;
      double price;
      bool isDeleted;
  
      Product() : productID(-1), name(""), price(0.0), isDeleted(false) {}
      Product(int id, string name, double price) : productID(id), name(name), price(price), isDeleted(false) {}
  };
  
  class HashTable {
  private:
      Product table[TABLE_SIZE];
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void addProduct(int productID, string name, double price) {
          int index = hashFunction(productID);
          int originalIndex = index;
          bool placed = false;
  
          while (!placed) {
              if (table[index].productID == -1 || table[index].isDeleted) {
                  table[index] = Product(productID, name, price);
                  placed = true;
              } else {
                  index = (index + 1) % TABLE_SIZE;
                  if (index == originalIndex) {
                      cout << "Hash table is full!" << endl;
                      return;
                  }
              }
          }
      }
  
      Product* searchProduct(int productID) {
          int index = hashFunction(productID);
          int originalIndex = index;
  
          while (table[index].productID != -1) {
              if (table[index].productID == productID && !table[index].isDeleted) {
                  return &table[index];
              }
              index = (index + 1) % TABLE_SIZE;
              if (index == originalIndex) break;
          }
          return nullptr;
      }
  
      void updateProduct(int productID, string name, double price) {
          Product* product = searchProduct(productID);
          if (product) {
              product->name = name;
              product->price = price;
              cout << "Product updated successfully." << endl;
          } else {
              cout << "Product not found." << endl;
          }
      }
  
      void deleteProduct(int productID) {
          Product* product = searchProduct(productID);
          if (product) {
              product->isDeleted = true;
              cout << "Product deleted successfully." << endl;
          } else {
              cout << "Product not found." << endl;
          }
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              if (table[i].productID != -1 && !table[i].isDeleted) {
                  cout << "Index " << i << ": "
                       << "ProductID: " << table[i].productID << ", "
                       << "Name: " << table[i].name << ", "
                       << "Price: " << table[i].price << endl;
              }
          }
      }
  };
  
  int main() {
      HashTable catalog;
  
      catalog.addProduct(101, "Laptop", 1500.0);
      catalog.addProduct(102, "Smartphone", 800.0);
      catalog.addProduct(103, "Headphones", 150.0);
  
      catalog.displayTable();
  
      Product* found = catalog.searchProduct(102);
      if (found) {
          cout << "Product found: " << found->name << " - $" << found->price << endl;
      }
  
      catalog.updateProduct(103, "Wireless Headphones", 200.0);
      catalog.deleteProduct(101);
  
      cout << "
After Updates:" << endl;
      catalog.displayTable();
  
      return 0;
  }
       
      #include <iostream> //Create a hash table to manage employee records. Each record should include an employee ID, name, and department. Use chaining with linked lists for collision handling. Support adding, searching, and dele ng employee records 
  #include <string>
  #include <list>
  using namespace std;
  
  struct Employee {
      int employeeID;
      string name;
      string department;
  
      Employee(int id, string name, string department) : employeeID(id), name(name), department(department) {}
  };
  
  const int TABLE_SIZE = 10;
  
  class HashTable {
  private:
      list<Employee> table[TABLE_SIZE];
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void addEmployee(int employeeID, string name, string department) {
          int index = hashFunction(employeeID);
          table[index].emplace_back(employeeID, name, department);
          cout << "Employee added successfully." << endl;
      }
  
      Employee* searchEmployee(int employeeID) {
          int index = hashFunction(employeeID);
          for (auto& emp : table[index]) {
              if (emp.employeeID == employeeID) {
                  return &emp;
              }
          }
          return nullptr;
      }
  
      void deleteEmployee(int employeeID) {
          int index = hashFunction(employeeID);
          for (auto it = table[index].begin(); it != table[index].end(); ++it) {
              if (it->employeeID == employeeID) {
                  table[index].erase(it);
                  cout << "Employee deleted successfully." << endl;
                  return;
              }
          }
          cout << "Employee not found." << endl;
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              cout << "Index " << i << ": ";
              for (const auto& emp : table[i]) {
                  cout << "[ID: " << emp.employeeID << ", Name: " << emp.name << ", Dept: " << emp.department << "] -> ";
              }
              cout << "nullptr" << endl;
          }
      }
  };
  
  int main() {
      HashTable employees;
  
      employees.addEmployee(101, "Alice", "HR");
      employees.addEmployee(102, "Bob", "Engineering");
      employees.addEmployee(203, "Charlie", "Finance");
  
      employees.displayTable();
  
      Employee* found = employees.searchEmployee(102);
      if (found) {
          cout << "Employee found: " << found->name << ", Department: " << found->department << endl;
      }
  
      employees.deleteEmployee(101);
  
      cout << "
After Deletion:" << endl;
      employees.displayTable();
  
      return 0;
  }
  
  #include <iostream> // Develop a hash table that stores students’ roll numbers as keys and their grades as values. Use quadra c probing for collision resolu on. Implement insert, search, and delete func ons to manage grades efficiently
  using namespace std;
  
  const int TABLE_SIZE = 100;
  
  struct Student {
      int rollNumber;
      char grade;
      bool isDeleted;
  
      Student() : rollNumber(-1), grade(' '), isDeleted(false) {}
      Student(int roll, char g) : rollNumber(roll), grade(g), isDeleted(false) {}
  };
  
  class HashTable {
  private:
      Student table[TABLE_SIZE];
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void insert(int rollNumber, char grade) {
          int index = hashFunction(rollNumber);
          int i = 0;
  
          while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1 &&
                 !table[(index + i * i) % TABLE_SIZE].isDeleted &&
                 table[(index + i * i) % TABLE_SIZE].rollNumber != rollNumber) {
              i++;
              if (i >= TABLE_SIZE) {
                  cout << "Hash table is full!" << endl;
                  return;
              }
          }
  
          int finalIndex = (index + i * i) % TABLE_SIZE;
          table[finalIndex] = Student(rollNumber, grade);
          cout << "Student grade added successfully." << endl;
      }
  
      char search(int rollNumber) {
          int index = hashFunction(rollNumber);
          int i = 0;
  
          while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
              int finalIndex = (index + i * i) % TABLE_SIZE;
              if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                  return table[finalIndex].grade;
              }
              i++;
              if (i >= TABLE_SIZE) break;
          }
          return ' ';
      }
  
      void deleteStudent(int rollNumber) {
          int index = hashFunction(rollNumber);
          int i = 0;
  
          while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
              int finalIndex = (index + i * i) % TABLE_SIZE;
              if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                  table[finalIndex].isDeleted = true;
                  cout << "Student grade deleted successfully." << endl;
                  return;
              }
              i++;
              if (i >= TABLE_SIZE) break;
          }
          cout << "Student not found." << endl;
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              if (table[i].rollNumber != -1 && !table[i].isDeleted) {
                  cout << "Index " << i << ": Roll Number: " << table[i].rollNumber 
                       << ", Grade: " << table[i].grade << endl;
              }
          }
      }
  };
  
  int main() {
      HashTable grades;
  
      grades.insert(101, 'A');
      grades.insert(102, 'B');
      grades.insert(203, 'C');
  
      grades.displayTable();
  
      char foundGrade = grades.search(102);
      if (foundGrade != ' ') {
          cout << "Grade for roll number 102: " << foundGrade << endl;
      } else {
          cout << "Student not found." << endl;
      }
  
      grades.deleteStudent(101);
  
      cout << "
After Deletion:" << endl;
      grades.displayTable();
  
      return 0;
  }
  
  #include <iostream> //Implement a hash table to store integer values using a simple modulo-based hash func on. Define the size of the hash table as 10. Implement insert and search func ons, and demonstrate them by inser ng values into the table and searching for specific values.
  #include <vector>
  using namespace std;
  
  const int TABLE_SIZE = 10;
  
  class HashTable {
  private:
      vector<int> table[TABLE_SIZE];  // Using separate chaining with vectors
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void insert(int value) {
          int index = hashFunction(value);
          table[index].push_back(value);
          cout << "Inserted value " << value << " at index " << index << "." << endl;
      }
  
      bool search(int value) {
          int index = hashFunction(value);
          for (int i = 0; i < table[index].size(); ++i) {
              if (table[index][i] == value) {
                  cout << "Found value " << value << " at index " << index << "." << endl;
                  return true;
              }
          }
          cout << "Value " << value << " not found in the table." << endl;
          return false;
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              cout << "Index " << i << ": ";
              for (int value : table[i]) {
                  cout << value << " -> ";
              }
              cout << "nullptr" << endl;
          }
      }
  };
  
  int main() {
      HashTable ht;
  
      // Insert values
      ht.insert(5);
      ht.insert(15);
      ht.insert(25);
      ht.insert(35);
  
      // Display hash table
      cout << "
Hash Table contents:" << endl;
      ht.displayTable();
  
      // Search for specific values
      ht.search(15);
      ht.search(7);
  
      return 0;
  }
  
  
  #include <iostream> //Create a system to manage a parking lot. Each slot has a unique ID, and each vehicle has a registra on number. Use a hash table with linear probing to store vehicle informa on by slot ID and support func ons for adding, searching, and removing vehicles 
  #include <string>
  using namespace std;
  
  const int PARKING_SIZE = 20;
  
  struct Vehicle {
      int slotID;
      string regNumber;
      bool isOccupied;
  
      Vehicle() : slotID(-1), regNumber(""), isOccupied(false) {}
      Vehicle(int id, string reg) : slotID(id), regNumber(reg), isOccupied(true) {}
  };
  
  class ParkingLot {
  private:
      Vehicle parkingSlots[PARKING_SIZE];
  
      int hashFunction(int slotID) {
          return slotID % PARKING_SIZE;
      }
  
  public:
      void addVehicle(int slotID, string regNumber) {
          int index = hashFunction(slotID);
          int originalIndex = index;
          int i = 0;
  
          while (parkingSlots[index].isOccupied && parkingSlots[index].slotID != slotID) {
              index = (originalIndex + i) % PARKING_SIZE;
              i++;
              if (i >= PARKING_SIZE) {
                  cout << "Parking lot is full, cannot add vehicle." << endl;
                  return;
              }
          }
  
          parkingSlots[index] = Vehicle(slotID, regNumber);
          cout << "Vehicle with registration number " << regNumber << " added to slot " << slotID << "." << endl;
      }
  
      Vehicle* searchVehicle(int slotID) {
          int index = hashFunction(slotID);
          int originalIndex = index;
          int i = 0;
  
          while (parkingSlots[index].isOccupied) {
              if (parkingSlots[index].slotID == slotID) {
                  return &parkingSlots[index];
              }
              index = (originalIndex + i) % PARKING_SIZE;
              i++;
              if (i >= PARKING_SIZE) break;
          }
          return nullptr;
      }
  
      void removeVehicle(int slotID) {
          Vehicle* vehicle = searchVehicle(slotID);
          if (vehicle && vehicle->isOccupied) {
              vehicle->isOccupied = false;
              vehicle->slotID = -1;
              vehicle->regNumber = "";
              cout << "Vehicle removed from slot " << slotID << "." << endl;
          } else {
              cout << "Vehicle not found in slot " << slotID << "." << endl;
          }
      }
  
      void displayParkingLot() {
          for (int i = 0; i < PARKING_SIZE; ++i) {
              if (parkingSlots[i].isOccupied) {
                  cout << "Slot " << i << ": Registration Number: " << parkingSlots[i].regNumber << endl;
              } else {
                  cout << "Slot " << i << ": Empty" << endl;
              }
          }
      }
  };
  
  int main() {
      ParkingLot lot;
  
      // Add vehicles
      lot.addVehicle(1, "ABC123");
      lot.addVehicle(5, "XYZ987");
      lot.addVehicle(12, "LMN456");
  
      // Display parking lot
      cout << "
Parking Lot Status:" << endl;
      lot.displayParkingLot();
  
      // Search for a specific vehicle
      Vehicle* found = lot.searchVehicle(5);
      if (found) {
          cout << "Vehicle found in slot " << found->slotID << " with registration number: " << found->regNumber << endl;
      } else {
          cout << "Vehicle not found in slot 5." << endl;
      }
  
      // Remove a vehicle
      lot.removeVehicle(1);
  
      // Display parking lot after removal
      cout << "
Parking Lot Status after Removal:" << endl;
      lot.displayParkingLot();
  
      return 0;
  }
  
  #include <iostream> //Implement a system to track student a endance, with student roll numbers as keys and a counter for the number of classes a ended. Use chaining to handle collisions and provide functions for adding a endance, viewing total a endance, and reseting data.
  #include <list>
  #include <string>
  using namespace std;
  
  const int TABLE_SIZE = 10;
  
  struct Student {
      int rollNumber;
      int attendanceCount;
  
      Student(int roll) : rollNumber(roll), attendanceCount(0) {}
  };
  
  class AttendanceSystem {
  private:
      list<Student> table[TABLE_SIZE];
  
      int hashFunction(int rollNumber) {
          return rollNumber % TABLE_SIZE;
      }
  
  public:
      // Add attendance for a student
      void addAttendance(int rollNumber) {
          int index = hashFunction(rollNumber);
  
          // Search for the student in the chain
          for (auto& student : table[index]) {
              if (student.rollNumber == rollNumber) {
                  student.attendanceCount++;
                  cout << "Added attendance for student roll number " << rollNumber << "." << endl;
                  return;
              }
          }
  
          // If student is not found, add a new entry
          table[index].emplace_back(rollNumber);
          table[index].back().attendanceCount++;
          cout << "Student roll number " << rollNumber << " added with attendance count initialized to 1." << endl;
      }
  
      // View total attendance for a student
      int viewAttendance(int rollNumber) {
          int index = hashFunction(rollNumber);
  
          // Search for the student in the chain
          for (const auto& student : table[index]) {
              if (student.rollNumber == rollNumber) {
                  cout << "Total attendance for student roll number " << rollNumber << " is " << student.attendanceCount << " classes." << endl;
                  return student.attendanceCount;
              }
          }
  
          cout << "Student roll number " << rollNumber << " not found." << endl;
          return -1;
      }
  
      // Reset all attendance data
      void resetAttendance() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              table[i].clear();
          }
          cout << "All attendance data has been reset." << endl;
      }
  
      // Display attendance data for all students
      void displayAllAttendance() {
          cout << "Attendance data:" << endl;
          for (int i = 0; i < TABLE_SIZE; ++i) {
              cout << "Index " << i << ": ";
              for (const auto& student : table[i]) {
                  cout << "[Roll Number: " << student.rollNumber << ", Attendance: " << student.attendanceCount << "] -> ";
              }
              cout << "nullptr" << endl;
          }
      }
  };
  
  int main() {
      AttendanceSystem attendance;
  
      // Add attendance for students
      attendance.addAttendance(101);
      attendance.addAttendance(102);
      attendance.addAttendance(103);
      attendance.addAttendance(101);  // Increment attendance for roll number 101
  
      // Display all attendance
      cout << "
Displaying all attendance:" << endl;
      attendance.displayAllAttendance();
  
      // View total attendance for a specific student
      attendance.viewAttendance(101);
      attendance.viewAttendance(104);  // Test for a non-existent student
  
      // Reset attendance data
      attendance.resetAttendance();
  
      // Display all attendance after reset
      cout << "
Displaying all attendance after reset:" << endl;
      attendance.displayAllAttendance();
  
      return 0;
  }
  
  
  #include <iostream> //Write a program to implement chaining with linked lists as a collision resolution technique in a hash table. Store student records (Student ID and Name) and provide options to insert, delete, and search for a student record.
  #include <list> 
  #include <string> 
  using namespace std; 
   
  const int TABLE_SIZE = 10; 
   
  struct Student { 
      int studentID; 
      string name; 
   
      Student(int id, const string& studentName) : studentID(id), name(studentName) {} 
  }; 
   
  class HashTable { 
  private: 
      list<Student> table[TABLE_SIZE]; 
   
      int hashFunction(int studentID) { 
          return studentID % TABLE_SIZE; 
      } 
   
  public: 
      // Insert a student record 
      void insert(int studentID, const string& name) { 
          int index = hashFunction(studentID); 
   
          // Check if the student already exists, and if so, return without inser ng 
          for (const auto& student : table[index]) { 
              if (student.studentID == studentID) { 
                  cout << "Student with ID " << studentID << " already exists." << endl; 
                  return; 
              } 
          } 
   
          // Insert the new student 
          table[index].emplace_back(studentID, name); 
          cout << "Inserted student with ID " << studentID << " and Name " << name << "." << endl; 
      } 
   
      // Delete a student record 
      void remove(int studentID) { 
          int index = hashFunction(studentID); 
   
          for (auto it = table[index].begin(); it != table[index].end(); ++it) { 
              if (it->studentID == studentID) { 
                  table[index].erase(it); 
                  cout << "Deleted student with ID " << studentID << "." << endl; 
                  return; 
              } 
          } 
   
          cout << "Student with ID " << studentID << " not found." << endl; 
      } 
   
      // Search for a student record 
      void search(int studentID) { 
          int index = hashFunction(studentID); 
           for (const auto& student : table[index]) { 
              if (student.studentID == studentID) { 
                  cout << "Found student with ID " << studentID << " and Name " << student.name << "." << 
  endl; 
                  return; 
              } 
          } 
   
          cout << "Student with ID " << studentID << " not found." << endl; 
      } 
   
      // Display all student records 
      void displayTable() { 
          for (int i = 0; i < TABLE_SIZE; ++i) { 
              cout << "Index " << i << ": "; 
              for (const auto& student : table[i]) { 
                  cout << "[ID: " << student.studentID << ", Name: " << student.name << "] -> "; 
              } 
              cout << "nullptr" << endl; 
          } 
      } 
  }; 
   
  int main() { 
      HashTable ht; 
   
      // Insert student records 
      ht.insert(101, "Alice"); 
      ht.insert(102, "Bob"); 
      ht.insert(112, "Charlie");  // Causes a collision with ID 102 
      ht.insert(203, "David"); 
   
      // Display hash table contents 
      cout << "
Hash Table contents:" << endl; 
      ht.displayTable(); 
   
      // Search for a student 
      ht.search(102); 
      ht.search(999);  // Test for a non-existent student 
   
      // Delete a student record 
      ht.remove(112); 
   
      // Display hash table contents a er dele on 
      cout << "
Hash Table a er dele on:" << endl; 
      ht.displayTable(); 
   
      return 0; 
  }
  
  
  #include <iostream> //Implement a divide-and-conquer algorithm to find the closest pair of points in a 2D plane. This is a classic problem that can be efficiently solved with divide and conquer by recursively finding the minimum distance in subarrays
  #include <vector> 
  #include <cmath> 
  #include <algorithm> 
  #include <float.h> 
  using namespace std; 
  struct Point { 
  int x, y; 
  }; 
  // Compare points based on x-coordinate 
  bool compareX(const Point& p1, const Point& p2) { 
  return p1.x < p2.x; 
  } 
  // Compare points based on y-coordinate 
  bool compareY(const Point& p1, const Point& p2) { 
  return p1.y < p2.y; 
  } 
  // Calculate Euclidean distance between two points 
  double distance(const Point& p1, const Point& p2) { 
  return sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)); 
  } 
   
  // Brute-force approach to find the smallest distance for small point sets 
  double bruteForce(vector<Point>& points, int le , int right) { 
      double minDist = DBL_MAX; 
      for (int i = le ; i < right; ++i) { 
          for (int j = i + 1; j <= right; ++j) { 
              double dist = distance(points[i], points[j]); 
              if (dist < minDist) { 
                  minDist = dist; 
              } 
          } 
      } 
      return minDist; 
  } 
   
  // Find the minimum distance in a strip of points 
  double stripClosest(vector<Point>& strip, double d) { 
      double minDist = d; 
      sort(strip.begin(), strip.end(), compareY); 
   
      for (int i = 0; i < strip.size(); ++i) { 
          for (int j = i + 1; j < strip.size() && (strip[j].y - strip[i].y) < minDist; ++j) { 
              double dist = distance(strip[i], strip[j]); 
              if (dist < minDist) { 
                  minDist = dist; 
              } 
          } 
      } 
      return minDist; 
  } 
   
  // Recursive divide-and-conquer func on to find the smallest distance 
  double closestPairRec(vector<Point>& points, int le , int right) { 
      if (right - le <= 3) { 
          return bruteForce(points, le , right); 
      } 
   
      int mid = le + (right - le ) / 2; 
      Point midPoint = points[mid]; 
   
      double dl = closestPairRec(points, le , mid); 
      double dr = closestPairRec(points, mid + 1, right); 
   
      double d = min(dl, dr); 
   
      vector<Point> strip; 
      for (int i = le ; i <= right; ++i) { 
          if (abs(points[i].x - midPoint.x) < d) { 
              strip.push_back(points[i]); 
          } 
      } 
   
      return min(d, stripClosest(strip, d)); 
  } 
   
  // Main func on to find the closest pair of points 
  double closestPair(vector<Point>& points) { 
      sort(points.begin(), points.end(), compareX); 
      return closestPairRec(points, 0, points.size() - 1); 
  } 
   
  int main() { 
      vector<Point> points = {{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}}; 
   
      double minDistance = closestPair(points); 
      cout << "The smallest distance between a pair of points is: " << minDistance << endl; 
   
      return 0; 
  }
  
  #include <iostream> //Use the QuickSort algorithm to sort an array of transac on records by transac on amount. Implement the algorithm recursively and allow the user to input transac on records.
  #include <vector> 
  using namespace std; 
   
  struct Transaction { 
      int id; 
      double amount; 
   
      Transaction(int id, double amount) : id(id), amount(amount) {} 
  }; 
   
  int partion(vector<Transaction>& transactions, int low, int high) { 
      double pivot = transactions[high].amount; 
      int i = low - 1; 
   
      for (int j = low; j < high; ++j) { 
          if (transactions[j].amount < pivot) { 
              ++i; 
              swap(transactions[i], transactions[j]); 
          } 
      } 
      swap(transactions[i + 1], transactions[high]); 
      return i + 1; 
  } 
   
  void quickSort(vector<Transaction>& transactions, int low, int high) { 
      if (low < high) { 
          int pi = partion(transactions, low, high); 
          quickSort(transactions, low, pi - 1); 
          quickSort(transactions, pi + 1, high); 
      } 
  } 
   
  void displayTransactions(const vector<Transaction>& transactions) { 
     cout << "Sorted Transactions by Amount:
"; 
      for (const auto& t : transactions) { 
          cout << "ID: " << t.id << ", Amount: " << t.amount << endl; 
      } 
  } 
   
  int main() { 
      int n; 
      cout << "Enter the number of transati ons: "; 
      cin >> n; 
   
      vector<Transaction> transactions; 
      for (int i = 0; i < n; ++i) { 
          int id; 
          double amount; 
          cout << "Enter transaction ID and amount: "; 
          cin >> id >> amount; 
          transactions.emplace_back(id, amount); 
      } 
   
      quickSort(transactions, 0, n - 1); 
      displayTransactions(transactions); 
   
      return 0; 
      /*
      Enter the number of transactions: 5
  Enter transaction ID and amount: 101 500.75
  Enter transaction ID and amount: 102 250.50
  Enter transaction ID and amount: 103 750.30
  Enter transaction ID and amount: 104 100.00
  Enter transaction ID and amount: 105 300.00
  
      */
  }
  
  
  #include <iostream> //Implement the Merge Sort technique to merge two pre-sorted arrays of customer orders into one sorted array. Display the combined sorted list of orders
  #include <vector> 
  using namespace std; 
   
  void mergeArrays(const vector<int>& arr1, const vector<int>& arr2, vector<int>& mergedArray) { 
      int i = 0, j = 0; 
      while (i < arr1.size() && j < arr2.size()) { 
          if (arr1[i] <= arr2[j]) { 
              mergedArray.push_back(arr1[i++]); 
          } else { 
              mergedArray.push_back(arr2[j++]); 
          } 
      } 
      while (i < arr1.size()) mergedArray.push_back(arr1[i++]); 
      while (j < arr2.size()) mergedArray.push_back(arr2[j++]); 
  } 
   
  void displayOrders(const vector<int>& orders) { 
      cout << "Merged Sorted Orders:
"; 
      for (int order : orders) { 
          cout << order << " "; 
      } 
      cout << endl; 
  } 
   
  int main() { 
      vector<int> arr1 = {1, 5, 9, 12}; 
      vector<int> arr2 = {3, 6, 7, 10, 15}; 
   
      vector<int> mergedArray; 
      mergeArrays(arr1, arr2, mergedArray); 
      displayOrders(mergedArray); 
   
      return 0; 
  }
  
  #include <iostream> //Simulate a network rou ng algorithm using Dijkstra’s algorithm. The program should determine the shortest path from a source node to all other nodes in a given network.
  #include <vector> 
  #include <queue> 
  #include <limits> 
  using namespace std; 
   
  const int INF = numeric_limits<int>::max(); 
   
  void dijkstra(const vector<vector<pair<int, int>>>& graph, int source) { 
      int n = graph.size(); 
      vector<int> dist(n, INF); 
      dist[source] = 0; 
   
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
      pq.emplace(0, source); 
   
      while (!pq.empty()) { 
          int d = pq.top().first; 
          int u = pq.top().second; 
          pq.pop(); 
   
          if (d > dist[u]) continue; 
   
          for (const auto& edge : graph[u]) { 
              int v = edge.first; 
              int weight = edge.second; 
              if (dist[u] + weight < dist[v]) { 
                  dist[v] = dist[u] + weight; 
                  pq.emplace(dist[v], v); 
              } 
          } 
      } 
   
      cout << "Shortest distances from source node " << source << ":
"; 
      for (int i = 0; i < n; ++i) { 
          if (dist[i] == INF) 
              cout << "Node " << i << ": INF
"; 
          else 
              cout << "Node " << i << ": " << dist[i] << endl; 
      } 
  } 
   
  int main() { 
      int n = 5; 
      vector<vector<pair<int, int>>> graph(n); 
       
      graph[0].push_back({1, 10}); 
      graph[0].push_back({2, 3}); 
      graph[1].push_back({3, 2}); 
      graph[2].push_back({1, 1}); 
      graph[2].push_back({3, 8}); 
      graph[3].push_back({4, 7}); 
      graph[4].push_back({0, 9}); 
   
      int source = 0; 
      dijkstra(graph, source); 
   
      return 0; 
  }
  
  
  #include <iostream> //Develop a program that finds the minimum spanning tree of a graph represen ng a telecommunica ons network using Prim's algorithm. The user should be able to view the total minimized connec on cost.
  #include <vector> 
  #include <queue> 
  using namespace std; 
   
  struct Edge { 
      int to, weight; 
  }; 
   
  int primMST(const vector<vector<Edge>>& graph) { 
      int n = graph.size(); 
      vector<bool> inMST(n, false); 
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
      pq.emplace(0, 0); 
   
      int totalCost = 0; 
      while (!pq.empty()) { 
          int weight = pq.top().first; 
          int u = pq.top().second; 
          pq.pop(); 
   
          if (inMST[u]) continue; 
          inMST[u] = true; 
          totalCost += weight; 
   
          for (const Edge& edge : graph[u]) { 
              if (!inMST[edge.to]) { 
                  pq.emplace(edge.weight, edge.to); 
              } 
          } 
      } 
      return totalCost; 
  } 
   
  int main() { 
      int n = 5; 
      vector<vector<Edge>> graph(n); 
   
      graph[0].push_back({1, 2}); 
      graph[0].push_back({3, 6}); 
      graph[1].push_back({0, 2}); 
      graph[1].push_back({2, 3}); 
      graph[1].push_back({3, 8}); 
      graph[1].push_back({4, 5}); 
      graph[2].push_back({1, 3}); 
      graph[2].push_back({4, 7}); 
      graph[3].push_back({0, 6}); 
      graph[3].push_back({1, 8}); 
      graph[4].push_back({1, 5}); 
      graph[4].push_back({2, 7}); 
   
      int totalCost = primMST(graph); 
      cout << "Total minimized connec on cost for the network: " << totalCost << endl; 
   
      return 0; 
  }
  
  
  #include <iostream> //A company wants to maximize its profit by selecting projects based on available resources. Use the Fractional Knapsack problem to select the projects that yield the highest return within the resource limit.
  #include <vector>
  #include <algorithm>
  
  using namespace std;
  
  // Structure to represent a project
  struct Project {
      int id;
      double profit;
      double resource;
  
      Project(int id, double profit, double resource) : id(id), profit(profit), resource(resource) {}
  };
  
  // Comparator function to sort projects by profit-to-resource ratio in descending order
  bool compare(const Project& a, const Project& b) {
      return (a.profit / a.resource) > (b.profit / b.resource);
  }
  
  // Function to solve the Fractional Knapsack problem
  double fractionalKnapsack(vector<Project>& projects, double maxResources) {
      // Sort projects based on profit-to-resource ratio
      sort(projects.begin(), projects.end(), compare);
  
      double totalProfit = 0.0;
      for (const auto& project : projects) {
          if (maxResources >= project.resource) {
              maxResources -= project.resource;
              totalProfit += project.profit;
          } else {
              totalProfit += project.profit * (maxResources / project.resource);
              break;
          }
      }
      return totalProfit;
  }
  
  int main() {
      int n;
      double maxResources;
  
      cout << "Enter the number of projects: ";
      cin >> n;
  
      vector<Project> projects;
      cout << "Enter the profit and resource required for each project:
";
      for (int i = 0; i < n; ++i) {
          double profit, resource;
          cout << "Project " << i + 1 << ": ";
          cin >> profit >> resource;
          projects.emplace_back(i + 1, profit, resource);
      }
  
      cout << "Enter the maximum available resources: ";
      cin >> maxResources;
  
      double maxProfit = fractionalKnapsack(projects, maxResources);
  
      cout << "Maximum profit within resource limit: " << maxProfit << endl;
  
      return 0;
      /*
      Enter the number of projects: 3
      Enter the profit and resource required for each project:
      Project 1: 60 10
      Project 2: 100 20
      Project 3: 120 30
      Enter the maximum available resources: 50
      */
  }
  
  
  
  
  #include <iostream> //Implement a binary search algorithm to quickly find the posi on of a specific book in a sorted list of ISBN numbers.
  #include <vector> 
  using namespace std; 
   
  int binarySearch(const vector<int>& isbns, int target) { 
      int le = 0, right = isbns.size() - 1; 
   
      while (le <= right) { 
          int mid = le + (right - le ) / 2; 
          if (isbns[mid] == target) { 
              return mid; 
          } else if (isbns[mid] < target) { 
              le = mid + 1; 
          } else { 
              right = mid - 1; 
          } 
      } 
      return -1; 
  } 
   
  int main() { 
      vector<int> isbns = {12345, 23456, 34567, 45678, 56789}; 
      int targetISBN = 34567; 
   
      int pos = binarySearch(isbns, targetISBN); 
      if (pos != -1) { 
          cout << "ISBN " << targetISBN << " found at posi on: " << pos << endl; 
      } else { 
          cout << "ISBN " << targetISBN << " not found." << endl; 
      } 
   
      return 0; 
  }
  
  
  #include <iostream> //Design a program to find the minimum cost to connect all ci es in a region by construc ng roads using Kruskal's algorithm. Input should include city pairs and road construction costs.
  #include <vector>
  #include <tuple>
  #include <algorithm>
  
  using namespace std;
  
  // Structure to represent a union-find data structure (disjoint set)
  class UnionFind {
  private:
      vector<int> parent, rank;
  
  public:
      UnionFind(int n) {
          parent.resize(n);
          rank.resize(n, 0);
          for (int i = 0; i < n; ++i) {
              parent[i] = i;
          }
      }
  
      // Find the representative of a set
      int find(int u) {
          if (u != parent[u]) {
              parent[u] = find(parent[u]); // Path compression
          }
          return parent[u];
      }
  
      // Union by rank
      bool unionSets(int u, int v) {
          int rootU = find(u);
          int rootV = find(v);
  
          if (rootU == rootV) return false; // They are already in the same set
  
          if (rank[rootU] > rank[rootV]) {
              parent[rootV] = rootU;
          } else if (rank[rootU] < rank[rootV]) {
              parent[rootU] = rootV;
          } else {
              parent[rootV] = rootU;
              rank[rootU]++;
          }
          return true;
      }
  };
  
  // Kruskal's algorithm to find MST
  int kruskal(int n, vector<tuple<int, int, int>>& edges) {
      // Sort edges by weight
      sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
          return get<2>(a) < get<2>(b);
      });
  
      UnionFind uf(n);
      int minCost = 0;
  
      cout << "Selected roads for the minimum spanning tree:
";
  
      for (const auto& edge : edges) {
          int u, v, cost;
          tie(u, v, cost) = edge;
  
          if (uf.unionSets(u, v)) {
              minCost += cost;
              cout << "Road between city " << u << " and city " << v << " with cost " << cost << "
";
          }
      }
  
      return minCost;
  }
  
  int main() {
      int n, m;
  
      cout << "Enter the number of cities: ";
      cin >> n;
  
      cout << "Enter the number of possible roads: ";
      cin >> m;
  
      vector<tuple<int, int, int>> edges;
  
      cout << "Enter the roads in the format (city1 city2 cost):
";
      for (int i = 0; i < m; ++i) {
          int u, v, cost;
          cin >> u >> v >> cost;
          edges.emplace_back(u, v, cost);
      }
  
      int minCost = kruskal(n, edges);
  
      cout << "Minimum cost to connect all cities: " << minCost << endl;
  
      return 0;
      /*
      Enter the number of cities: 4
  Enter the number of possible roads: 5
  Enter the roads in the format (city1 city2 cost):
  0 1 10
  0 2 6
  0 3 5
  1 3 15
  2 3 4
      */
  }
  
  
  #include <iostream> //Implement a greedy algorithm to schedule jobs within their deadlines to maximize profit. Each job has a profit and a deadline, and only one job can be performed at a time.
  #include <vector> 
  #include <algorithm> 
  using namespace std; 
   
  struct Job { 
      int id, deadline, profit; 
  }; 
   
  bool compare(const Job& a, const Job& b) { 
      return a.profit > b.profit; 
  } 
   
  int jobScheduling(vector<Job>& jobs) { 
      sort(jobs.begin(), jobs.end(), compare); 
   
      int maxDeadline = 0; 
      for (const auto& job : jobs) { 
          maxDeadline = max(maxDeadline, job.deadline); 
      } 
   
      vector<int> schedule(maxDeadline + 1, -1); 
      int maxProfit = 0; 
   
      for (const auto& job : jobs) { 
          for (int j = job.deadline; j > 0; --j) { 
              if (schedule[j] == -1) { 
                  schedule[j] = job.id; 
                  maxProfit += job.profit; 
                  break; 
              } 
          } 
      } 
      return maxProfit; 
  } 
   
  int main() { 
      vector<Job> jobs = {{1, 2, 100}, {2, 1, 19}, {3, 2, 27}, {4, 1, 25}, {5, 3, 15}}; 
      int maxProfit = jobScheduling(jobs); 
      cout << "Maximum profit by scheduling jobs: " << maxProfit << endl; 
   
      return 0; 
  }
  
  
  #include <iostream> //Use the Floyd-Warshall algorithm to calculate the shortest path between all pairs of ci es in a network.
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  void floydWarshall(vector<vector<int>>& distances) { 
      int n = distances.size(); 
      vector<vector<int>> shortestPaths = distances; 
   
      // Floyd-Warshall algorithm 
      for (int k = 0; k < n; ++k) { 
          for (int i = 0; i < n; ++i) { 
              for (int j = 0; j < n; ++j) { 
                  if (shortestPaths[i][k] != INT_MAX && shortestPaths[k][j] != INT_MAX  
                      && shortestPaths[i][j] > shortestPaths[i][k] + shortestPaths[k][j]) { 
                      shortestPaths[i][j] = shortestPaths[i][k] + shortestPaths[k][j]; 
                  } 
              } 
          } 
      } 
   
      // Print the shortest path matrix 
      cout << "Shortest path distances between each pair of ci es:
"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              if (shortestPaths[i][j] == INT_MAX) 
                  cout << "INF "; 
              else 
                  cout << shortestPaths[i][j] << " "; 
          } 
          cout << endl; 
      } 
  } 
   
  int main() { 
      // Example network of ci es with distances 
      vector<vector<int>> distances = { 
          {0, 5, INT_MAX, 10}, 
          {INT_MAX, 0, 3, INT_MAX}, 
          {INT_MAX, INT_MAX, 0, 1}, 
          {INT_MAX, INT_MAX, INT_MAX, 0} 
      }; 
   
      floydWarshall(distances); 
      return 0; 
  }
  
  
  #include <iostream> //Implement the Bellman-Ford algorithm to find the shortest path from a source warehouse to all other delivery locations in a logistics network, considering possible nega ve weights for certain routes.
  #include <vector>
  #include <tuple>
  #include <climits>
  
  using namespace std;
  
  // Function to implement Bellman-Ford algorithm
  bool bellmanFord(int vertices, int edges, int source, 
                   const vector<tuple<int, int, int>>& edgeList,
                   vector<int>& distances, vector<int>& predecessors) {
      // Initialize distances and predecessors
      distances.assign(vertices, INT_MAX);
      predecessors.assign(vertices, -1);
      distances[source] = 0;
  
      // Relax edges |V| - 1 times
      for (int i = 0; i < vertices - 1; ++i) {
          for (const auto& edge : edgeList) {
              int u, v, weight;
              tie(u, v, weight) = edge;
  
              if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
                  distances[v] = distances[u] + weight;
                  predecessors[v] = u;
              }
          }
      }
  
      // Check for negative-weight cycles
      for (const auto& edge : edgeList) {
          int u, v, weight;
          tie(u, v, weight) = edge;
  
          if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
              cout << "Graph contains a negative-weight cycle.
";
              return false;
          }
      }
  
      return true;
  }
  
  // Function to print the shortest paths
  void printPaths(int source, const vector<int>& distances, const vector<int>& predecessors) {
      cout << "Shortest distances from source location " << source << ":
";
      for (size_t i = 0; i < distances.size(); ++i) {
          cout << "To location " << i << ": ";
          if (distances[i] == INT_MAX) {
              cout << "No path
";
          } else {
              cout << distances[i] << " (Path: ";
              int current = i;
              vector<int> path;
  
              while (current != -1) {
                  path.push_back(current);
                  current = predecessors[current];
              }
  
              for (auto it = path.rbegin(); it != path.rend(); ++it) {
                  cout << *it << (next(it) == path.rend() ? ")" : " -> ");
              }
              cout << "
";
          }
      }
  }
  
  int main() {
      int vertices, edges, source;
  
      // Input number of vertices and edges
      cout << "Enter the number of locations (vertices): ";
      cin >> vertices;
      cout << "Enter the number of routes (edges): ";
      cin >> edges;
  
      vector<tuple<int, int, int>> edgeList;
  
      // Input the edges (u, v, weight)
      cout << "Enter the routes in the format (source destination weight):
";
      for (int i = 0; i < edges; ++i) {
          int u, v, weight;
          cin >> u >> v >> weight;
          edgeList.emplace_back(u, v, weight);
      }
  
      // Input the source vertex
      cout << "Enter the source location: ";
      cin >> source;
  
      vector<int> distances, predecessors;
  
      // Run Bellman-Ford algorithm
      if (bellmanFord(vertices, edges, source, edgeList, distances, predecessors)) {
          printPaths(source, distances, predecessors);
      }
  
      return 0;
      /*
      Enter the number of locations (vertices): 5
  Enter the number of routes (edges): 8
  Enter the routes in the format (source destination weight):
  0 1 -1
  0 2 4
  1 2 3
  1 3 2
  1 4 2
  3 2 5
  3 1 1
  4 3 -3
  Enter the source location: 0
      */
  }
  
  
  #include <iostream> //Implement the Travelling Salesman Problem (TSP) using dynamic programming to opmize the delivery route for a company, minimizing travel distance and returning to the start location.
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp) { 
      int n = dist.size(); 
   
      // If all ci es are visited, return cost to return to star ng city 
      if (visited == (1 << n) - 1) { 
          return dist[pos][0]; 
      } 
   
      // If result is already computed, return it 
      if (dp[pos][visited] != -1) { 
          return dp[pos][visited]; 
      } 
   
      int minCost = INT_MAX; 
   
      // Try visi ng all unvisited ci es and take the minimum cost 
      for (int city = 0; city < n; ++city) { 
          if ((visited & (1 << city)) == 0) { // Check if city is not visited 
              int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp); 
              minCost = min(minCost, newCost); 
          } 
      } 
   
      // Store and return the result 
      return dp[pos][visited] = minCost; 
  } 
   
  int main() { 
      // Example distance matrix for 4 ci es 
      vector<vector<int>> dist = { 
          {0, 20, 42, 35}, 
          {20, 0, 30, 34}, 
          {42, 30, 0, 12}, 
          {35, 34, 12, 0} 
      };
  
      // for input matrix
      // int n; 
      // cout << "Enter the number of cities: "; 
      // cin >> n; 
      // vector<vector<int>> dist(n, vector<int>(n)); 
      // cout << "Enter the distance matrix (use a large number like 1000000 for no path):
"; 
      // for (int i = 0; i < n; ++i) { 
      //     for (int j = 0; j < n; ++j) { 
      //         cin >> dist[i][j]; 
      //     } 
      // }  
   
      int n = dist.size(); 
      vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
   
      int minCost = tsp(0, 1, dist, dp); // Start from city 0 with only city 0 visited 
   
      cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
      return 0; 
  } 
  
  
  
  #include <iostream> //Implement the Floyd-Warshall algorithm to compute the shortest paths between all pairs of ver ces in a weighted, directed graph. Accept the graph as an adjacency matrix input, and display the final shortest path matrix, showing the minimum distances between each pair of vertices. 
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  void floydWarshall(vector<vector<int>>& graph) { 
      int n = graph.size(); 
      vector<vector<int>> dist = graph; 
   
      // Floyd-Warshall algorithm to compute shortest paths 
      for (int k = 0; k < n; ++k) { 
          for (int i = 0; i < n; ++i) { 
              for (int j = 0; j < n; ++j) { 
                  if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX  
                      && dist[i][j] > dist[i][k] + dist[k][j]) { 
                      dist[i][j] = dist[i][k] + dist[k][j]; 
                  } 
              } 
          } 
      } 
   
      // Display the shortest path matrix 
      cout << "Shortest path matrix:
"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              if (dist[i][j] == INT_MAX) 
                  cout << "INF "; 
              else 
                  cout << dist[i][j] << " "; 
          } 
          cout << endl; 
      } 
  } 
   
  int main() { 
      // Input adjacency matrix for the graph 
      int n; 
      cout << "Enter the number of ver ces: "; 
      cin >> n; 
   
      vector<vector<int>> graph(n, vector<int>(n)); 
      cout << "Enter the adjacency matrix (use " << INT_MAX << " for infinity):
"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              cin >> graph[i][j]; 
          } 
      } 
   
      floydWarshall(graph); 
      return 0; 
      /*
          Enter the number of vertices: 4
  Enter the adjacency matrix (use 2147483647 for infinity):
  0 3 2147483647 5
  2 0 2147483647 4
  2147483647 1 0 2147483647
  2147483647 2147483647 2 0
  
      */
  }
  
  
  
  #include <iostream> //Implement the Travelling Salesman Problem (TSP) using dynamic programming to find the minimum cost of visiting a set of cities exactly once and returning to the starting city. Allow the user to input the distance matrix and output the minimum travel cost and the optimal path.
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp, 
  vector<vector<int>>& path) { 
      int n = dist.size(); 
   
      // Base case: All ci es are visited, return cost to return to star ng city 
      if (visited == (1 << n) - 1) { 
          return dist[pos][0]; 
      } 
   
      // If result is already computed, return it 
      if (dp[pos][visited] != -1) { 
          return dp[pos][visited]; 
      } 
   
      int minCost = INT_MAX; 
      int bestCity = -1; 
   
      // Try visi ng all unvisited ci es and take the minimum cost path 
      for (int city = 0; city < n; ++city) { 
          if ((visited & (1 << city)) == 0) { // Check if city is not visited 
              int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp, path); 
              if (newCost < minCost) { 
                  minCost = newCost; 
                  bestCity = city; 
              } 
          } 
      } 
   
      // Store the result and update the path 
      dp[pos][visited] = minCost; 
      path[pos][visited] = bestCity; 
      return minCost; 
  } 
   
  void printPath(int start, const vector<vector<int>>& path) { 
      int n = path.size(); 
      int visited = 1; 
      int pos = start; 
   
      cout << "Optimal path: " << pos << " "; 
      while (path[pos][visited] != -1) { 
          pos = path[pos][visited]; 
          visited |= (1 << pos); 
          cout << "-> " << pos << " "; 
      } 
      cout << "-> " << start << endl; 
  } 
   
  int main() { 
      int n; 
      cout << "Enter the number of cities: "; 
      cin >> n; 
   
      vector<vector<int>> dist(n, vector<int>(n)); 
      cout << "Enter the distance matrix (use a large number like 1000000 for no path):
"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              cin >> dist[i][j]; 
          } 
      } 
   
      vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
      vector<vector<int>> path(n, vector<int>(1 << n, -1)); // Path table to reconstruct the route 
   
      int minCost = tsp(0, 1, dist, dp, path); // Start from city 0 with only the star ng city visited 
   
      cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
      printPath(0, path); 
   
      return 0; 
      /*
          Enter the number of cities: 4
  Enter the distance matrix (use a large number like 1000000 for no path):
  0 10 15 20
  10 0 35 25
  15 35 0 30
  20 25 30 0
  
      */
  }
  
  
  
  #include <iostream> //Given a set of projects, each with a profit and a resource requirement, determine the combination of projects that maximizes total profit without exceeding a given resource limit using 0/1 knapsack problem.
  #include <vector>
  #include <algorithm>
  
  using namespace std;
  
  // Function to solve the 0/1 Knapsack problem
  int knapsack(const vector<int>& profits, const vector<int>& resources, int resourceLimit, vector<vector<int>>& dp) {
      int n = profits.size();
  
      // Fill dp table
      for (int i = 1; i <= n; ++i) {
          for (int j = 0; j <= resourceLimit; ++j) {
              if (resources[i - 1] <= j) {
                  dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - resources[i - 1]] + profits[i - 1]);
              } else {
                  dp[i][j] = dp[i - 1][j];
              }
          }
      }
  
      // Maximum profit is found at dp[n][resourceLimit]
      return dp[n][resourceLimit];
  }
  
  // Function to reconstruct the selected projects
  vector<int> getSelectedProjects(const vector<int>& profits, const vector<int>& resources, int resourceLimit, const vector<vector<int>>& dp) {
      int n = profits.size();
      vector<int> selectedProjects;
  
      int w = resourceLimit;
      for (int i = n; i > 0 && w > 0; --i) {
          if (dp[i][w] != dp[i - 1][w]) {
              selectedProjects.push_back(i - 1); // Add project index to selectedProjects
              w -= resources[i - 1];
          }
      }
  
      reverse(selectedProjects.begin(), selectedProjects.end());
      return selectedProjects;
  }
  
  int main() {
      int n, resourceLimit;
  
      cout << "Enter the number of projects: ";
      cin >> n;
  
      vector<int> profits(n), resources(n);
  
      cout << "Enter the profits of the projects: ";
      for (int i = 0; i < n; ++i) {
          cin >> profits[i];
      }
  
      cout << "Enter the resource requirements of the projects: ";
      for (int i = 0; i < n; ++i) {
          cin >> resources[i];
      }
  
      cout << "Enter the resource limit: ";
      cin >> resourceLimit;
  
      // Initialize dp table
      vector<vector<int>> dp(n + 1, vector<int>(resourceLimit + 1, 0));
  
      // Calculate the maximum profit using knapsack
      int maxProfit = knapsack(profits, resources, resourceLimit, dp);
  
      // Get the selected projects
      vector<int> selectedProjects = getSelectedProjects(profits, resources, resourceLimit, dp);
  
      cout << "Maximum profit: " << maxProfit << endl;
      cout << "Selected projects: ";
      for (int project : selectedProjects) {
          cout << project + 1 << " "; // Print project indices (1-based)
      }
      cout << endl;
  
      return 0; 
      /*
      Enter the number of projects: 4
  Enter the profits of the projects: 60 100 120 80
  Enter the resource requirements of the projects: 10 20 30 25
  Enter the resource limit: 50
  
      */
  } 
  
  #include <iostream>  //Write a program to solve the Eight Queens problem using backtracking. The program should place eight queens on an 8x8 chessboard such that no two queens threaten each other. Display one of the possible solutions with the placement of queens.
  #include <vector> 
   
  using namespace std; 
   
  // Size of the chessboard 
  const int N = 8; 
   
  // Func on to print the chessboard with queens placed 
  void printSolution(const vector<vector<int>>& board) { 
      for (int i = 0; i < N; ++i) { 
          for (int j = 0; j < N; ++j) { 
              if (board[i][j] == 1) 
                  cout << "Q "; 
              else 
                  cout << ". "; 
          } 
          cout << endl; 
      } 
      cout << endl; 
  } 
   
  // Check if a queen can be placed at board[row][col] 
  bool isSafe(const vector<vector<int>>& board, int row, int col) { 
      // Check this row on le side 
      for (int i = 0; i < col; ++i) 
          if (board[row][i] == 1) 
              return false; 
   
      // Check upper diagonal on le side 
      for (int i = row, j = col; i >= 0 && j >= 0; --i, --j) 
          if (board[i][j] == 1) 
              return false; 
   
      // Check lower diagonal on le side 
      for (int i = row, j = col; j >= 0 && i < N; ++i, --j) 
          if (board[i][j] == 1) 
              return false; 
   
      return true; 
  } 
   
  // Func on to solve the N-Queens problem using backtracking 
  bool solveNQueens(vector<vector<int>>& board, int col) { 
      // Base case: All queens are placed 
      if (col >= N) 
          return true; 
   
      // Consider this column and try placing this queen in all rows one by one 
      for (int i = 0; i < N; ++i) { 
          if (isSafe(board, i, col)) { 
              board[i][col] = 1; // Place the queen 
   
              // Recursively place the rest of the queens 
              if (solveNQueens(board, col + 1)) 
                  return true; 
   
              // If placing queen in board[i][col] doesn't lead to a solu on, 
              // then remove queen from board[i][col] (backtrack) 
              board[i][col] = 0; 
          } 
      } 
      return false; // If the queen cannot be placed in any row in this column 
  } 
   
  int main() { 
      vector<vector<int>> board(N, vector<int>(N, 0)); // Initialize board with 0s 
   
      if (solveNQueens(board, 0)) { 
          cout << "One of the solutions to the Eight Queens problem:
"; 
          printSolution(board); 
      } else { 
          cout << "No solution exists for the Eight Queens problem.
"; 
      } 
   
      return 0; 
  } 
  
  
  #include <iostream> //Implement a program to solve a 9x9 Sudoku puzzle using backtracking. Accept a partially filled board as input and display the completed board if a solution exists.
  #include <vector> 
   
  using namespace std; 
   
  #define N 9 
   
  // Function to print the Sudoku board 
  void printBoard(const vector<vector<int>>& board) { 
      for (int row = 0; row < N; ++row) { 
          for (int col = 0; col < N; ++col) { 
              cout << board[row][col] << " "; 
          } 
          cout << endl; 
      } 
  } 
   
  // Func on to check if placing num in board[row][col] is valid 
  bool isSafe(const vector<vector<int>>& board, int row, int col, int num) { 
      // Check the row 
      for (int x = 0; x < N; ++x) { 
          if (board[row][x] == num) { 
              return false; 
          } 
      } 
   
      // Check the column 
      for (int x = 0; x < N; ++x) { 
          if (board[x][col] == num) { 
              return false; 
          } 
      } 
   
      // Check the 3x3 sub-grid 
      int startRow = row - row % 3; 
      int startCol = col - col % 3; 
      for (int i = 0; i < 3; ++i) { 
          for (int j = 0; j < 3; ++j) { 
              if (board[i + startRow][j + startCol] == num) { 
                  return false; 
              } 
          } 
      } 
   
      return true; 
  } 
   
  // Recursive func on to solve the Sudoku board using backtracking 
  bool solveSudoku(vector<vector<int>>& board) { 
      int row = -1; 
      int col = -1; 
      bool isEmpty = false; 
   
      // Find an empty cell 
      for (int i = 0; i < N; ++i) { 
          for (int j = 0; j < N; ++j) { 
              if (board[i][j] == 0) { 
                  row = i; 
                  col = j; 
                  isEmpty = true; 
                  break; 
              } 
          } 
          if (isEmpty) break; 
      } 
   
      // No empty cell le , board is solved 
      if (!isEmpty) return true; 
   
      // Try placing digits 1 to 9 in the empty cell 
      for (int num = 1; num <= 9; ++num) { 
          if (isSafe(board, row, col, num)) { 
              board[row][col] = num; // Place num 
   
              if (solveSudoku(board)) { 
                  return true; 
              } 
   
              board[row][col] = 0; // Backtrack 
          } 
      } 
   
      return false; // Trigger backtracking 
  } 
   
  int main() { 
      vector<vector<int>> board(N, vector<int>(N)); 
   
      cout << "Enter the Sudoku puzzle (enter 0 for empty cells):
"; 
      for (int i = 0; i < N; ++i) { 
          for (int j = 0; j < N; ++j) { 
              cin >> board[i][j]; 
          } 
      } 
   
      if (solveSudoku(board)) { 
          cout << "Solved Sudoku puzzle:
"; 
          printBoard(board); 
      } else { 
          cout << "No solution exists.
"; 
      } 
   
      return 0;  
      /*5 3 0 0 7 0 0 0 0
        6 0 0 1 9 5 0 0 0
        0 9 8 0 0 0 0 6 0
        8 0 0 0 6 0 0 0 3
        4 0 0 8 0 3 0 0 1
        7 0 0 0 2 0 0 0 6
        0 6 0 0 0 0 2 8 0
        0 0 0 4 1 9 0 0 5
        0 0 0 0 8 0 0 7 9
        */
  } 
  
  
  #include <iostream> //Implement the Travelling Salesman Problem (TSP) using backtracking to find the minimum-cost path that visits each city exactly once and returns to the starting city. Accept a distance matrix as input and display the minimum path and cost. 
  #include <vector>
  #include <climits>
  
  using namespace std;
  
  // Function to find the minimum-cost path using backtracking
  void tspBacktracking(vector<vector<int>>& dist, vector<bool>& visited, vector<int>& currentPath, vector<int>& bestPath, int& minCost, int currentCost, int level, int currentCity, int n) {
      if (level == n) {
          // Add the cost of returning to the starting city
          int totalCost = currentCost + dist[currentCity][0];
          if (totalCost < minCost) {
              minCost = totalCost;
              bestPath = currentPath;
          }
          return;
      }
  
      // Explore all cities not yet visited
      for (int i = 0; i < n; i++) {
          if (!visited[i] && dist[currentCity][i] != 0) {
              visited[i] = true;
              currentPath[level] = i;
              tspBacktracking(dist, visited, currentPath, bestPath, minCost, currentCost + dist[currentCity][i], level + 1, i, n);
              visited[i] = false;
          }
      }
  }
  
  void solveTSP(vector<vector<int>>& dist, int n) {
      vector<bool> visited(n, false);
      vector<int> currentPath(n), bestPath(n);
      int minCost = INT_MAX;
  
      visited[0] = true; // Start from the first city (0)
      currentPath[0] = 0;
  
      // Perform backtracking to find the optimal path
      tspBacktracking(dist, visited, currentPath, bestPath, minCost, 0, 1, 0, n);
  
      // Output the results
      cout << "Minimum Cost: " << minCost << endl;
      cout << "Optimal Path: ";
      for (int i = 0; i < n; i++) {
          cout << bestPath[i] << " ";
      }
      cout << "0" << endl; // Return to the starting city
  }
  
  int main() {
      int n;
  
      cout << "Enter the number of cities: ";
      cin >> n;
  
      vector<vector<int>> dist(n, vector<int>(n));
  
      cout << "Enter the distance matrix:" << endl;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              cin >> dist[i][j];
          }
      }
  
      solveTSP(dist, n);
  
      return 0;
  }
  
  
  
  #include <iostream> //Write a program to solve the Travelling Salesman Problem (TSP) using Branch and Bound to find the minimum-cost tour. Accept a distance matrix as input, and display the minimum cost and the path of the tour.
  #include <climits>
  #include <vector>
  #include <algorithm>
  #include <functional>
  
  using namespace std;
  
  // Function to calculate the lower bound for a node
  int calculateLowerBound(vector<vector<int>>& dist, vector<int>& path, int n, int currentNode) {
      int lowerBound = 0;
  
      // Calculate the sum of distances for the current path
      for (size_t i = 0; i < path.size() - 1; i++) {
          lowerBound += dist[path[i]][path[i + 1]];
      }
  
      // Add the distance from the current node to the nearest unvisited node
      int minEdge = INT_MAX;
      for (int i = 0; i < n; i++) {
          if (find(path.begin(), path.end(), i) == path.end() && dist[currentNode][i] != 0) {
              minEdge = min(minEdge, dist[currentNode][i]);
          }
      }
      lowerBound += (minEdge == INT_MAX) ? 0 : minEdge;
  
      return lowerBound;
  }
  
  // Branch and Bound to solve TSP
  void branchAndBound(vector<vector<int>>& dist, int n) {
      vector<int> path(1, 0); // Start with the first city (0)
      vector<bool> visited(n, false);
      visited[0] = true;
      int minCost = INT_MAX;
      vector<int> bestPath;
  
      function<void(int, int)> dfs = [&](int currentNode, int count) {
          if (count == n) {
              // Add the cost of returning to the starting point
              int cost = 0;
              for (size_t i = 0; i < path.size() - 1; i++) {
                  cost += dist[path[i]][path[i + 1]];
              }
              cost += dist[path.back()][path[0]];
  
              // Check if we found a better path
              if (cost < minCost) {
                  minCost = cost;
                  bestPath = path;
              }
              return;
          }
  
          // Try each node and branch
          for (int i = 0; i < n; i++) {
              if (!visited[i] && dist[currentNode][i] != 0) {
                  visited[i] = true;
                  path.push_back(i);
  
                  // Lower bound calculation to prune the branch
                  int lowerBound = calculateLowerBound(dist, path, n, i);
  
                  if (lowerBound < minCost) {
                      dfs(i, count + 1);
                  }
  
                  path.pop_back();
                  visited[i] = false;
              }
          }
      };
  
      dfs(0, 1);
  
      // Output the result
      cout << "Minimum Cost: " << minCost << endl;
      cout << "Optimal Path: ";
      for (int i : bestPath) {
          cout << i << " ";
      }
      cout << bestPath[0] << endl; // Return to the starting point
  }
  
  int main() {
      int n;
  
      cout << "Enter the number of cities: ";
      cin >> n;
  
      vector<vector<int>> dist(n, vector<int>(n));
  
      cout << "Enter the distance matrix:" << endl;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              cin >> dist[i][j];
          }
      }
  
      branchAndBound(dist, n);
  
      return 0; // if no of city is 2 then matrix become 20 40
                  //                                     10 30 simply in n.n form
  } 
  
  
  
  
  
  #include <iostream>  //Solve the 0-1 knapsack problem using branch and bound to maximize the profit without exceeding the weight limit.
  #include <vector> 
  #include <algorithm> 
  #include <climits> 
  using namespace std; 
  // Structure to store an item 
  struct Item { 
  int weight; 
  int profit; 
  }; 
  // Structure to store a node in the Branch and Bound tree 
  struct Node { 
  int level;   // Level of the node (index of the item considered) 
  int profit;  // Profit accumulated so far 
  int weight;  // Weight accumulated so far 
  float bound; // Upper bound of the profit 
  }; 
  // Func on to calculate the upper bound of profit for the current node 
  float calculateBound(Node u, int n, int W, vector<Item>& items) { 
      if (u.weight >= W) return 0;  // If the weight exceeds capacity, return 0 
   
      // Ini alize bound with the profit accumulated so far 
      float bound = u.profit; 
   
      // Start including items in the bound calcula on un l we exceed capacity 
      int j = u.level + 1; 
      int totalWeight = u.weight; 
   
      while (j < n && totalWeight + items[j].weight <= W) { 
          totalWeight += items[j].weight; 
          bound += items[j].profit; 
          j++; 
      }
// If there's s ll room, take a frac on of the next item (frac onal knapsack) 
    if (j < n) { 
        bound += (W - totalWeight) * items[j].profit / float(items[j].weight); 
    } 
 
    return bound; 
} 
 
// Func on to solve 0/1 Knapsack Problem using Branch and Bound 
void knapsackBranchAndBound(int n, int W, vector<Item>& items) { 
    // Sort the items based on profit/weight ra o 
    sort(items.begin(), items.end(), [](Item a, Item b) { 
        return (float(a.profit) / a.weight) > (float(b.profit) / b.weight); 
    }); 
 
    // Priority queue or deque to store nodes (nodes with higher bound should be processed first) 
    vector<Node> queue; 
    Node u, v; 
    u.level = -1; 
    u.profit = 0; 
    u.weight = 0; 
    u.bound = 0.0; 
 
    // Compute the bound of the root node 
    u.bound = calculateBound(u, n, W, items); 
    queue.push_back(u); 
 
    int maxProfit = 0;  // To store the maximum profit found 
    vector<int> solution(n, 0);  // To store the opmal solu on 
 
    while (!queue.empty()) { 
        u = queue.back(); 
        queue.pop_back(); 
 
        // If the bound is greater than the maxProfit found, process the node 
        if (u.bound > maxProfit) { 
            // Consider the next item (include it) 
            v.level = u.level + 1; 
            v.weight = u.weight + items[v.level].weight; 
            v.profit = u.profit + items[v.level].profit; 
 
            if (v.weight <= W && v.profit > maxProfit) { 
                maxProfit = v.profit; 
                solution[v.level] = 1; 
            } 
 
            // Compute the bound for this new node 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
 
            // Consider the next item (exclude it) 
            v.weight = u.weight; 
            v.profit = u.profit; 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
        } 
    } 
 
    // Display the results 
    cout << "Maximum profit: " << maxProfit << endl; 
    cout << "Items selected: "; 
    for (int i = 0; i < n; i++) { 
        if (solution[i]) { 
            cout << i << " "; 
        } 
    } 
    cout << endl; 
} 
 
int main() { 
    // Example input 
    int n = 4; // Number of items 
    int W = 50; // Maximum weight capacity 
 
    vector<Item> items = {{10, 60}, {20, 100}, {30, 120}, {40, 80}}; // {weight, profit} 
 
    cout << "Solving 0/1 Knapsack Problem using Branch and Bound...
"; 
    knapsackBranchAndBound(n, W, items); 
 
    return 0; 
} 



#include <iostream> //Solve a maze where a rat has to reach the destination from the starting point using backtracking. Print all possible paths if multiple solutions exist. 
#include <vector> 
 
using namespace std; 
 
#define N 4  // Size of the maze (4x4 in this case) 
 
// Func on to print the path 
void printSolution(vector<vector<int>>& solution) { 
    for (int i = 0; i < N; i++) { 
        for (int j = 0; j < N; j++) { 
            cout << solution[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
// Func on to check if a posi on is safe to move (within bounds and not an obstacle) 
bool isSafe(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // Check if (x, y) is inside the maze and not a blocked cell (0) 
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1 && solution[x][y] == 0); 
} 
 
// Recursive func on to solve the maze using backtracking 
bool solveMazeUtil(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // If the des na on is reached, mark the current posi on and return true 
    if (x == N - 1 && y == N - 1) { 
        solution[x][y] = 1; 
        return true; 
    } 
 
    // Check if maze[x][y] is a valid move 
    if (isSafe(x, y, maze, solution)) { 
        // Mark the current cell as part of the solu on path 
        solution[x][y] = 1; 
 
        // Move forward in the x direc on (downwards) 
        if (solveMazeUtil(x + 1, y, maze, solution)) { 
            return true; 
        } 
 
        // Move downwards in the y direc on (rightwards) 
        if (solveMazeUtil(x, y + 1, maze, solution)) { 
            return true; 
        } 
 
        // If moving in either direc on doesn't work, backtrack 
        solution[x][y] = 0; 
        return false; 
    } 
 
    return false; 
} 
 
// Func on to solve the maze 
bool solveMaze(vector<vector<int>>& maze) { 
    vector<vector<int>> solution(N, vector<int>(N, 0)); 
 
    // Start solving the maze from the top-le corner (0, 0) 
    if (solveMazeUtil(0, 0, maze, solution)) { 
        printSolution(solution); 
        return true; 
    } 
 
    cout << "No solu on exists" << endl; 
    return false; 
} 
 
int main() { 
    // Example maze (1 - open cell, 0 - blocked cell) 
    vector<vector<int>> maze = { 
        {1, 0, 0, 0}, 
        {1, 1, 0, 1}, 
        {0, 1, 0, 0}, 
        {1, 1, 1, 1} 
    }; 
 
    cout << "Solving maze using backtracking..." << endl; 
    if (!solveMaze(maze)) { 
        cout << "No path exists from the start to the des na on." << endl; 
} 
return 0; 
} `}];function om(){const e=im.sort((i,o)=>{const l=i.title.trim().charAt(0).toUpperCase(),s=o.title.trim().charAt(0).toUpperCase();return l.localeCompare(s)});console.log(e);const[t,n]=F.useState(null),r=F.useCallback((i,o)=>{const l=s=>{const a=document.createElement("textarea");a.value=s,a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="2em",a.style.height="2em",a.style.padding="0",a.style.border="none",a.style.outline="none",a.style.boxShadow="none",a.style.background="transparent",document.body.appendChild(a),a.focus(),a.select();try{document.execCommand("copy")?(n(o),setTimeout(()=>n(null),2e3)):console.error("Failed to copy text")}catch(c){console.error("Failed to copy text: ",c)}document.body.removeChild(a)};navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(i).then(()=>{n(o),setTimeout(()=>n(null),2e3)}).catch(s=>{console.error("Failed to copy text: ",s)}):l(i)},[]);return M.jsx("div",{className:"container mx-auto p-4 dark",children:M.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:e.map((i,o)=>M.jsxs(Tc,{className:"overflow-hidden bg-gray-800 border-gray-700",children:[M.jsxs(Dc,{className:"bg-gray-900",children:[M.jsx(zc,{className:"font-light m-2 text-gray-100",children:i.title}),M.jsx($r,{className:"bg-gray-700 hover:bg-gray-600 text-white rounded-lg w-3/12",children:i.description})]}),M.jsxs(Ac,{className:"p-4",children:[M.jsxs("div",{className:"relative bg-gray-900",children:[M.jsx("pre",{className:"bg-gray-800 p-4 rounded-md overflow-x-auto text-sm text-gray-300",children:M.jsx("code",{children:i.code.slice(0,100)})}),M.jsxs($r,{className:"absolute top-2 right-2 bg-gray-700 hover:bg-gray-600",size:"sm",variant:"secondary",onClick:()=>r(i.code,o),children:[M.jsx("span",{className:"sr-only",children:t===o?"Copied":"Copy code"}),t===o?M.jsx(dp,{className:"h-4 w-4 text-green-400","aria-hidden":"true"}):M.jsx(fp,{className:"h-4 w-4 text-gray-300","aria-hidden":"true"})]})]}),M.jsxs($r,{className:"mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white",onClick:()=>r(i.code,o),children:[M.jsx(pp,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),M.jsx("span",{children:t===o?"Copied!":"Copy Code"})]})]})]},o))})})}xc(document.getElementById("root")).render(M.jsx(F.StrictMode,{children:M.jsx(om,{})}));
