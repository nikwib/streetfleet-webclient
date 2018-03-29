import React, {Component} from 'react';

import config from '../config';
import MapContainer from './MapContainer';
import VehicleModal from './VehicleModal';
import '../css/Map.css';
import subscribeToTimer from '../api';
import '../css/Map.css';


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state ={
      latitude:30.345345,
      longtitude:2.175017
    }

    subscribeToTimer((data) => this.setState({latitude:data.lat,longtitude:data.long}));
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
        />
        <VehicleModal/>
      </div>
    )
  }
}

export default MapView;
