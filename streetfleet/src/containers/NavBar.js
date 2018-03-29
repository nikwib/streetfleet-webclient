import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import authActions from './../store/actions/auth.actions';
import carsActions from './../store/actions/cars.actions';
import CreateAccount from '../components/CreateAccount';
import Login from '../components/Login';
import AddCar from './../components/AddCar';
import EditCar from './../components/EditCar';
import EditAccount from './../components/EditAccount';
import DeleteAccount from './../components/DeleteAccount';
import Message from '../components/Message';
import Logo from '../img/street-fleet-logo.svg';
import '../css/NavBar.css';

class NavBar extends Component {

  componentWillMount = () => {
    this.props.loadUserFromToken();
  }

  renderLogin = () => {
    return (
      <Button
        className="LoginButton pull-right"
        bsSize="small"
        bsStyle="primary"
        onClick={this.props.onShowLogin}
      > Login
      </Button>
    );
  };

  renderMenu = () => {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          {this.props.company.username}
        </NavItem>
        <NavDropdown eventKey={1} className="button" title={<i className="fas fa-bars"></i>} id="basic-nav-dropdown">
          <LinkContainer to="/"><MenuItem className="MenuItem">Home</MenuItem></LinkContainer>
          <MenuItem divider />
          <LinkContainer to="/MapView"><MenuItem className="MenuItem">Live Map</MenuItem></LinkContainer>
          <LinkContainer to="/FleetOverview"><MenuItem className="MenuItem">Fleet Overview</MenuItem></LinkContainer>
          <MenuItem className="MenuItem" onClick={this.props.onShowAddVehicle}>Add Vehicle</MenuItem>
          <MenuItem divider />
          <MenuItem className="MenuItem" onClick={this.props.showEditAccount}>Edit My Account</MenuItem>
          <MenuItem className="MenuItem" onClick={this.props.showDeleteAccount}>Delete My Account</MenuItem>
          <MenuItem divider />
          <LinkContainer to="/"><MenuItem className="MenuItem" onClick={this.props.logout}>Sign Out</MenuItem></LinkContainer>
        </NavDropdown>
      </Nav>
    );
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
        <Login />
        <AddCar />
        <EditCar />
        <CreateAccount />
        <Message />
        <EditAccount />
        <DeleteAccount />
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.fetching,
  loggedIn: state.auth.loggedIn,
  company: state.auth.company,
});

const mapDispatchToProps = (dispatch) => ({

  loadUserFromToken: () => { dispatch(authActions.loadUserFromToken); },
  onShowAddVehicle: (car) => { dispatch(carsActions.onShowAddVehicle); },
  showEditAccount: () => { dispatch(authActions.showEditAccount) },
  showDeleteAccount: () => { dispatch(authActions.showDeleteAccount) },
  onShowLogin: () => { dispatch(authActions.onShowLogin); },
  logout: () => {
    dispatch(authActions.logout);
    dispatch(carsActions.logout);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
