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
                id: 1,
                name: 'UPARK',
                address: '123 Park Ave., New York, NY 10010',
                phoneNumber: '1-800-YOU-PARK',
                manager: 'Bob Loblaw',
                spaces: [{
                    id: 11,
                    number: 1,
                    occupied: false,
                    ticket: ''
                }, {
                    id: 12,
                    number: 2,
                    occupied: true,
                    ticket: 'A00'
                }, {
                    id: 13,
                    number: 3,
                    occupied: true,
                    ticket: '896'
                }, {
                    id: 14,
                    number: 4,
                    occupied: true,
                    ticket: '250'
                }, {
                    id: 15,
                    number: 5,
                    occupied: true,
                    ticket: 'P25'
                }],
                class: 'lot'
            }, {
                id: 2,
                name: 'PARK \'N FLY',
                address: '1017 Airline Dr, Kenner, LA 70062',
                phoneNumber: '1-800-PARK-NFLY',
                manager: 'Harrison Ford',
                spaces: [{
                    id: 21,
                    number: 1,
                    occupied: false,
                    ticket: ''
                }, {
                    id: 22,
                    number: 2,
                    occupied: true,
                    ticket: 'B00'
                }, {
                    id: 23,
                    number: 3,
                    occupied: true,
                    ticket: '643'
                }, {
                    id: 24,
                    number: 4,
                    occupied: true,
                    ticket: 'X19'
                }, {
                    id: 25,
                    number: 5,
                    occupied: true,
                    ticket: 'L90'
                }],
                class: 'lot'
            }]
        }, _this.occupySpace = function (lotId, spaceId, ticket) {
            if (!ticket) {
                alert('Please provide a ticket number');
                return;
            }

            var newLots = _this.getNewLots(lotId, spaceId, true, ticket);
            _this.setState({ lots: newLots });
        }, _this.clearSpace = function (lotId, spaceId) {
            var newLots = _this.getNewLots(lotId, spaceId, false, '');
            _this.setState({ lots: newLots });
        }, _this.getNewLots = function (lotId, spaceId, occupied, ticket) {
            var lot = _.findIndex(_this.state.lots, { id: lotId });
            var space = _.findIndex(_this.state.lots[lot].spaces, { id: spaceId });
            var newLots = _this.state.lots;
            newLots[lot].spaces[space].occupied = occupied;
            newLots[lot].spaces[space].ticket = ticket;
            return newLots;
        }, _this.render = function () {
            return React.createElement(
                'div',
                { id: 'app' },
                React.createElement(
                    'h1',
                    null,
                    _this.state.title
                ),
                _this.state.lots.map(function (lot) {
                    return React.createElement(Lot, _extends({ key: lot.id }, lot, { occupySpace: _this.occupySpace, clearSpace: _this.clearSpace }));
                })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=C:\Projects\meetuppres-react\august-meetup\app\app.js.map