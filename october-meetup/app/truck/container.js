import Truck from './presentation';
import { truckArrival, unloadTruck, planRoute, loadTruck, truckDeparture } from './actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    handleTruckArrival: truckArrival,
    handleUnloadTruck: unloadTruck,
    handlePlanRoute: planRoute,
    handleLoadTruck: loadTruck,
    handleTruckDeparture: truckDeparture
  };
}

export default connect(null, {
  handleTruckArrival: truckArrival,
  handleUnloadTruck: unloadTruck,
  handlePlanRoute: planRoute,
  handleLoadTruck: loadTruck,
  handleTruckDeparture: truckDeparture
})(Truck);
