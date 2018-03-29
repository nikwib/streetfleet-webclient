import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../store/actions/cars.actions';
import config from '../../config';
import MapContainer from './MapContainer';
import VehicleModal from './../VehicleModal';
import '../../css/Map.css';

// This function loops through the cars in the store and looks up there last position

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 30.345345,
      longtitude: 2.175017
    }
    setInterval(() => this.processLocations(), 2000);

  }

  componentWillMount = async () => {
    await this.props.getCars();
  }

  lastLocations = {};

  processLocations = () => {
    console.log('CARS: ', this.props.cars);

    this.props.cars.map(car => {
      this.props.getTrips(car.mac_address)
      this.lastLocations = this.props.trips.pop().locations.pop();
      console.log('LAST LOCATIONS:', this.lastLocations);
      console.log('CAR:', car);
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className="row MapView">
        <MapContainer
          latitude={this.state.latitude}
          longtitude={this.state.longtitude}
          googleMapURL={config.googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 62px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          cars={this.props.cars}
          lastLocations={this.lastLocations}
        />
        <VehicleModal cars={this.props.cars} />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  cars: state.cars.cars,
  trips: state.cars.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars) },
  getTrips: (mac_address) => { dispatch(Actions.getTrips(mac_address)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapView);

