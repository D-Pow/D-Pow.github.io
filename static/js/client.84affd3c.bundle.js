!function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={6:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"static/js/"+({2:"About",3:"Footer",4:"Header",5:"Home"}[e]||e)+".84affd3c.chunk.js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([208,0,1]),n()}({202:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(88),o=n.n(r),a=n(51),i=n.n(a),c=n(2),u=n.n(c);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=u.a.createContext(),n=function(n){var r=Object(c.useState)(e),a=i()(r,2),s=a[0],l=a[1];return u.a.createElement(t.Provider,o()({value:{contextState:s,setContextState:l}},n))};return{Consumer:t.Consumer,Provider:n,Context:t}}},208:function(e,t,n){n(209),n(576),e.exports=n(598)},52:function(e,t,n){"use strict";n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return d})),n.d(t,"m",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"l",(function(){return E})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return S})),n.d(t,"a",(function(){return _}));var r=n(112),o=n.n(r),a=n(151),i=n.n(a),c=n(89),u=n(148);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.includeTablets,n=void 0!==t&&t,r=e.onlyXsScreenSizes,o=void 0!==r&&r,a=n?c.f:c.e,i=a.test(navigator.userAgent||navigator.vendor||window.opera);if(o){var u=window.innerWidth<O().sm;return i&&u}return i}function l(){return null!=window.safari||navigator.vendor.toLocaleLowerCase().includes("apple")}function f(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=["trident","msie"];e&&t.push("edge");var n="(".concat(t.join("|"),")");return Boolean(navigator.userAgent.toLowerCase().match(new RegExp(n)))}function p(e){return"function"==typeof e.type}function d(e){return m.apply(this,arguments)}function m(){return(m=i()(o.a.mark((function e(t){var r,a,i,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>1&&void 0!==c[1]&&c[1],null==t||""===t){e.next=14;break}return e.prev=2,e.next=5,n(589)("./".concat(t));case 5:if(a=e.sent,i=a.default,!r){e.next=9;break}return e.abrupt("return",fetch(i).then((function(e){return e.blob()})).then((function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n()},r.readAsDataURL(e)}))})));case 9:return e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(2);case 14:throw new Error("".concat(t," was not found"));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function g(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0]instanceof Array?n[0]:n,a=null!=e;if(0===o.length)return a;var i=o[0];return a&&e.hasOwnProperty(i)&&g(e[i],o.slice(1))}function v(e){try{return JSON.parse(JSON.stringify(e))}catch(t){return e}}function h(e){if(!e||Array.isArray(e)&&0===e.length)return[];if(e.path)return e.path;for(var t=[],n=e.target;n;)t.push(n),n=n.parentElement;return t.push(document,window),t}function b(e,t){var n=e.attribute,r=e.value,o=!1,a=!0,i=!1,c=void 0;try{for(var u,s=t[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var l=u.value;if(l instanceof HTMLElement){var f=l.getAttribute(n);if(f&&f.includes(r)){o=!0;break}}}}catch(e){i=!0,c=e}finally{try{a||null==s.return||s.return()}finally{if(i)throw c}}return o}function E(){window.scrollTo(0,0)}function w(e){return JSON.parse(e.replace("(","{").replace(")","}").replace(/: ?([^,}]+)([,}])/g,': "$1"$2').replace(/([\s{,])(?!")([^:\s]+)+:/g,'$1"$2":'))}function y(){return w(u.themeColors)}function O(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=w(u.gridBreakpoints);return e?Object.keys(t).reduce((function(e,n){return e[n]=_(t[n]),e}),{}):t}function S(e){var t=new RegExp("(duration-)(\\d+)"),n=e.match(t);return!!n&&100*Number(n[2])}function _(e){return Number(e.replace(/[^\d.]/g,""))}},589:function(e,t,n){var r={"./atoms_of_confusion.jpg":[610,7],"./automatic_investing.jpg":[611,8],"./blue_horizon.svg":[612,9],"./blue_mountains.svg":[613,10],"./edge_panel_widget.png":[614,11],"./etrade_icon.png":[615,12],"./favicon-144.png":[616,13],"./favicon-192.png":[617,14],"./favicon.ico":[618,15],"./favicon.png":[619,16],"./fonts/BrushScript.eot":[620,17],"./fonts/BrushScript.ttf":[621,18],"./fonts/BrushScript.woff":[622,19],"./github_logo.svg":[623,20],"./linkedin_logo.svg":[624,21],"./mock_requests.png":[625,22],"./night_forest.svg":[626,23],"./peptide_nmr.jpg":[627,24],"./prebuilt_portfolios.jpg":[628,25],"./premarket_modal.png":[629,26],"./profile_pic.jpg":[630,27],"./react_logo.svg":[631,28],"./tardigrade.jpg":[632,29]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(r)},o.id=589,e.exports=o},598:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(147),i=n.n(a),c=n(88),u=n.n(c),s=n(31),l=n.n(s),f=n(51),p=n.n(f),d=n(57),m=n(146),g=n(23),v=n.n(g);n(587);function h(e){var t=e.numElectrons,n=e.electronColors,r=180/t,a=function(e){return"rotate(".concat(r*e,"deg)")},i=function(e){return"-".concat(e/(2*t),"s")};return o.a.createElement("div",{className:"m-auto absolute-center atom-container"},Array.from({length:t}).map((function(e,t){return o.a.createElement("div",{className:"atom-orbit-path",style:{transform:a(t)},key:t})})),Array.from({length:t}).map((function(e,t){return o.a.createElement("div",{className:"atom-orbit-path-invisible",style:{transform:a(t)},key:t},o.a.createElement("div",{className:"atom-electron atom-electron-orbit ".concat((r=t,"bg-".concat(n[r%n.length]))),style:{animationDelay:i(t)}}));var r})))}h.propTypes={numElectrons:v.a.number,electronColors:v.a.arrayOf(v.a.string)},h.defaultProps={numElectrons:3,electronColors:["primary","secondary","tertiary"]};var b=h,E=n(52);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){var t=e.className,n=e.fullScreen,a=e.show,i=e.preventScrolling,c=e.onClose,u=e.onUnmount,s=e.numElectrons,l=e.electronColors,f=Object(r.useState)(!1),d=p()(f,2),m=d[0],g=d[1],v=["bg-dark","absolute-center","position-fixed","animated","fade-out-disappear","duration-8"];n&&v.push("full-screen"),t&&v.push(t),a&&v.push("show");var h=v.join(" "),w=Object(E.f)(h)+200;return Object(r.useEffect)((function(){return a&&i&&window.addEventListener("scroll",E.l),function(){window.removeEventListener("scroll",E.l)}}),[a,i]),Object(r.useEffect)((function(){var e=!a&&m;a&&g(!0),e&&(setTimeout((function(){g(!1),u()}),w),c())}),[a,w]),a||m?o.a.createElement("div",{className:h},o.a.createElement("div",{className:"m-auto"},o.a.createElement(b,{numElectrons:s,electronColors:l}))):null}y.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:v.a.string,fullScreen:v.a.bool,show:v.a.bool,preventScrolling:v.a.bool,onClose:v.a.func,onUnmount:v.a.func},b.propTypes),y.defaultProps={className:"",fullScreen:!0,show:!1,preventScrolling:!1,onClose:function(){},onUnmount:function(){}};var O=y;var S=function(e){return o.a.createElement("div",{className:"text-center position-absolute top-20 w-100"},o.a.createElement("h1",{className:"w-80 m-auto"},"Please use a modern browser (Chrome, Firefox, Safari) to view this website."))},_=n(65);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,638)),N=o.a.lazy((function(){return A})),P=Promise.all([n.e(0),n.e(2)]).then(n.bind(null,640)),L=o.a.lazy((function(){return P})),k=Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,639)),I=(o.a.lazy((function(){return k})),Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,641))),D=o.a.lazy((function(){return I})),T=[{path:"/",component:N,name:"Home",exact:!0},{path:"/about",component:L,name:"About"}];var x=function(){var e=Object(r.useContext)(_.b.Context),t=e.contextState,n=e.setContextState,a=t[_.a.GET_IMAGES_STILL_LOADING](),i=Object(r.useState)(!1),c=p()(i,2),s=c[0],f=c[1],g=Object(r.useState)(!1),v=p()(g,2),h=v[0],b=v[1],w=Object(r.useState)(!0),y=p()(w,2),A=y[0],N=y[1],P=a||A;Object(r.useEffect)((function(){n((function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,(t={},l()(t,_.a.GLOBAL_SPINNER_CLOSED,s),l()(t,_.a.GLOBAL_SPINNER_UNMOUNTED,h),t))}))}),[s,h]),Object(r.useEffect)((function(){a||setTimeout((function(){N(!1)}),1750)}),[a]),Object(r.useEffect)((function(){return window.addEventListener("unload",E.l),function(){window.removeEventListener("unload",E.l)}}),[]);var L=T.map((function(e){return o.a.createElement(d.d,u()({key:e.path},e))}));return Object(E.i)()?o.a.createElement(S,null):o.a.createElement("div",{className:"App text-center font-didot-serif"},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(O,{show:!0,preventScrolling:!0})},o.a.createElement(m.HashRouter,null,o.a.createElement(o.a.Fragment,null,L,o.a.createElement(D,null))),o.a.createElement(O,{show:P,preventScrolling:!0,onClose:function(){return f(!0)},onUnmount:function(){return b(!0)}})))},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(592);var M=_.b.Provider,R=o.a.createElement(M,null,o.a.createElement(x,null)),U=document.getElementById("root");i.a.render(R,U),function(){if("serviceWorker"in navigator){if(new URL("static",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="./ServiceWorker.js";G?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),C(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):C(e)}))}}()},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,o=n(31),a=n.n(o),i=n(202),c={IMAGES_REQUESTED:"imagesRequested",IMAGES_LOADED:"imagesLoaded",GET_IMAGES_HAVE_BEEN_REQUESTED:"getImagesHaveBeenRequested",GET_IMAGES_STILL_LOADING:"getImagesStillLoading",GET_IMAGES_FINISHED_LOADING:"getImagesFinishedLoading",GLOBAL_SPINNER_CLOSED:"globalSpinnerClosed",GLOBAL_SPINNER_UNMOUNTED:"globalSpinnerUnmounted"},u=(r={},a()(r,c.IMAGES_REQUESTED,0),a()(r,c.IMAGES_LOADED,0),a()(r,c.GET_IMAGES_HAVE_BEEN_REQUESTED,(function(){return this[c.IMAGES_REQUESTED]>0})),a()(r,c.GET_IMAGES_FINISHED_LOADING,(function(){return this[c.IMAGES_LOADED]===this[c.IMAGES_REQUESTED]})),a()(r,c.GET_IMAGES_STILL_LOADING,(function(){var e=!this[c.GET_IMAGES_HAVE_BEEN_REQUESTED](),t=!this[c.GET_IMAGES_FINISHED_LOADING]();return e||t})),a()(r,c.GLOBAL_SPINNER_CLOSED,!1),a()(r,c.GLOBAL_SPINNER_UNMOUNTED,!1),r),s=Object(i.a)(u);t.b=s},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));var r=["red","blue","purple","pink","orange","green","yellow","gray","teal","cyan","indigo","darkblue","deepskyblue","lawngreen","maroon","magenta","rosybrown","royalblue","salmon","sandybrown"],o=.75,a="(android|bb\\d+|meego){}|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino",i=new RegExp(a.replace("{}",".+mobile"),"i"),c=new RegExp(a.replace("{}","|ipad"),"i"),u=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,s={SrcCode:"https://github.com/D-Pow/website",LinkedIn:"https://www.linkedin.com/in/devon-powell/",GitHub:"https://github.com/D-Pow",MutualFundsHome:"https://us.etrade.com/what-we-offer/investment-choices/mutual-funds",PrebuiltPortfolios:"https://us.etrade.com/etx/wm/prebuiltmutualfundportfolios",AutomaticInvesting:"https://us.etrade.com/etx/wm/automaticinvesting",EtradeAndroidApp:"https://play.google.com/store/apps/details?id=com.etrade.mobilepro.activity",MockRequests:"https://www.npmjs.com/package/mock-requests",AtomsOfConfusion:"https://atomsofconfusion.com",AnticancerPeptides:"https://www.ncbi.nlm.nih.gov/pubmed/29897657",TardigradeStratification:"https://bioone.org/journals/Transactions-of-the-Kansas-Academy-of-Science/volume-118/issue-3-4/062.118.0306/Tardigrades-of-the-Canopy-Evidence-of-Stratification/10.1660/062.118.0306.short",EtradeHome:"https://etrade.com",EtradeIcon:"https://cdn.etrade.net/1/19042220580.0/aempros/etc/designs/responsive-etrade/pagemeta/images/favicon-16x16.png"},l="https://formspree.io/xkdoqyjm"}});