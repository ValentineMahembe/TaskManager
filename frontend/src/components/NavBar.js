import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/tasks/new">New Tasks</Link></li>
        <li><Link to="/tasks/pending">Pending Tasks</Link></li>
        <li><Link to="/tasks/completed">Completed Tasks</Link></li>
        <li><Link to="/tasks/calendar">Calendar</Link></li>
        <li className="dropdown">
          <Link to="/settings" className="dropbtn">Settings</Link>
          <div className="dropdown-content">
            <Link to="/change-password">Change Password</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;