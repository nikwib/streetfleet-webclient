import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import config from './../../config';
import { CarInfo } from './CarInfo';
import MapTrip from './MapTrip';
import { Trips } from './Trips';
import Actions from '../../store/actions/cars.actions';
import '../../css/CarLog.css';
import '../../css/Tables.css';
import '../../css/Map.css';

class CarLog extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };
  }

  componentDidMount = () => {
    setTimeout(() => this.props.getTrips(this.props.car.mac_address), 1);
  }
  componentWillMount = async () => {
    await this.props.getCar(this.props.match.params.id);
  }

  onShowTrip = (locations) => {
    this.locations = locations.map(loc => (
      {
        lat: loc.latitude,
        lng: loc.longitude,
      }
    ));
    this.setState({ locations: this.locations })
  }

  render() {
    const style = {
      height: `32vh`,
      boxShadow: `0 3px 15px rgba(0,0,0,.3)`,
    }

    return (
      <Grid>
        <Row className="show-grid CarLog">
          <Col md={3} className="MapView MapSmall">
            <MapTrip
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={style} />}
              mapElement={<div style={{ height: `100%` }} />}
              locations={this.state.locations}
            />
            <h2>Details</h2>
            <div className="InfoSummary">
              {this.props.car ? <CarInfo car={this.props.car} /> : null}
            </div>
          </Col>
          <Col md={7} className="CarLogTrips">
            <Trips
              trips={this.props.trips}
              onShowTrip={this.onShowTrip}
              onShowEditVehicle={() => {this.props.onShowEditVehicle(this.props.car)}}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  car: state.cars.car,
  trips: state.cars.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getCar: (car_id) => { dispatch(Actions.getCar(car_id)); },
  getTrips: (mac_address) => { dispatch(Actions.getTrips(mac_address)); },
  onShowEditVehicle:(car) => {dispatch(Actions.onShowEditVehicle(car))}
});

export default connect(mapStateToProps, mapDispatchToProps)(CarLog);
