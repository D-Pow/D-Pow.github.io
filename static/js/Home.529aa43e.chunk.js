(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{640:function(e,t,a){"use strict";var n=a(91),r=a.n(n),s=a(1),i=a.n(s),o=a(24),l=a.n(o);function c(e){var t=[e.className];return e.underlineText&&t.push("underline"),i.a.createElement("a",r()({className:t.join(" "),href:e.href,target:"_blank",rel:"noopener noreferrer"},e.aria),e.children)}c.propTypes={className:l.a.string,href:l.a.string,children:l.a.node,underlineText:l.a.bool,aria:l.a.object},c.defaultProps={className:"",href:"",children:"",underlineText:!0,aria:{}};var m=c;t.a=m},641:function(e,t,a){"use strict";var n=a(117),r=a.n(n),s=a(91),i=a.n(s),o=a(32),l=a.n(o),c=a(158),m=a.n(c),d=a(21),u=a.n(d),h=a(1),p=a.n(h),f=a(24),g=a.n(f),v=a(47),b=a(68);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e){var t=Object(h.useState)(""),a=u()(t,2),n=a[0],s=a[1],o=Object(h.useContext)(b.b.Context).setContextState;function c(){return(c=m()(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.d)(e.image);case 2:a=t.sent,s(a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e.updateAppContext){var a=t?b.a.IMAGES_LOADED:b.a.IMAGES_REQUESTED;o((function(e){return y({},e,l()({},a,e[a]+1))}))}}return Object(h.useEffect)((function(){d(),function(){c.apply(this,arguments)}()}),[e.image]),p.a.createElement("img",i()({className:"".concat(e.fluidImage?"img-fluid":""," ").concat(e.className),src:n,alt:e.image,onLoad:function(t){d(!0),e.onLoad(t)}},e.aria))}w.propTypes={className:g.a.string,image:g.a.string,fluidImage:g.a.bool,updateAppContext:g.a.bool,onLoad:g.a.func,aria:g.a.object},w.defaultProps={className:"",image:"",fluidImage:!0,updateAppContext:!0,onLoad:function(){},aria:{}};var C=p.a.memo(w);t.a=C},642:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var n=a(91),r=a.n(n),s=a(610),i=a.n(s),o=a(1),l=a.n(o),c=a(640),m=a(641),d=a(60),u=l.a.createElement(c.a,{href:d.d.SrcCode},"source code"),h=l.a.createElement(c.a,{href:d.d.EtradeHome},l.a.createElement(m.a,{image:"etrade_icon.png",aria:{style:{marginTop:"-1%"}}}),"E-Trade");function p(e){var t=e.className,a=void 0===t?"":t,n=i()(e,["className"]);return l.a.createElement("h4",r()({className:"d-inline-block margin-clear ".concat(a)},n),"🐣")}},643:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(24),i=a.n(s);function o(e){var t="flip-".concat(e.axis,"-full"),a=r.a.createElement("div",{className:"".concat(e.durationCls," ").concat(e.isFlipped?"d-none":t)},e.showDefault),n=r.a.createElement("div",{className:"".concat(e.durationCls," ").concat(e.isFlipped?t:"d-none")},e.showOnClick);return r.a.createElement("div",{className:e.className},a,n)}o.AXES={X:"x",Y:"y"},o.propTypes={axis:i.a.oneOf(Object.values(o.AXES)),className:i.a.string,durationCls:i.a.string,isFlipped:i.a.bool,showDefault:i.a.node,showOnClick:i.a.node},o.defaultProps={axis:o.AXES.X,className:"",durationCls:"duration-5",isFlipped:!1};var l=o;t.a=l},644:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a.n(n),s=a(1),i=a.n(s),o=a(24),l=a.n(o),c=a(641),m=a(91),d=a.n(m),u=a(32),h=a.n(u),p=a(157),f=a(156),g=a(611);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){var t,a=e.className,n=e.fontSizeEm,r=e.animationDurationSeconds,s=e.textElemProps,o=e.style,l=e.children,c=Object.assign({},b.defaultProps.textElemProps,s),m=Object(p.c)()?12:1,u=Math.ceil(n*m*Number(g.strokeDasharrayLengthForFontSize1em)),f=r/3,E=r-f,y=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,(t={},h()(t,"--stroke-dasharray-length",u),h()(t,"fontSize","".concat(n,"em")),h()(t,"animationDuration","".concat(r,"s, ").concat(f,"s")),h()(t,"animationDelay","0s, ".concat(E,"s")),t));return i.a.createElement("text",d()({},c,{className:"draw-text-and-fill "+a,style:y}),l)}b.propTypes={className:l.a.string,fontSizeEm:l.a.number,animationDurationSeconds:l.a.number,style:l.a.object,textElemProps:l.a.object,children:l.a.node},b.defaultProps={className:"",fontSizeEm:1,animationDurationSeconds:3,style:{},textElemProps:{fill:"white",stroke:"white",strokeWidth:.5,x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"}};var E=i.a.memo(b,f.b);E.propTypes=b.propTypes,E.defaultProps=b.defaultProps;var y=E,w=a(54);function C(e){var t=e.textArray,a=void 0===t?[]:t,n=Object(w.b)(0,100,a.length);return a.map((function(e,t){return i.a.createElement(y,{className:"font-brush-script",key:t,fontSizeEm:1.5,style:{transform:"skewY(-5deg)"},textElemProps:{x:"50%",y:"".concat(Math.round(n[t]),"%")}},e)}))}C.propTypes={textArray:l.a.arrayOf(l.a.string)};var N=i.a.memo(C,f.b);a(612);function O(e){var t=e.spinnerWasClosed,a=Object(s.useState)(!1),n=r()(a,2),o=n[0],l=n[1],m=1e3*y.defaultProps.animationDurationSeconds;Object(s.useEffect)((function(){t&&!o&&setTimeout((function(){l(!0)}),m)}),[t,m]);var d=t?i.a.createElement(N,{textArray:["Hey there,","I'm Devon!"]}):"";return i.a.createElement("section",{id:"splash",className:"bg-dark full-screen-minus-scrollbar"},i.a.createElement(c.a,{className:"w-100 h-100 animated fade duration-15 ".concat(o?"show":""),image:"blue_horizon.svg",fluidImage:!1}),i.a.createElement("div",{className:"absolute-center w-100 h-100"},i.a.createElement("div",{className:"h-75 w-80"},i.a.createElement("svg",{className:"h-100 w-100",viewBox:"0 0 100 100"},d))))}O.propTypes={spinnerWasClosed:l.a.bool};var j=i.a.memo(O),x=a(68);var S=function(){var e=Object(s.useContext)(x.b.Context).contextState[x.a.GLOBAL_SPINNER_CLOSED];return i.a.createElement(j,{spinnerWasClosed:e})},P=a(39),T=a.n(P),k=a(116),R=a.n(k),A=a(605),D=a.n(A),F=a(606),I=a.n(F),W=a(607),B=a.n(W),L=a(608),M=a.n(L),z=a(213),H=a.n(z),_=a(609),G=a.n(_),X=a(60);function U(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return l.a.oneOfType([l.a.func,l.a.shape({current:e?l.a.instanceOf(Element):l.a.any})])}var q=a(93),Y=function(e){function t(e){var a;D()(this,t),a=B()(this,M()(t).call(this,e)),h()(H()(a),"removeScrollEventListener",(function(){window.removeEventListener("scroll",a.handleScroll)})),h()(H()(a),"handleScroll",(function(){var e=a.props.distributeSimultaneously;if(null!=e){if(a.shouldToggleChildShown(0)){a.toggleChildIsShown(0);for(var t=function(t){setTimeout((function(){a.toggleChildIsShown(t)}),1e3*e*t)},n=1;n<a.state.childRefs.length;n++)t(n)}}else for(var r=0;r<a.state.childRefs.length;r++)a.shouldToggleChildShown(r)&&a.toggleChildIsShown(r)})),h()(H()(a),"toggleChildIsShown",(function(e){var t=R()(a.state.shownChildren);t[e]=!0,a.setState({shownChildren:t}),a.cleanupEventListener()})),h()(H()(a),"getClassNames",(function(e){var t=a.props,n=t.addClasses,r=t.distributeClasses,s=[];return r&&s.push(r),a.state.shownChildren[e]&&s.push(n),s.join(" ")})),h()(H()(a),"asHtmlElement",(function(e,t){return function(e){return"function"==typeof e.type}(e)?i.a.createElement("div",{className:a.getClassNames(t),key:t,ref:a.state.childRefs[t]},e):i.a.cloneElement(e,{className:"".concat(e.props&&e.props.className?e.props.className:""," ").concat(a.getClassNames(t)),key:t,ref:a.state.childRefs[t]})}));for(var n=[],r=[],s=0;s<i.a.Children.count(a.props.children);s++)n.push(i.a.createRef()),r.push(!1);return a.state={childRefs:n,shownChildren:r},a}return G()(t,e),I()(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){this.removeScrollEventListener()}},{key:"cleanupEventListener",value:function(){var e=this;if(this.state.shownChildren.every((function(e){return e}))&&(this.removeScrollEventListener(),T()(this.props.onAllChildrenShown)===T()(this.constructor))){var t=Object(q.a)(this.props.distributeClasses);t?setTimeout((function(){e.props.onAllChildrenShown()}),t):this.props.onAllChildrenShown()}}},{key:"shouldToggleChildShown",value:function(e){var t=this.shouldChildBeShown(e),a=this.state.shownChildren[e];return t&&!a}},{key:"shouldChildBeShown",value:function(e){if(e>=this.state.childRefs.length)return!1;var t=window.innerHeight*this.props.threshold;return this.getTotalOffsetTop(this.state.childRefs[e].current)<=t}},{key:"getTotalOffsetTop",value:function(e){return e.getBoundingClientRect().top-Object(w.a)(getComputedStyle(e).marginTop)}},{key:"render",value:function(){var e=i.a.Children.map(this.props.children,this.asHtmlElement);return this.props.className?i.a.createElement("div",{className:this.props.className},e):i.a.createElement(i.a.Fragment,null,e)}}]),t}(i.a.Component);Y.propTypes={className:l.a.string,addClasses:l.a.string.isRequired,distributeClasses:l.a.string,distributeSimultaneously:l.a.number,threshold:l.a.number,onAllChildrenShown:l.a.func},Y.defaultProps={className:"",distributeClasses:"",threshold:X.g};var J=Y;function K(e){var t=e.className,a=e.style,n=e.wrapperOuterRef,r=e.wrapperInnerRef,s=e.children;return i.a.createElement("div",{className:"text-center d-flex h-100 w-100 ".concat(t),ref:n},i.a.createElement("div",{className:"m-auto",ref:r,style:a},s))}K.propTypes={className:l.a.string,style:l.a.object,wrapperOuterRef:U(!0),wrapperInnerRef:U(!0),children:l.a.node},K.defaultProps={className:"",style:{}};var Q=K,V=a(92);function Z(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.reduceByPx,r=void 0===n?0:n,s=a.onlyOnMobile,i=a.onlyAtLength,o=!0;return s&&(o=o&&Object(p.b)()),T()(i)===T()(0)&&(o=o&&T()(t)===T()("")&&t.length>=i),o?"".concat(Object(w.a)(e)-r,"px"):e}function $(e){var t=e.className,a=e.x,n=e.y,s=e.width,o=e.height,l=e.htmlChildren,c=e.htmlChildrenWrapperCls,m=e.htmlChildrenFontReductionOptions,d=e.foreignObjectBoundingClientRectInWindow,u=Object(V.b)(),h=r()(u,3),p=h[0],f=h[1],g=h[2],v=T()(l)===T()(Z),b={fontSize:Z(g,l,m)},E=v?i.a.createElement(Q,{className:c,wrapperOuterRef:p,style:b},l(f,d)):i.a.createElement(Q,{className:c,wrapperOuterRef:p,wrapperInnerRef:f,style:b},l);return i.a.createElement("foreignObject",{className:t,x:a,y:n,width:s,height:o},E)}$.propTypes={className:l.a.string,x:l.a.number,y:l.a.number,width:l.a.number,height:l.a.number,htmlChildren:l.a.oneOfType([l.a.node,l.a.func]),htmlChildrenWrapperCls:l.a.string,htmlChildrenFontReductionOptions:l.a.shape({reduceByPx:l.a.number,onlyOnMobile:l.a.bool,onlyAtLength:l.a.number}),foreignObjectBoundingClientRectInWindow:l.a.shape({x:l.a.number,y:l.a.number,width:l.a.number,height:l.a.number,top:l.a.number,left:l.a.number,bottom:l.a.number,right:l.a.number})},$.defaultProps={};var ee=$,te=a(47),ae=function(e){function t(e){var a;return D()(this,t),a=B()(this,M()(t).call(this,e)),h()(H()(a),"svgDimensions",{x:0,y:0,width:100,height:100}),h()(H()(a),"svgRef",i.a.createRef()),h()(H()(a),"foreignObjectSizeRatio",.8),h()(H()(a),"foreignObjectPositionRatio",(1-a.foreignObjectSizeRatio)/2),h()(H()(a),"foreignObjectDimensions",{x:Math.round(a.svgDimensions.width*a.foreignObjectPositionRatio),y:Math.round(a.svgDimensions.height*a.foreignObjectPositionRatio),width:a.svgDimensions.width*a.foreignObjectSizeRatio,height:a.svgDimensions.height*a.foreignObjectSizeRatio}),h()(H()(a),"handleScroll",(function(){a.updateSvgBoundingClientRect()})),a.state={imageSrc:"",svgBoundingClientRect:{}},a.props.image&&Object(te.d)(a.props.image).then((function(e){return a.setState({imageSrc:e})})),a}return G()(t,e),I()(t,[{key:"updateSvgBoundingClientRect",value:function(){this.setState({svgBoundingClientRect:Object(f.a)(this.svgRef.current.getBoundingClientRect())})}},{key:"componentDidMount",value:function(){this.svgRef.current&&this.isUsingHtmlChildrenWithCustomResizeElem&&(this.updateSvgBoundingClientRect(),window.addEventListener("scroll",this.handleScroll))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"getPointsFromRadius",value:function(){for(var e=this.props.sides,t=(this.middleCoordinates.x+this.middleCoordinates.y)/2,a=2*Math.PI/e,n=[],r=0;r<e;r++){var s=a*r,i=Math.cos(s)*t+t,o=Math.sin(s)*t+t;n.push([Math.round(i),Math.round(o)])}return n.map((function(e){return e.join(",")})).join(" ")}},{key:"renderPolygon",value:function(){var e=this.getPointsFromRadius(),t=this.middleCoordinates,a=t.x,n=t.y;if(!this.props.image)return i.a.createElement("polygon",{points:e,fill:this.props.fill,transform:"rotate(".concat(this.props.rotation,", ").concat(a,", ").concat(n,")")});var r=Math.random().toString(36).substr(2);return i.a.createElement(i.a.Fragment,null,i.a.createElement("defs",null,i.a.createElement("clipPath",{id:r,clipPathUnits:"userSpaceOnUse"},i.a.createElement("polygon",{points:e,transform:"rotate(".concat(this.props.rotation,", ").concat(a,", ").concat(n,")")}))),i.a.createElement("image",{href:this.state.imageSrc,preserveAspectRatio:"xMidYMid slice",clipPath:"url(#".concat(r,")"),width:"100%",height:"100%"}))}},{key:"renderHtmlChildren",value:function(){var e=this.props,t=e.htmlChildren,a=e.htmlChildrenWrapperCls,n=e.htmlChildrenFontReductionOptions;if(!t)return null;var r=this.foreignObjectDimensions,s=r.x,o=r.y,l=r.width,c=r.height;return i.a.createElement(ee,{x:s,y:o,width:l,height:c,htmlChildren:t,htmlChildrenWrapperCls:a,foreignObjectBoundingClientRectInWindow:this.foreignObjectBoundingClientRectInWindow,htmlChildrenFontReductionOptions:n})}},{key:"render",value:function(){var e=this.svgDimensions,t=e.x,a=e.y,n=e.width,r=e.height;return i.a.createElement("div",d()({className:this.props.className},this.props.aria),i.a.createElement("svg",{viewBox:"".concat(t," ").concat(a," ").concat(n," ").concat(r),ref:this.svgRef},this.renderPolygon(),this.renderHtmlChildren(),this.props.svgChildren))}},{key:"isUsingHtmlChildrenWithCustomResizeElem",get:function(){return T()(this.props.htmlChildren)===T()(this.constructor)}},{key:"foreignObjectBoundingClientRectInWindow",get:function(){if(this.svgRef.current&&this.isUsingHtmlChildrenWithCustomResizeElem){var e=this.foreignObjectSizeRatio,t=this.foreignObjectDimensions,a=this.state.svgBoundingClientRect,n=a.height/t.y,r=a.width/t.x,s=e*a.width,i=e*a.height;return{x:a.x+r,y:a.y+n,width:s,height:i,top:a.top+n,left:a.left+r,bottom:a.top+n+i,right:a.left+r+s}}return{}}},{key:"middleCoordinates",get:function(){return{x:(this.svgDimensions.x+this.svgDimensions.width)/2,y:(this.svgDimensions.y+this.svgDimensions.height)/2}}}]),t}(i.a.PureComponent);ae.propTypes={className:l.a.string,image:l.a.string,fill:l.a.string,sides:l.a.number,htmlChildren:ee.propTypes.htmlChildren,htmlChildrenWrapperCls:ee.propTypes.htmlChildrenWrapperCls,htmlChildrenFontReductionOptions:ee.propTypes.htmlChildrenFontReductionOptions,svgChildren:l.a.node,rotation:l.a.number,aria:l.a.object},ae.defaultProps={className:"",image:"",fill:"",sides:6,rotation:0,aria:{}};var ne=ae,re=a(640),se=a(642);function ie(e){var t={title:"Full-stack software engineer",description:i.a.createElement(i.a.Fragment,null,"I build platforms at ",se.a," for creating ",i.a.createElement(re.a,{href:X.d.MutualFundsHome},"Mutual Fund/ETF "),"investment plans. I have a passion for good coding practices, both for humans (readability, design patterns) and computers (efficiency). Enjoying my work is all about learning new things, making meaningful contributions, and collaborating with my teammates, because it's the people who make the workplace worthwhile.")};return i.a.createElement("section",{id:"the-gist",className:e.className},i.a.createElement(J,{addClasses:"show",distributeClasses:e.titleAnimationCls},i.a.createElement("h1",{className:"p-5"},"The gist...")),i.a.createElement("div",{className:"container".concat(window.innerWidth<=Object(q.b)().md?"-fluid":""," mb-5")},i.a.createElement("div",{className:"row"},i.a.createElement(J,{addClasses:"show",distributeClasses:"animated",threshold:2/3,distributeSimultaneously:0},i.a.createElement("div",{className:"col-sm-6 m-auto pb-4 slide-in-left"},i.a.createElement("div",{className:"m-auto"},i.a.createElement("h3",{className:"p-2"},t.title),i.a.createElement("p",null,t.description))),i.a.createElement("div",{className:"col-sm-6 m-auto slide-in-right"},i.a.createElement(ne,{className:"h-100",image:"profile_pic.jpg",sides:6,rotation:90}))))))}ie.propTypes={className:l.a.string,titleAnimationCls:l.a.string},ie.defaultProps={className:"",titleAnimationCls:""};var oe=ie;function le(e){var t=e.centerInWrapper,a=e.className,n=e.wrapperCls,s=e.image,o=e.imageCls,l=e.imageStyle,m=e.imageAria,u=e.title,h=e.description,f=e.widthFit,g=e.showBorder,v=e.aria,b=e.onLoad,E=Object(V.c)(),y=r()(E,2),w=y[0],C=y[1];var N,O,j,x,S=t?"m-auto":"",P=Object(p.b)({onlyXsScreenSizes:!0}),T=P||g?"box-shadow-sm border border-medium border-primary-opacity-4":"",k=P?le.WidthFits.DYNAMIC_MOBILE:f,R="position-relative ".concat(k," ").concat(S," ").concat(T," ").concat(a);return i.a.createElement("div",d()({className:n},v),i.a.createElement("div",{className:R,style:l},i.a.createElement(c.a,{className:"w-100 ".concat(o),image:s,onLoad:b,aria:m}),(N=["bg-primary text-light","position-absolute m-auto fixed-top h-100","d-flex flex-wrap "+(Object(p.a)()?"align-content-space-around":"align-content-evenly"),"animated fade"].join(" "),O=Object(p.b)({includeTablets:!0})?"h4":"h3",j="font-size-".concat(Object(p.b)({includeTablets:!0})?"1-5":"2","em"),x=C?"show":"",i.a.createElement("div",{className:"".concat(N," ").concat("duration-5 linear"," ").concat(x),ref:w},i.a.createElement(O,{className:"w-100 mx-auto mt-3 slide-in-top ".concat("duration-5 linear"," ").concat(x," ").concat(j)},u),i.a.createElement("div",{className:"mx-auto slide-in-bottom ".concat("duration-5 linear"," ").concat(x)},i.a.createElement("p",{className:"mx-3"},h))))))}le.WidthFits={FIT:"width-fit",STRETCH:"w-100",DYNAMIC_MOBILE:"w-90"},le.propTypes={centerInWrapper:l.a.bool,className:l.a.string,wrapperCls:l.a.string,image:l.a.string,imageCls:l.a.string,imageStyle:l.a.object,imageAria:l.a.object,title:l.a.node,description:l.a.node,showBorder:l.a.bool,widthFit:l.a.oneOf(Object.values(le.WidthFits)),aria:l.a.object,onLoad:l.a.func},le.defaultProps={centerInWrapper:!0,className:"",wrapperCls:"",image:"",imageCls:"",imageStyle:{},imageAria:{},title:"",description:"",showBorder:!1,widthFit:le.WidthFits.FIT,aria:{},onLoad:function(){}};var ce=le,me=a(610),de=a.n(me),ue=a(209);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe=Object(ue.a)([]),ge=fe.Provider,ve=fe.Context;function be(e){var t=e.imageAria,a=e.imageStyle,n=e.onLoad,o=de()(e,["imageAria","imageStyle","onLoad"]),l=i.a.createRef(),c=Object(s.useState)(),m=r()(c,2),u=m[0],h=m[1],p=Object(s.useContext)(ve),g=p.contextState,v=p.setContextState;function b(){if(Object(f.c)(l,"current"))return l.current.getBoundingClientRect().height}function E(){var e=b();null!=e&&function(e){v((function(t){var a=R()(t);return a.push(e),a}))}(e)}var y=Object(V.g)(),w=r()(y,2),C=w[0],N=w[1];return Object(s.useEffect)((function(){var e,t,a=C.prevWidth!==window.innerWidth;C.wasResized&&a&&(e=u,t=b(),v((function(a){var n=R()(a);return n[e]=t,n})),N())}),[C.wasResized,C.prevWidth]),i.a.createElement(ce,d()({},o,{imageStyle:pe({height:"".concat(Math.min.apply(Math,R()(g)),"px"),overflow:"hidden"},a),imageAria:pe({ref:l},t),onLoad:function(e){n(e),h(g.length),E()}}))}be.Provider=ge,be.WidthFits=ce.WidthFits,be.propTypes=ce.propTypes,be.defaultProps=ce.defaultProps;var Ee=be;function ye(e){var t={imageCards:[{image:"prebuilt_portfolios.jpg",title:i.a.createElement(re.a,{className:"text-light",href:X.d.PrebuiltPortfolios},"Prebuilt Portfolios"),description:"Selections of funds to fit individual investment styles"},{image:"automatic_investing.jpg",title:i.a.createElement(re.a,{className:"text-light",href:X.d.AutomaticInvesting},"Automatic Investing"),description:"Automates investing with varying frequencies and amounts"},{image:"premarket_modal.png",title:"Premarket Dashboard",description:"Analyzes the health of internal systems before markets open"},{image:"edge_panel_widget.png",title:i.a.createElement(re.a,{className:"text-light",href:X.d.EtradeAndroidApp},"Edge Panel"),description:"Android widget for edge-devices to display stock watch lists"},{image:"mock_requests.png",title:i.a.createElement(re.a,{className:"text-light",href:X.d.MockRequests},"MockRequests"),description:"Open-source JS network mocking system",imageCls:"h-100 w-auto",className:"bg-lighter"},{image:"anime_atsume.jpg",title:i.a.createElement(re.a,{className:"text-light",href:X.d.AnimeAtsume},"Anime Atsume"),description:"Aggregator for searching and watching anime"}]};return i.a.createElement("section",{id:"productions",className:"bg-light w-100 pb-5 "+e.className},i.a.createElement(J,{addClasses:"show",distributeClasses:e.titleAnimationCls},i.a.createElement("h1",{className:"p-5"},"Productions")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(Ee.Provider,null,i.a.createElement(J,{addClasses:"flip-y show",distributeClasses:"animated duration-15",distributeSimultaneously:.5},t.imageCards.map((function(e,a){var n=a%2==0&&a===t.imageCards.length-1?"mx-auto":"";return i.a.createElement("div",{className:"col-sm-6 p-0 ".concat(n),key:a},0!==a&&i.a.createElement("div",{className:"d-block d-sm-none py-2"},i.a.createElement("div",{className:"segment-bar bg-dark"})),i.a.createElement(Ee,d()({widthFit:Ee.WidthFits.STRETCH,wrapperCls:"m-2",showBorder:!0},e)))})))))))}ye.propTypes={className:l.a.string,titleAnimationCls:l.a.string},ye.defaultProps={className:"",titleAnimationCls:""};var we=ye;function Ce(e){var t=i.a.createElement("div",{className:"text-left"},i.a.createElement(c.a,{className:"mb-3",image:e.image}),i.a.createElement("h3",{className:"mb-3"},e.title),i.a.createElement("p",{className:"mb-4"},e.description),i.a.createElement("div",{className:"d-block d-sm-none segment-bar"})),a=e.expandOnHoverInDesktop?"hover-expand hover-shadow-sm":"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",d()({className:"d-none d-sm-block p-2 ".concat(a," ").concat(e.className)},e.aria),t),i.a.createElement("div",d()({className:"d-block d-sm-none p-2 ".concat(e.className)},e.aria),t))}Ce.propTypes={className:l.a.string,image:l.a.string,title:l.a.node,description:l.a.node,expandOnHoverInDesktop:l.a.bool,aria:l.a.object},Ce.defaultProps={className:"",image:"",title:"",description:"",expandOnHoverInDesktop:!0,aria:{}};var Ne=Ce;function Oe(e){var t={infoCards:[{image:"atoms_of_confusion.jpg",title:i.a.createElement(re.a,{className:"text-primary",href:X.d.AtomsOfConfusion},"Atoms of Confusion"),description:"Research to understand fundamental causes of source code misunderstandings"},{image:"peptide_nmr.jpg",title:i.a.createElement(re.a,{className:"text-primary",href:X.d.AnticancerPeptides},"Anti-cancer Polypeptides"),description:"Research to develop polypeptides which destroy tumors upon proteolysis"},{image:"tardigrade.jpg",title:i.a.createElement(re.a,{className:"text-primary",href:X.d.TardigradeStratification},"Tardigrade Stratification"),description:"Research demonstrating tardigrade distributions and populations at various altitudes"}]},a=window.innerWidth>=Object(q.b)().sm,n={addClasses:"slide-in-left show",distributeClasses:"animated duration-15",distributeSimultaneously:a?.32:null},r=t.infoCards.map((function(e,t){return i.a.createElement("div",{className:"col-sm-4 mb-5 p-0 px-1",key:t},i.a.createElement(Ne,e))}));return i.a.createElement("section",{id:"projects",className:e.className},i.a.createElement(J,{addClasses:"show",distributeClasses:e.titleAnimationCls},i.a.createElement("h1",{className:"p-5"},"Projects and Publications")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"w-100 ".concat(a?"d-flex":"")},i.a.createElement(J,n,r)))))}Oe.propTypes={className:l.a.string,titleAnimationCls:l.a.string},Oe.defaultProps={className:"",titleAnimationCls:""};var je=Oe;function xe(e){var t=e.className,a=e.title,n=e.description,r=e.show,s=e.passedRef;return i.a.createElement("div",{className:"".concat(t," ").concat(r?"show":""),ref:s},i.a.createElement("h1",{className:"font-size-2-5em"},a),i.a.createElement("h4",{className:"font-size-1-5em"},n))}function Se(e){var t=e.className,a=e.animationCls,n=e.english,s=e.japanese,o=e.passedRef,l=e.boundingClientRectForHover,c=e.aria,m=Object(V.c)(l),u=r()(m,2),h=u[0],p=u[1];return i.a.createElement("div",d()({className:t},c),i.a.createElement("div",{className:"absolute-center"},i.a.createElement(xe,{className:a,title:n.title,description:n.description,show:p,passedRef:o})),i.a.createElement("div",{className:"absolute-center",ref:h},i.a.createElement(xe,{className:a,title:s.title,description:s.description,show:!p})))}Se.propTypes={className:l.a.string,animationCls:l.a.string,english:l.a.shape({title:l.a.node,description:l.a.node}),japanese:l.a.shape({title:l.a.node,description:l.a.node}),passedRef:l.a.object,boundingClientRectForHover:l.a.object,aria:l.a.object},Se.defaultProps={className:"",animationCls:"animated fade duration-5",english:{title:"",description:""},japanese:{title:"",description:""},aria:{}};var Pe=Se,Te=a(643),ke=function(e){var t=e.textToRender,a=e.reduceByPx,n=7-e.index,r=n%2*-90;return i.a.createElement(ne,{htmlChildren:t,htmlChildrenWrapperCls:"text-light",htmlChildrenFontReductionOptions:{reduceByPx:a},sides:n,fill:Object(q.c)().primary,rotation:r})};function Re(e){var t=Object(s.useState)(!1),a=r()(t,2),n=a[0],o=a[1],l={hoverTranslate:{english:{title:"Japanese",description:"I have been learning Japanese for a little over a year. It's a lot of fun!"},japanese:{title:i.a.createElement("div",{className:Object(p.b)({includeTablets:!0})?"underline-extra-space":""},"日本語"),description:"ちょっと 一年 以上 日本語 を 学んで います。楽しい です よ！"}},otherPastimes:[{showDefault:"Open-source projects",showWithEasterEgg:"Check out MockRequests and Anime Atsume"},{showDefault:"Cooking",showWithEasterEgg:"I just throw stuff in a pot and hope it tastes okay"},{showDefault:"Rock climbing",showWithEasterEgg:"Well... at least I used to go"},{showDefault:"Playing guitar",showWithEasterEgg:"Kind of, here and there"}]},c=Object(q.c)(),m=Object(V.f)(l.otherPastimes.length,400,!0),d=r()(m,2),u=d[0],h=d[1],f=Object(p.c)()?i.a.createElement(i.a.Fragment,null,i.a.createElement(ne,{sides:8,fill:c.primary}),i.a.createElement(Pe,{className:"text-light",animationCls:"animated fade duration-5 mx-4",english:l.hoverTranslate.english,japanese:l.hoverTranslate.japanese,aria:{style:{fontSize:window.innerWidth<=Object(q.b)().sm||window.innerWidth>=Object(q.b)().lg?"20px":"14px"}}})):i.a.createElement(ne,{sides:8,fill:c.primary,htmlChildren:function(e,t){return i.a.createElement(Pe,{className:"text-light",english:l.hoverTranslate.english,japanese:l.hoverTranslate.japanese,passedRef:e,boundingClientRectForHover:t})}}),g=l.otherPastimes.map((function(e,t){var a=t%2==0?Te.a.AXES.X:Te.a.AXES.Y,n=l.otherPastimes.length;return i.a.createElement("div",{className:"col-sm-6",key:t},i.a.createElement(Te.a,{axis:a,durationCls:"duration-8",isFlipped:u[t],showDefault:i.a.createElement(ke,{textToRender:e.showDefault,index:t,reduceByPx:n-1}),showOnClick:i.a.createElement(ke,{textToRender:e.showWithEasterEgg,index:t,reduceByPx:n})}))})),v=i.a.createElement("h1",{className:"d-inline-block cursor-pointer",onClick:function(){u.every((function(e){return e===u[0]}))&&(o(!n),h())}},"Pastimes"),b=i.a.createElement(Te.a,{className:"p-5",isFlipped:n,showDefault:v,showOnClick:i.a.createElement(i.a.Fragment,null,v," ",i.a.createElement(se.b,null))});return i.a.createElement("section",{id:"pastimes",className:"bg-light w-100 pb-5 "+e.className},i.a.createElement(J,{addClasses:"show",distributeClasses:e.titleAnimationCls},b),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row mb-5"},i.a.createElement("div",{className:"col-sm-6 mb-4"},i.a.createElement(J,{addClasses:"slide-in-bottom show",distributeClasses:"animated duration-15"},i.a.createElement("div",null,f))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"row"},i.a.createElement(J,{addClasses:"slide-in-bottom show",distributeClasses:"animated duration-15",distributeSimultaneously:.5},g))))))}Re.propTypes={className:l.a.string,titleAnimationCls:l.a.string},Re.defaultProps={className:"",titleAnimationCls:""};var Ae=Re,De=a(117),Fe=a.n(De),Ie=a(158),We=a.n(Ie);function Be(e){var t=e.title,a=e.children,n=e.footer,o=e.useGridForBody,l=e.useGridForFooter,c=e.preventDocumentScrolling,m=e.show,d=e.showCloseButton,u=e.onClose,h=Object(s.useState)(!1),p=r()(h,2),f=p[0],g=p[1],v=Object(V.d)({attribute:"class",value:"modal-content"},{attribute:"class",value:"modal fade"}),b=r()(v,2),E=b[0],y=b[1],w=function(){g(!0),setTimeout((function(){u(),g(!1)}),500)};E&&(y(),m&&w()),Object(V.a)((function(){return m&&c}));var C=m&&!f?"show":"",N=m?"":"0%",O=T()(t)===T()("")?i.a.createElement("h4",{className:"margin-clear"},t):t;return i.a.createElement("div",{className:"modal fade d-flex flex-center ".concat(C),style:{background:"rgba(0, 0, 0, 0.7)",width:N,height:N}},i.a.createElement("div",{className:"d-block w-100"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered flex-center"},i.a.createElement("div",{className:"modal-content overflow-auto",style:{maxWidth:"90vw",maxHeight:"90vh"}},i.a.createElement("div",{className:"modal-header"},i.a.createElement("div",{className:"modal-title"},O),d&&i.a.createElement("button",{className:"close",onClick:w},i.a.createElement("span",null,"×"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:o?"container-fluid":""},a)),n&&i.a.createElement("div",{className:"modal-footer"},i.a.createElement("div",{className:l?"container-fluid":""},n))))))}Be.propTypes={title:l.a.node,children:l.a.node,footer:l.a.node,useGridForBody:l.a.bool,useGridForFooter:l.a.bool,preventDocumentScrolling:l.a.bool,show:l.a.bool,showCloseButton:l.a.bool,onClose:l.a.func},Be.defaultProps={title:"",children:"",footer:"",useGridForBody:!0,useGridForFooter:!0,preventDocumentScrolling:!0,show:!1,showCloseButton:!0,onClose:function(){}};var Le=Be;function Me(e){return e.show?i.a.createElement("div",{className:"spinner-border spinner-border-sm"}):""}Me.propTypes={show:l.a.bool};var ze=Me,He=function(e){function t(){var e,a;D()(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=B()(this,(e=M()(t)).call.apply(e,[this].concat(r))),h()(H()(a),"pageText",{inputs:{placeholder:{name:"Name",email:"Email",message:"What's on your mind?"},error:{name:"Wait, what's your name again?",email:{empty:"Come on, don't be shy",invalid:"Hmm, I don't seem to recognize that email format. Try again?"},message:"Please add a message (even if it's short)",formGeneric:"Oops, something went wrong. Could you try again?",formNetwork:"There was a network error. Are you sure you have an internet connection?"}}}),h()(H()(a),"state",{hasSubmitted:!1,hasClosedAfterSubmitting:!1,isLoading:!1,nameInput:"",emailInput:"",messageInput:"",nameError:"",emailError:"",messageError:"",formError:""}),h()(H()(a),"handleTyping",(function(e){return function(t){var n;a.setState((n={},h()(n,"".concat(e,"Input"),t.target.value),h()(n,"".concat(e,"Error"),""),h()(n,"formError",""),n))}})),h()(H()(a),"handleSubmit",(function(){a.validateForm()&&a.submitForm()})),h()(H()(a),"handleCloseModal",(function(){a.setState({nameError:"",emailError:"",messageError:"",formError:""}),a.state.hasSubmitted&&a.setState({hasClosedAfterSubmitting:!0}),a.props.onClose()})),a}var a;return G()(t,e),I()(t,[{key:"validateForm",value:function(){var e=this.pageText.inputs.error,t=e.name,a=e.email,n=e.message,r=this.state,s=r.nameInput,i=r.emailInput,o=r.messageInput,l=this.validateText(s)?"":t,c=i?this.validateEmail(i)?"":a.invalid:a.empty,m=this.validateText(o)?"":n;return this.setState({nameError:l,emailError:c,messageError:m}),l+c+m===""}},{key:"validateText",value:function(e){return e.length>0}},{key:"validateEmail",value:function(e){return X.c.test(e)}},{key:"submitForm",value:(a=We()(Fe.a.mark((function e(){var t,a,n,r,s,i,o,l,c=this;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.state,a=t.nameInput,n=t.emailInput,r=t.messageInput,(s=new FormData).append("name",a),s.append("email",n),s.append("message",r),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.setState({isLoading:!1}),e?c.setState({hasSubmitted:!0,formError:""}):t?c.setState({formError:c.pageText.inputs.error.formNetwork}):c.setState({formError:c.pageText.inputs.error.formGeneric})},e.prev=7,e.next=10,fetch(X.b,{method:"POST",headers:{Accept:"application/json"},body:s});case 10:return o=e.sent,e.next=13,o.json();case 13:l=e.sent,i(o.ok&&l.ok),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),i(!1,!0);case 20:case"end":return e.stop()}}),e,this,[[7,17]])}))),function(){return a.apply(this,arguments)})},{key:"renderErrorMessage",value:function(e){return e?i.a.createElement("div",{className:"text-danger d-inline w-100"},e):""}},{key:"render",value:function(){var e,t=this.pageText.inputs.placeholder,a=this.state,n=a.nameError,r=a.emailError,s=a.messageError,o=a.formError;e=this.state.hasClosedAfterSubmitting?i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",null,"Didn't you already contact me?"),i.a.createElement(se.b,null)):this.state.hasSubmitted?i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",null,"Thank you!"),i.a.createElement("p",null,"I will be in contact with you shortly")):i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"form-row mb-2"},i.a.createElement("input",{className:"form-control bg-secondary text-white",type:"text",placeholder:t.name,value:this.state.nameInput,onChange:this.handleTyping("name"),"aria-label":"name-input"}),this.renderErrorMessage(n)),i.a.createElement("div",{className:"form-row mb-2"},i.a.createElement("input",{className:"form-control bg-secondary text-white",type:"email",placeholder:t.email,value:this.state.emailInput,onChange:this.handleTyping("email"),"aria-label":"email-input"}),this.renderErrorMessage(r)),i.a.createElement("div",{className:"form-row"},i.a.createElement("textarea",{className:"form-control bg-secondary text-white",rows:3,placeholder:t.message,value:this.state.messageInput,onChange:this.handleTyping("message"),"aria-label":"message-input"}),this.renderErrorMessage(s)));var l=this.state.hasSubmitted?"":i.a.createElement("div",{className:"text-center"},i.a.createElement("div",{className:"form-row mb-2"},this.renderErrorMessage(o)),i.a.createElement("button",{className:"btn btn-primary",onClick:this.handleSubmit},this.state.isLoading?i.a.createElement(ze,{show:!0}):"Send"));return i.a.createElement(Le,{title:"Get in touch",footer:l,show:this.props.show,onClose:this.handleCloseModal},e)}}]),t}(i.a.Component);He.propTypes={show:l.a.bool,onClose:l.a.func},He.defaultProps={show:!1,onClose:function(){}};var _e=He;function Ge(e){var t=Object(s.useState)(!1),a=r()(t,2),n=a[0],o=a[1],l=[i.a.createElement(re.a,{href:X.d.LinkedIn},i.a.createElement(c.a,{className:"w-60 mb-4",image:"linkedin_logo.svg"})),i.a.createElement(re.a,{href:X.d.GitHub},i.a.createElement(c.a,{className:"w-60 mb-4",image:"github_logo.svg"}))],m=l.length+1,d=l.length,u=Object(V.f)(m,250),h=r()(u,2),p=h[0],f=h[1],g=function(e){return"animated duration-5 ".concat(p[e]?"flip-x show":"")},v=l.map((function(e,t){return i.a.createElement("div",{className:"col",key:t},i.a.createElement("div",{className:g(t)},e))})),b=i.a.createElement("div",{className:"col ".concat(g(d))},i.a.createElement("button",{className:"btn border border-primary border-medium rounded p-4 hover-invert-text-bg-colors duration-3",onClick:function(){return o(!0)}},i.a.createElement("h5",{className:"margin-clear"},"Interested in finding out more? Contact me!")));return i.a.createElement("section",{id:"personal-contact",className:"mb-5 "+e.className},i.a.createElement(J,{addClasses:"show",distributeClasses:e.titleAnimationCls,onAllChildrenShown:function(){f()}},i.a.createElement("h1",{className:"p-5"},"Personal Contact")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row justify-content-sm-center"},i.a.createElement("div",{className:"col-sm-6 mb-5"},i.a.createElement("div",{className:"row mb-4"},v),i.a.createElement("div",{className:"row"},b)))),i.a.createElement(_e,{show:n,onClose:function(){return o(!1)}}))}Ge.propTypes={className:l.a.string,titleAnimationCls:l.a.string},Ge.defaultProps={className:"",titleAnimationCls:""};var Xe=Ge;a(613);function Ue(e){var t;function a(){e.onClose()}if(Object(s.useEffect)((function(){e.hideAfterDelay&&setTimeout((function(){a()}),e.hideAfterDelay)}),[e.hideAfterDelay]),!e.show)return"";var n=e.header?i.a.createElement("div",{className:"toast-header"},e.header,i.a.createElement("button",{className:"ml-2 mb-1 close",style:{position:"absolute",right:"8px"},onClick:a},i.a.createElement("span",null,"×"))):"",r=e.float===Ue.Positions.CENTER?(t={margin:"auto"},h()(t,Ue.Positions.LEFT,"0"),h()(t,Ue.Positions.RIGHT,"0"),t):h()({},e.float,"5px");return i.a.createElement("div",{className:"toast toast-message show slide-in-top",style:r},n,i.a.createElement("div",{className:"toast-body"},e.children))}Ue.Positions={LEFT:"left",RIGHT:"right",CENTER:"center"},Ue.propTypes={children:l.a.node,float:l.a.oneOf(Object.values(Ue.Positions)),header:l.a.node,hideAfterDelay:l.a.number,show:l.a.bool,onClose:l.a.func},Ue.defaultProps={float:Ue.Positions.LEFT,onClose:function(){}};var qe=Ue;var Ye=function(){var e=Object(s.useState)(!1),t=r()(e,2),a=t[0],n=t[1];return Object(V.e)((function(e){e.data===X.h&&n(!0)})),i.a.createElement(i.a.Fragment,null,i.a.createElement(qe,{float:qe.Positions.RIGHT,header:"Please refresh the page",show:a,hideAfterDelay:15e3,onClose:function(){return n(!1)}},"The website has recently been updated. Refresh the page to get the latest content."),i.a.createElement(S,null),i.a.createElement(oe,{titleAnimationCls:"animated fade duration-10"}),i.a.createElement(we,{titleAnimationCls:"animated fade duration-10"}),i.a.createElement(je,{titleAnimationCls:"animated fade duration-10"}),i.a.createElement(Ae,{titleAnimationCls:"animated fade duration-10"}),i.a.createElement(Xe,{titleAnimationCls:"animated fade duration-10"}))};t.default=Ye}}]);