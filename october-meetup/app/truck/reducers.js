import terms from './action-terms';
import _ from 'lodash';

const truckReducer = (state = [], action) => {
  let trucks = state;
  const index = _.findIndex(trucks, { id: action.id });
  let truck = trucks[index];
  switch (action.type) {
    case terms.truckArrival:
      truck.isParked = true;
      truck.destination = '';
      return [
        ...trucks.slice(0, index),
        truck,
        ...trucks.slice(index+1)
      ];
    case terms.unloadTruck:
      truck.isLoaded = false;
      return [
        ...trucks.slice(0, index),
        truck,
        ...trucks.slice(index+1)
      ];

    case terms.planRoute:
      truck.destination = action.text;
      return [
        ...trucks.slice(0, index),
        truck,
        ...trucks.slice(index+1)
      ];

    case terms.loadTruck:
      truck.isLoaded = true;
      return [
        ...trucks.slice(0, index),
        truck,
        ...trucks.slice(index+1)
      ];

    case terms.truckDeparture:
      truck.isParked = false;
      return [
        ...trucks.slice(0, index),
        truck,
        ...trucks.slice(index+1)
      ];

    default:
      return state;
  }
}

export default {
    trucks: truckReducer
};
