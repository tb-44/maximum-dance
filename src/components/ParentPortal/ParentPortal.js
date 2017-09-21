import React, { Component } from 'react';
import './ParentPortal.css';
import Header from './../Header/Header';
import logo from './maximum-dance-logo.png';

class ParentPortal extends Component {

	render() {
		return (
			<div id="dashboard"><Header pageTitle="Dashboard" />

				<div className="central-login">
					<div className="login-container">

						<div className="parent-portal">
							<h3>Welcome to the Parent Portal</h3>
						</div>
						<div className="login-button-container">

								{/* <div className="big_logo">
									<img src={logo} alt='logo' />
								</div> */}

								<div>
									<a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
								</div>
								
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ParentPortal;
