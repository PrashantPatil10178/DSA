(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var au={exports:{}},hi={},cu={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Rc=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),$c=Symbol.for("react.memo"),Wc=Symbol.for("react.lazy"),Kl=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=Kl&&e[Kl]||e["@@iterator"],typeof e=="function"?e:null)}var du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,pu={};function gn(e,t,n){this.props=e,this.context=t,this.refs=pu,this.updater=n||du}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=gn.prototype;function el(e,t,n){this.props=e,this.context=t,this.refs=pu,this.updater=n||du}var tl=el.prototype=new mu;tl.constructor=el;fu(tl,gn.prototype);tl.isPureReactComponent=!0;var Yl=Array.isArray,hu=Object.prototype.hasOwnProperty,nl={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)hu.call(t,r)&&!vu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:l,props:i,_owner:nl.current}}function Qc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ql=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zc(""+e.key):t.toString(36)}function br(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sr:case Ac:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bi(l,0):r,Yl(i)?(n="",e!=null&&(n=e.replace(ql,"$&/")+"/"),br(i,t,n,"",function(c){return c})):i!=null&&(rl(i)&&(i=Qc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ql,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Yl(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+bi(o,s);l+=br(o,t,n,u,i)}else if(u=Hc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+bi(o,s++),l+=br(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hr(e,t,n){if(e==null)return e;var r=[],i=0;return br(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Dr={transition:null},Xc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:nl};function yu(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=gn;b.Fragment=Rc;b.Profiler=Fc;b.PureComponent=el;b.StrictMode=Mc;b.Suspense=Vc;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;b.act=yu;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=nl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)hu.call(t,u)&&!vu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:sr,type:e.type,key:i,ref:o,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:Bc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Oc,_context:e},e.Consumer=e};b.createElement=gu;b.createFactory=function(e){var t=gu.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:Uc,render:e}};b.isValidElement=rl;b.lazy=function(e){return{$$typeof:Wc,_payload:{_status:-1,_result:e},_init:Gc}};b.memo=function(e,t){return{$$typeof:$c,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};b.unstable_act=yu;b.useCallback=function(e,t){return fe.current.useCallback(e,t)};b.useContext=function(e){return fe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};b.useEffect=function(e,t){return fe.current.useEffect(e,t)};b.useId=function(){return fe.current.useId()};b.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return fe.current.useMemo(e,t)};b.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};b.useRef=function(e){return fe.current.useRef(e)};b.useState=function(e){return fe.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return fe.current.useTransition()};b.version="18.3.1";cu.exports=b;var M=cu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=M,Yc=Symbol.for("react.element"),qc=Symbol.for("react.fragment"),Jc=Object.prototype.hasOwnProperty,ed=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,td={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jc.call(t,r)&&!td.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yc,type:e,key:o,ref:l,props:i,_owner:ed.current}}hi.Fragment=qc;hi.jsx=wu;hi.jsxs=wu;au.exports=hi;var R=au.exports,ku={exports:{}},Ee={},xu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,I){var j=S.length;S.push(I);e:for(;0<j;){var L=j-1>>>1,J=S[L];if(0<i(J,I))S[L]=I,S[j]=J,j=L;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var I=S[0],j=S.pop();if(j!==I){S[0]=j;e:for(var L=0,J=S.length,pr=J>>>1;L<pr;){var Nt=2*(L+1)-1,zi=S[Nt],_t=Nt+1,mr=S[_t];if(0>i(zi,j))_t<J&&0>i(mr,zi)?(S[L]=mr,S[_t]=j,L=_t):(S[L]=zi,S[Nt]=j,L=Nt);else if(_t<J&&0>i(mr,j))S[L]=mr,S[_t]=j,L=_t;else break e}}return I}function i(S,I){var j=S.sortIndex-I.sortIndex;return j!==0?j:S.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],m=1,h=null,p=3,w=!1,k=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(S){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=S)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function v(S){if(y=!1,f(S),!k)if(n(u)!==null)k=!0,tt(x);else{var I=n(c);I!==null&&Vt(v,I.startTime-S)}}function x(S,I){k=!1,y&&(y=!1,d(_),_=-1),w=!0;var j=p;try{for(f(I),h=n(u);h!==null&&(!(h.expirationTime>I)||S&&!ae());){var L=h.callback;if(typeof L=="function"){h.callback=null,p=h.priorityLevel;var J=L(h.expirationTime<=I);I=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(u)&&r(u),f(I)}else r(u);h=n(u)}if(h!==null)var pr=!0;else{var Nt=n(c);Nt!==null&&Vt(v,Nt.startTime-I),pr=!1}return pr}finally{h=null,p=j,w=!1}}var C=!1,N=null,_=-1,B=5,z=-1;function ae(){return!(e.unstable_now()-z<B)}function A(){if(N!==null){var S=e.unstable_now();z=S;var I=!0;try{I=N(!0,S)}finally{I?et():(C=!1,N=null)}}else C=!1}var et;if(typeof a=="function")et=function(){a(A)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,fr=Ct.port2;Ct.port1.onmessage=A,et=function(){fr.postMessage(null)}}else et=function(){P(A,0)};function tt(S){N=S,C||(C=!0,et())}function Vt(S,I){_=P(function(){S(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,tt(x))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var j=p;p=I;try{return S()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,I){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var j=p;p=S;try{return I()}finally{p=j}},e.unstable_scheduleCallback=function(S,I,j){var L=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?L+j:L):j=L,S){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,S={id:m++,callback:I,priorityLevel:S,startTime:j,expirationTime:J,sortIndex:-1},j>L?(S.sortIndex=j,t(c,S),n(u)===null&&S===n(c)&&(y?(d(_),_=-1):y=!0,Vt(v,j-L))):(S.sortIndex=J,t(u,S),k||w||(k=!0,tt(x))),S},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(S){var I=p;return function(){var j=p;p=I;try{return S.apply(this,arguments)}finally{p=j}}}})(Su);xu.exports=Su;var nd=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=M,Se=nd;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,Wn={};function Ot(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Eu.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=Object.prototype.hasOwnProperty,id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jl={},es={};function od(e){return oo.call(es,e)?!0:oo.call(Jl,e)?!1:id.test(e)?es[e]=!0:(Jl[e]=!0,!1)}function ld(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sd(e,t,n,r){if(t===null||typeof t>"u"||ld(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,ol);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,ol);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,ol);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ll(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sd(t,n,i,r)&&(n=null),r||i===null?od(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),lo=Symbol.for("react.profiler"),Cu=Symbol.for("react.provider"),Nu=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),so=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),ts=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Di;function zn(e){if(Di===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Di=t&&t[1]||""}return`
`+Di+e}var Li=!1;function Ai(e,t){if(!e||Li)return"";Li=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Li=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function ud(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Ai(e.type,!1),e;case 11:return e=Ai(e.type.render,!1),e;case 1:return e=Ai(e.type,!0),e;default:return""}}function ao(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Wt:return"Portal";case lo:return"Profiler";case sl:return"StrictMode";case so:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nu:return(e.displayName||"Context")+".Consumer";case Cu:return(e._context.displayName||"Context")+".Provider";case ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:ao(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return ao(e(t))}catch{}}return null}function ad(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ao(t);case 8:return t===sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cd(e){var t=Pu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=cd(e))}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function co(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ns(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ju(e,t){t=t.checked,t!=null&&ll(e,"checked",t,!1)}function fo(e,t){ju(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?po(e,t.type,n):t.hasOwnProperty("defaultValue")&&po(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function po(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function is(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(bn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Tu(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function os(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dd=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){dd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Du(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Du(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(fd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,rn=null,on=null;function ls(e){if(e=cr(e)){if(typeof wo!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ki(t),wo(e.stateNode,e.type,t))}}function Au(e){rn?on?on.push(e):on=[e]:rn=e}function Ru(){if(rn){var e=rn,t=on;if(on=rn=null,ls(e),t)for(e=0;e<t.length;e++)ls(t[e])}}function Mu(e,t){return e(t)}function Fu(){}var Ri=!1;function Ou(e,t,n){if(Ri)return e(t,n);Ri=!0;try{return Mu(e,t,n)}finally{Ri=!1,(rn!==null||on!==null)&&(Fu(),Ru())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var ko=!1;if(Xe)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ko=!1}function pd(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Rn=!1,Qr=null,Zr=!1,xo=null,md={onError:function(e){Rn=!0,Qr=e}};function hd(e,t,n,r,i,o,l,s,u){Rn=!1,Qr=null,pd.apply(md,arguments)}function vd(e,t,n,r,i,o,l,s,u){if(hd.apply(this,arguments),Rn){if(Rn){var c=Qr;Rn=!1,Qr=null}else throw Error(g(198));Zr||(Zr=!0,xo=c)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ss(e){if(Bt(e)!==e)throw Error(g(188))}function gd(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ss(i),e;if(o===r)return ss(i),t;o=o.sibling}throw Error(g(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Uu(e){return e=gd(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var $u=Se.unstable_scheduleCallback,us=Se.unstable_cancelCallback,yd=Se.unstable_shouldYield,wd=Se.unstable_requestPaint,X=Se.unstable_now,kd=Se.unstable_getCurrentPriorityLevel,dl=Se.unstable_ImmediatePriority,Wu=Se.unstable_UserBlockingPriority,Gr=Se.unstable_NormalPriority,xd=Se.unstable_LowPriority,Hu=Se.unstable_IdlePriority,vi=null,Ue=null;function Sd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Nd,Ed=Math.log,Cd=Math.LN2;function Nd(e){return e>>>=0,e===0?32:31-(Ed(e)/Cd|0)|0}var wr=64,kr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Dn(s):(o&=l,o!==0&&(r=Dn(o)))}else l=n&~i,l!==0?r=Dn(l):o!==0&&(r=Dn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),i=1<<n,r|=e[n],t&=~i;return r}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ae(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=_d(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qu(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ae(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gu,pl,Xu,Ku,Yu,Eo=!1,xr=[],dt=null,ft=null,pt=null,Zn=new Map,Gn=new Map,st=[],jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function as(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function En(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Td(e,t,n,r,i){switch(t){case"focusin":return dt=En(dt,e,t,n,r,i),!0;case"dragenter":return ft=En(ft,e,t,n,r,i),!0;case"mouseover":return pt=En(pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zn.set(o,En(Zn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gn.set(o,En(Gn.get(o)||null,e,t,n,r,i)),!0}return!1}function qu(e){var t=jt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Bu(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){Xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=cr(n),t!==null&&pl(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){Lr(e)&&n.delete(t)}function zd(){Eo=!1,dt!==null&&Lr(dt)&&(dt=null),ft!==null&&Lr(ft)&&(ft=null),pt!==null&&Lr(pt)&&(pt=null),Zn.forEach(cs),Gn.forEach(cs)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,zd)))}function Xn(e){function t(i){return Cn(i,e)}if(0<xr.length){Cn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Cn(dt,e),ft!==null&&Cn(ft,e),pt!==null&&Cn(pt,e),Zn.forEach(t),Gn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)qu(n),n.blockedOn===null&&st.shift()}var ln=Je.ReactCurrentBatchConfig,Kr=!0;function bd(e,t,n,r){var i=F,o=ln.transition;ln.transition=null;try{F=1,ml(e,t,n,r)}finally{F=i,ln.transition=o}}function Dd(e,t,n,r){var i=F,o=ln.transition;ln.transition=null;try{F=4,ml(e,t,n,r)}finally{F=i,ln.transition=o}}function ml(e,t,n,r){if(Kr){var i=Co(e,t,n,r);if(i===null)Zi(e,t,r,Yr,n),as(e,r);else if(Td(i,e,t,n,r))r.stopPropagation();else if(as(e,r),t&4&&-1<jd.indexOf(e)){for(;i!==null;){var o=cr(i);if(o!==null&&Gu(o),o=Co(e,t,n,r),o===null&&Zi(e,t,r,Yr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Zi(e,t,r,null,n)}}var Yr=null;function Co(e,t,n,r){if(Yr=null,e=cl(r),e=jt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function Ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case dl:return 1;case Wu:return 4;case Gr:case xd:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var at=null,hl=null,Ar=null;function ea(){if(Ar)return Ar;var e,t=hl,n=t.length,r,i="value"in at?at.value:at.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ar=i.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ds(){return!1}function Ce(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:ds,this.isPropagationStopped=ds,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Ce(yn),ar=Z({},yn,{view:0,detail:0}),Ld=Ce(ar),Fi,Oi,Nn,gi=Z({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Fi=e.screenX-Nn.screenX,Oi=e.screenY-Nn.screenY):Oi=Fi=0,Nn=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Oi}}),fs=Ce(gi),Ad=Z({},gi,{dataTransfer:0}),Rd=Ce(Ad),Md=Z({},ar,{relatedTarget:0}),Bi=Ce(Md),Fd=Z({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=Ce(Fd),Bd=Z({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=Ce(Bd),Vd=Z({},yn,{data:0}),ps=Ce(Vd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hd[e])?!!t[e]:!1}function gl(){return Qd}var Zd=Z({},ar,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=Ce(Zd),Xd=Z({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ms=Ce(Xd),Kd=Z({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),Yd=Ce(Kd),qd=Z({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Ce(qd),ef=Z({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=Ce(ef),nf=[9,13,27,32],yl=Xe&&"CompositionEvent"in window,Mn=null;Xe&&"documentMode"in document&&(Mn=document.documentMode);var rf=Xe&&"TextEvent"in window&&!Mn,ta=Xe&&(!yl||Mn&&8<Mn&&11>=Mn),hs=" ",vs=!1;function na(e,t){switch(e){case"keyup":return nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function of(e,t){switch(e){case"compositionend":return ra(t);case"keypress":return t.which!==32?null:(vs=!0,hs);case"textInput":return e=t.data,e===hs&&vs?null:e;default:return null}}function lf(e,t){if(Qt)return e==="compositionend"||!yl&&na(e,t)?(e=ea(),Ar=hl=at=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ta&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function ia(e,t,n,r){Au(r),t=qr(t,"onChange"),0<t.length&&(n=new vl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fn=null,Kn=null;function uf(e){ha(e,0)}function yi(e){var t=Xt(e);if(Iu(t))return e}function af(e,t){if(e==="change")return t}var oa=!1;if(Xe){var Ui;if(Xe){var Vi="oninput"in document;if(!Vi){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),Vi=typeof ys.oninput=="function"}Ui=Vi}else Ui=!1;oa=Ui&&(!document.documentMode||9<document.documentMode)}function ws(){Fn&&(Fn.detachEvent("onpropertychange",la),Kn=Fn=null)}function la(e){if(e.propertyName==="value"&&yi(Kn)){var t=[];ia(t,Kn,e,cl(e)),Ou(uf,t)}}function cf(e,t,n){e==="focusin"?(ws(),Fn=t,Kn=n,Fn.attachEvent("onpropertychange",la)):e==="focusout"&&ws()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(Kn)}function ff(e,t){if(e==="click")return yi(t)}function pf(e,t){if(e==="input"||e==="change")return yi(t)}function mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:mf;function Yn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oo.call(t,i)||!Me(e[i],t[i]))return!1}return!0}function ks(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=ks(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ks(n)}}function sa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ua(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=ua(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sa(n.ownerDocument.documentElement,n)){if(r!==null&&wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xs(n,o);var l=xs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=Xe&&"documentMode"in document&&11>=document.documentMode,Zt=null,No=null,On=null,_o=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_o||Zt==null||Zt!==Hr(r)||(r=Zt,"selectionStart"in r&&wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Yn(On,r)||(On=r,r=qr(No,"onSelect"),0<r.length&&(t=new vl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},$i={},aa={};Xe&&(aa=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function wi(e){if($i[e])return $i[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in aa)return $i[e]=t[n];return e}var ca=wi("animationend"),da=wi("animationiteration"),fa=wi("animationstart"),pa=wi("transitionend"),ma=new Map,Es="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){ma.set(e,t),Ot(t,[e])}for(var Wi=0;Wi<Es.length;Wi++){var Hi=Es[Wi],gf=Hi.toLowerCase(),yf=Hi[0].toUpperCase()+Hi.slice(1);xt(gf,"on"+yf)}xt(ca,"onAnimationEnd");xt(da,"onAnimationIteration");xt(fa,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(pa,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vd(r,t,void 0,e),e.currentTarget=null}function ha(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Cs(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Cs(i,s,c),o=u}}}if(Zr)throw e=xo,Zr=!1,xo=null,e}function V(e,t){var n=t[zo];n===void 0&&(n=t[zo]=new Set);var r=e+"__bubble";n.has(r)||(va(t,e,2,!1),n.add(r))}function Qi(e,t,n){var r=0;t&&(r|=4),va(n,e,r,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Cr]){e[Cr]=!0,Eu.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,Qi("selectionchange",!1,t))}}function va(e,t,n,r){switch(Ju(t)){case 1:var i=bd;break;case 4:i=Dd;break;default:i=ml}n=i.bind(null,t,n,e),i=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=jt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ou(function(){var c=o,m=cl(n),h=[];e:{var p=ma.get(e);if(p!==void 0){var w=vl,k=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":w=Gd;break;case"focusin":k="focus",w=Bi;break;case"focusout":k="blur",w=Bi;break;case"beforeblur":case"afterblur":w=Bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yd;break;case ca:case da:case fa:w=Od;break;case pa:w=Jd;break;case"scroll":w=Ld;break;case"wheel":w=tf;break;case"copy":case"cut":case"paste":w=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ms}var y=(t&4)!==0,P=!y&&e==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var a=c,f;a!==null;){f=a;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Qn(a,d),v!=null&&y.push(Jn(a,v,f)))),P)break;a=a.return}0<y.length&&(p=new w(p,k,null,n,m),h.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==yo&&(k=n.relatedTarget||n.fromElement)&&(jt(k)||k[Ke]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?jt(k):null,k!==null&&(P=Bt(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(y=fs,v="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(y=ms,v="onPointerLeave",d="onPointerEnter",a="pointer"),P=w==null?p:Xt(w),f=k==null?p:Xt(k),p=new y(v,a+"leave",w,n,m),p.target=P,p.relatedTarget=f,v=null,jt(m)===c&&(y=new y(d,a+"enter",k,n,m),y.target=f,y.relatedTarget=P,v=y),P=v,w&&k)t:{for(y=w,d=k,a=0,f=y;f;f=$t(f))a++;for(f=0,v=d;v;v=$t(v))f++;for(;0<a-f;)y=$t(y),a--;for(;0<f-a;)d=$t(d),f--;for(;a--;){if(y===d||d!==null&&y===d.alternate)break t;y=$t(y),d=$t(d)}y=null}else y=null;w!==null&&Ns(h,p,w,y,!1),k!==null&&P!==null&&Ns(h,P,k,y,!0)}}e:{if(p=c?Xt(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var x=af;else if(gs(p))if(oa)x=pf;else{x=df;var C=cf}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=ff);if(x&&(x=x(e,c))){ia(h,x,n,m);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&po(p,"number",p.value)}switch(C=c?Xt(c):window,e){case"focusin":(gs(C)||C.contentEditable==="true")&&(Zt=C,No=c,On=null);break;case"focusout":On=No=Zt=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,Ss(h,n,m);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":Ss(h,n,m)}var N;if(yl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Qt?na(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ta&&n.locale!=="ko"&&(Qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Qt&&(N=ea()):(at=m,hl="value"in at?at.value:at.textContent,Qt=!0)),C=qr(c,_),0<C.length&&(_=new ps(_,e,null,n,m),h.push({event:_,listeners:C}),N?_.data=N:(N=ra(n),N!==null&&(_.data=N)))),(N=rf?of(e,n):lf(e,n))&&(c=qr(c,"onBeforeInput"),0<c.length&&(m=new ps("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=N))}ha(h,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qn(e,n),o!=null&&r.unshift(Jn(e,o,i)),o=Qn(e,t),o!=null&&r.push(Jn(e,o,i))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ns(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Qn(n,o),u!=null&&l.unshift(Jn(n,u,s))):i||(u=Qn(n,o),u!=null&&l.push(Jn(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var kf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function _s(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(xf,"")}function Nr(e,t,n){if(t=_s(t),_s(e)!==t&&n)throw Error(g(425))}function Jr(){}var Po=null,Io=null;function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Sf=typeof clearTimeout=="function"?clearTimeout:void 0,Ps=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Ps<"u"?function(e){return Ps.resolve(null).then(e).catch(Cf)}:To;function Cf(e){setTimeout(function(){throw e})}function Gi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Is(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Be="__reactFiber$"+wn,er="__reactProps$"+wn,Ke="__reactContainer$"+wn,zo="__reactEvents$"+wn,Nf="__reactListeners$"+wn,_f="__reactHandles$"+wn;function jt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Is(e);e!==null;){if(n=e[Be])return n;e=Is(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Be]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ki(e){return e[er]||null}var bo=[],Kt=-1;function St(e){return{current:e}}function $(e){0>Kt||(e.current=bo[Kt],bo[Kt]=null,Kt--)}function O(e,t){Kt++,bo[Kt]=e.current,e.current=t}var kt={},ue=St(kt),ve=St(!1),Lt=kt;function dn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ei(){$(ve),$(ue)}function js(e,t,n){if(ue.current!==kt)throw Error(g(168));O(ue,t),O(ve,n)}function ga(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(g(108,ad(e)||"Unknown",i));return Z({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Lt=ue.current,O(ue,e),O(ve,ve.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=ga(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,$(ve),$(ue),O(ue,e)):$(ve),O(ve,n)}var He=null,xi=!1,Xi=!1;function ya(e){He===null?He=[e]:He.push(e)}function Pf(e){xi=!0,ya(e)}function Et(){if(!Xi&&He!==null){Xi=!0;var e=0,t=F;try{var n=He;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,xi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),$u(dl,Et),i}finally{F=t,Xi=!1}}return null}var Yt=[],qt=0,ni=null,ri=0,Ne=[],_e=0,At=null,Qe=1,Ze="";function Pt(e,t){Yt[qt++]=ri,Yt[qt++]=ni,ni=e,ri=t}function wa(e,t,n){Ne[_e++]=Qe,Ne[_e++]=Ze,Ne[_e++]=At,At=e;var r=Qe;e=Ze;var i=32-Ae(r)-1;r&=~(1<<i),n+=1;var o=32-Ae(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Qe=1<<32-Ae(t)+i|n<<i|r,Ze=o+e}else Qe=1<<o|n<<i|r,Ze=e}function kl(e){e.return!==null&&(Pt(e,1),wa(e,1,0))}function xl(e){for(;e===ni;)ni=Yt[--qt],Yt[qt]=null,ri=Yt[--qt],Yt[qt]=null;for(;e===At;)At=Ne[--_e],Ne[_e]=null,Ze=Ne[--_e],Ne[_e]=null,Qe=Ne[--_e],Ne[_e]=null}var xe=null,ke=null,W=!1,Le=null;function ka(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ke=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Qe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ke=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(W){var t=ke;if(t){var n=t;if(!zs(e,t)){if(Do(e))throw Error(g(418));t=mt(n.nextSibling);var r=xe;t&&zs(e,t)?ka(r,n):(e.flags=e.flags&-4097|2,W=!1,xe=e)}}else{if(Do(e))throw Error(g(418));e.flags=e.flags&-4097|2,W=!1,xe=e}}}function bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function _r(e){if(e!==xe)return!1;if(!W)return bs(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jo(e.type,e.memoizedProps)),t&&(t=ke)){if(Do(e))throw xa(),Error(g(418));for(;t;)ka(e,t),t=mt(t.nextSibling)}if(bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=xe?mt(e.stateNode.nextSibling):null;return!0}function xa(){for(var e=ke;e;)e=mt(e.nextSibling)}function fn(){ke=xe=null,W=!1}function Sl(e){Le===null?Le=[e]:Le.push(e)}var If=Je.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function Pr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ds(e){var t=e._init;return t(e._payload)}function Sa(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function i(d,a){return d=yt(d,a),d.index=0,d.sibling=null,d}function o(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,a,f,v){return a===null||a.tag!==6?(a=no(f,d.mode,v),a.return=d,a):(a=i(a,f),a.return=d,a)}function u(d,a,f,v){var x=f.type;return x===Ht?m(d,a,f.props.children,v,f.key):a!==null&&(a.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ot&&Ds(x)===a.type)?(v=i(a,f.props),v.ref=_n(d,a,f),v.return=d,v):(v=$r(f.type,f.key,f.props,null,d.mode,v),v.ref=_n(d,a,f),v.return=d,v)}function c(d,a,f,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=ro(f,d.mode,v),a.return=d,a):(a=i(a,f.children||[]),a.return=d,a)}function m(d,a,f,v,x){return a===null||a.tag!==7?(a=Dt(f,d.mode,v,x),a.return=d,a):(a=i(a,f),a.return=d,a)}function h(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=no(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case vr:return f=$r(a.type,a.key,a.props,null,d.mode,f),f.ref=_n(d,null,a),f.return=d,f;case Wt:return a=ro(a,d.mode,f),a.return=d,a;case ot:var v=a._init;return h(d,v(a._payload),f)}if(bn(a)||xn(a))return a=Dt(a,d.mode,f,null),a.return=d,a;Pr(d,a)}return null}function p(d,a,f,v){var x=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:s(d,a,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===x?u(d,a,f,v):null;case Wt:return f.key===x?c(d,a,f,v):null;case ot:return x=f._init,p(d,a,x(f._payload),v)}if(bn(f)||xn(f))return x!==null?null:m(d,a,f,v,null);Pr(d,f)}return null}function w(d,a,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,s(a,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vr:return d=d.get(v.key===null?f:v.key)||null,u(a,d,v,x);case Wt:return d=d.get(v.key===null?f:v.key)||null,c(a,d,v,x);case ot:var C=v._init;return w(d,a,f,C(v._payload),x)}if(bn(v)||xn(v))return d=d.get(f)||null,m(a,d,v,x,null);Pr(a,v)}return null}function k(d,a,f,v){for(var x=null,C=null,N=a,_=a=0,B=null;N!==null&&_<f.length;_++){N.index>_?(B=N,N=null):B=N.sibling;var z=p(d,N,f[_],v);if(z===null){N===null&&(N=B);break}e&&N&&z.alternate===null&&t(d,N),a=o(z,a,_),C===null?x=z:C.sibling=z,C=z,N=B}if(_===f.length)return n(d,N),W&&Pt(d,_),x;if(N===null){for(;_<f.length;_++)N=h(d,f[_],v),N!==null&&(a=o(N,a,_),C===null?x=N:C.sibling=N,C=N);return W&&Pt(d,_),x}for(N=r(d,N);_<f.length;_++)B=w(N,d,_,f[_],v),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?_:B.key),a=o(B,a,_),C===null?x=B:C.sibling=B,C=B);return e&&N.forEach(function(ae){return t(d,ae)}),W&&Pt(d,_),x}function y(d,a,f,v){var x=xn(f);if(typeof x!="function")throw Error(g(150));if(f=x.call(f),f==null)throw Error(g(151));for(var C=x=null,N=a,_=a=0,B=null,z=f.next();N!==null&&!z.done;_++,z=f.next()){N.index>_?(B=N,N=null):B=N.sibling;var ae=p(d,N,z.value,v);if(ae===null){N===null&&(N=B);break}e&&N&&ae.alternate===null&&t(d,N),a=o(ae,a,_),C===null?x=ae:C.sibling=ae,C=ae,N=B}if(z.done)return n(d,N),W&&Pt(d,_),x;if(N===null){for(;!z.done;_++,z=f.next())z=h(d,z.value,v),z!==null&&(a=o(z,a,_),C===null?x=z:C.sibling=z,C=z);return W&&Pt(d,_),x}for(N=r(d,N);!z.done;_++,z=f.next())z=w(N,d,_,z.value,v),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?_:z.key),a=o(z,a,_),C===null?x=z:C.sibling=z,C=z);return e&&N.forEach(function(A){return t(d,A)}),W&&Pt(d,_),x}function P(d,a,f,v){if(typeof f=="object"&&f!==null&&f.type===Ht&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var x=f.key,C=a;C!==null;){if(C.key===x){if(x=f.type,x===Ht){if(C.tag===7){n(d,C.sibling),a=i(C,f.props.children),a.return=d,d=a;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ot&&Ds(x)===C.type){n(d,C.sibling),a=i(C,f.props),a.ref=_n(d,C,f),a.return=d,d=a;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Ht?(a=Dt(f.props.children,d.mode,v,f.key),a.return=d,d=a):(v=$r(f.type,f.key,f.props,null,d.mode,v),v.ref=_n(d,a,f),v.return=d,d=v)}return l(d);case Wt:e:{for(C=f.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=i(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=ro(f,d.mode,v),a.return=d,d=a}return l(d);case ot:return C=f._init,P(d,a,C(f._payload),v)}if(bn(f))return k(d,a,f,v);if(xn(f))return y(d,a,f,v);Pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=i(a,f),a.return=d,d=a):(n(d,a),a=no(f,d.mode,v),a.return=d,d=a),l(d)):n(d,a)}return P}var pn=Sa(!0),Ea=Sa(!1),ii=St(null),oi=null,Jt=null,El=null;function Cl(){El=Jt=oi=null}function Nl(e){var t=ii.current;$(ii),e._currentValue=t}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){oi=e,El=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(oi===null)throw Error(g(308));Jt=e,oi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Tt=null;function _l(e){Tt===null?Tt=[e]:Tt.push(e)}function Ca(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_l(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ye(e,n)}return i=r.interleaved,i===null?(t.next=t,_l(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ye(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}function Ls(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var i=e.updateQueue;lt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=c=u=null,s=o;do{var p=s.lane,w=s.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(p=t,w=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){h=k.call(w,h,p);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,p=typeof k=="function"?k.call(w,h,p):k,p==null)break e;h=Z({},h,p);break e;case 2:lt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,u=h):m=m.next=w,l|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mt|=l,e.lanes=l,e.memoizedState=h}}function As(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(g(191,i));i.call(r)}}}var dr={},Ve=St(dr),tr=St(dr),nr=St(dr);function zt(e){if(e===dr)throw Error(g(174));return e}function Il(e,t){switch(O(nr,t),O(tr,e),O(Ve,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ho(t,e)}$(Ve),O(Ve,t)}function mn(){$(Ve),$(tr),$(nr)}function _a(e){zt(nr.current);var t=zt(Ve.current),n=ho(t,e.type);t!==n&&(O(tr,e),O(Ve,n))}function jl(e){tr.current===e&&($(Ve),$(tr))}var H=St(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=[];function Tl(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var Fr=Je.ReactCurrentDispatcher,Yi=Je.ReactCurrentBatchConfig,Rt=0,Q=null,Y=null,ee=null,ui=!1,Bn=!1,rr=0,jf=0;function oe(){throw Error(g(321))}function zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function bl(e,t,n,r,i,o){if(Rt=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?Df:Lf,e=n(r,i),Bn){o=0;do{if(Bn=!1,rr=0,25<=o)throw Error(g(301));o+=1,ee=Y=null,t.updateQueue=null,Fr.current=Af,e=n(r,i)}while(Bn)}if(Fr.current=ai,t=Y!==null&&Y.next!==null,Rt=0,ee=Y=Q=null,ui=!1,t)throw Error(g(300));return e}function Dl(){var e=rr!==0;return rr=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Q.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(Y===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?Q.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(g(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?Q.memoizedState=ee=e:ee=ee.next=e}return ee}function ir(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=Te(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var m=c.lane;if((Rt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,Q.lanes|=m,Mt|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Me(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,Mt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Te(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Me(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Pa(){}function Ia(e,t){var n=Q,r=Te(),i=t(),o=!Me(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Ll(za.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,or(9,Ta.bind(null,n,r,i,t),void 0,null),te===null)throw Error(g(349));Rt&30||ja(n,t,i)}return i}function ja(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ta(e,t,n,r){t.value=n,t.getSnapshot=r,ba(t)&&Da(e)}function za(e,t,n){return n(function(){ba(t)&&Da(e)})}function ba(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function Da(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function Rs(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,Q,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function La(){return Te().memoizedState}function Or(e,t,n,r){var i=Oe();Q.flags|=e,i.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Si(e,t,n,r){var i=Te();r=r===void 0?null:r;var o=void 0;if(Y!==null){var l=Y.memoizedState;if(o=l.destroy,r!==null&&zl(r,l.deps)){i.memoizedState=or(t,n,o,r);return}}Q.flags|=e,i.memoizedState=or(1|t,n,o,r)}function Ms(e,t){return Or(8390656,8,e,t)}function Ll(e,t){return Si(2048,8,e,t)}function Aa(e,t){return Si(4,2,e,t)}function Ra(e,t){return Si(4,4,e,t)}function Ma(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fa(e,t,n){return n=n!=null?n.concat([e]):null,Si(4,4,Ma.bind(null,t,e),n)}function Al(){}function Oa(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ba(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ua(e,t,n){return Rt&21?(Me(n,t)||(n=Qu(),Q.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Tf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{F=n,Yi.transition=r}}function Va(){return Te().memoizedState}function zf(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$a(e))Wa(t,n);else if(n=Ca(e,t,n,r),n!==null){var i=de();Re(n,e,r,i),Ha(n,t,r)}}function bf(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($a(e))Wa(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Me(s,l)){var u=t.interleaved;u===null?(i.next=i,_l(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Ca(e,t,i,r),n!==null&&(i=de(),Re(n,e,r,i),Ha(n,t,r))}}function $a(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Wa(e,t){Bn=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ha(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}var ai={readContext:je,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Df={readContext:je,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Ms,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,Ma.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zf.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Rs,useDebugValue:Al,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Rs(!1),t=e[0];return e=Tf.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Oe();if(W){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),te===null)throw Error(g(349));Rt&30||ja(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ms(za.bind(null,r,o,e),[e]),r.flags|=2048,or(9,Ta.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Oe(),t=te.identifierPrefix;if(W){var n=Ze,r=Qe;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:je,useCallback:Oa,useContext:je,useEffect:Ll,useImperativeHandle:Fa,useInsertionEffect:Aa,useLayoutEffect:Ra,useMemo:Ba,useReducer:qi,useRef:La,useState:function(){return qi(ir)},useDebugValue:Al,useDeferredValue:function(e){var t=Te();return Ua(t,Y.memoizedState,e)},useTransition:function(){var e=qi(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Pa,useSyncExternalStore:Ia,useId:Va,unstable_isNewReconciler:!1},Af={readContext:je,useCallback:Oa,useContext:je,useEffect:Ll,useImperativeHandle:Fa,useInsertionEffect:Aa,useLayoutEffect:Ra,useMemo:Ba,useReducer:Ji,useRef:La,useState:function(){return Ji(ir)},useDebugValue:Al,useDeferredValue:function(e){var t=Te();return Y===null?t.memoizedState=e:Ua(t,Y.memoizedState,e)},useTransition:function(){var e=Ji(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Pa,useSyncExternalStore:Ia,useId:Va,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ro(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=gt(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(Re(t,e,i,r),Mr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=gt(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(Re(t,e,i,r),Mr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=gt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(Re(t,e,r,n),Mr(t,e,r))}};function Fs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,o):!0}function Qa(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=je(o):(i=ge(t)?Lt:ue.current,r=t.contextTypes,o=(r=r!=null)?dn(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function Mo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Pl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=je(o):(o=ge(t)?Lt:ue.current,i.context=dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ei.enqueueReplaceState(i,i.state,null),li(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=ud(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function Za(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,Go=r),Fo(e,t)},n}function Ga(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Bs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kf.bind(null,e,t,n),t.then(e,e))}function Us(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Mf=Je.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?Ea(t,null,n,r):pn(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var o=t.ref;return sn(t,i),r=bl(e,t,n,r,o,i),n=Dl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(W&&n&&kl(t),t.flags|=1,ce(e,t,r,i),t.child)}function Ws(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$l(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xa(e,t,o,r,i)):(e=$r(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(l,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xa(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Oo(e,t,n,r,i)}function Ka(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(tn,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(tn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,O(tn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,O(tn,we),we|=r;return ce(e,t,i,n),t.child}function Ya(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oo(e,t,n,r,i){var o=ge(n)?Lt:ue.current;return o=dn(t,o),sn(t,i),n=bl(e,t,n,r,o,i),r=Dl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(W&&r&&kl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Hs(e,t,n,r,i){if(ge(n)){var o=!0;ti(t)}else o=!1;if(sn(t,i),t.stateNode===null)Br(e,t),Qa(t,n,r),Mo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=je(c):(c=ge(n)?Lt:ue.current,c=dn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Os(t,l,r,c),lt=!1;var p=t.memoizedState;l.state=p,li(t,r,l,i),u=t.memoizedState,s!==r||p!==u||ve.current||lt?(typeof m=="function"&&(Ro(t,n,m,r),u=t.memoizedState),(s=lt||Fs(t,n,s,r,p,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Na(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:be(t.type,s),l.props=c,h=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=ge(n)?Lt:ue.current,u=dn(t,u));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||p!==u)&&Os(t,l,r,u),lt=!1,p=t.memoizedState,l.state=p,li(t,r,l,i);var k=t.memoizedState;s!==h||p!==k||ve.current||lt?(typeof w=="function"&&(Ro(t,n,w,r),k=t.memoizedState),(c=lt||Fs(t,n,c,r,p,k,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Bo(e,t,n,r,o,i)}function Bo(e,t,n,r,i,o){Ya(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ts(t,n,!1),qe(e,t,o);r=t.stateNode,Mf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=pn(t,e.child,null,o),t.child=pn(t,null,s,o)):ce(e,t,s,o),t.memoizedState=r.state,i&&Ts(t,n,!0),t.child}function qa(e){var t=e.stateNode;t.pendingContext?js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&js(e,t.context,!1),Il(e,t.containerInfo)}function Qs(e,t,n,r,i){return fn(),Sl(i),t.flags|=256,ce(e,t,n,r),t.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ja(e,t,n){var r=t.pendingProps,i=H.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(H,i&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_i(l,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Uo,e):Rl(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ff(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=yt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=yt(s,o):(o=Dt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Vo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Uo,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&Sl(r),pn(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ff(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(g(422))),Ir(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=_i({mode:"visible",children:r.children},i,0,null),o=Dt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pn(t,e.child,null,l),t.child.memoizedState=Vo(l),t.memoizedState=Uo,o);if(!(t.mode&1))return Ir(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(g(419)),r=eo(o,r,void 0),Ir(e,t,l,r)}if(s=(l&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ye(e,i),Re(r,e,i,-1))}return Vl(),r=eo(Error(g(421))),Ir(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ke=mt(i.nextSibling),xe=t,W=!0,Le=null,e!==null&&(Ne[_e++]=Qe,Ne[_e++]=Ze,Ne[_e++]=At,Qe=e.id,Ze=e.overflow,At=t),t=Rl(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function to(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Of(e,t,n){switch(t.tag){case 3:qa(t),fn();break;case 5:_a(t);break;case 1:ge(t.type)&&ti(t);break;case 4:Il(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(ii,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Ja(e,t,n):(O(H,H.current&1),e=qe(e,t,n),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ka(e,t,n)}return qe(e,t,n)}var tc,$o,nc,rc;tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$o=function(){};nc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zt(Ve.current);var o=null;switch(n){case"input":i=co(e,i),r=co(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=mo(e,i),r=mo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}vo(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bf(e,t,n){var r=t.pendingProps;switch(xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&ei(),le(t),null;case 3:return r=t.stateNode,mn(),$(ve),$(ue),Tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Yo(Le),Le=null))),$o(e,t),le(t),null;case 5:jl(t);var i=zt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)nc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return le(t),null}if(e=zt(Ve.current),_r(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[er]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Ln.length;i++)V(Ln[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ns(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":is(r,o),V("invalid",r)}vo(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),i=["children",""+s]):Wn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":gr(r),rs(r,o,!0);break;case"textarea":gr(r),os(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Be]=t,e[er]=r,tc(e,t,!1,!1),t.stateNode=e;e:{switch(l=go(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ln.length;i++)V(Ln[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":ns(e,r),i=co(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":is(e,r),i=mo(e,r),V("invalid",e);break;default:i=r}vo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Lu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&V("scroll",e):u!=null&&ll(e,o,u,l))}switch(n){case"input":gr(e),rs(e,r,!1);break;case"textarea":gr(e),os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=zt(nr.current),zt(Ve.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return le(t),null;case 13:if($(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&t.mode&1&&!(t.flags&128))xa(),fn(),t.flags|=98560,o=!1;else if(o=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Be]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Le!==null&&(Yo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?q===0&&(q=3):Vl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return mn(),$o(e,t),e===null&&qn(t.stateNode.containerInfo),le(t),null;case 10:return Nl(t.type._context),le(t),null;case 17:return ge(t.type)&&ei(),le(t),null;case 19:if($(H),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Pn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=si(e),l!==null){for(t.flags|=128,Pn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>vn&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304)}else{if(!r)if(e=si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return le(t),null}else 2*X()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=H.current,O(H,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ul(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function Uf(e,t){switch(xl(t),t.tag){case 1:return ge(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),$(ve),$(ue),Tl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return mn(),null;case 10:return Nl(t.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var jr=!1,se=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,E=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Wo(e,t,n){try{n()}catch(r){G(e,t,r)}}var Gs=!1;function $f(e,t){if(Po=Kr,e=ua(),wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++c===i&&(s=l),p===o&&++m===r&&(u=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Io={focusedElem:e,selectionRange:n},Kr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,P=k.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:be(t.type,y),P);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return k=Gs,Gs=!1,k}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Wo(t,n,o)}i=i.next}while(i!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ic(e){var t=e.alternate;t!==null&&(e.alternate=null,ic(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[er],delete t[zo],delete t[Nf],delete t[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oc(e){return e.tag===5||e.tag===3||e.tag===4}function Xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}function Zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zo(e,t,n),e=e.sibling;e!==null;)Zo(e,t,n),e=e.sibling}var ne=null,De=!1;function nt(e,t,n){for(n=n.child;n!==null;)lc(e,t,n),n=n.sibling}function lc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:se||en(n,t);case 6:var r=ne,i=De;ne=null,nt(e,t,n),ne=r,De=i,ne!==null&&(De?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(De?(e=ne,n=n.stateNode,e.nodeType===8?Gi(e.parentNode,n):e.nodeType===1&&Gi(e,n),Xn(e)):Gi(ne,n.stateNode));break;case 4:r=ne,i=De,ne=n.stateNode.containerInfo,De=!0,nt(e,t,n),ne=r,De=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Wo(n,t,l),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!se&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,nt(e,t,n),se=r):nt(e,t,n);break;default:nt(e,t,n)}}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var i=qf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,De=!1;break e;case 3:ne=s.stateNode.containerInfo,De=!0;break e;case 4:ne=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(ne===null)throw Error(g(160));lc(o,l,i),ne=null,De=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sc(t,e),t=t.sibling}function sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Fe(e),r&4){try{Un(3,e,e.return),Ci(3,e)}catch(y){G(e,e.return,y)}try{Un(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:ze(t,e),Fe(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(ze(t,e),Fe(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(y){G(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ju(i,o),go(s,l);var c=go(s,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?Lu(i,h):m==="dangerouslySetInnerHTML"?bu(i,h):m==="children"?Hn(i,h):ll(i,m,h,c)}switch(s){case"input":fo(i,o);break;case"textarea":Tu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?nn(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?nn(i,!!o.multiple,o.defaultValue,!0):nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[er]=o}catch(y){G(e,e.return,y)}}break;case 6:if(ze(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(g(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(ze(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:ze(t,e),Fe(e);break;case 13:ze(t,e),Fe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ol=X())),r&4&&Ks(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||m,ze(t,e),se=c):ze(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(h=E=m;E!==null;){switch(p=E,w=p.child,p.tag){case 0:case 11:case 14:case 15:Un(4,p,p.return);break;case 1:en(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:en(p,p.return);break;case 22:if(p.memoizedState!==null){qs(h);continue}}w!==null?(w.return=p,E=w):qs(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Du("display",l))}catch(y){G(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){G(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Fe(e),r&4&&Ks(e);break;case 21:break;default:ze(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oc(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var o=Xs(e);Zo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Xs(e);Qo(e,s,l);break;default:throw Error(g(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e,t,n){E=e,uc(e)}function uc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||jr;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||se;s=jr;var c=se;if(jr=l,(se=u)&&!c)for(E=i;E!==null;)l=E,u=l.child,l.tag===22&&l.memoizedState!==null?Js(i):u!==null?(u.return=l,E=u):Js(i);for(;o!==null;)E=o,uc(o),o=o.sibling;E=i,jr=s,se=c}Ys(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Ys(e)}}function Ys(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&As(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}As(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Xn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}se||t.flags&512&&Ho(t)}catch(p){G(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function qs(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Js(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var o=t.return;try{Ho(t)}catch(u){G(t,o,u)}break;case 5:var l=t.return;try{Ho(t)}catch(u){G(t,l,u)}}}catch(u){G(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Hf=Math.ceil,ci=Je.ReactCurrentDispatcher,Ml=Je.ReactCurrentOwner,Ie=Je.ReactCurrentBatchConfig,D=0,te=null,K=null,re=0,we=0,tn=St(0),q=0,lr=null,Mt=0,Ni=0,Fl=0,Vn=null,me=null,Ol=0,vn=1/0,We=null,di=!1,Go=null,vt=null,Tr=!1,ct=null,fi=0,$n=0,Xo=null,Ur=-1,Vr=0;function de(){return D&6?X():Ur!==-1?Ur:Ur=X()}function gt(e){return e.mode&1?D&2&&re!==0?re&-re:If.transition!==null?(Vr===0&&(Vr=Qu()),Vr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ju(e.type)),e):1}function Re(e,t,n,r){if(50<$n)throw $n=0,Xo=null,Error(g(185));ur(e,n,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(Ni|=n),q===4&&ut(e,re)),ye(e,r),n===1&&D===0&&!(t.mode&1)&&(vn=X()+500,xi&&Et()))}function ye(e,t){var n=e.callbackNode;Pd(e,t);var r=Xr(e,e===te?re:0);if(r===0)n!==null&&us(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&us(n),t===1)e.tag===0?Pf(eu.bind(null,e)):ya(eu.bind(null,e)),Ef(function(){!(D&6)&&Et()}),n=null;else{switch(Zu(r)){case 1:n=dl;break;case 4:n=Wu;break;case 16:n=Gr;break;case 536870912:n=Hu;break;default:n=Gr}n=vc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Ur=-1,Vr=0,D&6)throw Error(g(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=Xr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pi(e,r);else{t=r;var i=D;D|=2;var o=dc();(te!==e||re!==t)&&(We=null,vn=X()+500,bt(e,t));do try{Gf();break}catch(s){cc(e,s)}while(!0);Cl(),ci.current=o,D=i,K!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(i=So(e),i!==0&&(r=i,t=Ko(e,i))),t===1)throw n=lr,bt(e,0),ut(e,r),ye(e,X()),n;if(t===6)ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qf(i)&&(t=pi(e,r),t===2&&(o=So(e),o!==0&&(r=o,t=Ko(e,o))),t===1))throw n=lr,bt(e,0),ut(e,r),ye(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:It(e,me,We);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Ol+500-X(),10<t)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To(It.bind(null,e,me,We),t);break}It(e,me,We);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ae(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hf(r/1960))-r,10<r){e.timeoutHandle=To(It.bind(null,e,me,We),r);break}It(e,me,We);break;case 5:It(e,me,We);break;default:throw Error(g(329))}}}return ye(e,X()),e.callbackNode===n?ac.bind(null,e):null}function Ko(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(bt(e,t).flags|=256),e=pi(e,t),e!==2&&(t=me,me=n,t!==null&&Yo(t)),e}function Yo(e){me===null?me=e:me.push.apply(me,e)}function Qf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Fl,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function eu(e){if(D&6)throw Error(g(327));un();var t=Xr(e,0);if(!(t&1))return ye(e,X()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=So(e);r!==0&&(t=r,n=Ko(e,r))}if(n===1)throw n=lr,bt(e,0),ut(e,t),ye(e,X()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,me,We),ye(e,X()),null}function Bl(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(vn=X()+500,xi&&Et())}}function Ft(e){ct!==null&&ct.tag===0&&!(D&6)&&un();var t=D;D|=1;var n=Ie.transition,r=F;try{if(Ie.transition=null,F=1,e)return e()}finally{F=r,Ie.transition=n,D=t,!(D&6)&&Et()}}function Ul(){we=tn.current,$(tn)}function bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:mn(),$(ve),$(ue),Tl();break;case 5:jl(r);break;case 4:mn();break;case 13:$(H);break;case 19:$(H);break;case 10:Nl(r.type._context);break;case 22:case 23:Ul()}n=n.return}if(te=e,K=e=yt(e.current,null),re=we=t,q=0,lr=null,Fl=Ni=Mt=0,me=Vn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Tt=null}return e}function cc(e,t){do{var n=K;try{if(Cl(),Fr.current=ai,ui){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(Rt=0,ee=Y=Q=null,Bn=!1,rr=0,Ml.current=null,n===null||n.return===null){q=1,lr=t,K=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Us(l);if(w!==null){w.flags&=-257,Vs(w,l,s,o,t),w.mode&1&&Bs(o,c,t),t=w,u=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(u),t.updateQueue=y}else k.add(u);break e}else{if(!(t&1)){Bs(o,c,t),Vl();break e}u=Error(g(426))}}else if(W&&s.mode&1){var P=Us(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Vs(P,l,s,o,t),Sl(hn(u,s));break e}}o=u=hn(u,s),q!==4&&(q=2),Vn===null?Vn=[o]:Vn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Za(o,u,t);Ls(o,d);break e;case 1:s=u;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vt===null||!vt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ga(o,s,t);Ls(o,v);break e}}o=o.return}while(o!==null)}pc(n)}catch(x){t=x,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function dc(){var e=ci.current;return ci.current=ai,e===null?ai:e}function Vl(){(q===0||q===3||q===2)&&(q=4),te===null||!(Mt&268435455)&&!(Ni&268435455)||ut(te,re)}function pi(e,t){var n=D;D|=2;var r=dc();(te!==e||re!==t)&&(We=null,bt(e,t));do try{Zf();break}catch(i){cc(e,i)}while(!0);if(Cl(),D=n,ci.current=r,K!==null)throw Error(g(261));return te=null,re=0,q}function Zf(){for(;K!==null;)fc(K)}function Gf(){for(;K!==null&&!yd();)fc(K)}function fc(e){var t=hc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?pc(e):K=t,Ml.current=null}function pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,K=null;return}}else if(n=Bf(n,t,we),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);q===0&&(q=5)}function It(e,t,n){var r=F,i=Ie.transition;try{Ie.transition=null,F=1,Xf(e,t,n,r)}finally{Ie.transition=i,F=r}return null}function Xf(e,t,n,r){do un();while(ct!==null);if(D&6)throw Error(g(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Id(e,o),e===te&&(K=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,vc(Gr,function(){return un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=F;F=1;var s=D;D|=4,Ml.current=null,$f(e,n),sc(n,e),hf(Io),Kr=!!Po,Io=Po=null,e.current=n,Wf(n),wd(),D=s,F=l,Ie.transition=o}else e.current=n;if(Tr&&(Tr=!1,ct=e,fi=i),o=e.pendingLanes,o===0&&(vt=null),Sd(n.stateNode),ye(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(di)throw di=!1,e=Go,Go=null,e;return fi&1&&e.tag!==0&&un(),o=e.pendingLanes,o&1?e===Xo?$n++:($n=0,Xo=e):$n=0,Et(),null}function un(){if(ct!==null){var e=Zu(fi),t=Ie.transition,n=F;try{if(Ie.transition=null,F=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,fi=0,D&6)throw Error(g(331));var i=D;for(D|=4,E=e.current;E!==null;){var o=E,l=o.child;if(E.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(E=c;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Un(8,m,o)}var h=m.child;if(h!==null)h.return=m,E=h;else for(;E!==null;){m=E;var p=m.sibling,w=m.return;if(ic(m),m===c){E=null;break}if(p!==null){p.return=w,E=p;break}E=w}}}var k=o.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}E=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,E=l;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var a=e.current;for(E=a;E!==null;){l=E;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,E=f;else e:for(l=a;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ci(9,s)}}catch(x){G(s,s.return,x)}if(s===l){E=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,E=v;break e}E=s.return}}if(D=i,Et(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{F=n,Ie.transition=t}}return!1}function tu(e,t,n){t=hn(n,t),t=Za(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(ur(e,1,t),ye(e,t))}function G(e,t,n){if(e.tag===3)tu(e,e,n);else for(;t!==null;){if(t.tag===3){tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=hn(n,e),e=Ga(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(ur(t,1,e),ye(t,e));break}}t=t.return}}function Kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>X()-Ol?bt(e,0):Fl|=n),ye(e,t)}function mc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=de();e=Ye(e,t),e!==null&&(ur(e,t,n),ye(e,n))}function Yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mc(e,n)}function qf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),mc(e,n)}var hc;hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Of(e,t,n);he=!!(e.flags&131072)}else he=!1,W&&t.flags&1048576&&wa(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var i=dn(t,ue.current);sn(t,n),i=bl(null,t,r,e,i,n);var o=Dl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,ti(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pl(t),i.updater=Ei,t.stateNode=i,i._reactInternals=t,Mo(t,r,e,n),t=Bo(null,t,r,!0,o,n)):(t.tag=0,W&&o&&kl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ep(r),e=be(r,e),i){case 0:t=Oo(null,t,r,e,n);break e;case 1:t=Hs(null,t,r,e,n);break e;case 11:t=$s(null,t,r,e,n);break e;case 14:t=Ws(null,t,r,be(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Oo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Hs(e,t,r,i,n);case 3:e:{if(qa(t),e===null)throw Error(g(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Na(e,t),li(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=hn(Error(g(423)),t),t=Qs(e,t,r,n,i);break e}else if(r!==i){i=hn(Error(g(424)),t),t=Qs(e,t,r,n,i);break e}else for(ke=mt(t.stateNode.containerInfo.firstChild),xe=t,W=!0,Le=null,n=Ea(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===i){t=qe(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return _a(t),e===null&&Lo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,jo(r,i)?l=null:o!==null&&jo(r,o)&&(t.flags|=32),Ya(e,t),ce(e,t,l,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return Ja(e,t,n);case 4:return Il(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),$s(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,O(ii,r._currentValue),r._currentValue=l,o!==null)if(Me(o.value,l)){if(o.children===i.children&&!ve.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ge(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ao(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(g(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ao(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sn(t,n),i=je(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=be(r,t.pendingProps),i=be(r.type,i),Ws(e,t,r,i,n);case 15:return Xa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Br(e,t),t.tag=1,ge(r)?(e=!0,ti(t)):e=!1,sn(t,n),Qa(t,r,i),Mo(t,r,i,n),Bo(null,t,r,!0,e,n);case 19:return ec(e,t,n);case 22:return Ka(e,t,n)}throw Error(g(156,t.tag))};function vc(e,t){return $u(e,t)}function Jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Jf(e,t,n,r)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ep(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ul)return 11;if(e===al)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")$l(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ht:return Dt(n.children,i,o,t);case sl:l=8,i|=8;break;case lo:return e=Pe(12,n,t,i|2),e.elementType=lo,e.lanes=o,e;case so:return e=Pe(13,n,t,i),e.elementType=so,e.lanes=o,e;case uo:return e=Pe(19,n,t,i),e.elementType=uo,e.lanes=o,e;case _u:return _i(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cu:l=10;break e;case Nu:l=9;break e;case ul:l=11;break e;case al:l=14;break e;case ot:l=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Pe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function _i(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=_u,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wl(e,t,n,r,i,o,l,s,u){return e=new tp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pl(o),e}function np(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gc(e){if(!e)return kt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(ge(n))return ga(e,n,t)}return t}function yc(e,t,n,r,i,o,l,s,u){return e=Wl(n,r,!0,e,i,o,l,s,u),e.context=gc(null),n=e.current,r=de(),i=gt(n),o=Ge(r,i),o.callback=t??null,ht(n,o,i),e.current.lanes=i,ur(e,i,r),ye(e,r),e}function Pi(e,t,n,r){var i=t.current,o=de(),l=gt(i);return n=gc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,l),e!==null&&(Re(e,i,l,o),Mr(e,i,l)),l}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hl(e,t){nu(e,t),(e=e.alternate)&&nu(e,t)}function rp(){return null}var wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}Ii.prototype.render=Ql.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));Pi(e,t,null,null)};Ii.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Pi(null,e,null,null)}),t[Ke]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&qu(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ru(){}function ip(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=mi(l);o.call(c)}}var l=yc(t,r,e,0,null,!1,!1,"",ru);return e._reactRootContainer=l,e[Ke]=l.current,qn(e.nodeType===8?e.parentNode:e),Ft(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=mi(u);s.call(c)}}var u=Wl(e,0,!1,null,null,!1,!1,"",ru);return e._reactRootContainer=u,e[Ke]=u.current,qn(e.nodeType===8?e.parentNode:e),Ft(function(){Pi(t,u,n,r)}),u}function Ti(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=mi(l);s.call(u)}}Pi(t,l,e,i)}else l=ip(n,t,e,i,r);return mi(l)}Gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(fl(t,n|1),ye(t,X()),!(D&6)&&(vn=X()+500,Et()))}break;case 13:Ft(function(){var r=Ye(e,1);if(r!==null){var i=de();Re(r,e,1,i)}}),Hl(e,1)}};pl=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=de();Re(t,e,134217728,n)}Hl(e,134217728)}};Xu=function(e){if(e.tag===13){var t=gt(e),n=Ye(e,t);if(n!==null){var r=de();Re(n,e,t,r)}Hl(e,t)}};Ku=function(){return F};Yu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};wo=function(e,t,n){switch(t){case"input":if(fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(g(90));Iu(r),fo(r,i)}}}break;case"textarea":Tu(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Mu=Bl;Fu=Ft;var op={usingClientEntryPoint:!1,Events:[cr,Xt,ki,Au,Ru,Bl]},In={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lp={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{vi=zr.inject(lp),Ue=zr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(t))throw Error(g(200));return np(e,t,null,n)};Ee.createRoot=function(e,t){if(!Zl(e))throw Error(g(299));var n=!1,r="",i=wc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wl(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,qn(e.nodeType===8?e.parentNode:e),new Ql(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Uu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ft(e)};Ee.hydrate=function(e,t,n){if(!ji(t))throw Error(g(200));return Ti(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Zl(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=wc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yc(t,null,e,1,n??null,i,!1,o,l),e[Ke]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ii(t)};Ee.render=function(e,t,n){if(!ji(t))throw Error(g(200));return Ti(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!ji(e))throw Error(g(40));return e._reactRootContainer?(Ft(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Ee.unstable_batchedUpdates=Bl;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return Ti(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ku.exports=Ee;var sp=ku.exports,xc,iu=sp;xc=iu.createRoot,iu.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ap={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=M.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...s},u)=>M.createElement("svg",{ref:u,...ap,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Sc("lucide",i),...s},[...l.map(([c,m])=>M.createElement(c,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=(e,t)=>{const n=M.forwardRef(({className:r,...i},o)=>M.createElement(cp,{ref:o,iconNode:t,className:Sc(`lucide-${up(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Gl("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Gl("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Gl("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);function mp(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function hp(...e){return t=>e.forEach(n=>mp(n,t))}var Ec=M.forwardRef((e,t)=>{const{children:n,...r}=e,i=M.Children.toArray(n),o=i.find(gp);if(o){const l=o.props.children,s=i.map(u=>u===o?M.Children.count(l)>1?M.Children.only(null):M.isValidElement(l)?l.props.children:null:u);return R.jsx(qo,{...r,ref:t,children:M.isValidElement(l)?M.cloneElement(l,void 0,s):null})}return R.jsx(qo,{...r,ref:t,children:n})});Ec.displayName="Slot";var qo=M.forwardRef((e,t)=>{const{children:n,...r}=e;if(M.isValidElement(n)){const i=wp(n);return M.cloneElement(n,{...yp(r,n.props),ref:t?hp(t,i):i})}return M.Children.count(n)>1?M.Children.only(null):null});qo.displayName="SlotClone";var vp=({children:e})=>R.jsx(R.Fragment,{children:e});function gp(e){return M.isValidElement(e)&&e.type===vp}function yp(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function wp(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Cc(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Cc(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function kp(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Cc(e))&&(r&&(r+=" "),r+=t);return r}const ou=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,lu=kp,xp=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return lu(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,l=Object.keys(i).map(c=>{const m=n==null?void 0:n[c],h=o==null?void 0:o[c];if(m===null)return null;const p=ou(m)||ou(h);return i[c][p]}),s=n&&Object.entries(n).reduce((c,m)=>{let[h,p]=m;return p===void 0||(c[h]=p),c},{}),u=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,m)=>{let{class:h,className:p,...w}=m;return Object.entries(w).every(k=>{let[y,P]=k;return Array.isArray(P)?P.includes({...o,...s}[y]):{...o,...s}[y]===P})?[...c,h,p]:c},[]);return lu(e,l,u,n==null?void 0:n.class,n==null?void 0:n.className)};function Nc(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Nc(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Sp(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Nc(e))&&(r&&(r+=" "),r+=t);return r}const Xl="-",Ep=e=>{const t=Np(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{const s=l.split(Xl);return s[0]===""&&s.length!==1&&s.shift(),_c(s,t)||Cp(l)},getConflictingClassGroupIds:(l,s)=>{const u=n[l]||[];return s&&r[l]?[...u,...r[l]]:u}}},_c=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?_c(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Xl);return(l=t.validators.find(({validator:s})=>s(o)))==null?void 0:l.classGroupId},su=/^\[(.+)\]$/,Cp=e=>{if(su.test(e)){const t=su.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Np=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Pp(Object.entries(e.classGroups),n).forEach(([o,l])=>{Jo(l,r,o,t)}),r},Jo=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:uu(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(_p(i)){Jo(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,l])=>{Jo(l,uu(t,o),n,r)})})},uu=(e,t)=>{let n=e;return t.split(Xl).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},_p=e=>e.isThemeGetter,Pp=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([l,s])=>[t+l,s])):o);return[n,i]}):e,Ip=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,l)=>{n.set(o,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let l=n.get(o);if(l!==void 0)return l;if((l=r.get(o))!==void 0)return i(o,l),l},set(o,l){n.has(o)?n.set(o,l):i(o,l)}}},Pc="!",jp=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,l=s=>{const u=[];let c=0,m=0,h;for(let P=0;P<s.length;P++){let d=s[P];if(c===0){if(d===i&&(r||s.slice(P,P+o)===t)){u.push(s.slice(m,P)),m=P+o;continue}if(d==="/"){h=P;continue}}d==="["?c++:d==="]"&&c--}const p=u.length===0?s:s.substring(m),w=p.startsWith(Pc),k=w?p.substring(1):p,y=h&&h>m?h-m:void 0;return{modifiers:u,hasImportantModifier:w,baseClassName:k,maybePostfixModifierPosition:y}};return n?s=>n({className:s,parseClassName:l}):l},Tp=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},zp=e=>({cache:Ip(e.cacheSize),parseClassName:jp(e),...Ep(e)}),bp=/\s+/,Dp=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],l=e.trim().split(bp);let s="";for(let u=l.length-1;u>=0;u-=1){const c=l[u],{modifiers:m,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:w}=n(c);let k=!!w,y=r(k?p.substring(0,w):p);if(!y){if(!k){s=c+(s.length>0?" "+s:s);continue}if(y=r(p),!y){s=c+(s.length>0?" "+s:s);continue}k=!1}const P=Tp(m).join(":"),d=h?P+Pc:P,a=d+y;if(o.includes(a))continue;o.push(a);const f=i(y,k);for(let v=0;v<f.length;++v){const x=f[v];o.push(d+x)}s=c+(s.length>0?" "+s:s)}return s};function Lp(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Ic(t))&&(r&&(r+=" "),r+=n);return r}const Ic=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Ic(e[r]))&&(n&&(n+=" "),n+=t);return n};function Ap(e,...t){let n,r,i,o=l;function l(u){const c=t.reduce((m,h)=>h(m),e());return n=zp(c),r=n.cache.get,i=n.cache.set,o=s,s(u)}function s(u){const c=r(u);if(c)return c;const m=Dp(u,n);return i(u,m),m}return function(){return o(Lp.apply(null,arguments))}}const U=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},jc=/^\[(?:([a-z-]+):)?(.+)\]$/i,Rp=/^\d+\/\d+$/,Mp=new Set(["px","full","screen"]),Fp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Op=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Bp=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Up=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$e=e=>an(e)||Mp.has(e)||Rp.test(e),rt=e=>kn(e,"length",Kp),an=e=>!!e&&!Number.isNaN(Number(e)),io=e=>kn(e,"number",an),jn=e=>!!e&&Number.isInteger(Number(e)),$p=e=>e.endsWith("%")&&an(e.slice(0,-1)),T=e=>jc.test(e),it=e=>Fp.test(e),Wp=new Set(["length","size","percentage"]),Hp=e=>kn(e,Wp,Tc),Qp=e=>kn(e,"position",Tc),Zp=new Set(["image","url"]),Gp=e=>kn(e,Zp,qp),Xp=e=>kn(e,"",Yp),Tn=()=>!0,kn=(e,t,n)=>{const r=jc.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Kp=e=>Op.test(e)&&!Bp.test(e),Tc=()=>!1,Yp=e=>Up.test(e),qp=e=>Vp.test(e),Jp=()=>{const e=U("colors"),t=U("spacing"),n=U("blur"),r=U("brightness"),i=U("borderColor"),o=U("borderRadius"),l=U("borderSpacing"),s=U("borderWidth"),u=U("contrast"),c=U("grayscale"),m=U("hueRotate"),h=U("invert"),p=U("gap"),w=U("gradientColorStops"),k=U("gradientColorStopPositions"),y=U("inset"),P=U("margin"),d=U("opacity"),a=U("padding"),f=U("saturate"),v=U("scale"),x=U("sepia"),C=U("skew"),N=U("space"),_=U("translate"),B=()=>["auto","contain","none"],z=()=>["auto","hidden","clip","visible","scroll"],ae=()=>["auto",T,t],A=()=>[T,t],et=()=>["",$e,rt],Ct=()=>["auto",an,T],fr=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],tt=()=>["solid","dashed","dotted","double","none"],Vt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],S=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",T],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[an,T];return{cacheSize:500,separator:":",theme:{colors:[Tn],spacing:[$e,rt],blur:["none","",it,T],brightness:L(),borderColor:[e],borderRadius:["none","","full",it,T],borderSpacing:A(),borderWidth:et(),contrast:L(),grayscale:I(),hueRotate:L(),invert:I(),gap:A(),gradientColorStops:[e],gradientColorStopPositions:[$p,rt],inset:ae(),margin:ae(),opacity:L(),padding:A(),saturate:L(),scale:L(),sepia:I(),skew:L(),space:A(),translate:A()},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[it]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...fr(),T]}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",jn,T]}],basis:[{basis:ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",jn,T]}],"grid-cols":[{"grid-cols":[Tn]}],"col-start-end":[{col:["auto",{span:["full",jn,T]},T]}],"col-start":[{"col-start":Ct()}],"col-end":[{"col-end":Ct()}],"grid-rows":[{"grid-rows":[Tn]}],"row-start-end":[{row:["auto",{span:[jn,T]},T]}],"row-start":[{"row-start":Ct()}],"row-end":[{"row-end":Ct()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...S()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...S(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...S(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[a]}],px:[{px:[a]}],py:[{py:[a]}],ps:[{ps:[a]}],pe:[{pe:[a]}],pt:[{pt:[a]}],pr:[{pr:[a]}],pb:[{pb:[a]}],pl:[{pl:[a]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",T,t]}],"min-w":[{"min-w":[T,t,"min","max","fit"]}],"max-w":[{"max-w":[T,t,"none","full","min","max","fit","prose",{screen:[it]},it]}],h:[{h:[T,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[T,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[T,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[T,t,"auto","min","max","fit"]}],"font-size":[{text:["base",it,rt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",io]}],"font-family":[{font:[Tn]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",T]}],"line-clamp":[{"line-clamp":["none",an,io]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",$e,T]}],"list-image":[{"list-image":["none",T]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...tt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",$e,rt]}],"underline-offset":[{"underline-offset":["auto",$e,T]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...fr(),Qp]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Hp]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Gp]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...tt(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:tt()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...tt()]}],"outline-offset":[{"outline-offset":[$e,T]}],"outline-w":[{outline:[$e,rt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[$e,rt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",it,Xp]}],"shadow-color":[{shadow:[Tn]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...Vt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Vt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",it,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[h]}],saturate:[{saturate:[f]}],sepia:[{sepia:[x]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[f]}],"backdrop-sepia":[{"backdrop-sepia":[x]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[jn,T]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[$e,rt,io]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},em=Ap(Jp);function Ut(...e){return em(Sp(e))}const tm=xp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Wr=M.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const l=r?Ec:"button";return R.jsx(l,{className:Ut(tm({variant:t,size:n,className:e})),ref:o,...i})});Wr.displayName="Button";const zc=M.forwardRef(({className:e,...t},n)=>R.jsx("div",{ref:n,className:Ut("rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",e),...t}));zc.displayName="Card";const bc=M.forwardRef(({className:e,...t},n)=>R.jsx("div",{ref:n,className:Ut("flex flex-col space-y-1.5 p-6",e),...t}));bc.displayName="CardHeader";const Dc=M.forwardRef(({className:e,...t},n)=>R.jsx("div",{ref:n,className:Ut("font-semibold leading-none tracking-tight",e),...t}));Dc.displayName="CardTitle";const nm=M.forwardRef(({className:e,...t},n)=>R.jsx("div",{ref:n,className:Ut("text-sm text-neutral-500 dark:text-neutral-400",e),...t}));nm.displayName="CardDescription";const Lc=M.forwardRef(({className:e,...t},n)=>R.jsx("div",{ref:n,className:Ut("p-6 pt-0",e),...t}));Lc.displayName="CardContent";const rm=M.forwardRef(({className:e,...t},n)=>R.jsx("div",{ref:n,className:Ut("flex items-center p-6 pt-0",e),...t}));rm.displayName="CardFooter";const im=[{title:" Design a hash table to manage a product catalog. Each product has a unique product ID, name, and price. Use linear probing for collision resolu on. Implement opera ons to add, search, update, and delete a product. ",description:"unit 3.1",code:`#include <iostream>
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
    cout << "Optimal Path: ";`}];function om(){const e=im.sort((i,o)=>{const l=i.title.trim().charAt(0).toUpperCase(),s=o.title.trim().charAt(0).toUpperCase();return l.localeCompare(s)});console.log(e);const[t,n]=M.useState(null),r=M.useCallback((i,o)=>{const l=s=>{const u=document.createElement("textarea");u.value=s,u.style.position="fixed",u.style.top="0",u.style.left="0",u.style.width="2em",u.style.height="2em",u.style.padding="0",u.style.border="none",u.style.outline="none",u.style.boxShadow="none",u.style.background="transparent",document.body.appendChild(u),u.focus(),u.select();try{document.execCommand("copy")?(n(o),setTimeout(()=>n(null),2e3)):console.error("Failed to copy text")}catch(c){console.error("Failed to copy text: ",c)}document.body.removeChild(u)};navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(i).then(()=>{n(o),setTimeout(()=>n(null),2e3)}).catch(s=>{console.error("Failed to copy text: ",s)}):l(i)},[]);return R.jsx("div",{className:"container mx-auto p-4",children:R.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:e.map((i,o)=>R.jsxs(zc,{className:"overflow-hidden",children:[R.jsxs(bc,{className:"bg-secondary bg-[#f4f4f5]",children:[R.jsx(Dc,{className:"font-light m-2",children:i.title}),R.jsx(Wr,{className:"bg-black rounded-lg text-white w-3/12",children:i.description})]}),R.jsxs(Lc,{className:"p-4",children:[R.jsxs("div",{className:"relative bg-[#f4f4f5]",children:[R.jsx("pre",{className:"bg-muted p-4 rounded-md overflow-x-auto text-sm",children:R.jsxs("code",{children:[i.code.slice(0,100),"..."]})}),R.jsxs(Wr,{className:"absolute top-2 right-2",size:"sm",variant:"secondary",onClick:()=>r(i.code,o),children:[R.jsx("span",{className:"sr-only",children:t===o?"Copied":"Copy code"}),t===o?R.jsx(dp,{className:"h-4 w-4","aria-hidden":"true"}):R.jsx(fp,{className:"h-4 w-4","aria-hidden":"true"})]})]}),R.jsxs(Wr,{className:"mt-4 w-full",onClick:()=>r(i.code,o),children:[R.jsx(pp,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),R.jsx("span",{children:t===o?"Copied!":"Copy Code"})]})]})]},o))})})}xc(document.getElementById("root")).render(R.jsx(M.StrictMode,{children:R.jsx(om,{})}));
