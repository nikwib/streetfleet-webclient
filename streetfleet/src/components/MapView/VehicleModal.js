import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/Map.css';

const renderCars = (props) => {
  if (props.cars.length) {
    return props.cars.map((car, i) => {
      // let carColor = (parseInt('178FE7', 16) - (255 + i * 255 + i * 252 + i)).toString(16);
      let carColor = (parseInt('178FFF', 16) - (20*i)).toString(16);
      console.log(carColor)
      return (
        <li>
          <Link to={"/CarLog/" + car._id} key={car._id} license_number={car.license_number}>
            <div className="vColor" style={{ backgroundColor: '#' + carColor }}></div>
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
