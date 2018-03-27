import React from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const CarItem = (props) => (
  <tr>
    <td className="text-uppercase">
      <Link to={'/CarLog/' + props.car._id} _id={props.car._id}>
        {props.car.license_number}
      </Link>
    </td>
    <td>
      <Link to={'/CarLog/' + props.car._id} _id={props.car._id}>
        {props.car.model}
      </Link>
    </td>
    <td>
      <Link to={'/CarLog/' + props.car._id} _id={props.car._id}>
        {moment(props.car.total_driving_time).format('HH:mm')}
      </Link>
    </td>
    <td>
      <Link to={'/CarLog/' + props.car._id} _id={props.car._id}>
        {props.car.total_miles_driven + ' miles'}
      </Link>
    </td>
    <td className="OverviewButtons">
      <Button bsStyle="link" onClick={() => props.onClickEdit}><i className="fas fa-pencil-alt text-success"></i></Button>
      <Button bsStyle="link" onClick={() => props.onClickDelete(props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
    </td>
  </tr>
);
