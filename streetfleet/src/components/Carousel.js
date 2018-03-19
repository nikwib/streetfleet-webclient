import React, {Component} from 'react';
import { Carousel, Button } from 'react-bootstrap';
import  NewUser  from './NewUser';

import '../css/HomePage.css';
import fleetBanner from '../img/fleet.jpg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  handleSignIn = () => {
    this.setState({ show: true });
    console.log(this)
  }
  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="bannerImg" width={'100%'} alt="Vehicle Fleet" src={fleetBanner}/>
          <Carousel.Caption>
            <h1>Fast and easy solution for managing your fleets.</h1>
            <Button bsStyle="success" bsSize="large" onClick={this.handleSignIn}>Try it!</Button>
            <NewUser
              show={this.state.show}
              handleClose={this.handleClose}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomePage;
