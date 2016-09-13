const isParked = (state = false, action) => {
  switch (action.type) {
    case terms.truckArrival:
      return true;

    case terms.truckDeparture:
      return false;

    default:
      return state;
  }
}

const isLoaded = (state = true, action) => {
  switch (action.type) {
    case terms.unloadTruck:
      return false;

    case terms.loadTruck:
      return true;

    default:
      return state;
  }
}

const destination = (state = '', action) => {
  switch (action.type) {
    case terms.truckArrival:
      return '';

    case terms.planRoute:
      return action.text;

    default:
      return state;
  }
}

const appReducer = Redux.combineReducers({
  isParked,
  isLoaded,
  destination
})
