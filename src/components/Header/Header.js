import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">

      <header>
  						<nav>
  							<h1>Home</h1>
  							<Link to="/home">Home</Link>
  						</nav>
  		</header>

      </div>
    );
  }
}

export default Header;
