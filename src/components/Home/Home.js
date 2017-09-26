import React, { Component } from 'react';
import videobkgd from './DanceMov.mp4';
import videobkgd1 from './DanceMov.webm';
import Sidenav from './Sidenav';
import homeIcon from './maximum-dance-logo-video-overlay.png';
import svg from './hamburger.svg';
import './Home.css';

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
					<button className="logo" onClick={() => this.toggleMenu()}>
						<img src={svg} alt="" /></button>

					<Sidenav toggleMenu={this.toggleMenu}
						showMenu={this.state.showMenu}
						toggleSubMenu={this.toggleSubMenu}
						showSubMenu={this.state.showSubMenu} />

					<img src={homeIcon} alt='' className="video-overlay" />
					<video className="fullscreen-bg__video" autoPlay preload loop muted width="650" height="350">
						<source src={videobkgd} type="video/mp4" />
						<source src={videobkgd1} type="video/webm" />
					</video>
				</div>
			</div>
		)
	}
}

export default Home;
