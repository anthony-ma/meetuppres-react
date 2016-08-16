'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lot = function (_React$Component) {
    _inherits(Lot, _React$Component);

    function Lot() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Lot);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Lot)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.selectSpace = function (spaceId) {
            _this.props.selectSpace(_this.props.id, spaceId);
        }, _this.render = function () {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        _this.props.name
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'space-list' },
                    _this.props.spaces.map(function (space) {
                        return React.createElement(Space, _extends({ key: space.id }, space, { selectSpace: _this.selectSpace }));
                    })
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Lot;
}(React.Component);

Lot.propTypes = {
    id: React.PropTypes.number.isRequired,
    address: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    manager: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
    spaces: React.PropTypes.array.isRequired,
    selectSpace: React.PropTypes.func.isRequired
};
//# sourceMappingURL=C:\git\react-presentation\august-meetup\app\lot.js.map