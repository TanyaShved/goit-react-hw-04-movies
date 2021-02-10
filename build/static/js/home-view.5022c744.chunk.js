(this["webpackJsonpgoit-react-hw-04-movie"]=this["webpackJsonpgoit-react-hw-04-movie"]||[]).push([[2],{107:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(73),o=n(62),c=n(0),r=n(3),s=n(61),u=n(68),l=n(18),h=n(70),j=n(112),g="idle",m="pending",f="resolved",b="rejected";t.default=function(){var e,t=Object(c.useState)([]),n=Object(o.a)(t,2),d=n[0],p=n[1],v=Object(c.useState)(null),O=Object(o.a)(v,2),M=O[0],_=O[1],w=Object(c.useState)(g),y=Object(o.a)(w,2),P=y[0],x=y[1],S=Object(c.useState)(0),k=Object(o.a)(S,2),I=k[0],N=k[1],E=Object(h.a)(),L=Object(r.f)(),T=Object(r.g)(),U=null!==(e=new URLSearchParams(T.search).get("page"))&&void 0!==e?e:1;Object(c.useEffect)((function(){x(m),s.a.fetchPopularMovies(U).then((function(e){var t=e.results,n=e.total_pages;return 0!==t.length?(p(t),N(n),void x(f)):Promise.reject(new Error("Sorry, Something came wrong!"))})).catch((function(e){_(e),x(b)}))}),[U]);return Object(i.jsxs)("main",{children:[P===m&&Object(i.jsx)(l.a,{}),P===f&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{style:{textAlign:"center",color:"#ff6b08"},children:"Trending today"}),Object(i.jsx)(u.a,{movies:d}),I>1&&Object(i.jsx)(j.a,{className:E.root,count:I,onChange:function(e,t){L.push(Object(a.a)(Object(a.a)({},T),{},{search:"page=".concat(t)}))},page:Number(U),showFirstButton:!0,showLastButton:!0,size:"large"})]}),P===b&&Object(i.jsx)("h1",{children:M.message})]})}},61:function(e,t,n){"use strict";var i="c1ded0bfb98f51bbb3c132d34092ee93",a="https://api.themoviedb.org/3",o={fetchPopularMovies:function(e){return fetch("".concat(a,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, Something came wrong!"))}))},fetchMovieInfo:function(e){return fetch("".concat(a,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchMovieByName:function(e,t){return fetch("".concat(a,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=").concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchCast:function(e){return fetch("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchReviews:function(e){return fetch("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchModalForTrailler:function(e){return fetch("".concat(a,"/movie/").concat(e,"/videos?api_key=").concat(i,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This trailer was not found!"))}))}};t.a=o},64:function(e,t,n){"use strict";t.a=n.p+"static/media/default.2e01288c.jpg"},68:function(e,t,n){"use strict";var i=n(1),a=n(3),o=n(11),c=n(64),r=n(69),s=n.n(r);t.a=function(e){var t=e.movies,n=Object(a.i)().url,r=n,u=Object(a.g)();return"/"===n&&(r=n+"movies"),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("main",{className:s.a.main,children:Object(i.jsx)("ul",{className:s.a.list,children:t.map((function(e){var t=e.title,n=e.id,a=e.name,l=e.poster_path,h=e.vote_average;return Object(i.jsx)("li",{className:s.a.item,children:Object(i.jsx)(o.b,{to:{pathname:"".concat(r,"/").concat(n),state:{from:u}},children:Object(i.jsxs)("article",{children:[Object(i.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w500/".concat(l):c.a,alt:t,width:"100%",className:s.a.poster}),Object(i.jsx)("div",{className:s.a.info,children:Object(i.jsxs)("h2",{className:s.a.title,children:[t||a,Object(i.jsx)("span",{className:s.a.rating,children:h})]})})]})})},n)}))})})})}},69:function(e,t,n){e.exports={main:"MoviesList_main__107gs",list:"MoviesList_list__1lRBZ",item:"MoviesList_item__1Rt4r",title:"MoviesList_title__2o3hp",poster:"MoviesList_poster__17HKy",rating:"MoviesList_rating__3Fyds"}},70:function(e,t,n){"use strict";var i=n(108),a=Object(i.a)({root:{display:"flex",justifyContent:"center","& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible,  & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{backgroundColor:"#ff6b08",color:"white"},"& .MuiPaginationItem-root":{color:"bleak"},"& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{opacity:"0.7"},"& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible":{opacity:"1"},"& .MuiPagination-ul":{justifyContent:"center"}}});t.a=a}}]);
//# sourceMappingURL=home-view.5022c744.chunk.js.map