import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"
import { connect } from 'react-redux';
//import ReactSVG from 'react-svg';

import Actions from '../../store/actions/cars.actions';

//import svg from '../../img/map-car-marker.svg';
/*      <Marker
        key={location.car_id}
        className="svg"
        position={{ lat: location.latitude, lng: location.longtitude }}
        icon={{ url: svg }}
        />
*/

const renderCarMarkers = (props) => {
  return props.lastLocations.map(location => {
    return (
      <Marker
        key={location.car_id}
        className="svg"
        position={{ lat: location.latitude, lng: location.longitude }}
      />
    )
  })
}

const MapContainer = withScriptjs(withGoogleMap(props => {
  const styles = [
    {
      "featureType": "water",
      "stylers": [{"visibility": "on"},{"color": "#b5cbe4"}]
    },
    {
      "featureType": "landscape",
      "stylers": [{"color": "#efefef"}]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{"color": "#83a5b0"}]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{"color": "#bdcdd3"}]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{"color": "#ffffff"}]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{"color": "#e3eed3"}]
    },
    {
      "featureType": "administrative",
      "stylers": [{"visibility": "on"},{"lightness": 33}]
    },
    {"featureType": "road"},
    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [{"visibility": "on"},{"lightness": 20}]
    },
    {},
    {
      "featureType": "road",
      "stylers": [{"lightness": 20}]
    }
  ]
  return <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 41.3948878, lng: 2.1976607 }}   >
    defaultOptions={{styles:styles}}
    {renderCarMarkers(props)}
  </GoogleMap>
  }
))

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
