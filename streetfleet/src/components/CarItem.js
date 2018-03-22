import React from 'react';
import { Button } from 'react-bootstrap';

export const CarItem = (props) => (
  <tr>
    <td className="text-uppercase">{props.car.license_number}</td>
    <td>{props.car.model}</td>
    <td>{props.car.total_driving_time}</td>
    <td>{props.car.total_miles_driven}</td>
    <td className="OverviewButtons">
      <Button bsStyle="link" onClick={() => props.onClickEdit}><i className="fas fa-pencil-alt text-success"></i></Button>
      <Button bsStyle="link" onClick={() => props.onClickDelete(props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
    </td>
  </tr>
)
