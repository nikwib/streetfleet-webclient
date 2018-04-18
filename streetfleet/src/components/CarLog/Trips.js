import React from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';

import { Trip } from './Trip';
import '../../css/Tables.css';

const renderTrips = (props) => props.trips.map((trip) => {
  return (
    <Trip
      key={trip._id}
      trip={trip}
      onShowTrip={props.onShowTrip}
    />
  );
});

export const Trips = (props) => {
  return (
    <div className='TableBackground'>
      <div className='DetailsButtons'>
        <ButtonGroup>
          <Button bsStyle='link' onClick={() => props.onShowEditVehicle(props.car)}><i className='fas fa-pencil-alt'></i></Button>
          <Button bsStyle='link' onClick={() => props.onClickDelete(props.car)}><i className='fas fa-trash-alt'></i></Button>
        </ButtonGroup>
      </div>
      <h3>Trips</h3>
      <Table hover className='OverviewTable'>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Distance</th>
            <th>Trip</th>
          </tr>
        </thead>
        <tbody>
          {renderTrips(props)}
        </tbody>
      </Table>
    </div>
  );
};
