(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{650:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(659);function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){Object(n.a)(e,t,a[t])}))}return e}},659:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},663:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},684:function(e,t,a){"use strict";var n=a(18),r=a(650),o=a(54),c=a(40),s=a(1),l=a.n(s),i=a(35),p=a.n(i),d=a(641),m=a.n(d),u=a(809),f=a(654),h=a(642),b={tag:h.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},g={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},E=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,c=t.cssModule,s=t.right,i=t.tag,p=t.flip,d=t.modifiers,f=t.persist,b=t.positionFixed,E=Object(o.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),O=Object(h.m)(m()(a,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),c),N=i;if(f||this.context.isOpen&&!this.context.inNavbar){var j=(v[this.context.direction]||"bottom")+"-"+(s?"end":"start"),y=p?d:Object(r.a)({},d,{},g),k=!!b;return l.a.createElement(u.a,{placement:j,modifiers:y,positionFixed:k},(function(t){var a=t.ref,r=t.style,o=t.placement;return l.a.createElement(N,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:r},E,{"aria-hidden":!e.context.isOpen,className:O,"x-placement":o}))}))}return l.a.createElement(N,Object(n.a)({tabIndex:"-1",role:"menu"},E,{"aria-hidden":!this.context.isOpen,className:O,"x-placement":E.placement}))},t}(l.a.Component);E.propTypes=b,E.defaultProps={tag:"div",flip:!0},E.contextType=f.a,t.a=E},685:function(e,t,a){"use strict";var n=a(18),r=a(54),o=a(644),c=a(40),s=a(1),l=a.n(s),i=a(35),p=a.n(i),d=a(641),m=a.n(d),u=a(654),f=a(642),h={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:f.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(f.n)(this.props,["toggle"]),o=a.className,c=a.cssModule,s=a.divider,i=a.tag,p=a.header,d=a.active,u=Object(r.a)(a,["className","cssModule","divider","tag","header","active"]),h=Object(f.m)(m()(o,{disabled:u.disabled,"dropdown-item":!s&&!p,active:d,"dropdown-header":p,"dropdown-divider":s}),c);return"button"===i&&(p?i="h6":s?i="div":u.href&&(i="a")),l.a.createElement(i,Object(n.a)({type:"button"===i&&(u.onClick||this.props.toggle)?"button":void 0},u,{tabIndex:e,role:t,className:h,onClick:this.onClick}))},t}(l.a.Component);b.propTypes=h,b.defaultProps={tag:"button",toggle:!0},b.contextType=u.a,t.a=b},689:function(e,t,a){"use strict";var n=a(18),r=a(54),o=a(644),c=a(40),s=a(1),l=a.n(s),i=a(35),p=a.n(i),d=a(641),m=a.n(d),u=a(676),f=a.n(u),h=a(670),b=a.n(h),g=a(125),v=a.n(g),E=a(671),O=a.n(E),N=a(675),j=a.n(N),y=a(674),k=a(677),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,O()(b()(t),"refHandler",(function(e){Object(k.b)(t.props.innerRef,e),Object(k.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(k.b)(this.props.innerRef,null)},a.render=function(){return j()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(k.c)(this.props.children)({ref:this.refHandler})},t}(s.Component);function w(e){return s.createElement(y.b.Consumer,null,(function(t){return s.createElement(x,f()({setReferenceNode:t},e))}))}var C=a(654),P=a(642),T=a(658),I={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:P.q,nav:p.a.bool},M=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,o=a.className,c=a.color,s=a.cssModule,i=a.caret,p=a.split,d=a.nav,u=a.tag,f=Object(r.a)(a,["className","color","cssModule","caret","split","nav","tag"]),h=f["aria-label"]||"Toggle Dropdown",b=Object(P.m)(m()(o,{"dropdown-toggle":i||p,"dropdown-toggle-split":p,"nav-link":d}),s),g=f.children||l.a.createElement("span",{className:"sr-only"},h);return d&&!u?(e="a",f.href="#"):u?e=u:(e=T.a,f.color=c,f.cssModule=s),this.context.inNavbar?l.a.createElement(e,Object(n.a)({},f,{className:b,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:g})):l.a.createElement(w,null,(function(a){var r,o=a.ref;return l.a.createElement(e,Object(n.a)({},f,((r={})["string"===typeof e?"ref":"innerRef"]=o,r),{className:b,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:g}))}))},t}(l.a.Component);M.propTypes=I,M.defaultProps={"aria-haspopup":!0,color:"secondary"},M.contextType=C.a;t.a=M},717:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(650),r=a(18),o=a(644),c=a(40),s=a(1),l=a.n(s),i=a(35),p=a.n(i),d=a(681),m=a(642),u=["defaultOpen"],f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return l.a.createElement(d.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.n)(this.props,u)))},t}(s.Component);f.propTypes=Object(n.a)({defaultOpen:p.a.bool,onToggle:p.a.func},d.a.propTypes)},751:function(e,t,a){e.exports=a.p+"static/media/logo.e1440537.svg"},752:function(e,t,a){e.exports=a.p+"static/media/sygnet.dba7f081.svg"},808:function(e,t,a){"use strict";a.r(t);var n=a(663),r=a(645),o=a(646),c=a(649),s=a(647),l=a(648),i=a(1),p=a.n(i),d=a(187),m=a(801),u=a(798),f=a(800),h=a(717),b=a(689),g=a(684),v=a(685),E=a(687),O=(a(751),a(752)),N=a.n(O),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handleLogout=function(e){localStorage.clear(),a.props.onLogout(e)},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="https://image.flaticon.com/icons/svg/2439/2439789.svg";this.props.stateAPI&&this.props.stateAPI.account&&this.props.stateAPI.account.avatar&&(e=this.props.stateAPI.account.avatar);var t=this.props;t.children,Object(n.a)(t,["children"]);return p.a.createElement(p.a.Fragment,null,p.a.createElement(E.m,{className:"d-lg-none",display:"md",mobile:!0}),p.a.createElement(E.f,{full:{src:"https://image.flaticon.com/icons/png/512/119/119682.png",width:40,height:25,alt:"Persol gaming"},minimized:{src:N.a,width:30,height:30,alt:"Persol Gaming"}}),p.a.createElement(E.m,{className:"d-md-down-none",display:"lg"}),p.a.createElement(m.a,{className:"d-md-down-none",navbar:!0},p.a.createElement(u.a,{className:"px-3"},p.a.createElement(d.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard")),p.a.createElement(u.a,{className:"px-3"},p.a.createElement(d.NavLink,{to:"#",className:"nav-link"},"Settings"))),p.a.createElement(m.a,{className:"ml-auto",navbar:!0},p.a.createElement(u.a,{className:"d-md-down-none"},p.a.createElement(d.NavLink,{to:"#",className:"nav-link"},p.a.createElement("i",{className:"icon-bell"}),p.a.createElement(f.a,{pill:!0,color:"danger"},"5"))),p.a.createElement(u.a,{className:"d-md-down-none"},p.a.createElement(d.NavLink,{to:"#",className:"nav-link"},p.a.createElement("i",{className:"icon-list"}))),p.a.createElement(u.a,{className:"d-md-down-none"},p.a.createElement(d.NavLink,{to:"#",className:"nav-link"},p.a.createElement("i",{className:"icon-location-pin"}))),p.a.createElement(h.a,{nav:!0,direction:"down"},p.a.createElement(b.a,{nav:!0},p.a.createElement("img",{src:e,className:"img-avatar",alt:"avatar"})),p.a.createElement(g.a,{right:!0},p.a.createElement(v.a,{header:!0,tag:"div",className:"text-center"},p.a.createElement("strong",null,"Account")),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-bell-o"})," Updates",p.a.createElement(f.a,{color:"info"},"42")),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-envelope-o"})," Messages",p.a.createElement(f.a,{color:"success"},"42")),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-tasks"})," Tasks",p.a.createElement(f.a,{color:"danger"},"42")),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-comments"})," Comments",p.a.createElement(f.a,{color:"warning"},"42")),p.a.createElement(v.a,{header:!0,tag:"div",className:"text-center"},p.a.createElement("strong",null,"Settings")),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-user"})," Profile"),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-wrench"})," Settings"),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-usd"})," Payments",p.a.createElement(f.a,{color:"secondary"},"42")),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-file"})," Projects",p.a.createElement(f.a,{color:"primary"},"42")),p.a.createElement(v.a,{divider:!0}),p.a.createElement(v.a,null,p.a.createElement("i",{className:"fa fa-shield"})," Lock Account"),p.a.createElement(v.a,{onClick:this.handleLogout},p.a.createElement("i",{className:"fa fa-lock"})," Logout")))),p.a.createElement(E.b,{className:"d-md-down-none"}))}}]),t}(i.Component);j.defaultProps={},t.default=j}}]);
//# sourceMappingURL=20.42dea576.chunk.js.map