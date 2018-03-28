import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const MapContainer = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 41.404082, lng: 2.175017 }}
  ></GoogleMap>
))

export default MapContainer;
