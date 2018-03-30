import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ul className="Footer">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  )
}

export default Footer;
