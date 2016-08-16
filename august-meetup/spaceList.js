'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpaceListTest = function (_React$Component) {
    _inherits(SpaceListTest, _React$Component);

    function SpaceListTest() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, SpaceListTest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SpaceListTest)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            spaces: [{
                occupied: true,
                spaceNumber: 1,
                ticketNumber: 'X456AL1'
            }, {
                occupied: false,
                spaceNumber: 2,
                ticketNumber: ''
            }, {
                occupied: true,
                spaceNumber: 3,
                ticketNumber: 'D3534Z'
            }]
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SpaceListTest, [{
        key: 'render',
        value: function render() {
            return React.createElement(SpaceList, { spaces: this.state.spaces });
        }
    }]);

    return SpaceListTest;
}(React.Component);

var SpaceList = function (_React$Component2) {
    _inherits(SpaceList, _React$Component2);

    function SpaceList() {
        var _Object$getPrototypeO2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, SpaceList);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(SpaceList)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.spaceItem = function (space) {
            return React.createElement(Space, { key: space.spaceNumber, space: space });
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(SpaceList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'space-list' },
                this.props.spaces.map(this.spaceItem)
            );
        }
    }]);

    return SpaceList;
}(React.Component);

ReactDOM.render(React.createElement(SpaceListTest, null), document.getElementById('space-test'));
//# sourceMappingURL=C:\src\meetuppres-react\august-meetup\spaceList.js.map