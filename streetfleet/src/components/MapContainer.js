import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapContainer = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.404082, lng: 2.175017 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.404082, lng: 2.175017 }} />}
  </GoogleMap>
))

export default MapContainer;
