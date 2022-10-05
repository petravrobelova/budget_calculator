(this["webpackJsonpbudget-calculator"]=this["webpackJsonpbudget-calculator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(14),a(8)),m=a(5),s=a(2),u=(a(15),a(18)),i=a(1),d=function(e){var t=e.expense,a=e.handleEdit,n=e.handleDelete,l=t.id,r=t.charge,o=t.amount;return c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"expense"},r),c.a.createElement("span",{className:"amount"},"$",o)),c.a.createElement("div",null,c.a.createElement("button",{className:"edit-btn","aria-label":"edit button",onClick:function(){return a(l)}},c.a.createElement(i.b,null)),c.a.createElement("button",{className:"clear-btn","aria-label":"delete button",onClick:function(){return n(l)}},c.a.createElement(i.a,null))))},h=function(e){var t=e.expenses,a=e.handleDelete,n=e.handleEdit,l=e.clearItems;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list"},t.map((function(e){return c.a.createElement(d,{key:e.id,expense:e,handleDelete:a,handleEdit:n})}))),t.length>0&&c.a.createElement("button",{className:"btn",onClick:l},"clear expenses",c.a.createElement(i.a,{className:"btn-icon"})))},b=function(e){var t=e.charge,a=e.amount,n=e.handleCharge,l=e.handleAmount,r=e.handleSubmit,o=e.edit;return c.a.createElement("form",{onSubmit:r},c.a.createElement("div",{className:"form-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"expense"},"charge"),c.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"e.g. rent",value:t,onChange:n}),c.a.createElement("label",{htmlFor:"amount"},"charge"),c.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"e.g. 100",value:a,onChange:l}))),c.a.createElement("button",{type:"submit",className:"btn"},o?"edit":"submit",c.a.createElement(i.c,{className:"btn-icon"})))},p=function(e){var t=e.type,a=e.text;return c.a.createElement("div",{className:"alert alert-".concat(t)},a)},g=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[];var f=function(){var e=Object(n.useState)(g),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),d=i[0],f=i[1],E=Object(n.useState)(""),v=Object(s.a)(E,2),x=v[0],N=v[1],O=Object(n.useState)({show:!1}),y=Object(s.a)(O,2),j=y[0],S=y[1],w=Object(n.useState)(!1),k=Object(s.a)(w,2),C=k[0],I=k[1],D=Object(n.useState)(0),F=Object(s.a)(D,2),J=F[0],A=F[1];Object(n.useEffect)((function(){localStorage.setItem("expenses",JSON.stringify(a))}),[a]);var $=function(e){var t=e.type,a=e.text;S({show:!0,type:t,text:a}),setTimeout((function(){S({show:!1})}),3e3)};return c.a.createElement(c.a.Fragment,null,j.show&&c.a.createElement(p,{type:j.type,text:j.text}),c.a.createElement("h1",null,"budget calculator"),c.a.createElement("main",{className:"App"},c.a.createElement(b,{charge:d,amount:x,handleAmount:function(e){N(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),""!==d&&x>0){if(C){var t=a.map((function(e){return e.id===J?Object(m.a)(Object(m.a)({},e),{},{charge:d,amount:x}):e}));l(t),I(!1),$({type:"success",text:"item edited"})}else{var n={id:Object(u.a)(),charge:d,amount:x};l([].concat(Object(o.a)(a),[n])),$({type:"success",text:"item added"})}f(""),N("")}else $({type:"danger",text:"charge can't be empty value and amount has to be bigger than zero"})},handleCharge:function(e){f(e.target.value)},edit:C}),c.a.createElement(h,{expenses:a,handleDelete:function(e){var t=a.filter((function(t){return t.id!==e}));l(t),$({type:"danger",text:"item deleted"})},handleEdit:function(e){var t=a.find((function(t){return t.id===e})),n=t.charge,c=t.amount;f(n),N(c),I(!0),A(e)},clearItems:function(){l([]),$({type:"danger",text:"all items deleted"})}})),c.a.createElement("h1",null,"total spending : ",c.a.createElement("span",{className:"total"},"$ ",a.reduce((function(e,t){return e+parseInt(t.amount)}),0))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f5c0388d.chunk.js.map