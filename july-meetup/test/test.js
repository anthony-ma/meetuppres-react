'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestComponent = function (_React$Component) {
    _inherits(TestComponent, _React$Component);

    function TestComponent() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, TestComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TestComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.render = function () {
            return React.createElement(
                'span',
                null,
                'Hi'
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return TestComponent;
}(React.Component);

var TestComponent2 = function (_React$Component2) {
    _inherits(TestComponent2, _React$Component2);

    function TestComponent2() {
        var _Object$getPrototypeO2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, TestComponent2);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(TestComponent2)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.render = function () {
            return React.createElement(
                'span',
                null,
                'Hi'
            );
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    return TestComponent2;
}(React.Component);

ReactDOM.render(React.createElement(TestComponent2, null), document.getElementById('app'));