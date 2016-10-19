'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Truck = function (_React$Component) {
  _inherits(Truck, _React$Component);

  function Truck() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Truck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Truck.__proto__ || Object.getPrototypeOf(Truck)).call.apply(_ref, [this].concat(args))), _this), _this.arrivalClick = function () {
      _this.props.handleTruckArrival('', _this.props.id);
    }, _this.unloadClick = function () {
      _this.props.handleUnloadTruck(_this.props.id);
    }, _this.planRouteClick = function () {
      _this.props.handlePlanRoute(Math.random().toString(36).substr(2, 5), _this.props.id);
    }, _this.loadClick = function () {
      _this.props.handleLoadTruck(_this.props.id);
    }, _this.departClick = function () {
      _this.props.handleTruckDeparture(_this.props.id);
    }, _this.render = function () {
      return React.createElement(
        'div',
        { className: 'truck' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            React.createElement(
              'span',
              { className: 'title' },
              'Name'
            ),
            _this.props.name
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'span',
              { className: 'title' },
              'IsParked'
            ),
            _this.props.isParked
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'span',
              { className: 'title' },
              'IsLoaded'
            ),
            _this.props.isLoaded
          ),
          React.createElement(
            'p',
            null,
            React.createElement(
              'span',
              { className: 'title' },
              'Destination'
            ),
            _this.props.destination
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: _this.arrivalClick },
            'Truck arrives'
          ),
          React.createElement(
            'button',
            { onClick: _this.unloadClick },
            'Unload truck'
          ),
          React.createElement(
            'button',
            { onClick: _this.planRouteClick },
            'Plan route'
          ),
          React.createElement(
            'button',
            { onClick: _this.loadClick },
            'Load truck'
          ),
          React.createElement(
            'button',
            { onClick: _this.departClick },
            'Truck departure'
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Truck;
}(React.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleTruckArrival: truckArrival,
    handleUnloadTruck: unloadTruck,
    handlePlanRoute: planRoute,
    handleLoadTruck: loadTruck,
    handleTruckDeparture: truckDeparture
  };
};

ReactRedux.connect(null, mapDispatchToProps)(Truck);
//# sourceMappingURL=G:\projects\meetuppres-react\october-meetup\app\truck.js.map