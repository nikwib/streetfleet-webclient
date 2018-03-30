import React from 'react';
import { Link } from 'react-router-dom';
import randomColor from 'randomcolor';

import '../../css/Map.css';

const renderCars = (props) => {
  if (props.cars.length) {
    return props.cars.map(car => {
      return (
        <li>
          <Link to={"/CarLog/" + car._id} key={car._id} license_number={car.license_number}>
            <div className="vColor" style={{ backgroundColor: randomColor({ luminosity: 'dark' }) }}></div>
            <div className="vInfo">{car.license_number.toUpperCase()}</div>
          </Link>
        </li>
      );
    });
  }
}

const VehicleModal = (props) => {
  return (
    <div className="VehicleModal">
      <h2>Your Fleet</h2>
      <ul className="VehicleList">
        {renderCars(props)}
      </ul>
    </div>
  )
}

export default VehicleModal;
