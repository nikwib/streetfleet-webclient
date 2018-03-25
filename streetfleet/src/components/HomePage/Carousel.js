import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../../css/HomePage.css';
import fleetBanner from '../../img/fleet.jpg';
import Actions from './../../store/actions/auth.actions';

class SplashScreen extends Component {

  signUp = () => (<Button bsStyle="success" bsSize="large" onClick={this.props.showSignUp}>Try it!</Button>);

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="bannerImg" width={'100%'} alt="Vehicle Fleet" src={fleetBanner} />
          <Carousel.Caption>
            <h1>Track and manage your vehicles</h1>
            {this.props.loggedIn ? null : this.signUp()}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  showSignUp: () => { dispatch(Actions.showSignUp) },
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

