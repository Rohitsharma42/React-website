import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand in-active" to="/">Demo-Website</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
