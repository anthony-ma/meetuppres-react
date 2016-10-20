import Warehouse from './presentation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    trucks: state.trucks,
    warehouseName: state.warehouseName,
    address: state.address
  };
}


export default connect(mapStateToProps, null)(Warehouse);
