(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[44],{653:function(e,a,t){"use strict";var r=t(18),l=t(54),o=t(1),n=t.n(o),c=t(35),s=t.n(c),d=t(641),i=t.n(d),m=t(642),u={tag:m.q,className:s.a.string,cssModule:s.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.m)(i()(a,"card-header"),t);return n.a.createElement(o,Object(r.a)({},c,{className:s}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},655:function(e,a,t){"use strict";var r=t(18),l=t(54),o=t(1),n=t.n(o),c=t(35),s=t.n(c),d=t(641),i=t.n(d),m=t(642),u={tag:m.q,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,s=e.inverse,d=e.outline,u=e.tag,p=e.innerRef,b=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(m.m)(i()(a,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(d?"border":"bg")+"-"+o),t);return n.a.createElement(u,Object(r.a)({},b,{className:h,ref:p}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},656:function(e,a,t){"use strict";var r=t(18),l=t(54),o=t(1),n=t.n(o),c=t(35),s=t.n(c),d=t(641),i=t.n(d),m=t(642),u={tag:m.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),d=Object(m.m)(i()(a,"card-body"),t);return n.a.createElement(c,Object(r.a)({},s,{className:d,ref:o}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},786:function(e,a,t){!function(e){"use strict";function a(e){var a=this,t="above",r="below",l="chartjs-tooltip",o="no-transform",n="tooltip-body",c="tooltip-body-item",s="tooltip-body-item-color",d="tooltip-body-item-label",i="tooltip-body-item-value",m="tooltip-header",u="tooltip-header-item",p={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},b=document.getElementById(p.TOOLTIP);if(b||((b=document.createElement("div")).id=p.TOOLTIP,b.className=l,this._chart.canvas.parentNode.appendChild(b)),0!==e.opacity){if(b.classList.remove(t,r,o),e.yAlign?b.classList.add(e.yAlign):b.classList.add(o),e.body){var h=e.title||[],g=document.createElement(p.DIV);g.className=m,h.forEach((function(e){var a=document.createElement(p.DIV);a.className=u,a.innerHTML=e,g.appendChild(a)}));var E=document.createElement(p.DIV);E.className=n,e.body.map((function(e){return e.lines})).forEach((function(a,t){var r=document.createElement(p.DIV);r.className=c;var l=e.labelColors[t],o=document.createElement(p.SPAN);if(o.className=s,o.style.backgroundColor=l.backgroundColor,r.appendChild(o),a[0].split(":").length>1){var n=document.createElement(p.SPAN);n.className=d,n.innerHTML=a[0].split(": ")[0],r.appendChild(n);var m=document.createElement(p.SPAN);m.className=i,m.innerHTML=a[0].split(": ").pop(),r.appendChild(m)}else{var u=document.createElement(p.SPAN);u.className=i,u.innerHTML=a[0],r.appendChild(u)}E.appendChild(r)})),b.innerHTML="",b.appendChild(g),b.appendChild(E)}var f=this._chart.canvas.getBoundingClientRect(),v=this._chart.canvas.offsetTop,C=this._chart.canvas.offsetLeft+e.caretX,N=v+e.caretY,y=e.width/2;C+y>f.width?C-=y:C<y&&(C+=y),b.style.opacity=1,b.style.left=C+"px",b.style.top=N+"px"}else b.style.opacity=0}var t=a;e.CustomTooltips=a,e.customTooltips=t,Object.defineProperty(e,"__esModule",{value:!0})}(a)},852:function(e,a,t){"use strict";t.r(a);var r=t(645),l=t(646),o=t(649),n=t(647),c=t(648),s=t(1),d=t.n(s),i=t(686),m=t(18),u=t(54),p=t(35),b=t.n(p),h=t(641),g=t.n(h),E=t(642),f={tag:E.q,className:b.a.string,cssModule:b.a.object},v=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(u.a)(e,["className","cssModule","tag"]),o=Object(E.m)(g()(a,"card-columns"),t);return d.a.createElement(r,Object(m.a)({},l,{className:o}))};v.propTypes=f,v.defaultProps={tag:"div"};var C=v,N=t(655),y=t(653),w=t(656),j=t(786),B={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},M={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},O={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},F={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},k={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},T={datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},A={tooltips:{enabled:!1,custom:j.CustomTooltips},maintainAspectRatio:!1},R=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(C,{className:"cols-2"},d.a.createElement(N.a,null,d.a.createElement(y.a,null,"Line Chart",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(w.a,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(i.d,{data:B,options:A})))),d.a.createElement(N.a,null,d.a.createElement(y.a,null,"Bar Chart",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(w.a,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(i.a,{data:M,options:A})))),d.a.createElement(N.a,null,d.a.createElement(y.a,null,"Doughnut Chart",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(w.a,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(i.b,{data:O})))),d.a.createElement(N.a,null,d.a.createElement(y.a,null,"Radar Chart",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(w.a,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(i.g,{data:F})))),d.a.createElement(N.a,null,d.a.createElement(y.a,null,"Pie Chart",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(w.a,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(i.e,{data:k})))),d.a.createElement(N.a,null,d.a.createElement(y.a,null,"Polar Area Chart",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(w.a,null,d.a.createElement("div",{className:"chart-wrapper"},d.a.createElement(i.f,{data:T,options:A}))))))}}]),a}(s.Component);a.default=R}}]);
//# sourceMappingURL=44.25d0c43c.chunk.js.map