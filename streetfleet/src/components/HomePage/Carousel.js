import React from 'react';
import { Carousel } from 'react-bootstrap';

import '../../css/HomePage.css';
import fleetBanner from '../../img/fleet.png';

const SplashScreen = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="bannerImg" alt="Vehicle Fleet" src={fleetBanner} />
        <Carousel.Caption>
          <h1>Track and manage your vehicles</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SplashScreen;
