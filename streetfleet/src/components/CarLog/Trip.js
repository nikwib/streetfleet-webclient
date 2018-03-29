import React from 'react';
// import { Table } from 'react-bootstrap';
import moment from 'moment';

export const Trip = (trip) => (
  <tr>
    <td>{moment(trip.start_time).format('LT')}</td>
    <td>{moment(trip.end_time).format('LT')}</td>
    <td>{trip.distance}</td>
  </tr>
);
