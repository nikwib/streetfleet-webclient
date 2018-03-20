import React from 'react';

export const CarItem = (props) => (
  <div className="car-item">
    <div className="license"> {props.car.license}</div> 
    <div className="model"> {props.car.model}</div> 
    <div className="driving_time"> {props.car.driving_time}</div> 
    <div className="miles_driven"> {props.car.miles_driven}</div> 
  </div>
)