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
                'Hello World'
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return TestComponent;
}(React.Component);

ReactDOM.render(React.createElement(TestComponent, null), document.getElementById('app'));