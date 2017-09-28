import React, { Component } from 'react';
import Header from './../Header/Header';
import logo from './maximum-dance-logo.png';

class ParentPortal extends Component {

	render() {
		return (
			<div id="parent-portal-container">
				<Header/>
				<div className="central-login">
					<div className="login-container">
						<div className="parent-portal">
							<h2>Welcome to the Parent Portal</h2>
						</div>
						
						<div className="login-button-container">
							<div className="center_logo">
								<img src={logo} alt='logo' />
							</div>
							<div>
								<a href={process.env.REACT_APP_LOGIN}>
								<button className="login-button">Login/Register</button></a>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ParentPortal;
