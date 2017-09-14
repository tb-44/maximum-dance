import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <header>
          <nav>
            <div>
              <Link to='/'>Home</Link>
              <Link to='/About'>About</Link>
              <Link to='/Schedule'>Schedule</Link>
              <Link to='/ParentPortal'>Parent Portal</Link>
              <Link to='/Contact'>Contact</Link>
            </div>
          </nav>
        </header>

      </div>
    );
  }
}

export default Header;
