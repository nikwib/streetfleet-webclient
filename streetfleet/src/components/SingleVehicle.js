import React from 'react';

export const SingleVehicle = (props) => (
  <div>
    <p><span>Type: </span>
    </p>
    <p><span>Make: </span>
    </p>
    <p><span>Model: </span>
      {props.car.model}
    </p>
    <p><span>Year: </span>
    </p>
    <p><span>License Plate: </span>
    {props.car.license_number.toUpperCase()}</p>
  </div>
)
