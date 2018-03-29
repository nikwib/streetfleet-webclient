import React from 'react';
import { Table, Button } from 'react-bootstrap';

import { Trip } from './Trip';
import '../../css/Tables.css';

const renderTrips = (props) => props.trips.map((trip, i) => {
  return (
  <Trip
  key={i}
  trip={trip}
  onShowTrip={props.onShowTrip}
   />
  ); } );

export const Trips = (props) => {
  return (
    <div className="TableBackground">
      <div className="DetailsButtons">
        <Button bsStyle="link" onClick={() => props.onShowEditVehicle(props.car)}><i className="fas fa-pencil-alt"></i></Button>
        <Button bsStyle="link" onClick={() => props.onClickDelete(props.car)}><i className="fas fa-trash-alt"></i></Button>
      </div>
      <h3>Trips</h3>
      <Table hover className="OverviewTable">
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
