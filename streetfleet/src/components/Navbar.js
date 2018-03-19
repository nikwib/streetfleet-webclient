import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import Logo from '../img/street-fleet-logo.svg';

import AddCar from './AddCar';
import Success from './Success';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';


class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showSuccess: false
    };
  }

  handleAddVehicle = () => {
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
    const msg = "Your new vehicle has been added. Please go to your mobile and enter the lisence plate to start tracking the trips."
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src={Logo} className="sf-logo" alt="StreetFleet Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            User Name
          </NavItem>
          <NavDropdown eventKey={1} className="button" title={<i className="fas fa-bars"></i>} id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}> <Link to="/HomePage">Home</Link></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}> <Link to="/MapView">Live Map</Link></MenuItem>
            <MenuItem eventKey={1.3}> <Link to="/FleetOverview">Fleet Overview</Link></MenuItem>
            <MenuItem eventKey={1.4}> <Link to="/AddCar">Add Car</Link></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.5}>Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <Button className="Login" bsSize="small" bsStyle="primary">Login</Button>
        </Nav>
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
