import React, { Component } from 'react';
import Header from './../Header/Header';
import videobkgd from './DanceMov.mp4';
import videobkgd1 from './DanceMov.webm';
import './Home.css';

class Home extends Component {

	render() {

		return (

			<div id="header"><Header pageTitle="home" />
				<section className="homepage">

					<div className="fullscreen-bg">

						<video className="fullscreen-bg__video" autoPlay preload loop muted width="600" height="300">
							<source src={videobkgd} type="video/mp4" />
							<source src={videobkgd1} type="video/webm" />
						</video>

					</div>

					<div className="central-login">
						<div className="login-container">

							<div className="dance-logo">
								Maximum Dance
                        </div>

							<div className="home-login-button-container">
								<a href={process.env.REACT_APP_LOGIN}><button className="login-button raise">Login/Register</button></a>
							</div>


						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Home;
