"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[622],{7623:function(n,r,t){t.d(r,{Hx:function(){return f},Y5:function(){return s},o1:function(){return p},uV:function(){return d},wr:function(){return u}});var e=t(5861),a=t(7757),o=t.n(a),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={params:{api_key:"29c392bc2e116e7e67a692babd8dc83d",language:"en-US"}},u=function(){var n=(0,e.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",i);case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r),i);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(r),i);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/credits?"),i);case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/reviews?"),i);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2093:function(n,r,t){t.d(r,{Z:function(){return w}});var e,a,o,c,i=t(7689),u=t(168),s=t(1087),p=t(7924),d=t(2007),f=t.n(d),l=t(2202),h=t(5353),v=p.ZP.ul(e||(e=(0,u.Z)(["\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),x=p.ZP.li(a||(a=(0,u.Z)(["\n  padding: 5px 12px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n"]))),m=(0,p.ZP)(s.rU)(o||(o=(0,u.Z)(["\n  color: #000;\n  text-decoration: none;\n  margin: 1px;\n\n  &:hover,\n  &:focus {\n    color: #064e8a;\n  }\n\n  @media screen and (min-width: 768px) {\n    &:hover::after,\n    &:focus::after {\n      content: '';\n      background-image: ",";\n\n      background-size: cover;\n      width: 160px;\n      height: 240px;\n      display: block;\n      border-radius: 4px;\n      border: 1px solid rgba(43, 134, 197);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n      position: absolute;\n      top: -140px;\n      left: 400px;\n      z-index: 1;\n    }\n  }\n"])),(function(n){return n.cover?"url('https://image.tmdb.org/t/p/w500/".concat(n.cover,"')"):"url(".concat(h,")")})),g=(0,p.ZP)(l.rHK)(c||(c=(0,u.Z)(["\n  width: 20px;\n  height: 20px;\n  position: relative;\n  right: 6px;\n  top: 5px;\n  z-index: 1;\n  opacity: 0.7;\n"])));m.propTypes={cover:f().string,placeholder:f().string};var b=t(184),w=function(n){var r=n.films,t=(0,i.TH)();return(0,b.jsx)(v,{children:r.map((function(n){return(0,b.jsx)(x,{children:(0,b.jsxs)(m,{to:"/movies/".concat(n.id),state:{from:t},cover:n.poster_path,children:[(0,b.jsx)(g,{})," ",n.title]})},n.id)}))})}},5415:function(n,r,t){t.r(r);var e=t(5861),a=t(9439),o=t(7757),c=t.n(o),i=t(2791),u=t(4436),s=(t(5862),t(2093)),p=t(7623),d=t(184);r.default=function(){var n=(0,i.useState)([]),r=(0,a.Z)(n,2),t=r[0],o=r[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.wr)();case 3:r=n.sent,o(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Trending Movies"}),(0,d.jsx)(u.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:0===t.length?(0,d.jsx)(u.Z,{count:15,style:{height:30,width:300,marginTop:15}}):(0,d.jsx)(s.Z,{films:t})})]})}},5353:function(n,r,t){n.exports=t.p+"static/media/placeholder.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=622.5cb2bfc7.chunk.js.map