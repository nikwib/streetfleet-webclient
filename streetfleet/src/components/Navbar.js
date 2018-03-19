import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Logo from '../img/street-fleet-logo.svg';

import '../css/NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <Navbar>
        <Nav>
          <NavDropdown eventKey={1} className="button" title={<i className="fas fa-bars"></i>} id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>Map</MenuItem>
            <MenuItem eventKey={1.3}>Fleet Overview</MenuItem>
            <MenuItem eventKey={1.4}>Add Vehicle</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.5}>Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
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
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;
