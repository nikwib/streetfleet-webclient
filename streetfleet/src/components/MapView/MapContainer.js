import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"

import { connect } from 'react-redux';

import Actions from '../../store/actions/cars.actions';
import svg from '../../img/map-car-marker.svg'




const renderCarMarkers = (props) => {
  return props.cars.map(car => {
    return (
      <Marker
        key={car._id}
        className="svg"
        position={{ lat: props.lastLocations.latitude, lng: props.lastLocations.longitude }}
      />)
  })
}

const MapContainer = withScriptjs(withGoogleMap(props =>
  <GoogleMap defaultZoom={14} center={{ lat: props.lastLocations.latitude, lng: props.lastLocations.longitude }}   >
    {renderCarMarkers(props)}
  </GoogleMap>
))

const mapStateToProps = (state) => ({
  trips: state.cars.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getTrips: (mac_address) => { dispatch(Actions.getTrips(mac_address)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);

