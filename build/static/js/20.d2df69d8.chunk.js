(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{650:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(1),l=a.n(r),s=a(65),c=a.n(s),i=a(640),d=a.n(i),u=a(641),p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:u.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},g={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,s=e.tag,c=e.form,i=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(t,a){var n=e[t];if(delete p[t],n){var o=!a;m.push(o?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var g=Object(u.m)(d()(t,r?"no-gutters":null,c?"form-row":"row",m),a);return l.a.createElement(s,Object(n.a)({},p,{className:g}))};f.propTypes=m,f.defaultProps=g,t.a=f},651:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(1),l=a.n(r),s=a(65),c=a.n(s),i=a(640),d=a.n(i),u=a(641),p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),g={tag:u.q,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(t,n){var o=e[t];if(delete c[t],o||""===o){var r=!n;if(Object(u.k)(o)){var l,s=r?"-":"-"+t+"-",p=h(r,t,o.size);i.push(Object(u.m)(d()(((l={})[p]=o.size||""===o.size,l["order"+s+o.order]=o.order||0===o.order,l["offset"+s+o.offset]=o.offset||0===o.offset,l)),a))}else{var m=h(r,t,o);i.push(m)}}})),i.length||i.push("col");var p=Object(u.m)(d()(t,i),a);return l.a.createElement(s,Object(n.a)({},c,{className:p}))};b.propTypes=g,b.defaultProps=f,t.a=b},653:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(1),l=a.n(r),s=a(65),c=a.n(s),i=a(640),d=a.n(i),u=a(641),p={tag:u.q,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),c=Object(u.m)(d()(t,"card-header"),a);return l.a.createElement(r,Object(n.a)({},s,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},654:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(1),l=a.n(r),s=a(65),c=a.n(s),i=a(640),d=a.n(i),u=a(641),p={tag:u.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,r=e.color,s=e.body,c=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,g=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.m)(d()(t,"card",!!c&&"text-white",!!s&&"card-body",!!r&&(i?"border":"bg")+"-"+r),a);return l.a.createElement(p,Object(n.a)({},g,{className:f,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},655:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(1),l=a.n(r),s=a(65),c=a.n(s),i=a(640),d=a.n(i),u=a(641),p={tag:u.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,s=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(d()(t,"card-body"),a);return l.a.createElement(s,Object(n.a)({},c,{className:i,ref:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},676:function(e,t,a){"use strict";var n=a(18),o=a(649),r=a(53),l=a(39),s=a(1),c=a.n(s),i=a(65),d=a.n(i),u=a(640),p=a.n(u),m=a(800),g=a(652),f=a(641),h={tag:f.q,children:d.a.node.isRequired,right:d.a.bool,flip:d.a.bool,modifiers:d.a.object,className:d.a.string,cssModule:d.a.object,persist:d.a.bool,positionFixed:d.a.bool},b={flip:{enabled:!1}},E={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,l=t.cssModule,s=t.right,i=t.tag,d=t.flip,u=t.modifiers,g=t.persist,h=t.positionFixed,O=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),v=Object(f.m)(p()(a,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),l),j=i;if(g||this.context.isOpen&&!this.context.inNavbar){var w=(E[this.context.direction]||"bottom")+"-"+(s?"end":"start"),N=d?u:Object(o.a)({},u,{},b),y=!!h;return c.a.createElement(m.a,{placement:w,modifiers:N,positionFixed:y},(function(t){var a=t.ref,o=t.style,r=t.placement;return c.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:o},O,{"aria-hidden":!e.context.isOpen,className:v,"x-placement":r}))}))}return c.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu"},O,{"aria-hidden":!this.context.isOpen,className:v,"x-placement":O.placement}))},t}(c.a.Component);O.propTypes=h,O.defaultProps={tag:"div",flip:!0},O.contextType=g.a,t.a=O},677:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(643),l=a(39),s=a(1),c=a.n(s),i=a(65),d=a.n(i),u=a(640),p=a.n(u),m=a(652),g=a(641),f={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:g.q,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(g.n)(this.props,["toggle"]),r=a.className,l=a.cssModule,s=a.divider,i=a.tag,d=a.header,u=a.active,m=Object(o.a)(a,["className","cssModule","divider","tag","header","active"]),f=Object(g.m)(p()(r,{disabled:m.disabled,"dropdown-item":!s&&!d,active:u,"dropdown-header":d,"dropdown-divider":s}),l);return"button"===i&&(d?i="h6":s?i="div":m.href&&(i="a")),c.a.createElement(i,Object(n.a)({type:"button"===i&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:f,onClick:this.onClick}))},t}(c.a.Component);h.propTypes=f,h.defaultProps={tag:"button",toggle:!0},h.contextType=m.a,t.a=h},678:function(e,t,a){"use strict";var n=a(18),o=a(53),r=a(643),l=a(39),s=a(1),c=a.n(s),i=a(65),d=a.n(i),u=a(640),p=a.n(u),m=a(671),g=a.n(m),f=a(664),h=a.n(f),b=a(124),E=a.n(b),O=a(665),v=a.n(O),j=a(669),w=a.n(j),N=a(668),y=a(672),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,v()(h()(t),"refHandler",(function(e){Object(y.b)(t.props.innerRef,e),Object(y.a)(t.props.setReferenceNode,e)})),t}E()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(y.b)(this.props.innerRef,null)},a.render=function(){return w()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(y.c)(this.props.children)({ref:this.refHandler})},t}(s.Component);function C(e){return s.createElement(N.b.Consumer,null,(function(t){return s.createElement(x,g()({setReferenceNode:t},e))}))}var A=a(652),k=a(641),T=a(658),M={caret:d.a.bool,color:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,disabled:d.a.bool,onClick:d.a.func,"aria-haspopup":d.a.bool,split:d.a.bool,tag:k.q,nav:d.a.bool},D=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,r=a.className,l=a.color,s=a.cssModule,i=a.caret,d=a.split,u=a.nav,m=a.tag,g=Object(o.a)(a,["className","color","cssModule","caret","split","nav","tag"]),f=g["aria-label"]||"Toggle Dropdown",h=Object(k.m)(p()(r,{"dropdown-toggle":i||d,"dropdown-toggle-split":d,"nav-link":u}),s),b=g.children||c.a.createElement("span",{className:"sr-only"},f);return u&&!m?(e="a",g.href="#"):m?e=m:(e=T.a,g.color=l,g.cssModule=s),this.context.inNavbar?c.a.createElement(e,Object(n.a)({},g,{className:h,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:b})):c.a.createElement(C,null,(function(a){var o,r=a.ref;return c.a.createElement(e,Object(n.a)({},g,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:h,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:b}))}))},t}(c.a.Component);D.propTypes=M,D.defaultProps={"aria-haspopup":!0,color:"secondary"},D.contextType=A.a;t.a=D},710:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(649),o=a(18),r=a(643),l=a(39),s=a(1),c=a.n(s),i=a(65),d=a.n(i),u=a(675),p=a(641),m=["defaultOpen"],g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return c.a.createElement(u.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(p.n)(this.props,m)))},t}(s.Component);g.propTypes=Object(n.a)({defaultOpen:d.a.bool,onToggle:d.a.func},u.a.propTypes)},804:function(e,t,a){"use strict";a.r(t);var n=a(644),o=a(645),r=a(647),l=a(646),s=a(656),c=a(648),i=a(1),d=a.n(i),u=a(650),p=a(651),m=a(654),g=a(653),f=a(655),h=a(675),b=a(678),E=a(676),O=a(677),v=a(710),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(a)),a.state={dropdownOpen:new Array(6).fill(!1)},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map((function(t,a){return a===e&&!t}));this.setState({dropdownOpen:t})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(u.a,null,d.a.createElement(p.a,{xs:"12"},d.a.createElement(m.a,null,d.a.createElement(g.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Dropdowns"),d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"https://reactstrap.github.io/components/dropdowns/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(f.a,null,d.a.createElement(h.a,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},d.a.createElement(b.a,{caret:!0},"Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))),d.a.createElement(m.a,null,d.a.createElement(g.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Dropdowns"),d.a.createElement("small",null," alignment")),d.a.createElement(f.a,null,d.a.createElement(h.a,{isOpen:this.state.dropdownOpen[1],toggle:function(){e.toggle(1)}},d.a.createElement(b.a,{caret:!0},"This dropdown's menu is right-aligned"),d.a.createElement(E.a,{right:!0,style:{right:"auto"}},d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))),d.a.createElement(m.a,null,d.a.createElement(g.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Dropdowns"),d.a.createElement("small",null," sizing")),d.a.createElement(f.a,null,d.a.createElement(h.a,{isOpen:this.state.dropdownOpen[2],toggle:function(){e.toggle(2)},size:"lg",className:"mb-3"},d.a.createElement(b.a,{caret:!0},"Large Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))),d.a.createElement(h.a,{isOpen:this.state.dropdownOpen[3],toggle:function(){e.toggle(3)},className:"mb-3"},d.a.createElement(b.a,{caret:!0},"Normal Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))),d.a.createElement(h.a,{isOpen:this.state.dropdownOpen[4],toggle:function(){e.toggle(4)},size:"sm"},d.a.createElement(b.a,{caret:!0},"Small Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))),d.a.createElement(m.a,null,d.a.createElement(g.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Custom Dropdowns")),d.a.createElement(f.a,null,d.a.createElement(h.a,{isOpen:this.state.dropdownOpen[5],toggle:function(){e.toggle(5)}},d.a.createElement(b.a,{tag:"span",onClick:function(){e.toggle(5)},"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen[5]},"Custom Dropdown Content ",d.a.createElement("strong",null," * ")),d.a.createElement(E.a,null,d.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 1"),d.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 2"),d.a.createElement("div",{className:"dropdown-item-text",onClick:function(){e.toggle(5)}},"Custom dropdown text 3"),d.a.createElement("hr",{className:"my-0 dropdown-item-text"}),d.a.createElement("div",{onClick:function(){e.toggle(5)}},"Custom dropdown item 4"))))),d.a.createElement(m.a,null,d.a.createElement(g.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Uncontrolled Dropdown")),d.a.createElement(f.a,null,d.a.createElement(v.a,null,d.a.createElement(b.a,{caret:!0},"Uncontrolled Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))))))}}]),t}(i.Component);t.default=j}}]);
//# sourceMappingURL=20.d2df69d8.chunk.js.map