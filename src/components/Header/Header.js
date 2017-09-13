import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Link } from 'react-router-dom';
import homeIcon from '../../img/home.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <header>
  						<nav>
  							<h1>Maximum Dance</h1>
  							<Link to="/home"><img src={homeIcon} alt="Home" /></Link>
  						</nav>
  		  </header>

      </div>
    );
  }
}

export default Header;
