import React from 'react';
import moment from 'moment';

export const Trip = (props) => {
  return (
    <tr>
      <td>{moment(props.trip.start_time).format('lll')}</td>
      <td>{moment(props.trip.end_time).format('lll')}</td>
      <td>{props.trip.distance.toFixed(2)}</td>
      <td className="ShowButtons">
        <button bsStyle="link" onClick={() => props.onShowTrip(props.trip.locations)}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
    </tr>
  )
};
