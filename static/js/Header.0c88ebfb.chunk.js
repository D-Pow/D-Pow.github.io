"use strict";(self.webpackChunkd_pow_github_io=self.webpackChunkd_pow_github_io||[]).push([[351],{3836:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});n(1539),n(1299),n(2419);var r=n(319),a=n.n(r),i=n(4575),o=n.n(i),s=n(3913),c=n.n(s),l=n(1506),u=n.n(l),h=n(2205),f=n.n(h),d=n(8585),v=n.n(d),p=n(9754),y=n.n(p),m=(n(2772),n(561),n(7042),n(1249),n(7640),n(9924),n(5893)),k=n(7294),w=n(9655),b=n(5697),g=n.n(b);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var S=function(e){f()(n,e);var t=R(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).state={classList:["header","float-right"]},r.handleScroll=r.handleScroll.bind(u()(r)),r}return c()(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=this.isActivePath(0)&&0===window.pageYOffset;this.toggleHeader(e)}},{key:"toggleHeader",value:function(e){var t=a()(this.state.classList),n="header-hidden",r=t.indexOf(n)>=0;e&&!r?t.push(n):!e&&r&&t.splice(r,1),this.setState({classList:t})}},{key:"isActivePath",value:function(e){var t=this.props.navRoutes[e].path;return window.location.hash.slice(1)===t}},{key:"renderNavBar",value:function(){var e=this,t=this.props.navRoutes.map((function(t,n){var r=t.path,a=t.name,i=e.isActivePath(n),o=["nav-link"];return i&&(t.active=!0,o.push("active")),(0,m.jsx)(w.rU,{to:r,className:o.join(" "),replace:i,children:a},r)}));return(0,m.jsx)("nav",{className:"nav border-left border-bottom border-primary border-size-3 bg-dark",children:t})}},{key:"render",value:function(){var e=this.renderNavBar();return(0,m.jsx)("header",{className:this.state.classList.join(" "),ref:this.ref,children:e})}}]),n}(k.Component);S.propTypes={navRoutes:g().arrayOf(g().shape({path:g().string.isRequired,component:g().func.isRequired}))};var L=S}}]);