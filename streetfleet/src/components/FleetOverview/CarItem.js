import React from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

const CarItem = (props) => {
  const time = moment.duration(props.car.total_driving_time);
  return (
    <tr>
      <td className="text-uppercase">
        <Link to={'/CarLog/' + props.car._id} >
          {props.car.license_number}
        </Link>
      </td>
      <td>
        <Link to={'/CarLog/' + props.car._id} >
          {props.car.make}
        </Link>
      </td>
      <td>
        <Link to={'/CarLog/' + props.car._id} >
          {props.car.model}
        </Link>
      </td>
      <td>
        <Link to={'/CarLog/' + props.car._id} >
          {moment(time).format('HH:mm')}
        </Link>
      </td>
      <td>
        <Link to={'/CarLog/' + props.car._id} >
          {props.car.total_miles_driven}
        </Link>
      </td>
      <td className="OverviewButtons">
        <Button bsStyle="link" onClick={() => props.onClickEdit(props.car)}><i className="fas fa-pencil-alt"></i></Button>
        <Button bsStyle="link" onClick={() => props.onClickDelete(props.car)}><i className="fas fa-trash-alt"></i></Button>
      </td>
    </tr>
  );
};

export default CarItem;
