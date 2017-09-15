import React, { Component } from 'react';
import './ParentPortal.css';
import Header from './../Header/Header';
// import axios from 'axios';
import logo from './Slice.png';
import imgLogo from './Maximun Dance.png';


class ParentPortal extends Component {

  // test() {
  //   axios.get('/auth/me').then(res => {
  //     console.log(res);
  //   })
  // }

render() {
		return (
			<div id="dashboard"><Header pageTitle="Dashboard"/>
			
				<div className="central-login">
					<div className="login-container">

            <div className="parent-portal">
							Parent Portal
            </div>
						<div className="login-button-container">
						<div className='App'>
								<div>
                <img src={logo} alt='logo'/>
								</div>
								<div>
									<img src={imgLogo} alt='imgLogo'/>
									</div>
								<div>
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
								</div>
            </div>
						</div>
					</div>
				</div>
        {/* <button onClick={this.test}>test</button> */}
			</div>
		)
	}
}

export default ParentPortal;
