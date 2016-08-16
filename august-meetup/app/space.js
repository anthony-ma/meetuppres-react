'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Space = function (_React$Component) {
    _inherits(Space, _React$Component);

    function Space() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Space);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Space)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.selectSpace = function () {
            _this.props.selectSpace(_this.props.id);
        }, _this.render = function () {
            return React.createElement(
                'div',
                { className: 'space ' + (_this.props.occupied ? 'space-occupied-true' : ''), onClick: _this.selectSpace },
                React.createElement(
                    'p',
                    null,
                    _this.props.number
                ),
                React.createElement(
                    'p',
                    null,
                    _this.props.ticket
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Space;
}(React.Component);

Space.propTypes = {
    id: React.PropTypes.number.isRequired,
    occupied: React.PropTypes.bool.isRequired,
    number: React.PropTypes.number.isRequired,
    ticket: React.PropTypes.string.isRequired
};
//# sourceMappingURL=C:\git\react-presentation\august-meetup\app\space.js.map