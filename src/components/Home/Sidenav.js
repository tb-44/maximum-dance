import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidenav extends Component {
    render() {
        return (
            <div className={"mobile_menu_container " + (this.props.showMenu ? 'show' : 'hidden')}>
                <div className="mobile_menu_header">
                    <button onClick={() => this.props.toggleMenu()} className="close_button">Menu   &#10006;</button>
                </div>
                    <ul>
                        <a><Link to='/about' className="home" onClick={() => this.props.toggleSubMenu()}>About</Link></a>
                        <a><Link to='/schedule' className="home">Schedule</Link></a>
                        <a><Link to='/parentportal' className="home">Parents</Link></a>
                        <a><Link to='/contact' className="home">Contact</Link></a>
                    </ul>
                </div>
        )
    }
}

