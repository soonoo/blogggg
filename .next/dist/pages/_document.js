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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/soonoo/dev/blog/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, '\n            @font-face {\n              font-family: Nanum;\n              src: url(/static/NanumBarunGothicWeb.woff);\n            }\n            body {\n              margin: 0;\n              font-family: Nanum; \n            }\n          ')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiTXlEb2N1bWVudCIsInJlbmRlclBhZ2UiLCJodG1sIiwiaGVhZCIsImVycm9ySHRtbCIsImNodW5rcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFPOzs7Ozs7Ozs7SUFFYyxBOzs7Ozs7Ozs7Ozs2QkFPVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBQ0UsQUFFRSxBQVdGLDBRQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBakJOLEFBQ0UsQUFjRSxBQUVFLEFBSVA7QUFKTztBQUFBOzs7OzBDQXhCK0I7VUFBZCxBQUFjLGtCQUFkLEFBQWM7O3dCQUFBLEFBQ0s7VUFETCxBQUM3QixtQkFENkIsQUFDN0I7VUFENkIsQUFDdkIsbUJBRHVCLEFBQ3ZCO1VBRHVCLEFBQ2pCLHdCQURpQixBQUNqQjtVQURpQixBQUNOLHFCQURNLEFBQ04sQUFDL0I7O1VBQU0sU0FBTixBQUFlLEFBQ2Y7YUFBTyxFQUFFLE1BQUYsTUFBUSxNQUFSLE1BQWMsV0FBZCxXQUF5QixRQUF6QixRQUFpQyxRQUF4QyxBQUFPLEFBQ1I7Ozs7O0FBTHFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zb29ub28vZGV2L2Jsb2cifQ==