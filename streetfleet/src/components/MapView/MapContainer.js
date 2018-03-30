import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"
import { connect } from 'react-redux';

import Actions from '../../store/actions/cars.actions';
import svg from '../../img/map-car-marker.svg';

const renderCarMarkers = (props) => {
  return props.lastLocations.map(location => {
    return (
      <Marker
        key={location.car_id}
        className="svg"
        position={{ lat: location.latitude, lng: location.longitude }}
        icon={{ url: svg }}
      />
    )
  })
}

const MapContainer = withScriptjs(withGoogleMap(props =>
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 41.3948878, lng: 2.1976607 }}   >
    {renderCarMarkers(props)}
  </GoogleMap>
))

export default MapContainer;

