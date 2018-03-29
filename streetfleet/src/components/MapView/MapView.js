import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import config from '../../config';
import MapContainer from './MapContainer';
import VehicleModal from './VehicleModal';
import '../../css/Map.css';

class MapView extends Component {
  render() {
    const style = {
      height: `75vh`,
      boxShadow: `0 3px 15px rgba(0,0,0,.3)`,
      marginTop: `2.6%`,
    }
    return (
      <Grid>
        <Row>
          <Col className="MapView" md={7}>
            <MapContainer
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={style} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          <Col className="VehicleView" md={3}>
            <VehicleModal/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MapView;
