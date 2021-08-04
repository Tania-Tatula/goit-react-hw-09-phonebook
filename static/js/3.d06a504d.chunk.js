(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{100:function(t,e,n){"use strict";var r=n(94),a=n(101),c=n(102);t.exports=function(t){for(var e,n=0,o="";!e;)o+=c(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},101:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},102:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),c="";;)for(var o=t(a),u=a;u--;)if((c+=e[o[u]&r]||"").length===+n)return c}},103:function(t,e,n){"use strict";var r=n(94);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},104:function(t,e,n){"use strict";t.exports=0},109:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r,a,c=n(0),o=n(93),u=n(96),i=n.n(u),s=n(34),l=n(9),f=n(95),b=n.n(f),h=n(1);function p(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),r=n[0],a=n[1],u=Object(c.useState)(""),f=Object(o.a)(u,2),p=f[0],d=f[1],j=Object(l.b)(),m=i.a.generate();return Object(h.jsx)("div",{className:b.a.contactsBlock,children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j(s.b.submit({id:i.a.generate(),name:r,number:p})),a(""),d("")},className:b.a.formName,children:[Object(h.jsxs)("label",{id:m,children:["Name",Object(h.jsx)("input",{className:b.a.input,type:"text",name:"name",value:r,onChange:function(t){a(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{id:m,children:["Number",Object(h.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:p,onChange:function(t){d(t.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{className:b.a.button,type:"submit",children:"Add conract"})]})})}function d(){var t=Object(l.b)(),e=Object(l.c)(s.d.getValue),n=Object(c.useCallback)((function(e){t(s.a.changeFilter(e.currentTarget.value))}),[t]);return Object(h.jsx)("div",{className:b.a.contactsBlock,children:Object(h.jsxs)("label",{children:["Find contact by name",Object(h.jsx)("input",{className:b.a.input,type:"text",value:e,onChange:n})]})})}var j=["title","titleId"];function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function x(t,e){var n=t.title,o=t.titleId,u=v(t,j);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":o},u),n?c.createElement("title",{id:o},n):null,r||(r=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),a||(a=c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var g=c.forwardRef(x);n.p;function O(){var t=Object(l.b)(),e=Object(l.c)(s.d.getVisibleContacts),n=Object(c.useCallback)((function(e){t(s.b.deleteContact(e))}),[t]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:b.a.contactsBlock,children:e.map((function(t){var e=t.name,r=t.number,a=t.id;return Object(h.jsxs)("li",{className:b.a.contactItem,children:[e,": ",r,Object(h.jsx)("button",{onClick:function(){return n(a)},className:b.a.buttonDelete,"aria-label":"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(h.jsx)(g,{width:"20",height:"20",fill:"#fff"})})]},a)}))})})}function y(){var t=Object(l.b)();return Object(c.useEffect)((function(){t(s.b.fetchContacts())}),[t]),Object(h.jsxs)("div",{className:b.a.App,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(p,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(d,{}),Object(h.jsx)(O,{})]})}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(35);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},94:function(t,e,n){"use strict";var r,a,c,o=n(98),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){c=!1}function s(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==u&&(r=u,i())}function l(){return c||(c=function(){r||s(u);for(var t,e=r.split(""),n=[],a=o.nextValue();e.length>0;)a=o.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return s(t),r},seed:function(t){o.seed(t),a!==t&&(i(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},95:function(t,e,n){t.exports={App:"Contacts_App__oZb9h",input:"Contacts_input__3djhb",button:"Contacts_button__3DkNa",buttonDelete:"Contacts_buttonDelete__2udIP",contactsBlock:"Contacts_contactsBlock__2EGYc",contactItem:"Contacts_contactItem__Eu_rX"}},96:function(t,e,n){"use strict";t.exports=n(97)},97:function(t,e,n){"use strict";var r=n(94),a=n(99),c=n(103),o=n(104)||0;function u(){return a(o)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=c},98:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},99:function(t,e,n){"use strict";var r,a,c=n(100);n(94);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=c(7),e+=c(t),r>0&&(e+=c(r)),e+=c(n)}}}]);
//# sourceMappingURL=3.d06a504d.chunk.js.map