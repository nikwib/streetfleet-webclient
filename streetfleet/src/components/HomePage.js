import React, {Component} from 'react';

import  Carousel  from './Carousel';
import  Overview  from './Overview';
import  Footer  from './Footer';

class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <Carousel />
        <Overview />
        <Footer />
      </div>
    )
  }
}


export default HomePage;
