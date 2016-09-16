"use strict";

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Lot)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            class: 'lot',
            open: false
        }, _this.occupySpace = function (spaceId, ticket) {}, _this.clearSpace = function (spaceId) {}, _this.handleClick = function () {
            if (_this.state.open) {
                _this.setState({ open: false, class: "lot" });
            } else {
                _this.setState({ open: true, class: "lot open" });
            }
        }, _this.render = function () {
            return React.createElement(
                "div",
                { className: _this.state.class },
                React.createElement(
                    "button",
                    { className: "accordion-button", onClick: _this.handleClick },
                    "toggle"
                ),
                React.createElement(
                    "div",
                    { className: "lot-details" },
                    React.createElement("p", { className: "lot-name" }),
                    React.createElement("p", { className: "lot-address" }),
                    React.createElement("p", { className: "lot-manager" }),
                    React.createElement("p", { className: "lot-phone" })
                ),
                React.createElement("div", { className: "space-list" })
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
    occupySpace: React.PropTypes.func.isRequired,
    clearSpace: React.PropTypes.func.isRequired
};
//# sourceMappingURL=C:\Projects\meetuppres-react\august-meetup\app-demo\lot.js.map