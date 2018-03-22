import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class SingleDate extends Component {

  renderTimes = (props) => {
  };

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
            <tr>
              <td>HH:MM</td>
              <td>HH:MM</td>
              <td>## Km</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default SingleDate;
