'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var object = _react2['default'].PropTypes.object;

var TransitionHook = {

  contextTypes: {
    router: object.isRequired
  },

  componentDidMount: function componentDidMount() {
    _warning2['default'](typeof this.routerWillLeave === 'function', 'Components that mixin TransitionHook should have a routerWillLeave method, check %s', this.constructor.displayName || this.constructor.name);

    if (this.routerWillLeave) this.context.router.addTransitionHook(this.routerWillLeave);
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.routerWillLeave) this.context.router.removeTransitionHook(this.routerWillLeave);
  }

};

exports['default'] = TransitionHook;
module.exports = exports['default'];