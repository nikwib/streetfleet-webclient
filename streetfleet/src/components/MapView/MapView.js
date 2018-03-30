import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Grid, Row, Col } from 'react-bootstrap';

import Actions from '../../store/actions/cars.actions';
import config from '../../config';
import MapContainer from './MapContainer';
import VehicleModal from './VehicleModal';
import '../../css/Map.css';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.pid;
    this.lastLocation = {
      latitude: 41.3948878,
      longitude: 2.1976607,
    };
    this.state = {
      latitude: 30.345345,
      longitude: 2.175017
    }
    setTimeout(() => this.processLocations(), 1000);
  }
  componentDidMount = () => {
    this.props.getCars();
    this.pid = setInterval(() => this.processLocations(), 5000);
  }


  componentWillUnmount = () => {
    clearInterval(this.pid);
  }

  processLocations = () => {
    if (isEmpty(this.props.cars)) return;
    this.props.cars.map(car => {
      this.props.getTrips(car.mac_address)
      if (isEmpty(this.props.trips)) return;
      this.lastLocation = this.props.trips.pop().locations.pop();
      this.lastLocation.car_id = car._id;
      this.props.saveLastLoc(this.lastLocation);
    })
  }

  render() {
    const style = {
      height: `75vh`,
      boxShadow: `0 3px 15px rgba(0,0,0,.3)`,
      marginTop: `2.6%`,
    }
    return (
      <Grid>
        <Row>
          <Col className="MapView" md={7}>
          <MapContainer
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={style} />}
              mapElement={<div style={{ height: `100%` }} />}
              lastLocations={this.props.lastLocations}
              defaultLocation={this.lastLocation}
            />
          </Col>
          <Col className="VehicleView" md={3}>
          <VehicleModal cars={this.props.cars} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  cars: state.cars.cars,
  trips: state.cars.trips,
  lastLocations: state.cars.lastLocations,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars) },
  getTrips: (mac_address) => { dispatch(Actions.getTrips(mac_address)) },
  saveLastLoc: (lastLocation) => { dispatch(Actions.saveLastLoc(lastLocation)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapView);

