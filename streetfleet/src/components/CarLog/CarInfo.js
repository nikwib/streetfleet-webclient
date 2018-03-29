import React from 'react';
import moment from 'moment';

export const CarInfo = (props) => {

  return (
    <div className="CarInfo">
      <p className="text-uppercase"><span className="text-capitalize">License Plate: </span>{props.car.license_number}</p>
      <p className="text-capitalize"><span>Type: </span>{props.car.vType}</p>
      <p className="text-capitalize"><span>Make: </span>{props.car.make}</p>
      <p className="text-capitalize"><span>Model: </span>{props.car.model}</p>
      <p className="text-capitalize"><span>Year: </span>{props.car.year}</p>
      <p className="text-capitalize"><span>Total Time: </span>{moment(props.car.total_driving_time).format('HH:mm')}</p>
      <p className="text-capitalize"><span>Total Distance: </span>{props.car.total_km_driven}</p>
      <p className="text-capitalize"><span>Mac Address: </span>{props.car.mac_address}</p>
    </div>
  );
};
