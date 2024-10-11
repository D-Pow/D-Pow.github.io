/*! For license information please see vendor-e5bca7e4.614d8116.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkd_pow_github_io=self.webpackChunkd_pow_github_io||[]).push([[410],{9655:function(e,t,r){var n;r.d(t,{UT:function(){return f},rU:function(){return h}});var o=r(7294),a=r(9250),u=r(2599);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const c=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];const s=(n||(n=r.t(o,2))).startTransition;function f(e){let{basename:t,children:r,future:n,window:i}=e,l=o.useRef();null==l.current&&(l.current=(0,u.q_)({window:i,v5Compat:!0}));let c=l.current,[f,p]=o.useState({action:c.action,location:c.location}),{v7_startTransition:d}=n||{},h=o.useCallback((e=>{d&&s?s((()=>p(e))):p(e)}),[p,d]);return o.useLayoutEffect((()=>c.listen(h)),[c,h]),o.createElement(a.F0,{basename:t,children:r,location:f.location,navigationType:f.action,navigator:c})}const p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h=o.forwardRef((function(e,t){let r,{onClick:n,relative:s,reloadDocument:f,replace:h,state:m,target:v,to:y,preventScrollReset:b}=e,g=l(e,c),{basename:_}=o.useContext(a.Us),E=!1;if("string"==typeof y&&d.test(y)&&(r=y,p))try{let e=new URL(window.location.href),t=y.startsWith("//")?new URL(e.protocol+y):new URL(y),r=(0,u.Zn)(t.pathname,_);t.origin===e.origin&&null!=r?y=r+t.search+t.hash:E=!0}catch(e){}let C=(0,a.oQ)(y,{relative:s}),R=function(e,t){let{target:r,replace:n,state:i,preventScrollReset:l,relative:c}=void 0===t?{}:t,s=(0,a.s0)(),f=(0,a.TH)(),p=(0,a.WU)(e,{relative:c});return o.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let r=void 0!==n?n:(0,u.Ep)(f)===(0,u.Ep)(p);s(e,{replace:r,state:i,preventScrollReset:l,relative:c})}}),[f,s,p,n,i,r,e,l,c])}(y,{replace:h,state:m,target:v,preventScrollReset:b,relative:s});return o.createElement("a",i({},g,{href:r||C,onClick:E||f?n:function(e){n&&n(e),e.defaultPrevented||R(e)},ref:t,target:v}))}));var m,v;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(m||(m={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(v||(v={}))},9250:function(e,t,r){var n;r.d(t,{AW:function(){return P},F0:function(){return j},TH:function(){return m},Us:function(){return c},WU:function(){return b},Z5:function(){return $},oQ:function(){return d},s0:function(){return y}});var o=r(7294),a=r(2599);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}const i=o.createContext(null);const l=o.createContext(null);const c=o.createContext(null);const s=o.createContext(null);const f=o.createContext({outlet:null,matches:[],isDataRoute:!1});const p=o.createContext(null);function d(e,t){let{relative:r}=void 0===t?{}:t;h()||(0,a.J0)(!1);let{basename:n,navigator:u}=o.useContext(c),{hash:i,pathname:l,search:s}=b(e,{relative:r}),f=l;return"/"!==n&&(f="/"===l?n:(0,a.RQ)([n,l])),u.createHref({pathname:f,search:s,hash:i})}function h(){return null!=o.useContext(s)}function m(){return h()||(0,a.J0)(!1),o.useContext(s).location}function v(e){o.useContext(c).static||o.useLayoutEffect(e)}function y(){let{isDataRoute:e}=o.useContext(f);return e?function(){let{router:e}=k(w.UseNavigateStable),t=O(x.UseNavigateStable),r=o.useRef(!1);return v((()=>{r.current=!0})),o.useCallback((function(n,o){void 0===o&&(o={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,u({fromRouteId:t},o)))}),[e,t])}():function(){h()||(0,a.J0)(!1);let e=o.useContext(i),{basename:t,navigator:r}=o.useContext(c),{matches:n}=o.useContext(f),{pathname:u}=m(),l=JSON.stringify((0,a.Zq)(n).map((e=>e.pathnameBase))),s=o.useRef(!1);return v((()=>{s.current=!0})),o.useCallback((function(n,o){if(void 0===o&&(o={}),!s.current)return;if("number"==typeof n)return void r.go(n);let i=(0,a.pC)(n,JSON.parse(l),u,"path"===o.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.RQ)([t,i.pathname])),(o.replace?r.replace:r.push)(i,o.state,o)}),[t,r,l,u,e])}()}function b(e,t){let{relative:r}=void 0===t?{}:t,{matches:n}=o.useContext(f),{pathname:u}=m(),i=JSON.stringify((0,a.Zq)(n).map((e=>e.pathnameBase)));return o.useMemo((()=>(0,a.pC)(e,JSON.parse(i),u,"path"===r)),[e,i,u,r])}function g(e,t,r){h()||(0,a.J0)(!1);let{navigator:n}=o.useContext(c),{matches:i}=o.useContext(f),l=i[i.length-1],p=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let v,y=m();if(t){var b;let e="string"==typeof t?(0,a.cP)(t):t;"/"===d||(null==(b=e.pathname)?void 0:b.startsWith(d))||(0,a.J0)(!1),v=e}else v=y;let g=v.pathname||"/",_="/"===d?g:g.slice(d.length)||"/",E=(0,a.fp)(e,{pathname:_});let C=S(E&&E.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:(0,a.RQ)([d,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:(0,a.RQ)([d,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,r);return t&&C?o.createElement(s.Provider,{value:{location:u({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:a.aU.Pop}},C):C}function _(){let e=function(){var e;let t=o.useContext(p),r=U(x.UseRouteError),n=O(x.UseRouteError);if(t)return t;return null==(e=r.errors)?void 0:e[n]}(),t=(0,a.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:n};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:u},r):null,null)}const E=o.createElement(_,null);class C extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?o.createElement(f.Provider,{value:this.props.routeContext},o.createElement(p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(i);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(f.Provider,{value:t},n)}function S(e,t,r){var n;if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){var u;if(null==(u=r)||!u.errors)return null;e=r.matches}let i=e,l=null==(n=r)?void 0:n.errors;if(null!=l){let e=i.findIndex((e=>e.route.id&&(null==l?void 0:l[e.route.id])));e>=0||(0,a.J0)(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,n,a)=>{let u=n.route.id?null==l?void 0:l[n.route.id]:null,c=null;r&&(c=n.route.errorElement||E);let s=t.concat(i.slice(0,a+1)),f=()=>{let t;return t=u?c:n.route.Component?o.createElement(n.route.Component,null):n.route.element?n.route.element:e,o.createElement(R,{match:n,routeContext:{outlet:e,matches:s,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===a)?o.createElement(C,{location:r.location,revalidation:r.revalidation,component:c,error:u,children:f(),routeContext:{outlet:null,matches:s,isDataRoute:!0}}):f()}),null)}var w=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(w||{}),x=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(x||{});function k(e){let t=o.useContext(i);return t||(0,a.J0)(!1),t}function U(e){let t=o.useContext(l);return t||(0,a.J0)(!1),t}function O(e){let t=function(e){let t=o.useContext(f);return t||(0,a.J0)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,a.J0)(!1),r.route.id}(n||(n=r.t(o,2))).startTransition;function P(e){(0,a.J0)(!1)}function j(e){let{basename:t="/",children:r=null,location:n,navigationType:u=a.aU.Pop,navigator:i,static:l=!1}=e;h()&&(0,a.J0)(!1);let f=t.replace(/^\/*/,"/"),p=o.useMemo((()=>({basename:f,navigator:i,static:l})),[f,i,l]);"string"==typeof n&&(n=(0,a.cP)(n));let{pathname:d="/",search:m="",hash:v="",state:y=null,key:b="default"}=n,g=o.useMemo((()=>{let e=(0,a.Zn)(d,f);return null==e?null:{location:{pathname:e,search:m,hash:v,state:y,key:b},navigationType:u}}),[f,d,m,v,y,b,u]);return null==g?null:o.createElement(c.Provider,{value:p},o.createElement(s.Provider,{children:r,value:g}))}function $(e){let{children:t,location:r}=e;return g(D(t),r)}new Promise((()=>{}));o.Component;function D(e,t){void 0===t&&(t=[]);let r=[];return o.Children.forEach(e,((e,n)=>{if(!o.isValidElement(e))return;let u=[...t,n];if(e.type===o.Fragment)return void r.push.apply(r,D(e.props.children,u));e.type!==P&&(0,a.J0)(!1),e.props.index&&e.props.children&&(0,a.J0)(!1);let i={id:e.props.id||u.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=D(e.props.children,u)),r.push(i)})),r}},5251:function(e,t,r){var n=r(7294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,s=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:s,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},2408:function(e,t){var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var _=g.prototype=new b;_.constructor=g,m(_,y.prototype),_.isPureReactComponent=!0;var E=Array.isArray,C=Object.prototype.hasOwnProperty,R={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,a={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:u,ref:i,props:a,_owner:R.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return u=u(l=e),e=""===a?"."+U(l,0):a,E(u)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),O(u,t,o,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(k,"$&/")+"/")+e)),t.push(u)),1;if(l=0,a=""===a?".":a+":",E(e))for(var c=0;c<e.length;c++){var s=a+U(i=e[c],c);l+=O(i,t,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(i=e.next()).done;)l+=O(i=i.value,t,o,s=a+U(i,c++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},D={transition:null},B={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:D,ReactCurrentOwner:R};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=u,t.PureComponent=g,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=R.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)C.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},7294:function(e,t,r){e.exports=r(2408)},5893:function(e,t,r){e.exports=r(5251)}}]);