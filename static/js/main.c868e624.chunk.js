(this["webpackJsonpslot-checker"]=this["webpackJsonpslot-checker"]||[]).push([[0],{73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),s=n.n(r),i=n(46),u=n(18),o=n.n(u),l=n(26),j=n(21),b=n(10),d=n(112),f=n(117),h=n(113),p=n(114),O=n(118),v=n(116),x=n(106),m=n(115),g=n(6),S=function(t){var e=t.states,n=t.selectedState,c=t.onSelect,a=t.classes;return Object(g.jsxs)(x.a,{variant:"outlined",className:a.formControl,children:[Object(g.jsx)(O.a,{id:"state-input-label",children:"State"}),Object(g.jsx)(m.a,{labelId:"state-input-label",id:"state-input-select",value:n,onChange:c,label:"State",autoWidth:!0,children:e.map((function(t){var e=t.state_id,n=t.state_name;return Object(g.jsx)(v.a,{value:e,children:n},"state-".concat(e))}))})]})},w=function(t){var e=t.districts,n=t.selectedDistrict,c=t.onSelect,a=t.classes;return Object(g.jsxs)(x.a,{variant:"outlined",className:a.formControl,children:[Object(g.jsx)(O.a,{id:"district-input-label",children:"District"}),Object(g.jsx)(m.a,{labelId:"district-input-label",id:"district-input-select",value:n,onChange:c,label:"district",autoWidth:!0,children:e.map((function(t){var e=t.district_id,n=t.district_name;return Object(g.jsx)(v.a,{value:e,children:n},"district-".concat(e))}))})]})},y=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(t){return t.json()})).then((function(t){return t.states})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(e)).then((function(t){return t.json()})).then((function(t){return t.districts})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(t){var e={};return t.length<=1?{state:21,district:363,age:21}:(t.slice(1).split("&").forEach((function(t){if(0!==t.trim().length){var n=t.split("="),c=Object(j.a)(n,2),a=c[0],r=c[1];r.trim().length>0&&(e[a]=r)}})),e)},E=Object(d.a)((function(t){return{formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(2)}}}));var D=Object(b.f)((function(){var t=Object(c.useState)(!0),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),i=s[0],u=s[1],d=Object(c.useState)(""),O=Object(j.a)(d,2),v=O[0],x=O[1],m=Object(c.useState)([]),D=Object(j.a)(m,2),N=D[0],I=D[1],W=Object(c.useState)(""),_=Object(j.a)(W,2),F=_[0],J=_[1],z=Object(c.useState)(""),A=Object(j.a)(z,2),B=A[0],M=A[1],T=E(),q=Object(b.d)(),G=Object(b.e)().search;Object(c.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,u(e),a(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){var t=C(G),e=t.state,n=t.district,c=t.age;e&&x(e),n&&J(n),M(c||"")}),[G]),Object(c.useEffect)((function(){a(!0),function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(v);case 2:e=t.sent,I(e),a(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[v]);var H=function(t){return function(e){var n=C(G),c=e.target.value;"age"===t&&(c=c.replace(/\D/g,"")),n[t]=c;var a,r=(a=n,Object.entries(a).map((function(t){var e=Object(j.a)(t,2),n=e[0],c=e[1];return c.trim().length>0?"".concat(n,"=").concat(c):""})).join("&"));q.push("?".concat(r))}};return Object(g.jsxs)(h.a,{maxWidth:"sm",children:[Object(g.jsx)("h1",{align:"center",children:"Is a slot available for me?"}),Object(g.jsx)("h3",{align:"center",children:"For people who are too lazy to login"}),Object(g.jsx)("br",{}),n?Object(g.jsx)("div",{className:"flex justify-center",children:Object(g.jsx)(p.a,{})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"flex justify-center",children:[Object(g.jsx)(S,{states:i,selectedState:v,classes:T,onSelect:H("state")}),Object(g.jsx)(w,{districts:N,selectedDistrict:F,classes:T,onSelect:H("district")})]}),Object(g.jsx)("br",{}),""!==F&&Object(g.jsx)("div",{className:"flex",style:{flexDirection:"column"},children:Object(g.jsx)(f.a,{id:"outlined-basic",label:"Age",variant:"outlined",width:"sm",value:B,onChange:H("age")})})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})}));n(73);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(D,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c868e624.chunk.js.map