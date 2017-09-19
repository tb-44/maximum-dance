import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './header-logo.png';
import './Header.css';

class Header extends Component {

  render() {
    return (

      <div className="Header_parent_container">
        
        <div className="Header_child_left">
          <img src={headerLogo} alt="" />

          <div className="Header_child_right">
            <div className="home_link">
              <Link to="/">Home</Link>
            </div>

            <div className="about_link">
              <Link to="/about">About</Link>
            </div>

            <div className="schedule_link">
              <Link to="/schedule">Schedule</Link>
            </div>

            <div className="parent_link">
              <Link to="/parentportal">Parent Portal</Link>
            </div>

            <div className="contact_link">
              <Link to="/contact">Contact</Link></div>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
