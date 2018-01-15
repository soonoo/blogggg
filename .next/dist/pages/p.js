'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/soonoo/dev/blog/pages/p.js?entry',
    _this = undefined;

var P = function P(props) {
  return _react2.default.createElement(_components.Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_components.Post, { contents: props.contents, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

P.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var asPath = _ref.asPath;
    var response, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:5000/api/post' + asPath);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt('return', {
              contents: data.length ? data[0].contents : 'post do not exists'
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = P;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3AuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiUG9zdCIsIlAiLCJwcm9wcyIsImNvbnRlbnRzIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXNQYXRoIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVE7Ozs7Ozs7QUFFakIsSUFBTSxJQUFJLFNBQUosQUFBSSxFQUFBLEFBQUMsT0FBRDt5QkFDUixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsa0NBQUssVUFBVSxNQUFoQixBQUFzQjtnQkFBdEI7a0JBRk0sQUFDUixBQUNFO0FBQUE7O0FBRko7O0FBT0EsRUFBQSxBQUFFLDhCQUFGO3VGQUFvQix1QkFBQTtRQUFBLEFBQVMsY0FBVCxBQUFTO2tCQUFUO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ0sseUNBREwsQUFDSyxBQUE0Qzs7ZUFBN0Q7QUFEWSxnQ0FBQTs0QkFBQTttQkFFQyxTQUZELEFBRUMsQUFBUzs7ZUFBdEI7QUFGWSw0QkFBQTs7d0JBS04sS0FBQSxBQUFLLFNBQVMsS0FBQSxBQUFLLEdBQW5CLEFBQXNCLFdBTGhCLEFBSVgsQUFDc0M7QUFEdEMsQUFDTDs7ZUFMZ0I7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFwQjs7dUJBQUE7NkJBQUE7QUFBQTtBQVNBOztrQkFBQSxBQUFlIiwiZmlsZSI6InAuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc29vbm9vL2Rldi9ibG9nIn0=