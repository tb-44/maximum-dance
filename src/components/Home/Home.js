import React, { Component } from 'react';
import videobkgd from './DanceMov.mp4';
import videobkgd1 from './DanceMov.webm';
import Sidenav from './Sidenav';
import homeIcon from './maximum-dance-logo-video-overlay.png';
import svg from './hamburger.svg';
import Typist from 'react-typist';
import background from './background3.jpg';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			showMenu: false,
			showSubMenu: false
		}

		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleSubMenu = this.toggleSubMenu.bind(this);
	}

	toggleMenu() {
		this.setState({
			showMenu: !this.state.showMenu
		})
	}

	toggleSubMenu() {
		this.setState({
			showSubMenu: !this.state.showSubMenu
		})
	}


	render() {
		return (
			<div className="main-container">
				<div className="fullscreen-bg">

					<Typist className="MyTypist_Text">
  						Dancing is like dreaming with your feet
					</Typist>

					<button className="logo" onClick={ () => this.toggleMenu() }>
						<img src={svg} alt="" />
					</button>

					<Sidenav toggleMenu={this.toggleMenu}
						showMenu={this.state.showMenu}
						toggleSubMenu={this.toggleSubMenu}
						showSubMenu={this.state.showSubMenu} 
					/>

					<img src={homeIcon} alt='homeIcon' className="video-overlay" />
					
					<video className="fullscreen-bg__video" autoPlay preload loop muted width="650" height="350">
						<source src={videobkgd} type="video/mp4" />
						<source src={videobkgd1} type="video/webm" />
					</video>

					{/* <iframe className="backgroundvid" src="https://player.vimeo.com/video/240670787?autoplay=1&loop=1" title="backgroundvid"
					allowFullScreen ></iframe> */}

					{/* <img className="background" src={background} alt="background"/> */}

				</div>
			</div>
		)
	}
}

export default Home;
