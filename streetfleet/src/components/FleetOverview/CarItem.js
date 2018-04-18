import React from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

const CarItem = ({car, onClickEdit, onClickDelete}) => {
  const time = moment(moment.duration(car.total_driving_time)).format('HH:mm');
  const tab = (val) => ( <td> <Link to={'/CarLog/' + car._id} > {val} </Link> </td> );
  return (
    <tr>
      {tab(car.license_number.toUpperCase())}
      {tab(car.make)}
      {tab(car.model)}
      {tab(time)}
      {tab(car.total_miles_driven)}
      <td className='OverviewButtons'>
        <Button bsStyle='link' onClick={() => onClickEdit(car)}><i className='fas fa-pencil-alt'></i></Button>
        <Button bsStyle='link' onClick={() => onClickDelete(car)}><i className='fas fa-trash-alt'></i></Button>
      </td>
    </tr>
  );
};

export default CarItem;
