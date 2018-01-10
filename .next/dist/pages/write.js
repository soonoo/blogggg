'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _components = require('../components');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/soonoo/dev/blog/pages/write.js?entry';


var Write = function (_React$Component) {
  (0, _inherits3.default)(Write, _React$Component);

  function Write(props) {
    (0, _classCallCheck3.default)(this, Write);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Write.__proto__ || (0, _getPrototypeOf2.default)(Write)).call(this));

    _this.handleClick = function () {
      _index2.default.push('/p?id=3', '/3');
      return;
      var contents = document.querySelector('.ql-editor').innerHTML;
      var title = document.querySelector('.input-title').value;

      var params = new URLSearchParams();
      params.append('contents', contents);
      params.append('title', title);

      (0, _isomorphicUnfetch2.default)('http://localhost:5000/api/post', {
        method: 'POST',
        body: params
      }).then(function (res) {
        return console.log(res);
      });
    };

    _this.quillRef = null;
    _this.handleClick = _this.handleClick.bind(_this);
    _this.state = {
      quill: null
    };
    _this.dynamicComponent = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
      eval('require.ensure = function (deps, callback) { callback(require) }');

      require.ensure([], function (require) {
        var m = require('react-quill');

        m.__webpackChunkName = 'react_quill_c8387e7c26bd5b475e4cc73c997ba6a2.js';
        resolve(m);
      }, 'chunks/react_quill_c8387e7c26bd5b475e4cc73c997ba6a2.js');
    }) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
      var weakId = require.resolveWeak('react-quill');

      try {
        var weakModule = __webpack_require__(weakId);

        return resolve(weakModule);
      } catch (err) {}

      require.ensure([], function (require) {
        try {
          var m = require('react-quill');

          resolve(m);
        } catch (error) {
          reject(error);
        }
      }, 'chunks/react_quill_c8387e7c26bd5b475e4cc73c997ba6a2.js');
    }));
    return _this;
  }

  (0, _createClass3.default)(Write, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ quill: _react2.default.createElement(this.dynamicComponent, { ref: function ref(quill) {
            _this2.quillRef = quill;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }) });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'This page has a title \uD83E\uDD14'), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.quilljs.com/1.3.4/quill.snow.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement('input', { className: 'input-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), this.state.quill, _react2.default.createElement('input', { type: 'button', onClick: this.handleClick, value: '\uC81C\uCD9C', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return Write;
}(_react2.default.Component);

exports.default = Write;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dyaXRlLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkhlYWQiLCJkeW5hbWljIiwiUm91dGVyIiwiUmVhY3QiLCJmZXRjaCIsIldyaXRlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsInB1c2giLCJjb250ZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInRpdGxlIiwidmFsdWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJxdWlsbFJlZiIsImJpbmQiLCJzdGF0ZSIsInF1aWxsIiwiZHluYW1pY0NvbXBvbmVudCIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7aUNBQ25COztpQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhIQUFBOztVQUFBLEFBNEJuQixjQUFjLFlBQU0sQUFDbEI7c0JBQUEsQUFBTyxLQUFQLEFBQVksV0FBWixBQUF1QixBQUN2QjtBQUNBO1VBQU0sV0FBVyxTQUFBLEFBQVMsY0FBVCxBQUF1QixjQUF4QyxBQUFzRCxBQUN0RDtVQUFNLFFBQVEsU0FBQSxBQUFTLGNBQVQsQUFBdUIsZ0JBQXJDLEFBQXFELEFBRXJEOztVQUFNLFNBQVMsSUFBZixBQUFlLEFBQUksQUFDbkI7YUFBQSxBQUFPLE9BQVAsQUFBYyxZQUFkLEFBQTBCLEFBQzFCO2FBQUEsQUFBTyxPQUFQLEFBQWMsU0FBZCxBQUF1QixBQUV2Qjs7dUNBQUEsQUFBTTtnQkFBa0MsQUFDOUIsQUFDUjtjQUZGLEFBQXdDLEFBRWhDO0FBRmdDLEFBQ3RDLFNBREYsQUFJRyxLQUFLLGVBQUE7ZUFBTyxRQUFBLEFBQVEsSUFBZixBQUFPLEFBQVk7QUFKM0IsQUFLRDtBQTNDa0IsQUFFakI7O1VBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO1VBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBQ0E7VUFBQSxBQUFLO2FBQUwsQUFBYSxBQUNKLEFBRVQ7QUFIYSxBQUNYO1VBRUYsQUFBSywrSkFBbUI7V0FBQTs7NENBQUE7Z0JBQUE7OytCQUFBO2dCQUFBO1NBQUE7OEZBQUE7MkJBQUE7O1VBQUE7NkNBQUE7O3VCQUFBO3FCQUFBOzs0Q0FBQTtZQUFBO2tCQUFBOztrQkFBQTt3QkFBQTtpQkFBQTtBQUFBO1NBQUE7QUFQUCxBQU9qQixNQUF3QjtXQUN6Qjs7Ozs7d0NBRW1CO21CQUNsQjs7V0FBQSxBQUFLLFdBQVcsMENBQU8sQUFBTSxvQkFBaUIsS0FBSyxhQUFBLEFBQUMsT0FBVSxBQUFFO21CQUFBLEFBQUssV0FBTCxBQUFnQixBQUFRO0FBQWpFO3NCQUFBO3dCQUF2QixBQUFjLEFBQVMsQUFDeEI7QUFEd0I7U0FBQSxDQUFUOzs7OzZCQUdQLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsK0VBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsWUFBVyxNQUF2QyxBQUE0QztvQkFBNUM7c0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTtvREFFSyxXQUFQLEFBQWlCO29CQUFqQjtzQkFMRixBQUtFLEFBQ0M7QUFERDtlQUNDLEFBQUssTUFOUixBQU1jLEFBQ1osZ0RBQU8sTUFBUCxBQUFZLFVBQVMsU0FBUyxLQUE5QixBQUFtQyxhQUFhLE9BQWhELEFBQXNEO29CQUF0RDtzQkFSSixBQUNFLEFBT0UsQUFHTDtBQUhLOzs7Ozs7RUF4QjJCLGdCQUFNLEE7O2tCQUFwQixBIiwiZmlsZSI6IndyaXRlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3Nvb25vby9kZXYvYmxvZyJ9