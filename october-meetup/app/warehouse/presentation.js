import React from 'react';
import { PropTypes } from 'react';
import Truck from '../truck/container'

class Warehouse extends React.Component {
  render = () => {
    return (
      <div className='warehouse'>
        {
          this.props.trucks.map((truck) =>
            <Truck key={truck.id} {...truck} />
          )
        }
      </div>
    )
  }
}

Warehouse.propTypes = {
    trucks: PropTypes.arrayOf(PropTypes.object)
};

export default Warehouse;
