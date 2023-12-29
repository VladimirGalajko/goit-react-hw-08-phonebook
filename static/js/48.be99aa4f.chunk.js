"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[48],{8048:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,a,i,o,s,l,c,d=t(168),u=t(7924),x=(0,u.vJ)(r||(r=(0,d.Z)(["\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n\tmargin: 0;\n}\nh1 {\n\ttext-align: center\n}\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\nimg {\n\tdisplay: block;\n\tmax-width: 100%;\n\theight: auto;\n}\n\na {\ntext-decoration: none;\n}\n"]))),p=t(4420),m=u.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #ddd;\n  padding: 8px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n"]))),h=t(5769),b=t(2791),f=t(2829),g=t(3329),j=function(){var n=(0,p.v9)(f.hF),e=(0,p.v9)((function(n){return n.contacts})),t=e.isLoading,r=e.error,a=(0,p.I0)();(0,b.useEffect)((function(){a((0,h.yF)())}),[a]);return(0,g.jsxs)(g.Fragment,{children:[t&&(0,g.jsx)("h4",{children:"Loading..."}),r&&(0,g.jsx)("h4",{children:r}),(0,g.jsx)("ul",{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,g.jsxs)(m,{children:[(0,g.jsxs)("span",{children:[e,": "]}),(0,g.jsxs)("span",{children:[t," "]}),(0,g.jsx)("button",{type:"button",onClick:function(){!function(n){a((0,h.GK)(n))}(r)},children:"\u274c"})]},r)}))})]})},v=u.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 300px;\n  gap: 10px;\n"]))),Z=u.ZP.input(o||(o=(0,d.Z)(["\n padding: 8px;\n  margin-bottom: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n\n  &:focus {\n    outline: none;\n    border-color: #999; \n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  }\n"]))),y=t(6158),w=function(){var n=(0,p.v9)((function(n){return n.contacts.filter})),e=(0,p.I0)();return(0,g.jsxs)("label",{children:[(0,g.jsx)("p",{children:"Search by name"}),(0,g.jsx)(Z,{type:"text",value:n,onChange:function(n){var t=n.target;e((0,y.U)(t.value))},placeholder:"search"})]})},k=u.ZP.form(s||(s=(0,d.Z)(["\n  display: flex;\n  flex-direction: column; \n  max-width: 150px;\n  align-items: center;\n  margin: 0 auto;\n\n"]))),P=u.ZP.input(l||(l=(0,d.Z)(["\n padding: 8px;\n  margin-bottom: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n\n  &:focus {\n    outline: none;\n    border-color: #999; \n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); \n  }\n"]))),z=u.ZP.button(c||(c=(0,d.Z)(["\n    background-color: rgb(78, 185, 119);\n    color: rgb(255, 255, 255);\n    padding: 8px 16px;\n    border: none;\n    border-radius: 4px;\n    box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;\n    cursor: pointer;\n    transition: filter 0.3s ease 0s;\n    &:hover {\n    filter: brightness(80%);\n  }\n  &:active {\n    transform: scale(0.9);\n  }\n"]))),C=function(){var n=(0,p.v9)((function(n){return n.contacts.items})),e=(0,p.I0)();return(0,g.jsxs)(k,{onSubmit:function(t){t.preventDefault();var r=t.target,a=t.target.elements.name.value,i=t.target.elements.number.value;if(n.some((function(n){return n.name===t.target.elements.name.value})))return alert("".concat(t.target.elements.name.value," is already in contacts"));e((0,h.uK)({name:a,number:i})),r.reset()},children:[(0,g.jsx)("label",{children:"Name"}),(0,g.jsx)(P,{type:"text",id:"inputName",name:"name",placeholder:"text",value:n.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Text",required:!0}),(0,g.jsx)("label",{children:"Number"}),(0,g.jsx)(P,{type:"tel",id:"inputNumber",name:"number",placeholder:"number",value:n.number,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Numbers",required:!0}),(0,g.jsx)(z,{type:"submit",children:"add contact \ud83d\udc46"})]})};function N(){return(0,g.jsx)("div",{children:(0,g.jsxs)(v,{children:[(0,g.jsx)("h1",{children:"Phonebook "}),(0,g.jsx)(C,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(w,{}),(0,g.jsx)("div",{children:(0,g.jsx)(j,{})}),(0,g.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=48.be99aa4f.chunk.js.map