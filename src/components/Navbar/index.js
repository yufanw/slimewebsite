import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => (
  <div className="navbar-comp">
    <div className="main-link">
      <NavLink to={process.env.PUBLIC_URL + '/'}>
        <h4>Slime Bot</h4>
      </NavLink>
    </div>
    <div className="navbar-links">
      <NavLink
        to='/gettingstarted'
        activeClassName="active-link">
        <div className="nav-link">Getting Started</div>
      </NavLink>
      <NavLink
        to='/commands'
        activeClassName="active-link">
        <div className="nav-link">Commands</div>
      </NavLink>
    </div>
  </div>

)

export default Navbar;