'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/soonoo/dev/blog/components/PostListItem/PostListItem.js';


var PostListItem = function PostListItem(_ref) {
  var title = _ref.title,
      date = _ref.date,
      postId = _ref.postId;

  return _react2.default.createElement(_link2.default, { href: { pathname: '/p', query: { id: postId } }, as: '/' + postId, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('li', { className: 'item_list', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'item_title', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title), _react2.default.createElement('div', { className: 'item_date', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, date.slice(0, 10).split('-').join('. '))));
};

exports.default = PostListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3RJdGVtL1Bvc3RMaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpbmsiLCJQb3N0TGlzdEl0ZW0iLCJ0aXRsZSIsImRhdGUiLCJwb3N0SWQiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJzbGljZSIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUE2QjtNQUExQixBQUEwQixhQUExQixBQUEwQjtNQUFuQixBQUFtQixZQUFuQixBQUFtQjtNQUFiLEFBQWEsY0FBYixBQUFhLEFBQ2hEOzt5QkFDRSxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFGLEFBQVksTUFBTSxPQUFPLEVBQUUsSUFBdkMsQUFBWSxBQUF5QixBQUFNLFlBQVksVUFBdkQsQUFBK0Q7Z0JBQS9EO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBNkI7QUFBN0I7S0FERixBQUNFLEFBQ0Esd0JBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUE0QjtBQUE1QjtVQUE0QixBQUFLLE1BQUwsQUFBVyxHQUFYLEFBQWMsSUFBZCxBQUFrQixNQUFsQixBQUF3QixLQUF4QixBQUE2QixLQUovRCxBQUNFLEFBQ0UsQUFFRSxBQUE0QixBQUFrQyxBQUlyRTtBQVRELEFBV0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUG9zdExpc3RJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Nvb25vby9kZXYvYmxvZyJ9