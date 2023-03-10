import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs justify-content-between">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? 'nav-link active' : 'nav-link'}
        >
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/friendslist"
          className={location.pathname === "/friendslist" ? 'nav-link active' : 'nav-link'}
        >
          FriendsList
        </Link>
      </li>
      <ul className="nav flex-row">
        <li className="nav-item">
          <Link
            to="/Login"
            className={location.pathname === "/Login" ? 'nav-link active' : 'nav-link'}
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/register"
            className={location.pathname === "/register" ? 'nav-link active' : 'nav-link'}
          >
            Register
          </Link>
        </li>
      </ul>
    </ul>
  );
}

export default NavTabs;



