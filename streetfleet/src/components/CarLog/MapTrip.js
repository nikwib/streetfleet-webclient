import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Polyline } from "react-google-maps"

const MapContainer = withScriptjs(withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={13}
      center={props.locations[0] || { lat: 41.404082, lng: 2.175017 }}
    >
      <Polyline
        path={props.locations}
        strokeColor='blue'
        strokeWeight='2'
      />
    </GoogleMap>
  )
}));

export default MapContainer;
