'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

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

  return _react2.default.createElement('div', {
    className: 'jsx-3680419947',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '3680419947',
    css: 'li.jsx-3680419947{margin-bottom:1.8em;}.item_title.jsx-3680419947{display:inline;font-size:1.8em;}.item_title.jsx-3680419947:hover{text-decoration:underline;cursor:pointer;}.item_date.jsx-3680419947{font-size:1em;color:#777;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3RJdGVtL1Bvc3RMaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IsQUFHaUMsQUFHTCxBQUlXLEFBSVosY0FDSCxDQVJLLEtBSGxCLEtBWUEsQ0FMaUIsS0FIakIsVUFJQSIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RMaXN0SXRlbS9Qb3N0TGlzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc29vbm9vL2Rldi9ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQb3N0TGlzdEl0ZW0gPSAoeyB0aXRsZSwgZGF0ZSwgcG9zdElkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuOGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbV90aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbV90aXRsZTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW1fZGF0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPGxpIGNsYXNzTmFtZT0naXRlbV9saXN0Jz5cbiAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wJywgcXVlcnk6IHsgaWQ6IHBvc3RJZCB9IH19IGFzPXtgLyR7cG9zdElkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtX3RpdGxlJz57dGl0bGV9PC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1fZGF0ZSc+e2RhdGUuc2xpY2UoMCwgMTApLnNwbGl0KCctJykuam9pbignLiAnKX08L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=components/PostListItem/PostListItem.js */'
  }), _react2.default.createElement('li', {
    className: 'jsx-3680419947' + ' ' + 'item_list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_link2.default, { href: { pathname: '/p', query: { id: postId } }, as: '/' + postId, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-3680419947' + ' ' + 'item_title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, title)), _react2.default.createElement('div', {
    className: 'jsx-3680419947' + ' ' + 'item_date',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, date.slice(0, 10).split('-').join('. '))));
};

exports.default = PostListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3RJdGVtL1Bvc3RMaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpbmsiLCJQb3N0TGlzdEl0ZW0iLCJ0aXRsZSIsImRhdGUiLCJwb3N0SWQiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJzbGljZSIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxlQUFlLFNBQWYsQUFBZSxtQkFBNkI7TUFBMUIsQUFBMEIsYUFBMUIsQUFBMEI7TUFBbkIsQUFBbUIsWUFBbkIsQUFBbUI7TUFBYixBQUFhLGNBQWIsQUFBYSxBQUNoRDs7eUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQTthQUFBO1NBQUEsQUFrQkU7QUFsQkYsc0JBa0JFLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxNQUFNLEVBQUUsVUFBRixBQUFZLE1BQU0sT0FBTyxFQUFFLElBQXZDLEFBQVksQUFBeUIsQUFBTSxZQUFZLFVBQXZELEFBQStEO2dCQUEvRDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUE2QjtBQUE3QjtBQUFBLEtBRkosQUFDRSxBQUNFLEFBRUYseUJBQUEsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUE0QjtBQUE1QjtBQUFBLFVBQTRCLEFBQUssTUFBTCxBQUFXLEdBQVgsQUFBYyxJQUFkLEFBQWtCLE1BQWxCLEFBQXdCLEtBQXhCLEFBQTZCLEtBdkIvRCxBQUNFLEFBa0JFLEFBSUUsQUFBNEIsQUFBa0MsQUFJckU7QUE1QkQsQUE4QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUG9zdExpc3RJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Nvb25vby9kZXYvYmxvZyJ9