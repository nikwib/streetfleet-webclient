import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// ACTIONS
import authActions from './../store/actions/auth.actions';
import carsActions from './../store/actions/cars.actions';
// CREATE ACCOUNT
import CreateAccount from '../components/CreateAccount/Create';
import CreateAccountSuccess from '../components/CreateAccount/Success';
import CreateAccountFailure from '../components/CreateAccount/Failure';
// LOGIN
import Login from '../components/Login/Login';
import LoginFailure from '../components/Login/Failure';
// ADD CAR
import AddCar from './../components/AddCar/AddCar';
import AddCarSuccess from './../components/AddCar/Success';
import AddCarFailure from './../components/AddCar/Failure';
// STYLE
import Logo from '../img/street-fleet-logo.svg';
import '../css/NavBar.css';

class NavBar extends Component {

  componentWillMount = () => {
    this.props.loadUserFromToken()
  }

  renderLogin = () => {
    return (
      <Button
        className="LoginButton pull-right"
        bsSize="small"
        bsStyle="primary"
        onClick={this.props.onShowLogin}
      > Login </Button>
    )
  };

  renderMenu = () => {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          {this.props.username}
        </NavItem>
        <NavDropdown eventKey={1} className="button" title={<i className="fas fa-bars"></i>} id="basic-nav-dropdown">
          <LinkContainer to="/"><MenuItem className="MenuItem">Home</MenuItem></LinkContainer>
          <MenuItem divider />
          <LinkContainer to="/MapView"><MenuItem className="MenuItem">Live Map</MenuItem></LinkContainer>
          <LinkContainer to="/FleetOverview"><MenuItem className="MenuItem">Fleet Overview</MenuItem></LinkContainer>
          <MenuItem className="MenuItem" onClick={this.props.onShowAddVehicle}>Add Vehicle</MenuItem>
          <MenuItem divider />
          <LinkContainer to="/"><MenuItem className="MenuItem" onClick={this.props.logout}>Sign Out</MenuItem></LinkContainer>
        </NavDropdown>
      </Nav>
    )
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> <img src={Logo} className="sf-logo" alt="StreetFleet" /> </Link>
          </Navbar.Brand>
        </Navbar.Header>
        {(this.props.loggedIn) ? this.renderMenu() : this.renderLogin()}
        <Login show={this.props.showLogin} />
        <LoginFailure show={this.props.showLoginFailure} />
        <AddCar show={this.props.showAddVehicle} />
        <AddCarSuccess show={this.props.showAddVehicleSuccess} />
        <AddCarFailure show={this.props.showAddVehicleFailure} />
        <CreateAccount show={this.props.showSignUp} />
        <CreateAccountSuccess show={this.props.signUpSuccess} />
        <CreateAccountFailure show={this.props.signUpFailure} />
      </Navbar>
    )
  }
}

// handleSuccess={this.handleSuccess}
const mapStateToProps = (state) => ({
  loading: state.auth.fetching,
  showSignUp: state.auth.showSignUp,
  signUpSuccess: state.auth.signUpSuccess,
  signUpFailure: state.auth.signUpFailure,

  showAddVehicle: state.cars.showAddVehicle,
  showAddVehicleSuccess: state.cars.showAddVehicleSuccess,
  showAddVehicleFailure: state.cars.showAddVehicleFailure,

  showLogin: state.auth.showLogin,
  showLoginSuccess: state.auth.showLoginSuccess,
  showLoginFailure: state.auth.showLoginFailure,

  loggedIn: state.auth.loggedIn,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  onShowLogin: () => { dispatch(authActions.onShowLogin) },
  logout: () => { dispatch(authActions.logout) },
  loadUserFromToken: () => { dispatch(authActions.loadUserFromToken) },
  onShowAddVehicle: (car) => { dispatch(carsActions.onShowAddVehicle) },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
