(this["webpackJsonpgoit-react-hw-04-movie"]=this["webpackJsonpgoit-react-hw-04-movie"]||[]).push([[8],{70:function(e,t,r){e.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}},71:function(e,t,r){e.exports={trailerList:"Trailer_trailerList__1pFqx",trailerItem:"Trailer_trailerItem__1w24t"}},78:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(57),a=r(0),o=r(16),i=r(9),l=r(70),s=r.n(l);var d=function(e){var t=e.onClose,r=e.children;return Object(a.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]),Object(i.createPortal)(Object(c.jsx)("div",{className:s.a.backdrop,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(c.jsx)("div",{className:s.a.content,children:r})}),document.querySelector("#modal-root"))},u=r(58),j=r(71),b=r.n(j),m="idle",h="pending",f="resolved",p="rejected";t.default=function(e){var t=e.id,r=e.toggleModal,i=e.showModal,l=Object(a.useState)(""),s=Object(n.a)(l,2),j=s[0],w=s[1],O=Object(a.useState)(null),g=Object(n.a)(O,2),v=g[0],x=g[1],_=Object(a.useState)(m),k=Object(n.a)(_,2),y=k[0],S=k[1];return Object(a.useEffect)((function(){S(h),u.a.fetchModalForTrailler(t).then((function(e){return 0!==e.results.length?(w(e.results),void S(f)):Promise.reject(new Error("Sorry, Something came wrong!"))})).catch((function(e){x(e),S(p)}))}),[t]),Object(c.jsxs)(c.Fragment,{children:[y===h&&Object(c.jsx)(o.a,{}),y===f&&Object(c.jsx)(c.Fragment,{children:j&&Object(c.jsx)("ul",{className:b.a.trailerList,children:j.map((function(e){var t=e.id,n=e.key,a=e.name;return n&&Object(c.jsx)("li",{className:b.a.trailerItem,children:i&&Object(c.jsx)(d,{onClose:r,children:Object(c.jsx)("iframe",{title:a,width:"100%",height:"100%",src:"https://www.youtube.com//embed/"+n,frameBorder:"0",allowFullScreen:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})})},t+n)}))})}),y===p&&Object(c.jsx)("h1",{children:v.message})]})}}}]);
//# sourceMappingURL=trailer-page.bc36c9e1.chunk.js.map