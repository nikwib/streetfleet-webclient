import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

class SingleVehicle extends Component {

  renderTimes = (props) => props.trip.trips.map((trip, i) => {
    i++;
    return (
      <tr>
        <td>{moment(trip.start_time).format('LT')}</td>
        <td>{moment(trip.end_time).format('LT')}</td>
        <td>{trip.distance + " Miles"}</td>
      </tr>
    )
  });

  render() {
    return (
      <div>
        <h3 className="text-success">{this.props.trip.date}</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTimes(this.props)}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default SingleVehicle;
