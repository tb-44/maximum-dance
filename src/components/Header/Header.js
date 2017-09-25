import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './header-logo.png';
import './Header.css';

class Header extends Component {

  render() {
    return (

      <header id="main-header">
        
        <div className="header-container">
          <div className="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
              <img src={headerLogo} alt="" />
            </div>

          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            <nav id="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/parentportal">Parents</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          </div>
          </div>
      </header>
    );
  }
}

export default Header;
