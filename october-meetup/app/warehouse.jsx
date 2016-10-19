let store = Redux.createStore(appReducer, initialState);

class Warehouse extends React.Component {
  render = () => {
    return (
      <ReactRedux.Provider store={store}>
        {
          this.props.trucks.map((truck) =>
            <Truck key={truck.id} {...truck} />
          )
        }
      </ReactRedux.Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trucks: state.trucks,
    warehouseName: state.warehouseName,
    address: state.address
  };
}

ReactRedux.connect(mapStateToProps, null)(Warehouse);
