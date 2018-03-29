import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../css/HomePage.css';
import fleetBanner from '../img/fleet.jpg';
import NewUser from '../containers/NewUser';
import Success from './Success';
import Actions from './../store/actions/auth.actions';

class HomePage extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="bannerImg" width={'100%'} alt="Vehicle Fleet" src={fleetBanner} />
          <Carousel.Caption>
            <h1>Fast and easy solution for tracking and managing your fleets.</h1>
            <Button bsStyle="success" bsSize="large" onClick={this.props.showSignUp}>Try it!</Button>
            <NewUser
              showModal={this.props.showModal}
              handleClose={this.props.cancelSignUp}
            />
            {<Success
              showSuccess={this.props.signUpSuccess}
              handleClose={this.props.cancelSignUp}
              message="Your account has been created"
            />}
            {<Success
              showSuccess={this.props.loading}
              message="Loading..."
            />}
            {<Success
              showSuccess={this.props.signUpFailure}
              handleClose={this.props.cancelSignUp}
              message="Something went wrong creating you account!"
            />}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}


const mapStateToProps = (state) => ({
  showModal: state.auth.showSignUp,
  loading: state.auth.fetching,
  signUpSuccess: state.auth.signUpSuccess,
  signUpFailure: state.auth.signUpFailure,
});

const mapDispatchToProps = (dispatch) => ({
  showSignUp: () => { dispatch(Actions.showSignUp) },
  cancelSignUp: () => { dispatch(Actions.cancelSignUp) },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

//export default HomePage;
