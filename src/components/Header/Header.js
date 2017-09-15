import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './../Home/Slice.png';
// import imgLogo from './../Home/Maximun Dance.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      
          <nav className="main_header">
         

          <div id="header">
          <ul id="desktop_nav">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/schedule" className="active">Schedule</Link></li>
            <li><Link to="/parentportal" className="active">Parent Portal</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
          </ul>
          </div>
          </nav> 
    );
  }
}

export default Header;
