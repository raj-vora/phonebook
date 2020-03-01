(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(13),u=t.n(o),c=t(14),i=t(15),l=t(2),f=function(e){var n=e.person,t=e.deletePerson;return a.a.createElement("div",null,n.name," ",n.number,a.a.createElement("button",{onClick:t},"Delete"))},m=function(e){return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{value:e.filter,onChange:e.handleFilterChange}))},d=function(e){return a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},s=t(3),b=t.n(s),h="/api/persons",p=function(){return b.a.get(h).then((function(e){return e.data}))},w=function(e){return b.a.post(h,e).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var g=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(r.useState)(""),s=Object(l.a)(u,2),b=s[0],h=s[1],g=Object(r.useState)(""),j=Object(l.a)(g,2),y=j[0],P=j[1],C=Object(r.useState)(""),N=Object(l.a)(C,2),k=N[0],S=N[1],D=Object(r.useState)(null),T=Object(l.a)(D,2),x=T[0],A=T[1];Object(r.useEffect)((function(){p().then((function(e){o(e)}))}),[]);var F=function(e){window.confirm("Are you sure you want to delete ".concat(e.name,"?"))&&v(e.id).then((function(){o(t.filter((function(n){return n.id!==e.id}))),A("Deleted ".concat(e.name)),setTimeout((function(){A(null)}),3e3)})).catch((function(n){return window.alert("".concat(e.name," was already deleted"))}))};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement((function(e){var n=e.message;return null===n?null:a.a.createElement("div",{className:"error"}," ",n," ")}),{message:x}),a.a.createElement(m,{filter:k,handleFilterChange:function(e){return S(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(d,{addPerson:function(e){e.preventDefault();var n=Object(i.a)(t).map((function(e){return e.name})),r=n.indexOf(b);if(-1!==r){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===n[r]}));O(a.id,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},a,{number:y})).then((function(e){o(t.map((function(n){return n.id!==a.id?n:e}))),A("Updated ".concat(b)),setTimeout((function(){A(null)}),3e3)})).catch((function(e){A("Information of ".concat(b," has already been removed from server")),setTimeout((function(){A(null)}),3e3)}))}}else w({name:b,number:y}).then((function(e){o(t.concat(e))})),A("Added ".concat(b)),setTimeout((function(){A(null)}),3e3);h(""),P("")},newName:b,newNumber:y,handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return P(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(k.toLowerCase())})).map((function(e){return a.a.createElement(f,{key:e.name,person:e,deletePerson:function(){return F(e)}})})))};t(38);u.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.93ff8eac.chunk.js.map