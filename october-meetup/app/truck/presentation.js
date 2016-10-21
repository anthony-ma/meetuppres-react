import React from 'react';
import { PropTypes } from 'react';

class Truck extends React.Component {
  arrivalClick = () => {
    this.props.handleTruckArrival('', this.props.id);
  }

  unloadClick = () => {
    this.props.handleUnloadTruck(this.props.id);
  }

  planRouteClick = () => {
    this.props.handlePlanRoute(Math.random().toString(36).substr(2, 5), this.props.id);
  }

  loadClick = () => {
    this.props.handleLoadTruck(this.props.id);
  }

  departClick = () => {
    this.props.handleTruckDeparture(this.props.id);
  }

  render = () => {
    return (
      <div className='truck'>
        <div>
          <p><span className='title'>Name</span>{this.props.name}</p>
          <p><span className='title'>IsParked</span>{this.props.isParked ? 'true' : 'false'}</p>
          <p><span className='title'>IsLoaded</span>{this.props.isLoaded ? 'true' : 'false'}</p>
          <p><span className='title'>Destination</span>{this.props.destination}</p>
        </div>
        <div>
          <button onClick={this.arrivalClick}>Truck arrives</button>
          <button onClick={this.unloadClick}>Unload truck</button>
          <button onClick={this.planRouteClick}>Plan route</button>
          <button onClick={this.loadClick}>Load truck</button>
          <button onClick={this.departClick}>Truck departure</button>
        </div>
      </div>
    )
  }
}

Truck.propTypes = {
    name: PropTypes.string.isRequired,
    isParked: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    destination: PropTypes.string.isRequired,
    handleTruckArrival: PropTypes.func.isRequired,
    handleUnloadTruck: PropTypes.func.isRequired,
    handlePlanRoute: PropTypes.func.isRequired,
    handleLoadTruck: PropTypes.func.isRequired,
    handleTruckDeparture: PropTypes.func.isRequired
};

export default Truck;
