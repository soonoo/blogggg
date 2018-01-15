'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/soonoo/dev/blog/components/PostList/PostList.js';


var PostList = function PostList(_ref) {
  var data = _ref.data;
  return _react2.default.createElement('div', {
    className: 'jsx-1748960968' + ' ' + 'post_list_container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '1748960968',
    css: 'ul.jsx-1748960968{list-style:none;padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBRzJCLGdCQUNFLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RMaXN0L1Bvc3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Nvb25vby9kZXYvYmxvZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RMaXN0SXRlbSB9IGZyb20gJ0NvbXBvbmVudHMnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmNvbnN0IFBvc3RMaXN0ID0gKHsgZGF0YSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdwb3N0X2xpc3RfY29udGFpbmVyJz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdwb3N0X2xpc3QnPlxuICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPFBvc3RMaXN0SXRlbSBrZXk9e2l0ZW0uaWR9IHBvc3RJZD17aXRlbS5pZH0gdGl0bGU9e2l0ZW0udGl0bGV9IGRhdGU9e2l0ZW0ucG9zdF9kYXRlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDtcbiJdfQ== */\n/*@ sourceURL=components/PostList/PostList.js */'
  }), _react2.default.createElement('ul', {
    className: 'jsx-1748960968' + ' ' + 'post_list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, data.map(function (item) {
    return _react2.default.createElement(_.PostListItem, { key: item.id, postId: item.id, title: item.title, date: item.post_date, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    });
  })));
};

exports.default = PostList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QvUG9zdExpc3QuanMiXSwibmFtZXMiOlsiUG9zdExpc3RJdGVtIiwiZmV0Y2giLCJQb3N0TGlzdCIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsInBvc3RfZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO3lCQUNsQixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBO0FBQUE7QUFBQSxHQUFBO2FBQUE7U0FBQSxBQU9JO0FBUEosc0JBT0ksY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQSxBQUNHO0FBREg7QUFBQSxVQUNHLEFBQUssSUFBSSxnQkFBQTsyQkFDUixBQUFDLGdDQUFhLEtBQUssS0FBbkIsQUFBd0IsSUFBSSxRQUFRLEtBQXBDLEFBQXlDLElBQUksT0FBTyxLQUFwRCxBQUF5RCxPQUFPLE1BQU0sS0FBdEUsQUFBMkU7a0JBQTNFO29CQURRLEFBQ1I7QUFBQTtLQUFBO0FBVk8sQUFDZixBQU9JLEFBQ0c7QUFUVCxBQWdCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3N0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zb29ub28vZGV2L2Jsb2cifQ==