
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([7],{244:function(e,t,n){e.exports=n(245)},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),u=r(o),a=n(19),s=r(a),c=n(15),f=n(0),i=r(f),l=function(e){var t=e.json;return i.default.createElement(c.Layout,{docTitle:"뭐라도 해야겠다 싶은 블로그"},i.default.createElement(c.PostList,{data:t}))};l.getInitialProps=(0,s.default)(u.default.mark(function e(){var t,n,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://soonoo.me",e.next=3,fetch(t+"/api/post/list");case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",{json:r});case 8:case"end":return e.stop()}},e,void 0)})),t.default=l}},[244]);
            return { page: comp.default }
          })
        