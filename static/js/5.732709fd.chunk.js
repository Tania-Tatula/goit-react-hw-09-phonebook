(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[5],{105:function(e,a,t){"use strict";var c=t(5),s=t(19),i=t(27),l=t.n(i),r=t(21),o=t.n(r),n=t(0),d=t(1),b=["as","className","type","tooltip"],j={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},f=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,r=e.className,o=e.type,n=void 0===o?"valid":o,j=e.tooltip,f=void 0!==j&&j,m=Object(s.a)(e,b);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},m),{},{ref:a,className:l()(r,"".concat(n,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=j;var m=f,v=n.createContext({}),u=t(33),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,r=e.className,o=e.type,b=void 0===o?"checkbox":o,j=e.isValid,f=void 0!==j&&j,m=e.isInvalid,p=void 0!==m&&m,h=e.as,x=void 0===h?"input":h,y=Object(s.a)(e,O),N=Object(n.useContext)(v).controlId;return i=Object(u.a)(i,"form-check-input"),Object(d.jsx)(x,Object(c.a)(Object(c.a)({},y),{},{ref:a,type:b,id:t||N,className:l()(r,i,f&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var h=p,x=["bsPrefix","className","htmlFor"],y=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,r=e.htmlFor,o=Object(s.a)(e,x),b=Object(n.useContext)(v).controlId;return t=Object(u.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:r||b,className:l()(i,t)}))}));y.displayName="FormCheckLabel";var N=y,g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],w=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,r=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,j=e.disabled,f=void 0!==j&&j,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,w=e.feedbackTooltip,C=void 0!==w&&w,P=e.feedback,I=e.className,F=e.style,k=e.title,R=void 0===k?"":k,S=e.type,L=void 0===S?"checkbox":S,z=e.label,V=e.children,T=e.as,H=void 0===T?"input":T,D=Object(s.a)(e,g);i=Object(u.a)(i,"form-check"),r=Object(u.a)(r,"form-switch");var G=Object(n.useContext)(v).controlId,J=Object(n.useMemo)((function(){return{controlId:t||G}}),[G,t]),M=null!=z&&!1!==z&&!V,U=Object(d.jsx)(h,Object(c.a)(Object(c.a)({},D),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:p,isInvalid:y,disabled:f,as:H}));return Object(d.jsx)(v.Provider,{value:J,children:Object(d.jsx)("div",{style:F,className:l()(I,z&&i,b&&"".concat(i,"-inline"),"switch"===L&&r),children:V||Object(d.jsxs)(d.Fragment,{children:[U,M&&Object(d.jsx)(N,{title:R,children:z}),(p||y)&&Object(d.jsx)(m,{type:p?"valid":"invalid",tooltip:C,children:P})]})})})}));w.displayName="FormCheck";var C=Object.assign(w,{Input:h,Label:N}),P=t(4),I=(t(92),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=n.forwardRef((function(e,a){var t,i,r=e.bsPrefix,o=e.type,b=e.size,j=e.htmlSize,f=e.id,m=e.className,O=e.isValid,p=void 0!==O&&O,h=e.isInvalid,x=void 0!==h&&h,y=e.plaintext,N=e.readOnly,g=e.as,w=void 0===g?"input":g,C=Object(s.a)(e,I),F=Object(n.useContext)(v).controlId;(r=Object(u.a)(r,"form-control"),y)?t=Object(P.a)({},"".concat(r,"-plaintext"),!0):(i={},Object(P.a)(i,r,!0),Object(P.a)(i,"".concat(r,"-").concat(b),b),t=i);return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},C),{},{type:o,size:j,ref:a,readOnly:N,id:f||F,className:l()(m,t,p&&"is-valid",x&&"is-invalid","color"===o&&"".concat(r,"-color"))}))}));F.displayName="FormControl";var k=Object.assign(F,{Feedback:m}),R=/-(.)/g;var S=["className","bsPrefix","as"],L=function(e){return e[0].toUpperCase()+(a=e,a.replace(R,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,i=void 0===t?L(e):t,r=a.Component,o=a.defaultProps,b=n.forwardRef((function(a,t){var i=a.className,o=a.bsPrefix,n=a.as,b=void 0===n?r||"div":n,j=Object(s.a)(a,S),f=Object(u.a)(o,e);return Object(d.jsx)(b,Object(c.a)({ref:t,className:l()(i,f)},j))}));return b.defaultProps=o,b.displayName=i,b}("form-floating"),V=["controlId","as"],T=n.forwardRef((function(e,a){var t=e.controlId,i=e.as,l=void 0===i?"div":i,r=Object(s.a)(e,V),o=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(v.Provider,{value:o,children:Object(d.jsx)(l,Object(c.a)(Object(c.a)({},r),{},{ref:a}))})}));T.displayName="FormGroup";var H=T,D=["bsPrefix","className","as"],G=["xxl","xl","lg","md","sm","xs"],J=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,r=e.as,o=void 0===r?"div":r,n=Object(s.a)(e,D),b=Object(u.a)(t,"col"),j=[],f=[];return G.forEach((function(e){var a,t,c,s=n[e];if(delete n[e],"object"===typeof s&&null!=s){var i=s.span;a=void 0===i||i,t=s.offset,c=s.order}else a=s;var l="xs"!==e?"-".concat(e):"";a&&j.push(!0===a?"".concat(b).concat(l):"".concat(b).concat(l,"-").concat(a)),null!=c&&f.push("order".concat(l,"-").concat(c)),null!=t&&f.push("offset".concat(l,"-").concat(t))})),j.length||j.push(b),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:l.a.apply(void 0,[i].concat(j,f))}))}));J.displayName="Col";var M=J,U=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],A=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,r=e.bsPrefix,o=e.column,b=e.visuallyHidden,j=e.className,f=e.htmlFor,m=Object(s.a)(e,U),O=Object(n.useContext)(v).controlId;r=Object(u.a)(r,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var h=l()(j,r,b&&"visually-hidden",o&&p);return f=f||O,o?Object(d.jsx)(M,Object(c.a)({ref:a,as:"label",className:h,htmlFor:f},m)):Object(d.jsx)(i,Object(c.a)({ref:a,className:h,htmlFor:f},m))}));A.displayName="FormLabel",A.defaultProps={column:!1,visuallyHidden:!1};var B=A,E=["bsPrefix","className","id"],_=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,r=e.id,o=Object(s.a)(e,E),b=Object(n.useContext)(v).controlId;return t=Object(u.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:l()(i,t),id:r||b}))}));_.displayName="FormRange";var q=_,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],Q=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,r=e.htmlSize,o=e.className,b=e.isValid,j=void 0!==b&&b,f=e.isInvalid,m=void 0!==f&&f,O=e.id,p=Object(s.a)(e,K),h=Object(n.useContext)(v).controlId;return t=Object(u.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:r,ref:a,className:l()(o,t,i&&"".concat(t,"-").concat(i),j&&"is-valid",m&&"is-invalid"),id:O||h}))}));Q.displayName="FormSelect";var W=Q,X=["bsPrefix","className","as","muted"],Y=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,r=e.as,o=void 0===r?"small":r,n=e.muted,b=Object(s.a)(e,X);return t=Object(u.a)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:l()(i,t,n&&"text-muted")}))}));Y.displayName="FormText";var Z=Y,$=n.forwardRef((function(e,a){return Object(d.jsx)(C,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));$.displayName="Switch";var ee=Object.assign($,{Input:C.Input,Label:C.Label}),ae=["bsPrefix","className","children","controlId","label"],te=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,r=e.children,o=e.controlId,n=e.label,b=Object(s.a)(e,ae);return t=Object(u.a)(t,"form-floating"),Object(d.jsxs)(H,Object(c.a)(Object(c.a)({ref:a,className:l()(i,t),controlId:o},b),{},{children:[r,Object(d.jsx)("label",{htmlFor:o,children:n})]}))}));te.displayName="FloatingLabel";var ce=te,se=["className","validated","as"],ie={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},le=n.forwardRef((function(e,a){var t=e.className,i=e.validated,r=e.as,o=void 0===r?"form":r,n=Object(s.a)(e,se);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:l()(t,i&&"was-validated")}))}));le.displayName="Form",le.propTypes=ie;a.a=Object.assign(le,{Group:H,Control:k,Floating:z,Check:C,Switch:ee,Label:B,Text:Z,Range:q,Select:W,FloatingLabel:ce})},107:function(e,a,t){"use strict";t.r(a);var c=t(4),s=t(36),i=t(37),l=t(47),r=t(46),o=t(0),n=t(9),d=t(10),b=t(91),j=t(105),f=t(1),m={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},v=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,i=t.value;e.setState(Object(c.a)({},s,i))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,c=e.password;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"title",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(j.a,{onSubmit:this.handleSubmit,style:m.form,autoComplete:"off",children:[Object(f.jsxs)(j.a.Label,{style:m.label,children:["\u0418\u043c\u044f",Object(f.jsx)(j.a.Control,{type:"text",name:"name",value:a,onChange:this.handleChange})]}),Object(f.jsxs)(j.a.Label,{style:m.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(f.jsx)(j.a.Control,{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(f.jsxs)(j.a.Label,{style:m.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(f.jsx)(j.a.Control,{type:"password",name:"password",value:c,onChange:this.handleChange})]}),Object(f.jsx)(b.a,{variant:"outline-success",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})]})}}]),t}(o.Component),u={onRegister:d.a.register};a.default=Object(n.b)(null,u)(v)},92:function(e,a,t){"use strict";var c=function(){};e.exports=c}}]);
//# sourceMappingURL=5.732709fd.chunk.js.map