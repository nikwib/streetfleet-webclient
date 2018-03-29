import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

export const Trip = (props) => {
  return (
    <tr>
      <td>{moment(props.trip.start_time).format('lll')}</td>
      <td>{moment(props.trip.end_time).format('lll')}</td>
      <td>{props.trip.distance}</td>
      <td>
        <button onClick={() => props.onShowTrip(props.trip.locations)}>
          Show
        </button>
      </td>
    </tr>
  )
};

