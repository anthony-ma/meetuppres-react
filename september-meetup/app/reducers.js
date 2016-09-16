'use strict';

var isParked = function isParked() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case terms.truckArrival:
      return true;

    case terms.truckDeparture:
      return false;

    default:
      return state;
  }
};

var isLoaded = function isLoaded() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case terms.unloadTruck:
      return false;

    case terms.loadTruck:
      return true;

    default:
      return state;
  }
};

var destination = function destination() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case terms.truckArrival:
      return '';

    case terms.planRoute:
      return action.text;

    default:
      return state;
  }
};

var appReducer = Redux.combineReducers({
  isParked: isParked,
  isLoaded: isLoaded,
  destination: destination
});
//# sourceMappingURL=C:\src\meetuppres-react\september-meetup\app\reducers.js.map