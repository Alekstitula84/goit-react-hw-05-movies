"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[132],{7281:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,i=e(5861),s=e(9439),o=e(7757),u=e.n(o),p=e(2791),f=e(7689),l=e(171),h=e(6795),d=e(516),v=e.p+"static/media/Unknown_person.02ed966c3fda1f970747.jpeg",x=e(168),m=e(6444),g=m.ZP.ul(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),w=m.ZP.li(a||(a=(0,x.Z)(["\n  width: 200px;\n  text-align: center;\n  margin: 0 auto;\n  img {\n    height: 280px;\n    width: 200px;\n  }\n"]))),y=m.ZP.p(c||(c=(0,x.Z)(["\n  /* display: flex;\n  gap: 5px;\n  justify-content: baseline;\n  align-items: baseline; */\n  font-weight: 700;\n  font-size: 16px;\n  span {\n    font-weight: 400;\n  }\n"]))),Z=e(184),b=function(){var n=(0,p.useState)(!1),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)([]),c=(0,s.Z)(a,2),o=c[0],x=c[1],m=(0,f.UO)().movieId;return(0,p.useEffect)((function(){if(m){var n=function(){var n=(0,i.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,(0,l.M1)(m);case 4:if(t=n.sent){n.next=7;break}return n.abrupt("return",h.Am.error("No Cast Information"));case 7:x(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),h.Am.error("Sorry, something went wrong...Please, try again");case 13:return n.prev=13,r(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[m]),(0,Z.jsxs)(Z.Fragment,{children:[e&&(0,Z.jsx)(d.Z,{}),(0,Z.jsx)(g,{children:0!==o.length?o.map((function(n){var t=n.character,e=n.id,r=n.original_name,a=n.profile_path;return(0,Z.jsxs)(w,{children:[(0,Z.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):v,alt:r,height:"200"}),(0,Z.jsxs)(y,{children:["Name: ",(0,Z.jsx)("span",{children:r})]}),(0,Z.jsxs)(y,{children:["Character: ",(0,Z.jsx)("span",{children:t})]})]},e)})):(0,Z.jsx)("p",{children:"Sorry, We don't have any cast information for this movie."})})]})}},516:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(8402),c=e(168),i=e(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),s=e(184),o=function(){return(0,s.jsx)(i,{children:(0,s.jsx)(a.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]})})}},171:function(n,t,e){e.d(t,{M1:function(){return l},TP:function(){return f},_L:function(){return u},gH:function(){return p},tx:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),s="99ce8c1f4134cdb2b8e8d4741e691c56",o="https://api.themoviedb.org/3",u=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/trending/movie/day?api_key=").concat(s),n.next=3,i.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,console.log(r.data),n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=132.a9f51288.chunk.js.map