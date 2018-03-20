import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Login from './Login';
import AddCar from './AddCar';
import Success from '../components/Success';
import Logo from '../img/street-fleet-logo.svg';
import '../css/NavBar.css';


class NavBar extends Component {

  constructor(props) {
    super(props);

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

  render() {
    const msg = "Your new vehicle has been added. Please go to your mobile and enter the lisence plate to start tracking the trips."
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} className="sf-logo" alt="StreetFleet Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            User Name
          </NavItem>
          <NavDropdown eventKey={1} className="button" title={<i className="fas fa-bars"></i>} id="basic-nav-dropdown">
            <Link  className="MenuItem" to="/">Home</Link>
            <MenuItem divider />
            <Link  className="MenuItem" to="/MapView">Live Map</Link>
            <Link  className="MenuItem" to="/FleetOverview">Fleet Overview</Link>
            <a  className="MenuItem" onClick={this.handleAddVehicle}>Add Vehicle</a>
            <MenuItem divider />
            <a className="MenuItem" >Sign Out</a>
          </NavDropdown>
        </Nav>
        <Button
          className="LoginButton pull-right"
          bsSize="small"
          bsStyle="primary"
          onClick={this.handleLogin}
        >
          Login
        </Button>
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
          message={msg}
        />
      </Navbar>
    )
  }
}

export default NavBar;