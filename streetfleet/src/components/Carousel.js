import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../css/HomePage.css';
import fleetBanner from '../img/fleet.jpg';
import NewUser from '../containers/NewUser';
import Success from './Success';
import Actions from './../store/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   showModal: false,
    //   showSuccess: false
    // };
  }

  handleSignUp = () => {
    // this.setState({ showModal: true });
  }
  handleClose = () => {
    this.props.showSignUp(false);
    // this.setState({      
    //   showModal: false,
    //   showSuccess: false
    // });
  }
  handleSuccess = () => {
    this.setState({ showModal: true });
    // this.setState({
    //   showModal: false,
    //   showSuccess: true
    // });
  }

  render() {
    const msg = "Your account has been created"
    return (
      <Carousel>
        <Carousel.Item>
          <img className="bannerImg" width={'100%'} alt="Vehicle Fleet" src={fleetBanner} />
          <Carousel.Caption>
            <h1>Fast and easy solution for managing your fleets.</h1>
            <Button bsStyle="success" bsSize="large" onClick={this.props.showSignUp}>Try it!</Button>
            <NewUser
              showModal={this.props.showModal}
              handleClose={this.props.cancelSignUp}
            />
            {<Success
              showSuccess={this.props.signUpSuccess}
              handleClose={this.handleClose}
              handleSuccess={this.handleSuccess}
              message={msg}
            />}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

// handleSuccess={this.handleSuccess}

const mapStateToProps = (state) => ({
  showModal: state.showSignUp,
  signUpSuccess: state.signUpSuccess,
  signUpFailure: state.signUpFailure,
});

const mapDispatchToProps = (dispatch) => ({
  showSignUp: () => { dispatch(Actions.showSignUp) },
  cancelSignUp: () => { dispatch(Actions.cancelSignUp) },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

//export default HomePage;
