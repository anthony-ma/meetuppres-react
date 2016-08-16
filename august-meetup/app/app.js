'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            title: 'PARKMASTER 3001',
            lots: [{
                name: 'UPARK',
                address: '123 Park Ave., New York, NY 10010',
                phoneNumber: '1-800-YOU-PARK',
                manager: 'Bob Loblaw',
                spaces: [{
                    number: 1,
                    occupied: false,
                    ticket: ''
                }, {
                    number: 2,
                    occupied: true,
                    ticket: 'A00'
                }, {
                    number: 3,
                    occupied: true,
                    ticket: '896'
                }, {
                    number: 4,
                    occupied: true,
                    ticket: '250'
                }, {
                    number: 5,
                    occupied: true,
                    ticket: 'P25'
                }]
            }, {
                name: 'PARK \'N FLY',
                address: '1017 Airline Dr, Kenner, LA 70062',
                phoneNumber: '1-800-YOU-PARK',
                manager: 'Bob Loblaw',
                spaces: [{
                    number: 1,
                    occupied: false,
                    ticket: ''
                }, {
                    number: 2,
                    occupied: true,
                    ticket: 'A00'
                }, {
                    number: 3,
                    occupied: true,
                    ticket: '896'
                }, {
                    number: 4,
                    occupied: true,
                    ticket: '250'
                }, {
                    number: 5,
                    occupied: true,
                    ticket: 'P25'
                }]
            }]
        }, _this.render = function () {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: _this.state.title }),
                _this.state.lots.map(function (lot) {
                    return React.createElement(Lot, _extends({ key: lot.name }, lot));
                })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=C:\git\react-presentation\august-meetup\app\app.js.map