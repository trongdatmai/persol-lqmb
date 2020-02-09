/*! For license information please see 14.336b965d.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{641:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},642:function(e,t,n){"use strict";n.d(t,"p",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return d})),n.d(t,"t",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"r",(function(){return g})),n.d(t,"q",(function(){return v})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return w})),n.d(t,"s",(function(){return x})),n.d(t,"k",(function(){return k})),n.d(t,"j",(function(){return T})),n.d(t,"h",(function(){return M}));var a,r=n(35),o=n.n(r);function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function i(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&s(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var p={};function f(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}var m="object"===typeof window&&window.Element||function(){};function b(e,t,n){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var g=o.a.oneOfType([o.a.string,o.a.func,b,o.a.shape({current:o.a.any})]),v=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},y=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},E=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],w=!("undefined"===typeof window||!window.document||!window.document.createElement);function N(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function x(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===N(e))return NaN;if(k(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=k(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function k(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function R(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!k(e))return!1;var t=N(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&w){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function C(e){return null!==e&&(Array.isArray(e)||w&&"number"===typeof e.length)}function T(e,t){var n=R(e);return t?C(n)?n:null===n?[]:[n]:C(n)?n[0]:n}var M=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},643:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},657:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(643),s=n(40),c=n(1),i=n.n(c),l=n(35),u=n.n(l),d=n(641),p=n.n(d),f=n(642),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,s=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,g=e.innerRef,v=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+u,y=Object(f.m)(p()(s,{close:c},c||"btn",c||h,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===b&&(b="a");var j=c?"Close":null;return i.a.createElement(b,Object(a.a)({type:"button"===b&&v.onClick?"button":void 0},v,{className:y,ref:g,onClick:this.onClick,"aria-label":n||j}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},661:function(e,t,n){"use strict";var a=n(682),r=n.n(a);t.a=r.a.initializeApp({apiKey:"AIzaSyDBF8amla_vjNklDN4EeieSM9Y4dj87OTU",authDomain:"persol-lqmb.firebaseapp.com",databaseURL:"https://persol-lqmb.firebaseio.com",projectId:"persol-lqmb",storageBucket:"persol-lqmb.appspot.com",messagingSenderId:"18719045844",appId:"1:18719045844:web:267353846c47f3dbaee341",measurementId:"G-82D3GSXG4D"})},665:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(1),s=n.n(o),c=n(35),i=n.n(c),l=n(641),u=n.n(l),d=n(642),p={tag:d.q,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(t,"input-group-text"),n);return s.a.createElement(o,Object(a.a)({},c,{className:i}))};f.propTypes=p,f.defaultProps={tag:"span"},t.a=f},671:function(e,t,n){e.exports=n(463)},672:function(e,t,n){"use strict";function a(e,t,n,a,r,o,s){try{var c=e[o](s),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function c(e){a(s,r,o,c,i,"next",e)}function i(e){a(s,r,o,c,i,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return r}))},676:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(643),s=n(40),c=n(1),i=n.n(c),l=n(35),u=n.n(l),d=n(641),p=n.n(d),f=n(642),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,s=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(o)>-1,h=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),j="form-control";m?(j+="-plaintext",y=u||"input"):"file"===o?j+="-file":v&&(j=d?null:"form-check-input"),g.size&&h.test(g.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var O=Object(f.m)(p()(t,l&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,j),n);return("input"===y||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(f.t)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(a.a)({},g,{ref:b,className:O}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},683:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(1),s=n.n(o),c=n(35),i=n.n(c),l=n(641),u=n.n(l),d=n(642),p={tag:d.q,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(t,"card-footer"),n);return s.a.createElement(o,Object(a.a)({},c,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},689:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(1),s=n.n(o),c=n(35),i=n.n(c),l=n(641),u=n.n(l),d=n(642),p={tag:d.q,size:i.a.string,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.size,i=Object(r.a)(e,["className","cssModule","tag","size"]),l=Object(d.m)(u()(t,"input-group",c?"input-group-"+c:null),n);return s.a.createElement(o,Object(a.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},690:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(1),s=n.n(o),c=n(35),i=n.n(c),l=n(641),u=n.n(l),d=n(642),p=n(665),f={tag:d.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.addonType,i=e.children,l=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(d.m)(u()(t,"input-group-"+c),n);return"string"===typeof i?s.a.createElement(o,Object(a.a)({},l,{className:f}),s.a.createElement(p.a,{children:i})):s.a.createElement(o,Object(a.a)({},l,{className:f,children:i}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},695:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(1),s=n.n(o),c=n(35),i=n.n(c),l=n(641),u=n.n(l),d=n(642),p={tag:d.q,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,i=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var p=Object(d.m)(u()(t,l),n);return s.a.createElement(c,Object(a.a)({},i,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},716:function(e,t,n){"use strict";var a=n(18),r=n(54),o=n(643),s=n(40),c=n(1),i=n.n(c),l=n(35),u=n.n(l),d=n(641),p=n.n(d),f=n(642),m={children:u.a.node,inline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,s=e.tag,c=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.m)(p()(t,!!o&&"form-inline"),n);return i.a.createElement(s,Object(a.a)({},l,{ref:c,className:u}))},t}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b},792:function(e,t,n){"use strict";n.r(t);var a=n(671),r=n.n(a),o=n(124),s=n(672),c=n(186),i=n(1),l=n.n(i),u=n(695),d=n(651),p=n(652),f=n(655),m=n(656),b=n(716),g=n(689),v=n(690),h=n(665),y=n(676),j=n(657),O=n(683),E=n(661),w=n(53),N={border:"1px solid #FF3300"},x={color:"#FF3300",display:"block"};t.default=function(){var e=Object(w.k)(),t=Object(i.useState)({username:"",password:"",repPassword:"",win:0,lose:0}),n=Object(c.a)(t,2),a=n[0],k=n[1],R=Object(i.useState)({}),C=Object(c.a)(R,2),T=C[0],M=C[1],P=Object(i.useState)(!1),z=Object(c.a)(P,2),S=z[0],q=z[1],I=function(){var t=Object(s.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,a.repPassword===a.password&&a.password||(M((function(e){return Object(o.a)({},e,{password:!0})})),n=!0),a.username||a.username.trim()||(M((function(e){return Object(o.a)({},e,{username:!0})})),n=!0),!n){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,q(!0);case 7:(c=E.a.database()).ref("users").orderByChild("username").equalTo(a.username).on("value",function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==n.val()){t.next=9;break}return a.avatar="https://image.flaticon.com/icons/svg/2439/2439789.svg",t.next=4,k((function(e){return delete e.repPassword,e}));case 4:c.ref("users").push(a),localStorage.setItem("account",JSON.stringify(a)),e.push("/user/profile"),t.next=13;break;case 9:M((function(e){return Object(o.a)({},e,{exist:!0})})),q(!1),n.key,n.val();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(p.a,{md:"9",lg:"7",xl:"6"},l.a.createElement(f.a,{className:"mx-4"},l.a.createElement(m.a,{className:"p-4"},l.a.createElement(b.a,null,l.a.createElement("h1",null,"Register"),l.a.createElement("p",{className:"text-muted"},"Create your account"),l.a.createElement("p",{style:T.exist?x:{display:"none"}},"Account already exists"),l.a.createElement(g.a,{className:"mb-3",style:T.username?N:{}},l.a.createElement(v.a,{addonType:"prepend"},l.a.createElement(h.a,null,l.a.createElement("i",{className:"icon-user"}))),l.a.createElement(y.a,{type:"text",placeholder:"Username",autoComplete:"username",value:a.username,onChange:function(e){var t=e.target.value;M((function(e){return Object(o.a)({},e,{exist:!1})})),k((function(e){return Object(o.a)({},e,{username:t})})),M((function(e){return Object(o.a)({},e,{username:!1})}))}})),l.a.createElement(g.a,{className:"mb-3",style:T.password?N:{}},l.a.createElement(v.a,{addonType:"prepend"},l.a.createElement(h.a,null,l.a.createElement("i",{className:"icon-lock"}))),l.a.createElement(y.a,{type:"password",placeholder:"Password",autoComplete:"new-password",value:a.password,onChange:function(e){var t=e.target.value;k((function(e){return Object(o.a)({},e,{password:t})})),M((function(e){return Object(o.a)({},e,{password:!1})}))}})),l.a.createElement(g.a,{className:"mb-4",style:T.password?N:{}},l.a.createElement(v.a,{addonType:"prepend"},l.a.createElement(h.a,null,l.a.createElement("i",{className:"icon-lock"}))),l.a.createElement(y.a,{type:"password",placeholder:"Repeat password",autoComplete:"new-password",value:a.repPassword,onChange:function(e){var t=e.target.value;k((function(e){return Object(o.a)({},e,{repPassword:t})})),M((function(e){return Object(o.a)({},e,{password:!1})}))}})),l.a.createElement(j.a,{color:"success",block:!0,onClick:I,disabled:S},"Create Account"))),l.a.createElement(O.a,{className:"p-4"},l.a.createElement(d.a,null,l.a.createElement(p.a,{xs:"12",sm:"6"},l.a.createElement(j.a,{className:"btn-facebook mb-1",block:!0},l.a.createElement("span",null,"facebook"))),l.a.createElement(p.a,{xs:"12",sm:"6"},l.a.createElement(j.a,{className:"btn-twitter mb-1",block:!0},l.a.createElement("span",null,"twitter"))))))))))}}}]);
//# sourceMappingURL=14.336b965d.chunk.js.map