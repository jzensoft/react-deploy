(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(9),r=n.n(i),s=(n(80),n(11)),a=n(71),l=n.n(a),d=n(6),j=n(4),b=new l.a,u=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),a=r[0],l=r[1],u=Object(c.useState)(),h=Object(s.a)(u,2),O=h[0],m=h[1],f=Object(c.useState)(!1),x=Object(s.a)(f,2),g=x[0],p=x[1],y=Object(c.useState)(!1),v=Object(s.a)(y,2),F=v[0],C=v[1],D=Object(c.useState)(!1),I=Object(s.a)(D,2),S=I[0],w=I[1],N=Object(c.useState)(!1),M=Object(s.a)(N,2),k=M[0],E=M[1],P=Object(c.useState)(!1),B=Object(s.a)(P,2),T=B[0],L=B[1],U=Object(c.useRef)(),z=Object(c.useRef)();document.title=n,Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){m(e),U.current&&(U.current.srcObject=e)})),b.on("open",(function(e){o(e)})),b.on("connection",(function(e){p(!0),e.on("data",(function(e){l(e)}))})),b.on("disconnect",(function(){p(!1)})),b.on("call",(function(e){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(t){e.answer(t),e.on("stream",(function(e){z.current.srcObject=e}))})).catch((function(e){console.error("Failed to get local stream",e)}))}))}),[]);var J,R;O&&(J=Object(j.jsx)("video",{playsInline:!0,ref:U,autoPlay:!0,style:{maxWidth:"100%"}})),z&&(R=Object(j.jsx)("video",{playsInline:!0,ref:z,autoPlay:!0,style:{maxWidth:"100%"}}));var V=function(){L(!T)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d.g,{children:[Object(j.jsxs)(d.h,{className:"mt-2",children:[Object(j.jsxs)(d.f,{md:"6",children:[Object(j.jsxs)(d.a,{style:{marginBottom:"0"},children:["My Video | Peer is ",n]}),J]}),Object(j.jsxs)(d.f,{md:"6",style:{padding:g?"":"0",border:g?"":"1px solid #ccc"},children:[Object(j.jsxs)(d.a,{theme:"secondary",style:{marginBottom:"0"},children:["Friend Video ",a?"| Peer is ".concat(a):""]}),g?R:Object(j.jsx)("h3",{className:"text-center",style:{marginTop:"20%",color:"#ccc"},children:"No video yet"})]})]}),Object(j.jsx)(d.d,{className:"mt-5 mb-2",children:Object(j.jsx)(d.e,{children:g?Object(j.jsxs)(d.h,{children:[Object(j.jsx)(d.f,{md:"3",children:T?Object(j.jsx)(d.b,{theme:"danger",onMouseLeave:V,onClick:function(){b.destroy(),window.location.reload(!1)},style:{cursor:"pointer"},children:Object(j.jsx)("h4",{style:{marginBottom:"0",padding:"10px",color:"#FFF"},children:"DisConnect"})}):Object(j.jsx)(d.b,{theme:"success",onMouseEnter:V,children:Object(j.jsx)("h4",{style:{marginBottom:"0",padding:"10px",color:"#FFF"},children:"Connected Peer ID"})})}),Object(j.jsx)(d.f,{md:"9",children:Object(j.jsx)("h4",{style:{margin:"0",padding:"10px"},children:a})})]}):Object(j.jsxs)(d.h,{children:[Object(j.jsx)(d.h,{children:Object(j.jsxs)(d.f,{children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)(d.b,{className:"mr-3",theme:"info",children:"My ID"}),Object(j.jsx)("label",{style:{cursor:"pointer"},id:"myId",onClick:function(){E(!k),navigator.clipboard.writeText(n)},children:n})]}),Object(j.jsx)(d.i,{open:S,toggle:function(){w(!S)},target:"#myId",children:k?"Copied":"Clicke to Coppy"})]})}),Object(j.jsxs)(d.h,{children:[Object(j.jsx)(d.f,{md:"10",children:Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",{type:"text",className:"form-control",id:"friendID",placeholder:"Enter Friend ID",value:a,onChange:function(e){return function(e){l(e.target.value),e.target.value.length>10?C(!0):C(!1)}(e)}}),Object(j.jsx)("label",{htmlFor:"friendID",children:"Enter Friend ID"})]})}),Object(j.jsx)(d.f,{md:"2",children:F?Object(j.jsx)(d.c,{size:"lg",pill:!0,theme:"success",onClick:function(){var e=b.connect(a);p(!0),e.on("open",(function(){e.send(a)})),b.on("error",(function(e){"peer-unavailable"===e.type&&alert("The id or peer you're trying to connect to does not exist.")})),b.call(a,O).on("stream",(function(e){z.current.srcObject=e}))},children:"Connect"}):Object(j.jsx)(d.c,{size:"lg",pill:!0,theme:"success",disabled:!0,children:"Connect"})})]})]})})})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};n(182),n(183);r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),h()},80:function(e,t,n){},81:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=81}},[[184,1,2]]]);
//# sourceMappingURL=main.75c6061e.chunk.js.map