"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{713:function(e,t,r){r.d(t,{Ku:function(){return f},Vw:function(){return p},Y5:function(){return l},fI:function(){return v},wr:function(){return o}});var n=r(861),a=r(757),u=r.n(a),s=r(243),c=r(596),i=s.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"45a3b58db21831f605301278579c97a0"}}),o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/trending/movie/day",{});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:return e.prev=8,e.t0=e.catch(0),c.Am.warning("OPPS. Something wrong!"),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/search/movie",{params:{language:"en-US",page:1,include_adult:!1,query:t}});case 3:return r=e.sent,n=r.data,console.log(n.results),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t),{params:{language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t,"/credits"),{params:{language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t,"/reviews"),{params:{language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},510:function(e,t,r){r.d(t,{Z:function(){return l}});var n="MovieList_list_movies__qpjwj",a="MovieList_list_movies_card__zXxCg",u="MovieList_title__QyMtJ",s=r(791),c=r(689),i=r(87),o=r(2),p=r(184);var l=function(e){var t=e.movies,r=(0,c.TH)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:n,children:t.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)("div",{className:a,children:(0,p.jsxs)(i.rU,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,p.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):o,alt:e.title,loading:String(s.lazy)}),(0,p.jsx)("p",{className:u,children:e.title})]})})},e.id)}))})})}},415:function(e,t,r){r.r(t);var n=r(439),a=r(791),u=r(713),s=r(510),c=r(184);t.default=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],i=t[1];if((0,a.useEffect)((function(){(0,u.wr)().then((function(e){return i(e)}))}),[]),r)return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("header",{children:(0,c.jsx)("h1",{children:"TRENDING FILMS"})}),(0,c.jsx)("main",{children:r&&(0,c.jsx)(s.Z,{movies:r})})]})}},2:function(e,t,r){e.exports=r.p+"static/media/default.dc3f3be43bf915f0d62d.png"}}]);
//# sourceMappingURL=415.8aa222a3.chunk.js.map