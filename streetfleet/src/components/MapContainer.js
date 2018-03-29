import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, PolylineOptions} from "react-google-maps"
import ReactSVG from 'react-svg';
import svg from '../img/map-car-marker.svg'
import svg2 from '../img/map-car-marker2.svg'
import svg3 from '../img/map-car-marker3.svg'
import svg4 from '../img/map-car-marker4.svg'



const MapContainer = withScriptjs(withGoogleMap(props => 
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: props.latitude, lng: props.longtitude }}
  >
    <Marker
      className="svg"
      position={{ lat:props.latitude, lng: props.longtitude}}
      icon={{
        url:svg
      }}
    />
    <Polyline
      path={[{lat: props.latitude, lng: props.longtitude},{lat: props.latitude, lng: props.longtitude}]}
      strokeColor= "#FF0000"
      strokeWeight= '2'
    />
  </GoogleMap>
))

export default MapContainer;
