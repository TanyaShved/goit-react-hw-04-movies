(this["webpackJsonpgoit-react-hw-04-movie"]=this["webpackJsonpgoit-react-hw-04-movie"]||[]).push([[0],{65:function(t,e,a){t.exports={item:"CastItem_item__3_iqn",name:"CastItem_name__3o27Q",image:"CastItem_image__28FCQ"}},66:function(t,e,a){t.exports={list:"CastList_list__3w4-r",item:"CastList_item__3dZL6"}},73:function(t,e,a){"use strict";a.r(e);var c=a(1),s=a(56),n=a(0),i=a.p+"static/media/default.2e01288c.jpg",r=a(65),m=a.n(r),o=function(t){var e=t.name,a=t.foto;return Object(c.jsxs)("div",{className:m.a.item,children:[Object(c.jsx)("img",{className:m.a.image,src:a?"http://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(a):i,alt:e}),Object(c.jsx)("h2",{className:m.a.name,children:e})]})},j=a(66),l=a.n(j),u=function(t){var e=t.casts;return Object(c.jsx)("ul",{className:l.a.list,children:e.map((function(t){var e=t.id,a=t.name,s=t.profile_path;return Object(c.jsx)("li",{className:l.a.item,children:Object(c.jsx)(o,{name:a,foto:s})},e)}))})},b=a(16),h=a(57),d="idle",_="pending",f="resolved",O="rejected";e.default=function(t){var e=t.id,a=Object(n.useState)([]),i=Object(s.a)(a,2),r=i[0],m=i[1],o=Object(n.useState)(null),j=Object(s.a)(o,2),l=j[0],g=j[1],p=Object(n.useState)(d),x=Object(s.a)(p,2),v=x[0],w=x[1];return Object(n.useEffect)((function(){w(_),h.a.fetchCast(e).then((function(t){return 0!==t.cast.length?(m(t.cast),void w(f)):Promise.reject(new Error("Sorry, Something came wrong!"))})).catch((function(t){g(t),w(O)}))}),[e]),Object(c.jsxs)(c.Fragment,{children:[v===_&&Object(c.jsx)(b.a,{}),v===f&&Object(c.jsx)(u,{casts:r}),v===O&&Object(c.jsx)("h1",{children:l.message})]})}}}]);
//# sourceMappingURL=cast-page.00ffc4d3.chunk.js.map