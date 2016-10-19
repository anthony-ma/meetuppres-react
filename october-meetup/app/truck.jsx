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
          <p><span className='title'>IsParked</span>{this.props.isParked}</p>
          <p><span className='title'>IsLoaded</span>{this.props.isLoaded}</p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleTruckArrival: truckArrival,
    handleUnloadTruck: unloadTruck,
    handlePlanRoute: planRoute,
    handleLoadTruck: loadTruck,
    handleTruckDeparture: truckDeparture
  };
}

ReactRedux.connect(null, mapDispatchToProps)(Truck);
