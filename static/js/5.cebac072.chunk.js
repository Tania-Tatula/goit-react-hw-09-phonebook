(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[5],{105:function(e,a,t){"use strict";var c=t(5),r=t(19),s=t(27),i=t.n(s),l=t(21),o=t.n(l),n=t(0),d=t(1),b=["as","className","type","tooltip"],f={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},j=n.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,l=e.className,o=e.type,n=void 0===o?"valid":o,f=e.tooltip,j=void 0!==f&&f,u=Object(r.a)(e,b);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:i()(l,"".concat(n,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=f;var u=j,m=n.createContext({}),v=t(33),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,l=e.className,o=e.type,b=void 0===o?"checkbox":o,f=e.isValid,j=void 0!==f&&f,u=e.isInvalid,p=void 0!==u&&u,x=e.as,h=void 0===x?"input":x,y=Object(r.a)(e,O),N=Object(n.useContext)(m).controlId;return s=Object(v.a)(s,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},y),{},{ref:a,type:b,id:t||N,className:i()(l,s,j&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,h=["bsPrefix","className","htmlFor"],y=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.htmlFor,o=Object(r.a)(e,h),b=Object(n.useContext)(m).controlId;return t=Object(v.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:l||b,className:i()(s,t)}))}));y.displayName="FormCheckLabel";var N=y,w=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],g=n.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,l=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,f=e.disabled,j=void 0!==f&&f,O=e.isValid,p=void 0!==O&&O,h=e.isInvalid,y=void 0!==h&&h,g=e.feedbackTooltip,I=void 0!==g&&g,P=e.feedback,C=e.className,F=e.style,k=e.title,S=void 0===k?"":k,R=e.type,L=void 0===R?"checkbox":R,z=e.label,T=e.children,V=e.as,H=void 0===V?"input":V,A=Object(r.a)(e,w);s=Object(v.a)(s,"form-check"),l=Object(v.a)(l,"form-switch");var D=Object(n.useContext)(m).controlId,E=Object(n.useMemo)((function(){return{controlId:t||D}}),[D,t]),G=null!=z&&!1!==z&&!T,J=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},A),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:p,isInvalid:y,disabled:j,as:H}));return Object(d.jsx)(m.Provider,{value:E,children:Object(d.jsx)("div",{style:F,className:i()(C,z&&s,b&&"".concat(s,"-inline"),"switch"===L&&l),children:T||Object(d.jsxs)(d.Fragment,{children:[J,G&&Object(d.jsx)(N,{title:S,children:z}),(p||y)&&Object(d.jsx)(u,{type:p?"valid":"invalid",tooltip:I,children:P})]})})})}));g.displayName="FormCheck";var I=Object.assign(g,{Input:x,Label:N}),P=t(4),C=(t(92),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=n.forwardRef((function(e,a){var t,s,l=e.bsPrefix,o=e.type,b=e.size,f=e.htmlSize,j=e.id,u=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,h=void 0!==x&&x,y=e.plaintext,N=e.readOnly,w=e.as,g=void 0===w?"input":w,I=Object(r.a)(e,C),F=Object(n.useContext)(m).controlId;(l=Object(v.a)(l,"form-control"),y)?t=Object(P.a)({},"".concat(l,"-plaintext"),!0):(s={},Object(P.a)(s,l,!0),Object(P.a)(s,"".concat(l,"-").concat(b),b),t=s);return Object(d.jsx)(g,Object(c.a)(Object(c.a)({},I),{},{type:o,size:f,ref:a,readOnly:N,id:j||F,className:i()(u,t,p&&"is-valid",h&&"is-invalid","color"===o&&"".concat(l,"-color"))}))}));F.displayName="FormControl";var k=Object.assign(F,{Feedback:u}),S=/-(.)/g;var R=["className","bsPrefix","as"],L=function(e){return e[0].toUpperCase()+(a=e,a.replace(S,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,s=void 0===t?L(e):t,l=a.Component,o=a.defaultProps,b=n.forwardRef((function(a,t){var s=a.className,o=a.bsPrefix,n=a.as,b=void 0===n?l||"div":n,f=Object(r.a)(a,R),j=Object(v.a)(o,e);return Object(d.jsx)(b,Object(c.a)({ref:t,className:i()(s,j)},f))}));return b.defaultProps=o,b.displayName=s,b}("form-floating"),T=["controlId","as"],V=n.forwardRef((function(e,a){var t=e.controlId,s=e.as,i=void 0===s?"div":s,l=Object(r.a)(e,T),o=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(m.Provider,{value:o,children:Object(d.jsx)(i,Object(c.a)(Object(c.a)({},l),{},{ref:a}))})}));V.displayName="FormGroup";var H=V,A=["bsPrefix","className","as"],D=["xxl","xl","lg","md","sm","xs"],E=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,o=void 0===l?"div":l,n=Object(r.a)(e,A),b=Object(v.a)(t,"col"),f=[],j=[];return D.forEach((function(e){var a,t,c,r=n[e];if(delete n[e],"object"===typeof r&&null!=r){var s=r.span;a=void 0===s||s,t=r.offset,c=r.order}else a=r;var i="xs"!==e?"-".concat(e):"";a&&f.push(!0===a?"".concat(b).concat(i):"".concat(b).concat(i,"-").concat(a)),null!=c&&j.push("order".concat(i,"-").concat(c)),null!=t&&j.push("offset".concat(i,"-").concat(t))})),f.length||f.push(b),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i.a.apply(void 0,[s].concat(f,j))}))}));E.displayName="Col";var G=E,J=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],M=n.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,l=e.bsPrefix,o=e.column,b=e.visuallyHidden,f=e.className,j=e.htmlFor,u=Object(r.a)(e,J),O=Object(n.useContext)(m).controlId;l=Object(v.a)(l,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=i()(f,l,b&&"visually-hidden",o&&p);return j=j||O,o?Object(d.jsx)(G,Object(c.a)({ref:a,as:"label",className:x,htmlFor:j},u)):Object(d.jsx)(s,Object(c.a)({ref:a,className:x,htmlFor:j},u))}));M.displayName="FormLabel",M.defaultProps={column:!1,visuallyHidden:!1};var U=M,B=["bsPrefix","className","id"],_=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.id,o=Object(r.a)(e,B),b=Object(n.useContext)(m).controlId;return t=Object(v.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:i()(s,t),id:l||b}))}));_.displayName="FormRange";var q=_,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],Q=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,l=e.htmlSize,o=e.className,b=e.isValid,f=void 0!==b&&b,j=e.isInvalid,u=void 0!==j&&j,O=e.id,p=Object(r.a)(e,K),x=Object(n.useContext)(m).controlId;return t=Object(v.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:l,ref:a,className:i()(o,t,s&&"".concat(t,"-").concat(s),f&&"is-valid",u&&"is-invalid"),id:O||x}))}));Q.displayName="FormSelect";var W=Q,X=["bsPrefix","className","as","muted"],Y=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,o=void 0===l?"small":l,n=e.muted,b=Object(r.a)(e,X);return t=Object(v.a)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:i()(s,t,n&&"text-muted")}))}));Y.displayName="FormText";var Z=Y,$=n.forwardRef((function(e,a){return Object(d.jsx)(I,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));$.displayName="Switch";var ee=Object.assign($,{Input:I.Input,Label:I.Label}),ae=["bsPrefix","className","children","controlId","label"],te=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.children,o=e.controlId,n=e.label,b=Object(r.a)(e,ae);return t=Object(v.a)(t,"form-floating"),Object(d.jsxs)(H,Object(c.a)(Object(c.a)({ref:a,className:i()(s,t),controlId:o},b),{},{children:[l,Object(d.jsx)("label",{htmlFor:o,children:n})]}))}));te.displayName="FloatingLabel";var ce=te,re=["className","validated","as"],se={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},ie=n.forwardRef((function(e,a){var t=e.className,s=e.validated,l=e.as,o=void 0===l?"form":l,n=Object(r.a)(e,re);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(t,s&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=se;a.a=Object.assign(ie,{Group:H,Control:k,Floating:z,Check:I,Switch:ee,Label:U,Text:Z,Range:q,Select:W,FloatingLabel:ce})},107:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var c=t(93),r=t(0),s=t(10),i=t(91),l=t(105),o=t(9),n=t(1),d={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function b(){var e=Object(o.b)(),a=Object(r.useState)(""),t=Object(c.a)(a,2),b=t[0],f=t[1],j=Object(r.useState)(""),u=Object(c.a)(j,2),m=u[0],v=u[1],O=Object(r.useState)(""),p=Object(c.a)(O,2),x=p[0],h=p[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(l.a,{onSubmit:function(a){a.preventDefault(),console.log(m),e(s.a.register({name:b,email:m,password:x})),v(""),f(""),h("")},style:d.form,autoComplete:"off",children:[Object(n.jsxs)(l.a.Label,{style:d.label,children:["\u0418\u043c\u044f",Object(n.jsx)(l.a.Control,{type:"text",name:"name",value:b,onChange:function(e){f(e.target.value)}})]}),Object(n.jsxs)(l.a.Label,{style:d.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(n.jsx)(l.a.Control,{type:"email",name:"email",value:m,onChange:function(e){v(e.target.value)}})]}),Object(n.jsxs)(l.a.Label,{style:d.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(n.jsx)(l.a.Control,{type:"password",name:"password",value:x,onChange:function(e){h(e.target.value)}})]}),Object(n.jsx)(i.a,{variant:"outline-success",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})]})}},92:function(e,a,t){"use strict";var c=function(){};e.exports=c},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(35);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],c=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(c=(i=l.next()).done)&&(t.push(i.value),!a||t.length!==a);c=!0);}catch(o){r=!0,s=o}finally{try{c||null==l.return||l.return()}finally{if(r)throw s}}return t}}(e,a)||Object(c.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5.cebac072.chunk.js.map