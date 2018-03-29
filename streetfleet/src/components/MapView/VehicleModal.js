import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { colors } from './colors';
import Actions from './../store/actions/cars.actions';
import '../css/Map.css';

class VehicleModal extends Component {

  componentWillMount = async () => {
    this.props.getCars();
  }

  renderCars = (props) => {
    if (props.cars.length) {
      return props.cars.map((car, i) => {
        i++;
        return (
          <Link to={"/CarLog/" + car.license_number} key={car._id} license_number={car.license_number}>
            <div className="vColor" style={{backgroundColor:colors[i-1]}}></div>
            <div key={i} className="vInfo">{car.license_number.toUpperCase()}</div>
          </Link>
        );
      });
    }
  }

  render() {
    return (
      <div className="VehicleModal">
        <Modal.Dialog>
          <Modal.Body>
            {this.renderCars(this.props)}
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars) }
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleModal);
