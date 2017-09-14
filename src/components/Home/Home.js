import React, { Component } from 'react';
import Header from './../Header/Header';
import './Home.css';

class Home extends Component {

render() {

		return (
			
			<div className="main-container">
				<div>
				<Header/>
				</div>
				
				<div className="central-login">
					<div className="login-container">
						<div className="helo">
							Home page
                            </div>
						<div className="login-button-container">
						<a href={process.env.REACT_APP_LOGIN}><button className="login-button raise">Login / Register</button></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
