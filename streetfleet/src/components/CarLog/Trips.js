import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import { Trip } from './Trip';

const renderTrips = (props) => props.trips.map((trip, i) => { return ( <Trip key={i} trip={trip} />); } );

export const Trips = (props) => {
  return (
    <div>
      <h3 className="text-success">Trips:</h3>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {renderTrips(props)}
        </tbody>
      </Table>
    </div>
  );
};

