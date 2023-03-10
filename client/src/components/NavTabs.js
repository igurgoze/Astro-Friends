import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
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
          to="/blog"
          className={location.pathname === "/blog" ? 'nav-link active' : 'nav-link'}
        >
          FriendsList
        </Link>
      </li>
      <div className="d-flex ml-auto">
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? 'nav-link active' : 'nav-link'}
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
      </div>
    </ul>
  );
}

export default NavTabs;

