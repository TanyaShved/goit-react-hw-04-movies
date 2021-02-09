(this["webpackJsonpgoit-react-hw-04-movie"]=this["webpackJsonpgoit-react-hw-04-movie"]||[]).push([[4],{57:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){c=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},58:function(e,t,r){"use strict";var n="c1ded0bfb98f51bbb3c132d34092ee93",c="https://api.themoviedb.org/3",o={fetchPopularMovies:function(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, Something came wrong!"))}))},fetchMovieInfo:function(e){return fetch("".concat(c,"/movie/").concat(e,"?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchMovieByName:function(e){return fetch("".concat(c,"/search/movie?api_key=").concat(n,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchCast:function(e){return fetch("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchReviews:function(e){return fetch("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This movie was not found!"))}))},fetchModalForTrailler:function(e){return fetch("".concat(c,"/movie/").concat(e,"/videos?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry. This trailer was not found!"))}))}};t.a=o},59:function(e,t,r){"use strict";var n=r(1),c=r(3),o=r(10),a=r(60),i=r.n(a);t.a=function(e){var t=e.movies,r=Object(c.i)().url,a=r,s=Object(c.g)();return"/"===r&&(a=r+"movies"),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("main",{className:i.a.main,children:Object(n.jsx)("ul",{className:i.a.list,children:t.map((function(e){var t=e.title,r=e.id,c=e.name,u=e.poster_path,l=e.vote_average;return Object(n.jsx)("li",{className:i.a.item,children:Object(n.jsx)(o.b,{to:{pathname:"".concat(a,"/").concat(r),state:{from:s}},children:Object(n.jsxs)("article",{children:[Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(u),alt:t,width:"100%",className:i.a.poster}),Object(n.jsx)("div",{className:i.a.info,children:Object(n.jsxs)("h2",{className:i.a.title,children:[t||c,Object(n.jsx)("span",{className:i.a.rating,children:l})]})})]})})},r)}))})})})}},60:function(e,t,r){e.exports={main:"MoviesList_main__107gs",list:"MoviesList_list__1lRBZ",item:"MoviesList_item__1Rt4r",title:"MoviesList_title__2o3hp",poster:"MoviesList_poster__17HKy",rating:"MoviesList_rating__3Fyds"}},61:function(e,t,r){},62:function(e,t,r){e.exports={Searchbar:"Searcbar_Searchbar__srXIb",SearchForm:"Searcbar_SearchForm__P4C8_",SearchForm_button:"Searcbar_SearchForm_button__1CVq2",SearchForm_button_label:"Searcbar_SearchForm_button_label__1B5iQ",SearchForm_input:"Searcbar_SearchForm_input__1YCxI"}},74:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(57),o=r(0),a=r(3),i=r(16);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(18),f=(r(61),r(62)),m=r.n(f),b=function(e){e.onSubmit;var t=Object(o.useState)(""),r=Object(c.a)(t,2),i=r[0],s=r[1],u=Object(a.g)(),f=Object(a.f)();return Object(n.jsx)("header",{className:m.a.Searchbar,children:Object(n.jsxs)("form",{className:m.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),f.push(l(l({},u),{},{search:"query=".concat(e.target.form.movieName.value)})),""!==i.trim()?s(""):h.b.warn("\u0412\u0432\u0438\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!")},className:m.a.SearchForm_button,children:Object(n.jsx)("span",{className:m.a.SearchForm_button_label,children:"Search"})}),Object(n.jsx)("input",{className:m.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:i,name:"movieName",id:"",onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})},j=r(59),p=r(58),v="idle",d="pending",O="resolved",_="rejected";t.default=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),r=t[0],s=t[1],u=Object(o.useState)(null),l=Object(c.a)(u,2),h=l[0],f=l[1],m=Object(o.useState)(v),y=Object(c.a)(m,2),g=y[0],S=y[1],w=Object(a.g)();Object(o.useEffect)((function(){""!==w.search&&x(new URLSearchParams(w.search).get("query"))}),[w.search]);var x=function(e){p.a.fetchMovieByName(e).then((function(e){return 0!==e.results.length?(s(e.results),void S(O)):Promise.reject(new Error("Sorry. This movie was not found!"))})).catch((function(e){f(e),S(_)}))};return Object(n.jsxs)("main",{children:[Object(n.jsx)(b,{}),g===d&&Object(n.jsx)(i.a,{}),g===O&&Object(n.jsx)(n.Fragment,{children:r&&Object(n.jsx)(j.a,{movies:r})}),g===_&&Object(n.jsx)("h1",{children:h.message})]})}}}]);
//# sourceMappingURL=movies-view.596cdafe.chunk.js.map