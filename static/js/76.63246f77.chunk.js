"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{713:function(e,r,t){t.d(r,{Ku:function(){return l},Vw:function(){return p},Y5:function(){return f},fI:function(){return m},wr:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(243),s=t(596),i=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"45a3b58db21831f605301278579c97a0"}}),o=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/trending/movie/day",{});case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:return e.prev=8,e.t0=e.catch(0),s.Am.warning("OPPS. Something wrong!"),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/search/movie",{params:{language:"en-US",page:1,include_adult:!1,query:r}});case 3:return t=e.sent,n=t.data,console.log(n.results),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(r),{params:{language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(r,"/reviews"),{params:{language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},76:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(439),a=t(713),u=t(791),c=t(689),s="Cast_container__iz+ye",i="Cast_item__a0CDL",o=t(2),p=t(184);var f=function(){var e=(0,u.useState)(null),r=(0,n.Z)(e,2),t=r[0],f=r[1],l=(0,c.UO)().movieId;if((0,u.useEffect)((function(){l&&(0,a.Ku)(l).then((function(e){return f(e)}))}),[l]),console.log(t),console.log(o),t)return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:s,children:t&&t.map((function(e){return(0,p.jsxs)("li",{className:i,children:[e.profile_path&&(0,p.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):o,alt:e.name}),(0,p.jsx)("p",{children:e.name}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{children:"Character:"})," ",e.character]})]},e.id)}))})})}},2:function(e,r,t){e.exports=t.p+"static/media/default.dc3f3be43bf915f0d62d.png"}}]);
//# sourceMappingURL=76.63246f77.chunk.js.map