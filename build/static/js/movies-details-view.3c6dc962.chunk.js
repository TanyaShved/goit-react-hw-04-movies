(this["webpackJsonpgoit-react-hw-05-movie"]=this["webpackJsonpgoit-react-hw-05-movie"]||[]).push([[3],{56:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(c=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);c=!0);}catch(s){r=!0,i=s}finally{try{c||null==o.return||o.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},57:function(e,t,n){"use strict";var c="c1ded0bfb98f51bbb3c132d34092ee93",r="https://api.themoviedb.org/3",i={fetchPopularMovies:function(){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(c)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, Something came wrong!"))}))},fetchMovieInfo:function(e){return fetch("".concat(r,"/movie/").concat(e,"?api_key=").concat(c,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchMovieByName:function(e){return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchCast:function(e){return fetch("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchReviews:function(e){return fetch("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))}};t.a=i},61:function(e,t,n){e.exports={title:"AdditionalInformation_title__1YYub",list:"AdditionalInformation_list__109w3",item:"AdditionalInformation_item__3vwJ0"}},62:function(e,t,n){e.exports={card:"MovieItem_card__1ewkg",image:"MovieItem_image__2HNJy",image_card:"MovieItem_image_card__1SMoo",wrapper:"MovieItem_wrapper__33Xtv",name:"MovieItem_name__2Fabt",table_style:"MovieItem_table_style__2k9mn",item_text:"MovieItem_item_text__33R9U",title:"MovieItem_title__1yszI",item_about:"MovieItem_item_about__W8lTx",description:"MovieItem_description__1cPBl"}},63:function(e,t,n){e.exports={btn:"GoBackButton_btn__1HZUu"}},70:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(56),i=n(0),a=n(3),o=n(10),s=n(61),l=n.n(s),j=function(){var e=Object(a.i)().url;return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:l.a.title,children:"Additional information"}),Object(c.jsxs)("ul",{className:l.a.list,children:[Object(c.jsx)("li",{className:l.a.item,children:Object(c.jsx)(o.c,{to:"".concat(e,"/cast"),children:"Cast"})}),Object(c.jsx)("li",{className:l.a.item,children:Object(c.jsx)(o.c,{to:"".concat(e,"/reviews"),children:"Reviews"})})]})]})},d=n(62),u=n.n(d),b=function(e){var t=e.movie;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:u.a.card,children:[Object(c.jsx)("div",{className:u.a.image_card,children:t.poster_path&&Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w400"+t.poster_path,alt:"{movie.title}"})}),Object(c.jsxs)("div",{className:u.a.wrapper,children:[Object(c.jsx)("h2",{className:u.a.name,children:t.title}),Object(c.jsx)("table",{className:u.a.table_style,children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:u.a.item_text,children:"Vote / Votes"}),Object(c.jsxs)("td",{children:[Object(c.jsx)("span",{children:t.vote_average}),"/",Object(c.jsx)("span",{children:t.vote_count})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:u.a.item_text,children:"Popularity"}),Object(c.jsx)("td",{children:t.popularity})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:u.a.item_text,children:"Original Title"}),Object(c.jsx)("td",{className:u.a.title,children:t.original_title})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:u.a.item_text,children:"Release date"}),Object(c.jsx)("td",{children:t.release_date})]}),t.genres&&Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:u.a.item_text,children:"Genre"}),Object(c.jsx)("td",{children:t.genres.map((function(e){var t=e.name,n=e.id;return Object(c.jsx)("li",{children:t},n)}))})]})]})}),Object(c.jsx)("p",{className:u.a.item_about,children:"About"}),Object(c.jsx)("p",{className:u.a.description,children:t.overview})," "]})]}),Object(c.jsx)("hr",{}),Object(c.jsx)(j,{}),Object(c.jsx)("hr",{})]})},m=n(57),h=n(16),f=n(63),_=n.n(f),O=function(e){var t=e.history,n=e.path;return Object(c.jsx)("button",{className:_.a.btn,type:"button",onClick:function(){var e;t.push((null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||"/")},children:"Go Back"})},v=Object(i.lazy)((function(){return n.e(0).then(n.bind(null,71))})),x=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,72))})),p="idle",y="pending",g="resolved",w="rejected";t.default=function(){var e=Object(a.h)().movieId,t=Object(a.i)().path,n=Object(i.useState)([]),o=Object(r.a)(n,2),s=o[0],l=o[1],j=Object(i.useState)(null),d=Object(r.a)(j,2),u=d[0],f=d[1],_=Object(i.useState)(p),N=Object(r.a)(_,2),S=N[0],I=N[1],k=Object(a.f)(),M=Object(a.g)(),A=Number(e.replace(/[^0-9.-]+/g,""));return Object(i.useEffect)((function(){I(y),m.a.fetchMovieInfo(A).then(l,I(g)).catch((function(e){f(e),I(w)}))}),[A]),s&&Object(c.jsxs)("div",{children:[S===y&&Object(c.jsx)(h.a,{}),S===g&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{history:k,path:M}),Object(c.jsx)(b,{movie:s}),Object(c.jsxs)(i.Suspense,{fallback:Object(c.jsx)(h.a,{}),children:[Object(c.jsx)(a.a,{path:"".concat(t,"/cast"),children:Object(c.jsx)(v,{id:A})}),Object(c.jsx)(a.a,{path:"".concat(t,"/reviews"),children:Object(c.jsx)(x,{id:A})})]})]}),S===w&&Object(c.jsx)("h1",{children:u.message})]})}}}]);
//# sourceMappingURL=movies-details-view.3c6dc962.chunk.js.map