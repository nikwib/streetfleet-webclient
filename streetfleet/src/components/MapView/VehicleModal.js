import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';

import Actions from './../../store/actions/cars.actions';
import '../../css/Map.css';

class VehicleModal extends Component {

  componentWillMount = async () => {
    this.props.getCars();
  }

  renderCars = (props) => {
    if (props.cars.length) {
      return props.cars.map((car, i) => {
        i++;
        return (
          <li>
            <Link to={"/CarLog/" + car.license_number} key={car._id} license_number={car.license_number}>
              <div className="vColor" style={{backgroundColor:randomColor({luminosity: 'dark'})}}></div>
              <div key={i} className="vInfo">{car.license_number.toUpperCase()}</div>
            </Link>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="VehicleModal">
        <h2>Your Fleet</h2>
        <ul className="VehicleList">
          {this.renderCars(this.props)}
        </ul>
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
