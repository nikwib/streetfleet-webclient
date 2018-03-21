import React, {Component} from 'react';
import { Grid, Row, Col, Tabs, Tab, Table, Button } from 'react-bootstrap';

import config from '../config';
import MapContainer from './MapContainer';
import '../css/Map.css';
import '../css/CarLog.css';

class CarLog extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid CarLog">
          <Col className="LogLeft" md={4}>
            <MapContainer
              googleMapURL={config.googleMapURL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="InfoSummary" style={{ height: 240, width: 320 }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div className="InfoSummary">
              <p><span>Date: </span>DD/MM/AAAA<br/>
              <span>Driving Time: </span>HH hours. MM minutes<br/>
              <span>Distance Driven: </span>## Km</p>
            </div>
          </Col>
          <Col md={8} className="LogRight">
            <h2 className="text-success">6460 CBW</h2>
            <div className="logButtons pull-right">
              <Button bsStyle="link"><i className="fas fa-pencil-alt text-success"></i></Button>
              <Button bsStyle="link"><i className="fas fa-trash-alt text-success"></i></Button>
            </div>
            <Tabs className="InfoOverview" defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Trips">
                <h3 className="text-success">DD/MM/AAAA</h3>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                  </tbody>
                </Table>
                <h3 className="text-success">DD/MM/AAAA</h3>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                  </tbody>
                </Table>
                <h3 className="text-success">DD/MM/AAAA</h3>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                    <tr>
                      <td>HH:MM</td>
                      <td>HH:MM</td>
                      <td>## Km</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey={2} title="Vehicle Info" c
              lassName="VehicleInfo">
                <p><span>Type: </span></p>
                <p><span>Make: </span></p>
                <p><span>Model: </span></p>
                <p><span>Year: </span></p>
                <p><span>License Plate: </span></p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default CarLog;
