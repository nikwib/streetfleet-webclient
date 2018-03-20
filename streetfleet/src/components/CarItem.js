import React from 'react';

export const CarItem = (props) => (
  <tr>
    <td>{props.car.license_number.toUpperCase()}</td>
    <td>{props.car.model}</td>
    <td>{props.car.driving_time}</td>
    <td>{props.car.miles_driven}</td>
    <td>
      <button onClick={() => props.onClickDelete(props.car)}>Delete</button>
      <button onClick={() => props.onClickEdit(props.car)}>Edit</button>
    </td>
  </tr>
)
