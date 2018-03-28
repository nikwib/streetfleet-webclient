import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';

import config from './../../config';
import { CarInfo } from './CarInfo';
import MapContainer from './MapTrip';
import { Trips } from './Trips';
import Actions from '../../store/actions/cars.actions';
import '../../css/Map.css';
import '../../css/CarLog.css';

class CarLog extends Component {

  componentWillMount = async () => {
    await this.props.getCar(this.props.match.params.id);   
    this.props.getTrips(this.props.car.mac_address);
  }

  render() {
    
    return (
      <Grid>
        <Row className="show-grid CarLog">
          <Col md={4}>
            <MapContainer
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="InfoSummary" style={{ height: 240, width: 320 }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div className="InfoSummary">
              <CarInfo car={this.props.car} />              
            </div>
          </Col>
          <Col md={8}>
            <h2 className="text-success">Vehicle Summary</h2>
            <div className="logButtons pull-right">
              <Button bsStyle="link" onClick={this.handleEdit}><i className="fas fa-pencil-alt text-success"></i></Button>
              <Button bsStyle="link" onClick={() => this.props.onClickDelete(this.props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
            </div>
            <Trips trips={this.props.trips} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  car: state.cars.car,
  trips: state.cars.trips,
});

const mapDispatchToProps = (dispatch) => ({
  getCar: (car_id) => { dispatch(Actions.getCar(car_id)); },
  getTrips: (mac_address) => { dispatch(Actions.getTrips(mac_address)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarLog);
