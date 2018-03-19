import React, {Component} from 'react';
import { Carousel, Button } from 'react-bootstrap';
import  NewUser  from '../containers/NewUser';
import  Success  from './Success';

import '../css/HomePage.css';
import fleetBanner from '../img/fleet.jpg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showSuccess: false
    };
  }

  handleSignIn = () => {
    this.setState({ showModal: true });
  }
  handleClose = () => {
    this.setState({
      showModal: false,
      showSuccess: false
    });
  }
  handleSuccess = () => {
    this.setState({
      showModal: false,
      showSuccess: true
    });
  }

  render() {
    const msg = "Your account has been created"
    return (
      <Carousel>
        <Carousel.Item>
          <img className="bannerImg" width={'100%'} alt="Vehicle Fleet" src={fleetBanner}/>
          <Carousel.Caption>
            <h1>Fast and easy solution for managing your fleets.</h1>
            <Button bsStyle="success" bsSize="large" onClick={this.handleSignIn}>Try it!</Button>
            <NewUser
              showModal={this.state.showModal}
              handleClose={this.handleClose}
              handleSuccess={this.handleSuccess}
            />
            <Success
              showSuccess={this.state.showSuccess}
              handleClose={this.handleClose}
              handleSuccess={this.handleSuccess}
              message={msg}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomePage;
