'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var truckReducer = function truckReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var trucks = state;
  var index = _.findIndex(trucks, { id: action.id });
  var truck = trucks[index];
  switch (action.type) {
    case terms.truckArrival:
      truck.isParked = true;
      truck.destination = '';
      return [].concat(_toConsumableArray(trucks.slice(0, index)), [truck], _toConsumableArray(trucks.slice(index + 1)));
    case terms.unloadTruck:
      truck.isLoaded = false;
      return [].concat(_toConsumableArray(trucks.slice(0, index)), [truck], _toConsumableArray(trucks.slice(index + 1)));

    case terms.planRoute:
      truck.destination = action.text;
      return [].concat(_toConsumableArray(trucks.slice(0, index)), [truck], _toConsumableArray(trucks.slice(index + 1)));

    case terms.loadTruck:
      truck.isLoaded = true;
      truck.destination = '';
      return [].concat(_toConsumableArray(trucks.slice(0, index)), [truck], _toConsumableArray(trucks.slice(index + 1)));

    case terms.truckDeparture:
      truck.isParked = false;
      return [].concat(_toConsumableArray(trucks.slice(0, index)), [truck], _toConsumableArray(trucks.slice(index + 1)));

    default:
      return state;
  }
};

var appReducer = Redux.combineReducers({
  trucks: truckReducer
});
//# sourceMappingURL=G:\projects\meetuppres-react\october-meetup\app\reducers.js.map