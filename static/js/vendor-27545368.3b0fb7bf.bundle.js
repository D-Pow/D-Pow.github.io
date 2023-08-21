/*! For license information please see vendor-27545368.3b0fb7bf.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkd_pow_github_io=self.webpackChunkd_pow_github_io||[]).push([[30],{2599:function(e,t,r){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var o;r.d(t,{Ep:function(){return h},J0:function(){return s},RQ:function(){return I},WK:function(){return W},X3:function(){return D},Zn:function(){return R},Zq:function(){return U},aU:function(){return o},cP:function(){return f},fp:function(){return y},pC:function(){return k},q_:function(){return i}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(o||(o={}));const a="popstate";function i(e){return void 0===e&&(e={}),d((function(e,t){let{pathname:r="/",search:n="",hash:o=""}=f(e.location.hash.substr(1));return r.startsWith("/")||r.startsWith(".")||(r="/"+r),c("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let r=e.document.querySelector("base"),n="";if(r&&r.getAttribute("href")){let t=e.location.href,r=t.indexOf("#");n=-1===r?t:t.slice(0,r)}return n+"#"+("string"==typeof t?t:h(t))}),(function(e,t){u("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function s(e,t){if(!1===e||null==e)throw new Error(t)}function u(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,r,o){return void 0===r&&(r=null),n({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?f(t):t,{state:r,key:t&&t.key||o||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function f(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function d(e,t,r,i){void 0===i&&(i={});let{window:u=document.defaultView,v5Compat:f=!1}=i,d=u.history,p=o.Pop,y=null,b=m();function m(){return(d.state||{idx:null}).idx}function v(){p=o.Pop;let e=m(),t=null==e?null:e-b;b=e,y&&y({action:p,location:w.location,delta:t})}function g(e){let t="null"!==u.location.origin?u.location.origin:u.location.href,r="string"==typeof e?e:h(e);return s(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==b&&(b=0,d.replaceState(n({},d.state,{idx:b}),""));let w={get action(){return p},get location(){return e(u,d)},listen(e){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(a,v),y=e,()=>{u.removeEventListener(a,v),y=null}},createHref:e=>t(u,e),createURL:g,encodeLocation(e){let t=g(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p=o.Push;let n=c(w.location,e,t);r&&r(n,e),b=m()+1;let a=l(n,b),i=w.createHref(n);try{d.pushState(a,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;u.location.assign(i)}f&&y&&y({action:p,location:w.location,delta:1})},replace:function(e,t){p=o.Replace;let n=c(w.location,e,t);r&&r(n,e),b=m();let a=l(n,b),i=w.createHref(n);d.replaceState(a,"",i),f&&y&&y({action:p,location:w.location,delta:0})},go:e=>d.go(e)};return w}var p;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(p||(p={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,r){void 0===r&&(r="/");let n=R(("string"==typeof t?f(t):t).pathname||"/",r);if(null==n)return null;let o=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=A(o[e],O(n));return a}function b(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(s(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let u=I([n,i.relativePath]),l=r.concat(i);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),b(e.children,t,l,u)),(null!=e.path||e.index)&&t.push({path:u,score:P(u,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of m(e.path))o(e,t,r);else o(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return o?[a,""]:[a];let i=m(n.join("/")),s=[];return s.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&s.push(...i),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const v=/^:\w+$/,g=3,w=2,_=1,T=10,x=-2,E=e=>"*"===e;function P(e,t){let r=e.split("/"),n=r.length;return r.some(E)&&(n+=x),t&&(n+=w),r.filter((e=>!E(e))).reduce(((e,t)=>e+(v.test(t)?g:""===t?_:T)),n)}function A(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let e=0;e<r.length;++e){let i=r[e],s=e===r.length-1,u="/"===o?t:t.slice(o.length)||"/",l=B({path:i.relativePath,caseSensitive:i.caseSensitive,end:s},u);if(!l)return null;Object.assign(n,l.params);let c=i.route;a.push({params:n,pathname:I([o,l.pathname]),pathnameBase:j(I([o,l.pathnameBase])),route:c}),"/"!==l.pathnameBase&&(o=I([o,l.pathnameBase]))}return a}function B(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));e.endsWith("*")?(n.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=s[r]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return u(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(s[r]||"",t),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function O(e){try{return decodeURI(e)}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function S(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function U(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function k(e,t,r,o){let a;void 0===o&&(o=!1),"string"==typeof e?a=f(e):(a=n({},e),s(!a.pathname||!a.pathname.includes("?"),S("?","pathname","search",a)),s(!a.pathname||!a.pathname.includes("#"),S("#","pathname","hash",a)),s(!a.search||!a.search.includes("#"),S("#","search","hash",a)));let i,u=""===e||""===a.pathname,l=u?"/":a.pathname;if(o||null==l)i=r;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"==typeof e?f(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:C(n),hash:L(o)}}(a,i),h=l&&"/"!==l&&l.endsWith("/"),d=(u||"."===l)&&r.endsWith("/");return c.pathname.endsWith("/")||!h&&!d||(c.pathname+="/"),c}const I=e=>e.join("/").replace(/\/\/+/g,"/"),j=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class D extends Error{}function W(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const F=["post","put","patch","delete"],H=(new Set(F),["get",...F]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},53:function(e,t){function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<a(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var s=2*(n+1)-1,u=e[s],l=s+1,c=e[l];if(0>a(u,r))l<o&&0>a(c,u)?(e[n]=c,e[l]=r,n=l):(e[n]=u,e[s]=r,n=s);else{if(!(l<o&&0>a(c,r)))break e;e[n]=c,e[l]=r,n=l}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,u=s.now();t.unstable_now=function(){return s.now()-u}}var l=[],c=[],h=1,f=null,d=3,p=!1,y=!1,b=!1,m="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,g="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var t=n(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,r(l,t)}t=n(c)}}function _(e){if(b=!1,w(e),!y)if(null!==n(l))y=!0,I(T);else{var t=n(c);null!==t&&j(_,t.startTime-e)}}function T(e,r){y=!1,b&&(b=!1,v(A),A=-1),p=!0;var a=d;try{for(w(r),f=n(l);null!==f&&(!(f.expirationTime>r)||e&&!R());){var i=f.callback;if("function"==typeof i){f.callback=null,d=f.priorityLevel;var s=i(f.expirationTime<=r);r=t.unstable_now(),"function"==typeof s?f.callback=s:f===n(l)&&o(l),w(r)}else o(l);f=n(l)}if(null!==f)var u=!0;else{var h=n(c);null!==h&&j(_,h.startTime-r),u=!1}return u}finally{f=null,d=a,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,E=!1,P=null,A=-1,B=5,O=-1;function R(){return!(t.unstable_now()-O<B)}function S(){if(null!==P){var e=t.unstable_now();O=e;var r=!0;try{r=P(!0,e)}finally{r?x():(E=!1,P=null)}}else E=!1}if("function"==typeof g)x=function(){g(S)};else if("undefined"!=typeof MessageChannel){var U=new MessageChannel,k=U.port2;U.port1.onmessage=S,x=function(){k.postMessage(null)}}else x=function(){m(S,0)};function I(e){P=e,E||(E=!0,x())}function j(e,r){A=m((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,I(T))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var r=d;d=t;try{return e()}finally{d=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=d;d=e;try{return t()}finally{d=r}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:h++,callback:o,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>i?(e.sortIndex=a,r(c,e),null===n(l)&&e===n(c)&&(b?(v(A),A=-1):b=!0,j(_,a-i))):(e.sortIndex=s,r(l,e),y||p||(y=!0,I(T))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=d;return function(){var r=d;d=t;try{return e.apply(this,arguments)}finally{d=r}}}},3840:function(e,t,r){e.exports=r(53)},7147:function(e,t,r){r.r(t),r.d(t,{DOMException:function(){return _},Headers:function(){return c},Request:function(){return m},Response:function(){return g},fetch:function(){return T}});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},o={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};if(o.arrayBuffer)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){if(2!=e.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function h(e){if(!e._noBody)return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function d(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o.arrayBuffer&&o.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=h(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(o.blob)return this.blob().then(d);throw new Error("could not read as ArrayBuffer")},this.text=function(){var e,t,r,n,o,a=h(this);if(a)return a;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=f(t),n=/charset=([A-Za-z0-9_-]+)/.exec(e.type),o=n?n[1]:"utf-8",t.readAsText(e,o),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=s(e),t=u(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},c.prototype.delete=function(e){delete this.map[s(e)]},c.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},c.prototype.set=function(e,t){this.map[s(e)]=u(t)},c.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},c.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),l(e)},c.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),l(e)},c.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),l(e)},o.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var b=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function m(e,t){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,a=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,a||null==e._bodyInit||(a=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),b.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in n)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&a)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(a),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function v(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function g(e,t){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:200,statusText:""});return e.status=0,e.type="error",e};var w=[301,302,303,307,308];g.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})};var _=n.DOMException;try{new _}catch(e){(_=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function T(e,t){return new Promise((function(r,a){var i=new m(e,t);if(i.signal&&i.signal.aborted)return a(new _("Aborted","AbortError"));var l=new XMLHttpRequest;function h(){l.abort()}if(l.onload=function(){var e,t,n={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();try{t.append(n,o)}catch(e){console.warn("Response "+e.message)}}})),t)};n.url="responseURL"in l?l.responseURL:n.headers.get("X-Request-URL");var o="response"in l?l.response:l.responseText;setTimeout((function(){r(new g(o,n))}),0)},l.onerror=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},l.ontimeout=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},l.onabort=function(){setTimeout((function(){a(new _("Aborted","AbortError"))}),0)},l.open(i.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?l.withCredentials=!0:"omit"===i.credentials&&(l.withCredentials=!1),"responseType"in l&&(o.blob?l.responseType="blob":o.arrayBuffer&&(l.responseType="arraybuffer")),t&&"object"==typeof t.headers&&!(t.headers instanceof c||n.Headers&&t.headers instanceof n.Headers)){var f=[];Object.getOwnPropertyNames(t.headers).forEach((function(e){f.push(s(e)),l.setRequestHeader(e,u(t.headers[e]))})),i.headers.forEach((function(e,t){-1===f.indexOf(t)&&l.setRequestHeader(t,e)}))}else i.headers.forEach((function(e,t){l.setRequestHeader(t,e)}));i.signal&&(i.signal.addEventListener("abort",h),l.onreadystatechange=function(){4===l.readyState&&i.signal.removeEventListener("abort",h)}),l.send(void 0===i._bodyInit?null:i._bodyInit)}))}T.polyfill=!0,n.fetch||(n.fetch=T,n.Headers=c,n.Request=m,n.Response=g)}}]);