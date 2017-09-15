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
            <a><Link to="/" className="active">Home</Link></a>
            <a><Link to="/about" className="active">About</Link></a>
            <a><Link to="/schedule" className="active">Schedule</Link></a>
            <a><Link to="/parentportal" className="active">Parent Portal</Link></a>
            <a><Link to="/contact" className="active">Contact</Link></a>
          </ul>
          </div>
          </nav> 
    );
  }
}

export default Header;
