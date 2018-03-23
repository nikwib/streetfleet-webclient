import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';

import config from '../config';
import MapContainer from './MapContainer';
import SingleVehicle from './SingleVehicle';
import Actions from './../store/actions/cars.actions';
import '../css/Map.css';
import '../css/CarLog.css';

class CarLog extends Component {

  componentWillMount = async () => {
    this.props.getTrips(this.props.match.params.id);
    this.props.getCar(this.props.match.params.id);
  }

  deleteCar = (car) => {
    this.props.deleteCar(car);
  }

  renderDates = (props) => {
    if (props.trips.days) {
      return props.trips.days.map((trip, i) => {
        i++;
        return (
          <div>
          <SingleVehicle
            key={i}
            trip={trip}
          />
          </div>
        );
      });
    }
  }

  renderInfo = (props) => {
    return (
      <div className="CarInfo">
      <p className="text-uppercase"><span className="text-capitalize">License Plate: </span>{props.cars.license_number}</p>
      <p className="text-capitalize"><span>Type: </span>{props.cars.vType}</p>
      <p className="text-capitalize"><span>Make: </span>{props.cars.make}</p>
      <p className="text-capitalize"><span>Model: </span>{props.cars.model}</p>
      <p className="text-capitalize"><span>Year: </span>{props.cars.year}</p>
      <p className="text-capitalize"><span>Total Time: </span>{moment(props.cars.total_driving_time).format('HH:mm')}</p>
      <p className="text-capitalize"><span>Total Distance: </span>{props.cars.total_miles_driven + " miles"}</p>
      <p className="text-capitalize"><span>Mac Address: </span>{props.cars.mac_address}</p>
      </div>
    )
  }

  render() {
    const trips = this.props.trips;
    return (
      <Grid>
        <Row className="show-grid CarLog">
          <Col md={4}>
            <MapContainer
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="InfoSummary" style={{ height: 240, width: 320 }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div className="InfoSummary">
              {this.renderInfo(this.props)}
            </div>
          </Col>
          <Col md={8}>
            <h2 className="text-success">Vehicle Summary</h2>
            <div className="logButtons pull-right">
              <Button bsStyle="link"><i className="fas fa-pencil-alt text-success"></i></Button>
              <Button bsStyle="link" onClick={() => this.props.onClickDelete(this.props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
            </div>
            {this.renderDates(this.props)}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  trips: state.cars.trips,
  cars: state.cars.cars,
});

const mapDispatchToProps = (dispatch) => ({
  getTrips: (trip) => { dispatch(Actions.getTrips(trip)) },
  getCar: (car) => { dispatch(Actions.getCar(car)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarLog);
