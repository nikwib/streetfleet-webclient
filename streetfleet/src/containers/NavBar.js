import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import Actions from './../store/actions/auth.actions';

import Login from './Login';
import AddCar from './AddCar';
import Success from '../components/Success';
import Logo from '../img/street-fleet-logo.svg';
import '../css/NavBar.css';


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.props.loadUserFromToken();
    this.state = {
      showLogin: false,
      showModal: false,
      showSuccess: false
    };
  }

  handleAddVehicle = () => {
    this.setState({ showModal: true });
  }
  handleLogin = () => {
    this.setState({ showLogin: true });
  }

  handleClose = () => {
    this.setState({
      showLogin: false,
      showModal: false,
      showSuccess: false
    });
  }

  handleSuccess = () => {
    this.setState({
      showLogin: false,
      showModal: false,
      showSuccess: true
    });
  }

  onLogOut = () => {
    this.props.logout()
  }

  renderLogin = () => {
    return (
      <Button
        className="LoginButton pull-right"
        bsSize="small"
        bsStyle="primary"
        onClick={this.handleLogin}
      >
        Login
        </Button>
    )
  }

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
          <MenuItem className="MenuItem" onClick={this.handleAddVehicle}>Add Vehicle</MenuItem>
          <MenuItem divider />
          <MenuItem className="MenuItem" onClick={this.onLogOut}>Sign Out</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} className="sf-logo" alt="StreetFleet Logo" />
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        {(this.props.loggedIn) ? this.renderMenu() : this.renderLogin()}
        <Login
          className="Test"
          showLogin={this.state.showLogin}
          handleClose={this.handleClose}
        />
        <AddCar
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          handleSuccess={this.handleSuccess}
        />
        <Success
          showSuccess={this.state.showSuccess}
          handleClose={this.handleClose}
          handleSuccess={this.handleSuccess}
          message={"Your new vehicle has been added. Please go to your mobile and enter the license plate to start tracking the trips."}
        />
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch(Actions.logout) },
  loadUserFromToken: () => { dispatch(Actions.loadUserFromToken) }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
