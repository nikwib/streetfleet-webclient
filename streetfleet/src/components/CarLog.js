import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import config from '../config';
import MapContainer from './MapContainer';
import SingleDate from './SingleDate';
import Actions from './../store/actions/cars.actions';
import '../css/Map.css';
import '../css/CarLog.css';

class CarLog extends Component {

  componentWillMount = async () => {
    const trip = this.props.match.params.id;
    this.props.getTrips(trip);
  }

  renderDates = (props) => {
    if (props.trips.days) {
      return props.trips.days.map((trip, i) => {
        i++;
        return (
          <div>
          <SingleDate
            key={i}
            trip={trip}
          />
          </div>
        );
      });
    }
  }

  render() {
    const trips = this.props.trips;
    return (
      <Grid>
        <Row className="show-grid CarLog">
          <Col className="LogLeft" md={4}>
            <MapContainer
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="InfoSummary" style={{ height: 240, width: 320 }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div className="InfoSummary">
              <p><span>Date: </span>DD/MM/AAAA<br/>
              <span>Driving Time: </span>HH hours. MM minutes<br/>
              <span>Distance Driven: </span>## Km</p>
            </div>
          </Col>
          <Col md={8} className="LogRight">
            <h2 className="text-success text-uppercase">{trips.license_number}</h2>
            <div className="logButtons pull-right">
              <Button bsStyle="link"><i className="fas fa-pencil-alt text-success"></i></Button>
              <Button bsStyle="link"><i className="fas fa-trash-alt text-success"></i></Button>
            </div>
            <Tabs className="InfoOverview" defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Trips">
                {this.renderDates(this.props)}
              </Tab>
              <Tab eventKey={2} title="Vehicle Info" className="VehicleInfo">
                <p><span>Type: </span></p>
                <p><span>Make: </span></p>
                <p><span>Model: </span></p>
                <p><span>Year: </span></p>
                <p><span>License Plate: </span></p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  trips: state.cars.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getTrips: (trip) => { dispatch(Actions.getTrips(trip)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarLog);
