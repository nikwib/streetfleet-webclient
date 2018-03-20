import React, {Component} from 'react';

import config from '../config';
import MapContainer from './MapContainer';
import '../css/Map.css';

class MapView extends Component {
  render() {
    console.log(config)
    return (
      <div className="row MapView">
        <MapContainer
          isMarkerShown={false}
          googleMapURL={config.googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 62px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default MapView;
