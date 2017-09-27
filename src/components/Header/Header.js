import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './header-logo.png';
import './Header.css';

class Header extends Component {

  render() {
    return (

      <header id="main-header">
        <div className="header-container">
          
          <div className="header-logo">
          <img src={headerLogo} alt="" />
          </div>
            
            <nav id="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/parentportal">Parent</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
        </div>
      </header>
    );
  }
}

export default Header;
