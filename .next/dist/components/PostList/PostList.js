'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/soonoo/dev/blog/components/PostList/PostList.js';


var PostList = function PostList(_ref) {
  var data = _ref.data;
  return _react2.default.createElement('div', { className: 'post_list_container', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('ul', { className: 'post_list', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, data.map(function (item) {
    return _react2.default.createElement(_.PostListItem, { key: item.id, postId: item.id, title: item.title, date: item.post_date, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  })));
};

exports.default = PostList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QvUG9zdExpc3QuanMiXSwibmFtZXMiOlsiUG9zdExpc3RJdGVtIiwiZmV0Y2giLCJQb3N0TGlzdCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsInBvc3RfZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7eUJBQ2xCLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDSTtBQURKO0dBQUEsa0JBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUNHO0FBREg7VUFDRyxBQUFLLElBQUksZ0JBQUE7MkJBQ1IsQUFBQyxnQ0FBYSxLQUFLLEtBQW5CLEFBQXdCLElBQUksUUFBUSxLQUFwQyxBQUF5QyxJQUFJLE9BQU8sS0FBcEQsQUFBeUQsT0FBTyxNQUFNLEtBQXRFLEFBQTJFO2tCQUEzRTtvQkFEUSxBQUNSO0FBQUE7S0FBQTtBQUpPLEFBQ2YsQUFDSSxBQUNHO0FBSFQsQUFVQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3N0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zb29ub28vZGV2L2Jsb2cifQ==