(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports={durationMin:"3",durationMax:"20"}},16:function(e,t,n){e.exports=n.p+"static/media/react_logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(37)},25:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=(n(25),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),d=n(39),m=n(40),p=(n(27),n(10)),f=n(12),g=["red","blue","purple","pink","orange","green","yellow","gray","teal","cyan","indigo","darkblue","deepskyblue","lawngreen","maroon","magenta","rosybrown","royalblue","salmon","sandybrown"];function b(e){var t,n;t=null==e?[""]:"string"===typeof e?[e]:e;do{n=g[Math.floor(Math.random()*g.length)]}while(t.includes(n));return n}function v(e,t){return null==t&&(t=e,e=0),e=Number(e),t=Number(t),isNaN(e)||isNaN(t)?Math.random():Math.random()*(t-e)+e}var w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.upsideDown,a=t.color,o=t.height,i=o/Math.sin(Math.PI/3)/2,c="borderBottomColor",l="borderBottomWidth",s="".concat(2*o/3,"px"),u=["triangle"];n&&(c="borderTopColor",l="borderTopWidth",s="".concat(o/3,"px"),u.push("upside-down"));var h=this.props.spinDelay||v(1),d=this.props.animationDuration||Math.round(v(f.durationMin,f.durationMax)),m=(e={},Object(p.a)(e,c,a),Object(p.a)(e,l,"".concat(o,"px")),Object(p.a)(e,"borderLeftWidth","".concat(i,"px")),Object(p.a)(e,"borderRightWidth","".concat(i,"px")),Object(p.a)(e,"animationName","spin-".concat(d)),Object(p.a)(e,"animationDuration","".concat(d,"s")),Object(p.a)(e,"animationDelay","".concat(h,"s")),Object(p.a)(e,"transformOrigin","".concat(i," ").concat(s)),Object(p.a)(e,"marginLeft","-".concat(i,"px")),e);return r.a.createElement("div",{className:u.join(" "),style:m})}}]),t}(r.a.Component);w.defaultProps={color:"red",upsideDown:!1,height:86};var j=w,O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).pageText={welcomeTitle:"Hey there, I'm Devon!"},n.numRows=8,n.state={windowSize:{width:window.innerWidth,height:window.innerHeight},triangleColorMatrix:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateTriangleColorMatrix(),window.onresize=function(){e.setState({windowSize:{width:window.innerWidth,height:window.innerHeight}}),e.updateTriangleColorMatrix()}}},{key:"componentWillUnmount",value:function(){window.onresize=null}},{key:"getNeighboringColors",value:function(e,t,n){var a=[];return e>0&&a.push(n[e-1][t]),t>0&&a.push(n[e][t-1]),a}},{key:"updateTriangleColorMatrix",value:function(){for(var e=this.triangleHeight,t=this.state,n=t.windowSize.width,a=t.triangleColorMatrix,r=2*Math.ceil(n/e),o=a.map(function(e){return e.slice(0,r)}),i=0;i<this.numRows;i++){o[i]||o.push([]);for(var c=o[i],l=0;l<r;l++)if(!c[l]){var s=b(this.getNeighboringColors(i,l,o));o[i].push(s)}}this.setState({triangleColorMatrix:o})}},{key:"renderTriangles",value:function(){var e=this,t=this.state.triangleColorMatrix.map(function(t,n){return t.map(function(t,a){return r.a.createElement(j,{color:t,height:e.triangleHeight,key:"".concat(n,"-").concat(a),upsideDown:(a+n)%2===0})})});return r.a.createElement("div",{className:"triangle-section bg-white"},t.map(function(e,t){return r.a.createElement("div",{className:"triangle-row",key:t},e)}))}},{key:"renderWelcomeText",value:function(){var e=r.a.createElement("h2",{className:"text-white"},this.pageText.welcomeTitle);return r.a.createElement("div",{className:"text-center position-absolute w-100 top-30"},r.a.createElement("div",{className:"bg-dark-fadeout rounded m-auto py-2 px-1",style:{width:"40%"}},e))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderTriangles(),this.renderWelcomeText())}},{key:"triangleHeight",get:function(){return this.state.windowSize.height/this.numRows}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{style:{height:"500px"}},"Meh"))}}]),t}(r.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"About")}}]),t}(r.a.Component),E=n(18),x=n(11),N=(n(30),n(38)),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={classList:["header","float-right"]},n.handleScroll=n.handleScroll.bind(Object(x.a)(Object(x.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=this.isActivePath(0)&&0===window.pageYOffset;this.toggleHeader(e)}},{key:"toggleHeader",value:function(e){var t=Object(E.a)(this.state.classList),n=t.indexOf("header-hidden")>=0;e&&!n?t.push("header-hidden"):!e&&n&&t.splice(n,1),this.setState({classList:t})}},{key:"isActivePath",value:function(e){var t=this.props.navRoutes[e].path;return window.location.hash.slice(1)===t}},{key:"renderNavBar",value:function(){var e=this,t=this.props.navRoutes.map(function(t,n){var a=t.path,o=t.name,i=e.isActivePath(n),c=["nav-link"];return i&&(t.active=!0,c.push("active")),r.a.createElement(N.a,{to:a,className:c.join(" "),key:a,replace:i},o)});return r.a.createElement("nav",{className:"nav border-left border-bottom border-primary border-size-3 bg-dark"},t)}},{key:"render",value:function(){var e=this.renderNavBar();return r.a.createElement("header",{className:this.state.classList.join(" "),ref:this.ref},e)}}]),t}(r.a.Component),C=n(16),W=n.n(C),S=(n(34),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderReactLogo",value:function(){return r.a.createElement("span",null,r.a.createElement("h4",{className:"footer-title"},"Made with React 16"),r.a.createElement("img",{src:W.a,className:"react-logo",alt:"logo"}))}},{key:"render",value:function(){return r.a.createElement("footer",{className:"footer-container w-100"},this.renderReactLogo())}}]),t}(r.a.Component)),T=[{path:"/",component:y,name:"Home",exact:!0},{path:"/about",component:k,name:"About"}];function L(e){var t=T.map(function(e){return r.a.createElement(d.a,Object.assign({key:e.path},e))});return r.a.createElement(m.a,{basename:e.basedir},r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{basedir:e.basedir,navRoutes:T}),t,r.a.createElement(S,null)))}var R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App text-center"},r.a.createElement(L,null))}}]),t}(r.a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var z=document.getElementById("root");i.a.render(r.a.createElement(R,null),z),function(){if("serviceWorker"in navigator){if(new URL("/website",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/website","/ServiceWorker.js");D?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):H(e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.7cc3374a.chunk.js.map