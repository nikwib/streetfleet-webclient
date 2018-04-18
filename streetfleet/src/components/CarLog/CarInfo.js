import React from 'react';
import moment from 'moment';

export const CarInfo = ({car}) => {

  return (
    <div className='CarInfo'>
      <p className='text-uppercase'><span className='text-capitalize'>License Plate: </span>{car.license_number}</p>
      <p className='text-capitalize'><span>Type: </span>{car.vType}</p>
      <p className='text-capitalize'><span>Make: </span>{car.make}</p>
      <p className='text-capitalize'><span>Model: </span>{car.model}</p>
      <p className='text-capitalize'><span>Year: </span>{car.year}</p>
      <p className='text-capitalize'><span>Total Time: </span>{moment(car.total_driving_time).format('HH:mm')}</p>
      <p className='text-capitalize'><span>Total Distance: </span>{car.total_km_driven}</p>
      <p className='text-capitalize'><span>Mac Address: </span>{car.mac_address}</p>
    </div>
  );
};
