(this["webpackJsonpreact-table"]=this["webpackJsonpreact-table"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(6),r=a.n(l),i=a(2),s=c.a.createContext({}),o=[{name:"reset",title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435"},{name:"equals",title:"\u0420\u0430\u0432\u043d\u043e"},{name:"more",title:"\u0411\u043e\u043b\u044c\u0448\u0435"},{name:"less",title:"\u041c\u0435\u043d\u044c\u0448\u0435"},{name:"contains",title:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442"}],u=[{name:"reset",title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"},{name:"title",title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{name:"count",title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"},{name:"distance",title:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}],d=a(0);function j(){var e=c.a.useContext(s),t=Object(i.a)(e,2)[1],a=Object(n.useState)(u[0]),l=Object(i.a)(a,2),r=l[0],j=l[1],b=Object(n.useState)(o[0]),p=Object(i.a)(b,2),m=p[0],O=p[1],f=Object(n.useState)(""),h=Object(i.a)(f,2),x=h[0],v=h[1],g=Object(n.useState)(!1),y=Object(i.a)(g,2),S=y[0],N=y[1],C=function(e){j(u[e])},k=function(e){O(o[e])},q=function(e){v(e)};return Object(n.useEffect)((function(){t({type:"filter",payload:{column:r.name,condition:m.name,value:x}})}),[S]),Object(d.jsx)("form",{className:"shadow p-3 mb-3 bg-body rounded",onSubmit:function(e){return function(e){null===e||void 0===e||e.preventDefault(),N(!S)}(e)},children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("label",{htmlFor:"selectColumn",className:"form-label",children:"\u0412\u044b\u0431\u043e\u0440 \u043a\u043e\u043b\u043e\u043d\u043a\u0438"}),Object(d.jsx)("select",{className:"col form-select",id:"selectColumn",onChange:function(e){return C(e.target.value)},children:u.map((function(e,t){return Object(d.jsx)("option",{value:t,children:e.title},t)}))})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("label",{htmlFor:"selectCondition",className:"form-label",children:"\u0412\u044b\u0431\u043e\u0440 \u0443\u0441\u043b\u043e\u0432\u0438\u044f"}),Object(d.jsx)("select",{className:"col form-select",id:"selectCondition",onChange:function(e){return k(e.target.value)},children:o.map((function(e,t){return Object(d.jsx)("option",{value:t,children:e.title},t)}))})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("label",{htmlFor:"value",className:"form-label",children:"\u0412\u0432\u043e\u0434 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"}),Object(d.jsx)("input",{className:"form-control",id:"value",value:x,onChange:function(e){return q(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"col d-grid gap-2",children:[Object(d.jsx)("button",{type:"reset",className:"col btn btn-danger",onClick:function(e){return function(e){null===e||void 0===e||e.preventDefault(),C(0),k(0),q(""),N(!S)}()},children:"\u0421\u0431\u0440\u043e\u0441"}),Object(d.jsx)("button",{type:"submit",className:"col btn btn-primary",children:"\u041f\u043e\u0438\u0441\u043a"})]})]})})}var b=a(5),p=a.n(b),m=a(7),O="https://heroku-php-server-xrest.herokuapp.com/?";function f(){var e,t=c.a.useContext(s),a=Object(i.a)(t,2),l=a[0],r=a[1];function o(){return(o=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O).concat(t.filterState.sql).concat(t.sortState.sql).concat(t.paginateState.sql));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r({type:"update",payload:{body:n.body,paginate:n.paginate}});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){o.apply(this,arguments)}(l)}),[l.filterState,l.paginateState.current,l.sortState]),Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table table-bordered",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430"}),(e=u[0].name,u.filter((function(t){return t.name!==e}))).map((function(e,t){return Object(d.jsx)("th",{className:l.sortState.column===e.name?"table-primary":"",scope:"col",onClick:function(){return function(e){r({type:"sort",payload:{column:e.name,inDesc:l.sortState.column===e.name?!l.sortState.inDesc:l.sortState.inDesc}})}(e)},children:e.title},t)}))]})}),Object(d.jsx)("tbody",{children:l.dataState.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.date}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.count}),Object(d.jsx)("td",{children:e.distance})]},t)}))})]})})}function h(){var e=c.a.useContext(s),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),u=o[0],j=o[1];function b(){return Math.round(+a.paginateState.count/a.paginateState.limit-1)}var p=function(e){l({type:"paginate",payload:{count:a.paginateState.count,next:e+1,current:e,prev:e-1}})};return Object(n.useEffect)((function(){j(function(){for(var e=[],t=(b()<=0||b(),0);t<=b();t++)e.push(t);return e}())}),[a.paginateState.count]),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(d.jsx)("li",{className:a.paginateState.current<=0?"page-item disabled":"page-item",children:Object(d.jsx)("span",{className:"page-link",onClick:function(e){return p(a.paginateState.current-1)},children:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f"})}),u.map((function(e,t){return Object(d.jsx)("li",{className:e===a.paginateState.current?"page-item active":"page-item",children:Object(d.jsx)("span",{className:"page-link",onClick:function(t){return p(e)},children:e})},t)})),Object(d.jsx)("li",{className:a.paginateState.current>=b()?"page-item disabled":"page-item",children:Object(d.jsx)("span",{className:"page-link",onClick:function(e){return p(a.paginateState.current+1)},children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f"})})]})})}var x=a(3),v={filterState:{column:null,condition:null,value:null,sql:""},sortState:{column:"",inDesc:!0,sql:""},paginateState:{count:30,next:1,current:0,prev:0,limit:5,sql:"paginate=[0,".concat(5,"]&")},dataState:[]};function g(e,t){switch(t.type){case"filter":var a="";return"reset"!==t.payload.column&&"reset"!==t.payload.condition&&""!==t.payload.value&&(a="filter=[".concat(t.payload.column,",").concat(t.payload.condition,",").concat(t.payload.value,"]&")),Object(x.a)(Object(x.a)({},e),{},{filterState:{column:t.payload.column,condition:t.payload.condition,value:t.payload.value,sql:a}});case"sort":var n=t.payload.inDesc?"desc":"asc",c="sort=[".concat(t.payload.column,",").concat(n,"]&");return Object(x.a)(Object(x.a)({},e),{},{sortState:{column:t.payload.column,inDesc:t.payload.inDesc,sql:c}});case"paginate":var l="paginate=[".concat(t.payload.current,",").concat(5,"]&");return Object(x.a)(Object(x.a)({},e),{},{paginateState:{count:t.payload.count,next:t.payload.next,current:t.payload.current,prev:t.payload.prev,limit:5,sql:l}});case"update":return Object(x.a)(Object(x.a)({},e),{},{dataState:t.payload.body,paginateState:Object(x.a)(Object(x.a)({},e.paginateState),{},{count:t.payload.paginate.count,limit:t.payload.paginate.limit})});default:return v}}function y(){var e=function(){var e=Object(n.useReducer)(g,v),t=Object(i.a)(e,2);return[t[0],t[1]]}(),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(d.jsx)(s.Provider,{value:[a,c],children:Object(d.jsxs)("div",{className:"container flex-column justify-content-center align-items-center",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"shadow p-2 bg-body rounded",children:[Object(d.jsx)(f,{}),Object(d.jsx)(h,{})]})]})})}a(14);var S=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(y,{})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.e18f4986.chunk.js.map