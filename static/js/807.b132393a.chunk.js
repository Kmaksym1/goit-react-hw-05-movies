"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[807],{6577:function(n,t,r){r.d(t,{Hx:function(){return f},WK:function(){return i},YK:function(){return o},hd:function(){return s},xc:function(){return p}});var e=r(4165),a=r(5861),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="29b0d2aa85a3c0b16bad1778a50b3bea",o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie",{params:{query:t,api_key:c}});case 2:return r=n.sent,console.log(),n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return r=n.sent,console.log(r.data.results),n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7425:function(n,t,r){r.d(t,{BQ:function(){return w},RQ:function(){return h},W2:function(){return v},a9:function(){return m},dk:function(){return l},jx:function(){return x},s0:function(){return Z}});var e,a,u,c,o,i,s,p=r(168),f=r(9256),d=r(1087),l=f.zo.div(e||(e=(0,p.Z)([""]))),v=f.zo.div(a||(a=(0,p.Z)(["\n  display: flex;\n  max-width: 1400px;\n  margin: 0 auto;\n  gap: 50px;\n"]))),x=f.zo.img(u||(u=(0,p.Z)(["\n  width: 80%;\n  object-fit: cover;\n  margin-bottom: 20px;\n"]))),h=f.zo.p(c||(c=(0,p.Z)(["\n  width: 803px;\n  font-size: 40px;\n  font-weight: 300;\n  margin: 5px 0;\n"]))),Z=f.zo.h3(o||(o=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  font-size: 60px;\n  font-weight: 500;\n  margin: 5px 0;\n"]))),m=f.zo.p(i||(i=(0,p.Z)(["\n  font-size: 40px;\n  font-weight: 300;\n  margin: 5px 0;\n"]))),w=(0,f.zo)(d.OL)(s||(s=(0,p.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover {\n    color: #2fdefd;\n    \n  }\n\n"])))},5807:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e,a=r(4165),u=r(5861),c=r(9439),o=r(2791),i=r(7425),s=r(6577),p=r(168),f=r(9256).zo.div(e||(e=(0,p.Z)(["\nwidth: 1400 px;\n"]))),d=r(184),l=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,u.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.YK)();case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)(f,{children:[(0,d.jsx)("p",{children:"Trending Today"}),(0,d.jsx)("ul",{children:r.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(i.BQ,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=807.b132393a.chunk.js.map