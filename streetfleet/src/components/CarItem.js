import React from 'react';
import { Button } from 'react-bootstrap';

export const CarItem = (props) => (
  <tr>
    <td>{props.car.license_number.toUpperCase()}</td>
    <td>{props.car.model}</td>
    <td>{props.car.driving_time}</td>
    <td>{props.car.miles_driven}</td>
    <td class="OverviewButtons">
      <Button bsStyle="link" onClick={() => props.onClickEdit}><i className="fas fa-pencil-alt text-success"></i></Button>
      <Button bsStyle="link" onClick={() => props.onClickDelete(props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
    </td>
  </tr>
)
