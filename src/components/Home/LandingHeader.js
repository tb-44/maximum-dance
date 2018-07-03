import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingHeader extends Component {
    render() {
        return (
            <div className="mobile_menu_header">
               
                    <ul>
                        <a><Link to='/about' className="home">About</Link></a>
                        <a><Link to='/schedule' className="home">Schedule</Link></a>
                        <a><Link to='/parentportal' className="home">Parents</Link></a>
                        <a><Link to='/contact' className="home">Contact</Link></a>
                    </ul>
                </div>
        )
    }
}