import React, {Component} from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import car from '../../img/white-car.png';
import CreateAccount from './CreateAccount';
import Login from './Login';

class Overview extends Component {

  state = {
    showLogin: false
  }

  toggleLogin = () => {
    this.setState({
      ...this.state,
      showLogin: !this.state.showLogin
    });
  }

  render() {
    return (
      <Grid>
        <Row className="Overview show-grid">
          <Col md={9} mdOffset={1} className="Overview">
            <Col md={4} className="OvLeft">
              <h2>What is StreetFleet?</h2>
              <Image src={car} className="OvImg" />
              <p>StreetFleet is a platform that helps you manage every vehicle in your fleet in real time.</p>
              <p>The platform records your fleets vehicles' position at all times, allows fleet managers to track vehicle activity by individual journey or total distance travelled, as well as real time map updating.</p>
            </Col>
            <Col className="OvRight WhiteContainer">
              {this.state.showLogin ? <Login onToggleLogin={this.toggleLogin} /> : <CreateAccount  onToggleLogin={this.toggleLogin} />}
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Overview;
