(this["webpackJsonpgoit-react-hw-05-movie"]=this["webpackJsonpgoit-react-hw-05-movie"]||[]).push([[1],{56:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},57:function(e,t,n){"use strict";var r="c1ded0bfb98f51bbb3c132d34092ee93",o="https://api.themoviedb.org/3",c={fetchPopularMovies:function(){return fetch("".concat(o,"/trending/movie/day?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, Something came wrong!"))}))},fetchMovieInfo:function(e){return fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchMovieByName:function(e){return fetch("".concat(o,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchCast:function(e){return fetch("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchReviews:function(e){return fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))}};t.a=c},58:function(e,t,n){e.exports={list:"PopularMoviesList_list__I1GLm"}},73:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(56),c=n(0),i=n(57),a=n(3),u=n(10),s=n(58),f=n.n(s),l=function(e){var t=e.movies,n=Object(a.i)().url+"movies",o=Object(a.g)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{className:f.a.list,children:t.map((function(e){var t=e.title,c=e.id;return Object(r.jsx)("li",{children:Object(r.jsx)(u.b,{to:{pathname:"".concat(n,"/:").concat(c),state:{from:o}},children:t})},c)}))})})},h=n(16),m="idle",j="pending",d="resolved",b="rejected";t.default=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)(null),s=Object(o.a)(u,2),f=s[0],v=s[1],y=Object(c.useState)(m),g=Object(o.a)(y,2),p=g[0],w=g[1];return Object(c.useEffect)((function(){w(j),i.a.fetchPopularMovies().then((function(e){return 0!==e.results.length?(a(e.results),void w(d)):Promise.reject(new Error("Sorry, Something came wrong!"))})).catch((function(e){v(e),w(b)}))}),[]),Object(r.jsxs)("main",{children:[p===j&&Object(r.jsx)(h.a,{}),p===d&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{style:{marginLeft:"20px"},children:"Trending today"}),Object(r.jsx)(l,{movies:n})]}),p===b&&Object(r.jsx)("h1",{children:f.message})]})}}}]);
//# sourceMappingURL=home-view.652c6f28.chunk.js.map