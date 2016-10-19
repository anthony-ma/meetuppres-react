"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = Redux.createStore(appReducer, initialState);

var Warehouse = function (_React$Component) {
  _inherits(Warehouse, _React$Component);

  function Warehouse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Warehouse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Warehouse.__proto__ || Object.getPrototypeOf(Warehouse)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return React.createElement(
        ReactRedux.Provider,
        { store: store },
        _this.props.trucks.map(function (truck) {
          return React.createElement(Truck, _extends({ key: truck.id }, truck));
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Warehouse;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    trucks: state.trucks,
    warehouseName: state.warehouseName,
    address: state.address
  };
};

ReactRedux.connect(mapStateToProps, null)(Warehouse);
//# sourceMappingURL=G:\projects\meetuppres-react\october-meetup\app\warehouse.js.map