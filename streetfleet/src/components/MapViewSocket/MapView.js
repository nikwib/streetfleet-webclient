import React, { Component } from 'react';
import config from '../../config';
import MapContainer from './MapContainer';
import VehicleModal from './../VehicleModal';
import subscribeToTimer from './socket';
import '../../css/Map.css';

class MapView extends Component {
  constructor(props) {
    super(props);
    setInterval(subscribeToTimer((data) => console.log('DATA:', data)), 1000);
  }

  render() {
    return (
      <div className="row MapView">
        <MapContainer
          googleMapURL={config.googleMapURL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: 'calc(100vh - 62px)' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <VehicleModal />
      </div>
    );
  }
}

export default MapView;
