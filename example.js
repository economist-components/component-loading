'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'p',
    null,
    'Default with no overlay'
  ),
  _react2['default'].createElement(_index2['default'], null),
  _react2['default'].createElement('br', null),
  _react2['default'].createElement(
    'div',
    { className: 'overlay' },
    'Just a test that is overlayed by the loader',
    _react2['default'].createElement(_index2['default'], { loadingText: 'We are loading something...', className: 'loading--overlay' })
  ),
  _react2['default'].createElement(
    'p',
    null,
    'With 2 seconds of delay'
  ),
  _react2['default'].createElement(_index2['default'], { delay: 2000 })
);
module.exports = exports['default'];