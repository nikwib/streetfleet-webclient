import React, {Component} from 'react';

import  Carousel  from './Carousel';
import  Overview  from './Overview';
import  Footer  from '../Footer';
import Logo from '../../img/street-fleet-logo.svg';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage row">
        <img src={Logo} className="home-logo" alt="StreetFleet" />
        <Carousel />
        <Overview />
        <Footer />
      </div>
    );
  }
}


export default HomePage;
