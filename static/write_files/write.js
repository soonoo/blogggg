
          window.__NEXT_REGISTER_PAGE('/write', function() {
            var comp = module.exports=webpackJsonp([5],{248:function(e,t,n){e.exports=n(249)},249:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=__webpack_require__(17),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(19),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_getPrototypeOf=__webpack_require__(9),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(3),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(10),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(11),_inherits3=_interopRequireDefault(_inherits2),_style=__webpack_require__(20),_style2=_interopRequireDefault(_style),_components=__webpack_require__(15),_head=__webpack_require__(72),_head2=_interopRequireDefault(_head),_dynamic=__webpack_require__(73),_dynamic2=_interopRequireDefault(_dynamic),_index=__webpack_require__(29),_index2=_interopRequireDefault(_index),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_isomorphicUnfetch=__webpack_require__(49),_isomorphicUnfetch2=_interopRequireDefault(_isomorphicUnfetch),Write=function(_React$Component){function Write(props){var _this2=this;(0,_classCallCheck3.default)(this,Write);var _this=(0,_possibleConstructorReturn3.default)(this,(Write.__proto__||(0,_getPrototypeOf2.default)(Write)).call(this));return _this.handleSubmit=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(){var t,n,r,a,i,o;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".ql-editor").innerHTML,n=document.querySelector(".input-title").value,r=document.querySelector(".input-pw").value,a=new URLSearchParams,a.append("contents",t),a.append("title",n),a.append("pw",r),a.append("id",_this.props.id),e.next=10,(0,_isomorphicUnfetch2.default)("http://soonoo.me/api/post",{method:_this.props.id?"PUT":"POST",body:a});case 10:return i=e.sent,e.next=13,i.json();case 13:o=e.sent,_index2.default.push("/p?id="+o.id,"/"+o.id);case 15:case"end":return e.stop()}},e,_this2)})),_this.quillRef=null,_this.handleSubmit=_this.handleSubmit.bind(_this),_this.state={quill:null},_this.dynamicComponent=(0,_dynamic2.default)("undefined"==typeof window?new(__webpack_require__(73).SameLoopPromise)(function(resolve,reject){eval("require.ensure = function (deps, callback) { callback(require) }"),__webpack_require__.e(0).then(function(e){var t=__webpack_require__(77);t.__webpackChunkName="react_quill_c8387e7c26bd5b475e4cc73c997ba6a2.js",resolve(t)}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)}):new(__webpack_require__(73).SameLoopPromise)(function(e,t){try{var n=__webpack_require__(77);return e(n)}catch(e){}__webpack_require__.e(0).then(function(n){try{var r=__webpack_require__(77);e(r)}catch(e){t(e)}}.bind(null,__webpack_require__)).catch(__webpack_require__.oe)})),_this}return(0,_inherits3.default)(Write,_React$Component),(0,_createClass3.default)(Write,[{key:"componentDidMount",value:function(){var e=this,t={syntax:!0,toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},n=["header","bold","italic","underline","strike","blockquote","code-block","list","bullet","indent","link","image"];this.setState({quill:_react2.default.createElement(this.dynamicComponent,{modules:t,formats:n,ref:function(t){e.quillRef=t}},_react2.default.createElement("div",{className:"custom-editing-area",dangerouslySetInnerHTML:{__html:unescape(this.props.contents)}}))}),document.querySelector(".input-title").value=this.props.title}},{key:"render",value:function(){return _react2.default.createElement(_components.Layout,null,_react2.default.createElement(_style2.default,{styleId:"3843878950",css:[".input-title.jsx-3843878950{width:100%;box-sizing:border-box;height:37px;font-size:1.2em;padding-left:7px;padding-right:7px;margin-bottom:2px;}",".input-pw.jsx-3843878950,.input-submit.jsx-3843878950{height:25px;box-sizing:border-box;margin-top:2px;margin-right:10px;}"]}),_react2.default.createElement("input",{className:"jsx-3843878950 input-title"}),this.state.quill,_react2.default.createElement("div",{className:"jsx-3843878950"},_react2.default.createElement("input",{type:"button",onClick:this.handleSubmit,value:"제출",className:"jsx-3843878950 input-submit"}),_react2.default.createElement("input",{className:"jsx-3843878950 input-pw"})))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(t){var n,r,a,i=t.asPath;return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n="/write"===i?"":i.slice(i.indexOf("=")+1)){e.next=3;break}return e.abrupt("return",{title:"",contents:"",id:""});case 3:return e.next=5,(0,_isomorphicUnfetch2.default)("http://soonoo.me/api/post/"+n);case 5:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a[0]);case 11:case"end":return e.stop()}},e,this)}));return e}()}]),Write}(_react2.default.Component);exports.default=Write},73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=void 0,r=void 0;if(e instanceof E)n=e,r=t||{};else{if(!e.modules||!e.render){throw new Error("`next/dynamic` options should contain `modules` and `render` fields")}if(t){throw new Error("Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields")}r=e}return function(e){function t(){var e;(0,f.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=(0,k.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(a)));return o.LoadingComponent=r.loading?r.loading:function(){return C.default.createElement("p",null,"loading...")},o.ssr=!1!==r.ssr||r.ssr,o.state={AsyncComponent:null,asyncElement:null},o.isServer="undefined"==typeof window,o.loadBundleAgain=null,o.loadingBundle=!1,o.ssr&&o.load(),o}return(0,v.default)(t,e),(0,m.default)(t,[{key:"load",value:function(){n?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function(){var e=this;n.then(function(n){var r=n.default||n,a=(0,x.getDisplayName)(r);a&&(t.displayName="DynamicComponent for "+a),e.mounted?e.setState({AsyncComponent:r}):(e.isServer&&i(n.__webpackChunkName),e.state.AsyncComponent=r)})}},{key:"loadBundle",value:function(e){var n=this;this.loadBundleAgain=null,this.loadingBundle=!0;var a=r.modules(e),o=(0,c.default)(a),u=o.length,s={},l=function(){if(n.loadBundleAgain)return void n.loadBundle(n.loadBundleAgain);n.loadingBundle=!1,t.displayName="DynamicBundle";var a=r.render(e,s);n.mounted?n.setState({asyncElement:a}):n.state.asyncElement=a},_=function(e){a[e].then(function(t){var r=t.default||t;n.isServer&&i(t.__webpackChunkName),s[e]=r,0==--u&&l()})};o.forEach(_)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function(e){if(!n){if(this.setState({asyncElement:null}),this.loadingBundle)return void(this.loadBundleAgain=e);this.loadBundle(e)}}},{key:"render",value:function(){var e=this.state,t=e.AsyncComponent,n=e.asyncElement,r=this.LoadingComponent;return n||(t?C.default.createElement(t,this.props):C.default.createElement(r,this.props))}}]),t}(C.default.Component)}function i(e){R.add(e)}function o(){var e=(0,s.default)(R);return R.clear(),e}Object.defineProperty(t,"__esModule",{value:!0}),t.SameLoopPromise=void 0;var u=n(116),s=r(u),l=n(107),c=r(l),_=n(9),d=r(_),p=n(2),f=r(p),h=n(3),m=r(h),b=n(10),k=r(b),y=n(11),v=r(y),q=n(37),w=r(q);t.default=a,t.registerChunk=i,t.flushChunks=o;var g=n(0),C=r(g),x=n(24),R=new w.default,E=t.SameLoopPromise=function(){function e(t){(0,f.default)(this,e),this.onResultCallbacks=[],this.onErrorCallbacks=[],this.cb=t}return(0,m.default)(e,[{key:"setResult",value:function(e){this.gotResult=!0,this.result=e,this.onResultCallbacks.forEach(function(t){return t(e)}),this.onResultCallbacks=[]}},{key:"setError",value:function(e){this.gotError=!0,this.error=e,this.onErrorCallbacks.forEach(function(t){return t(e)}),this.onErrorCallbacks=[]}},{key:"then",value:function(t,n){var r=this;this.runIfNeeded();var a=new e,i=function(){n?a.setResult(n(r.error)):a.setError(r.error)},o=function(){a.setResult(t(r.result))};return this.gotResult?(o(),a):this.gotError?(i(),a):(this.onResultCallbacks.push(o),this.onErrorCallbacks.push(i),a)}},{key:"catch",value:function(t){var n=this;this.runIfNeeded();var r=new e,a=function(){r.setResult(t(n.error))},i=function(){r.setResult(n.result)};return this.gotResult?(i(),r):this.gotError?(a(),r):(this.onErrorCallbacks.push(a),this.onResultCallbacks.push(i),r)}},{key:"runIfNeeded",value:function(){var e=this;this.cb&&(this.ran||(this.ran=!0,this.cb(function(t){return e.setResult(t)},function(t){return e.setError(t)})))}}]),e}()}},[248]);
            return { page: comp.default }
          })
        