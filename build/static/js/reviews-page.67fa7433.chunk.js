(this["webpackJsonpgoit-react-hw-04-movie"]=this["webpackJsonpgoit-react-hw-04-movie"]||[]).push([[7],{115:function(e,t,r){"use strict";r.r(t);var n,s,o=r(1),i=r(62),a=r(0),c=r.n(a);r(2);var l=(s=n=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,r));return n.shouldTruncateString=function(e){return e.length>parseInt(n.props.length)},n.truncatedString=function(e){return e.slice(0,n.props.length).split(" ").slice(0,-1).join(" ")},n.toggleShowMore=function(e){e&&e.preventDefault&&e.preventDefault(),n.setState((function(e){return{showMore:!e.showMore}}))},n.state={showMore:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.showMore,t=this.props,r=t.text,n=t.enabled,s=t.className,o=t.style,i=t.ellipsis,a=t.showMoreLabel,l=t.showLessLabel,u=this.props.tag;return n&&this.shouldTruncateString(r)?c.a.createElement(c.a.Fragment,null,!e&&""+this.truncatedString(r)+i,e&&r,c.a.createElement(u,{className:s,onClick:this.toggleShowMore,style:o},e?l:a)):c.a.createElement(c.a.Fragment,null,r)},t}(a.Component),n.defaultProps={enabled:!0,length:170,className:"",tag:"span",style:{cursor:"pointer",color:"#007bff"},ellipsis:"...",showMoreLabel:" Show more",showLessLabel:" Show less"},s);l.propTypes={};var u=l,h=r(91),p=r.n(h),f=function(e){var t=e.author,r=e.review;return Object(o.jsxs)("div",{className:p.a.wrapper,children:[Object(o.jsx)("h2",{className:p.a.title,children:t}),Object(o.jsx)("p",{children:Object(o.jsx)(u,{text:r,length:700,showMoreLabel:" Show more >>",showLessLabel:" Show less <<",style:{cursor:"pointer",color:"#ff6b08",fontWeight:"bold"}})})]})},b=r(92),w=r.n(b),j=function(e){var t=e.reviews;return Object(o.jsx)("ul",{className:w.a.list,children:t.map((function(e){var t=e.id,r=e.author,n=e.content;return Object(o.jsx)("li",{className:w.a.item,children:Object(o.jsx)(f,{author:r,review:n})},t)}))})},v=r(18),d=r(61),m=r(19),g=(r(65),"idle"),O="pending",y="resolved",_="rejected";t.default=function(e){var t=e.id,r=Object(a.useState)([]),n=Object(i.a)(r,2),s=n[0],c=n[1],l=Object(a.useState)(null),u=Object(i.a)(l,2),h=u[0],p=u[1],f=Object(a.useState)(g),b=Object(i.a)(f,2),w=b[0],x=b[1];return Object(a.useEffect)((function(){x(O),d.a.fetchReviews(t).then((function(e){var t=e.results;if(0===t.length)return m.b.error("We don't have any reviews for this movie."),void x(g);c(t),x(y)})).catch((function(e){p(e),x(_)}))}),[t]),Object(o.jsxs)(o.Fragment,{children:[w===O&&Object(o.jsx)(v.a,{}),w===y&&s.length>0&&Object(o.jsx)(j,{reviews:s}),w===_&&Object(o.jsx)("h1",{children:h.message})]})}},65:function(e,t,r){},91:function(e,t,r){e.exports={wrapper:"ReviewItem_wrapper__-KdNE",title:"ReviewItem_title__3hVME"}},92:function(e,t,r){e.exports={list:"ReviwesList_list__34_Rj",item:"ReviwesList_item__1qQCk"}}}]);
//# sourceMappingURL=reviews-page.67fa7433.chunk.js.map