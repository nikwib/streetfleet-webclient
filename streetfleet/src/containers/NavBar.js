import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import authActions from './../store/actions/auth.actions';
import carsActions from './../store/actions/cars.actions';
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

  renderMenu = () => {
    return (
        <div>
          <span className="UserName">{this.props.company.username}</span>
          <Nav pullRight>
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
      </div>
    );
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          {(this.props.loggedIn) ? <Link to="/"> <img src={Logo} className="sf-logo" alt="StreetFleet" /> </Link> : null}
          </Navbar.Brand>
        </Navbar.Header>
        {(this.props.loggedIn) ? this.renderMenu() : null}
        <AddCar />
        <EditCar />
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
