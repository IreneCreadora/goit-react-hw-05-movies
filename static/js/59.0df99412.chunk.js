"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[59],{8093:function(n,e,t){t.d(e,{Df:function(){return s},Jh:function(){return p},Pg:function(){return l},XT:function(){return u},yO:function(){return h}});var r=t(5861),o=t(4687),i=t.n(o),a=t(2388);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="74c5e15336c71e6f10e46fc816460a0f",s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:c}},n.prev=1,n.next=4,a.Z.get("/trending/movie/day?",e);case 4:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 9:n.prev=9,n.t0=n.catch(1),console.log("Something wrong with API",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:c,query:e,page:t}},n.prev=1,n.next=4,a.Z.get("/search/movie?",r);case 4:return o=n.sent,s=o.data,n.abrupt("return",s.results);case 9:n.prev=9,n.t0=n.catch(1),console.error("Something wrong with API",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:c}},n.prev=1,n.next=4,a.Z.get("/movie/".concat(e,"?"),t);case 4:return r=n.sent,o=r.data,n.abrupt("return",o);case 9:n.prev=9,n.t0=n.catch(1),console.error("Something wrong with API",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:c,language:"en-US"}},n.prev=1,n.next=4,a.Z.get("/movie/".concat(e,"/credits?"),t);case 4:return r=n.sent,o=r.data,n.abrupt("return",o.cast);case 9:n.prev=9,n.t0=n.catch(1),console.error("Something wrong with API",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:c,language:"en-US",page:1}},n.prev=1,n.next=4,a.Z.get("/movie/".concat(e,"/reviews?"),t);case 4:return r=n.sent,o=r.data,n.abrupt("return",o.results);case 9:n.prev=9,n.t0=n.catch(1),console.error("Something wrong with API",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},7531:function(n,e,t){t.d(e,{Z:function(){return l}});var r,o=t(8820),i=t(168),a=t(82),c=t(1087),s=(0,a.ZP)(c.rU)(r||(r=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 12px;\n  border-radius: ",";\n  background-color: ",";\n  text-decoration: none;\n  color: ",";\n  font-weight: ",";\n\n  :hover {\n    color: ",";\n    background-color: ",";\n  }\n  &.active {\n    color: ",";\n    background-color: ",";\n\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.large}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.affect}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.affect})),u=t(184),l=function(n){var e=n.to,t=n.children;return(0,u.jsxs)(s,{to:e,children:[(0,u.jsx)(o.xN8,{size:"18"}),t]})}},5489:function(n,e){var t={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};e.Z=t},2059:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,i,a,c,s,u,l=t(9439),h=t(2791),p=t(7689),d=t(8402),f=t(7596),m=(t(5462),t(5489)),g=t(8093),x=t(7531),v=t(168),w=t(82),b=t(1087),j=w.ZP.div(r||(r=(0,v.Z)(["\n  border-bottom: 1px solid ",";\n  @media (min-width: 768px) {\n    display: flex;\n  }\n"])),(function(n){return n.theme.colors.muted})),Z=w.ZP.img(o||(o=(0,v.Z)(["\n  margin-top: 14px;\n  margin-bottom: 14px;\n  height: auto;\n  border-radius: ",";\n\n  @media (min-width: 768px) {\n    max-width: 250px;\n  }\n  @media (min-width: 1170px) {\n    max-width: 350px;\n  }\n"])),(function(n){return n.theme.radii.normal})),k=w.ZP.div(i||(i=(0,v.Z)(["\n  margin: 14px auto 14px 20px;\n  width: 300px;\n  @media (min-width: 768px) {\n    width: 500px;\n  }\n"]))),y=w.ZP.li(a||(a=(0,v.Z)(["\n  margin-top: 14px;\n"]))),P=w.ZP.li(c||(c=(0,v.Z)(["\n  font-size: ",";\n  &:first-child {\n    margin-top: 8px;\n  }\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  &::before {\n    content: '\u25b6';\n    margin-right: 10px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.accent})),_=w.ZP.nav(s||(s=(0,v.Z)(["\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),S=(0,w.ZP)(b.OL)(u||(u=(0,v.Z)(["\n  padding: 6px 12px;\n  border-radius: ",";\n  text-decoration: none;\n  color: ",";\n  font-weight: ",";\n  margin-left: 10px;\n  :hover {\n    color: ",";\n    background-color: ",";\n  }\n  &.active {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.large}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.affect}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),A=t(184),O=function(){var n,e,t=(0,h.useState)(null),r=(0,l.Z)(t,2),o=r[0],i=r[1],a=(0,h.useState)(null),c=(0,l.Z)(a,2),s=c[0],u=c[1],v=(0,p.UO)().id,w=null!==(n=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,h.useEffect)((function(){(0,g.Pg)(Number(v)).then((function(n){i(n),u(null)})).catch((function(n){u(n.message),i(null)}))}),[v]),(0,A.jsxs)("main",{children:[(0,A.jsx)(x.Z,{to:w,children:"Go back"}),o&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(j,{children:[(0,A.jsx)(Z,{src:o.poster_path?"https://image.tmdb.org/t/p/w500".concat(o.poster_path):"https://sdlatlas.com/public/img/thumbnail.jpg",alt:o.title}),(0,A.jsxs)(k,{children:[(0,A.jsxs)("h2",{children:[o.title?o.title:"name not found"," (",new Date(o.release_date).getFullYear(),")"]}),(0,A.jsxs)("ul",{children:[(0,A.jsx)(y,{children:(0,A.jsxs)("p",{children:[(0,A.jsx)("b",{children:"Audience Evaluation: "}),o.vote_average.toFixed(1)]})}),(0,A.jsx)(y,{children:(0,A.jsxs)("p",{children:[(0,A.jsx)("b",{children:"Overview:"})," ",o.overview?o.overview:(0,A.jsx)("span",{children:"N/A"})]})}),(0,A.jsxs)(y,{children:[(0,A.jsx)("b",{children:"Genres:"}),o.genres.length>0?(0,A.jsx)("ul",{children:o.genres.map((function(n){var e=n.id,t=n.name;return(0,A.jsx)(P,{children:(0,A.jsx)("span",{children:t})},e)}))}):(0,A.jsx)("span",{children:"N/A"})]})]})]})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("h2",{children:"Additional information:"}),(0,A.jsxs)(_,{children:[(0,A.jsx)(S,{to:"cast",state:{from:w},children:"Cast"}),(0,A.jsx)(S,{to:"reviews",state:{from:w},children:"Reviews"})]}),(0,A.jsx)(h.Suspense,{fallback:(0,A.jsx)(d.Nx,{width:"200",color:"#4fa94d"}),children:(0,A.jsx)(p.j3,{})})]})]}),s&&f.Am.error("Sorry, something went wrong.\ud83e\udd84 Please try again",m.Z)]})}}}]);
//# sourceMappingURL=59.0df99412.chunk.js.map