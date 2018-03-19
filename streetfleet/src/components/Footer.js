import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ul className="Footer">
      <li>
        <Link to="/HomePage">Home</Link>
      </li>
      <li>
        <Link to="/MapView">Live Map</Link>
      </li>
      <li>
        <Link to="/FleetOverview">Fleet Overview</Link>
      </li>
    </ul>
  )
}

export default Footer;
