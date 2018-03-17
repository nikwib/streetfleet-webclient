import React, {Component} from 'react';
import { Carousel, Button } from 'react-bootstrap';

import '../css/HomePage.css';
import fleetBanner from '../img/fleet.jpg';

class HomePage extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="bannerImg" width={'100%'} alt="Vehicle Fleet" src={fleetBanner}/>
          <Carousel.Caption>
            <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
            <Button bsStyle="success" className="btn-lg">Sign Up!</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}






export default HomePage;
