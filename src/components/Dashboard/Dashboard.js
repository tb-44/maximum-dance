import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getParentInfo, addParentInfo } from '../../ducks/reducer';
import Header from './../Header/Header';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: ''
    }

    this.addParentInfo = this.addParentInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    this.props.getParentInfo()
  }

    addParentInfo() {
      const { firstname, lastname, address, city, state, zip, phone, email } = this.state;
      return addParentInfo({ firstname, lastname, address, city, state, zip, phone, email });
  }

  // handleParentInfo(e) {
  //   this.setState({

  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (

       <div id="dashboard"><Header pageTitle="Dashboard"/>
        <section className="dashpage">

        <br/>
          <h1>Welcome to your Maximum Dance Dashboard: </h1> 
          <h1>{ this.props.parent ? this.props.parent.firstname : null }</h1>
          <h1>{ this.props.parent ? this.props.parent.lastname : null }</h1>
        <br/> 
        

        <div id="profile-form">

				<form className='react-form'>

					<fieldset className='form-group'>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' type='text' 
            onChange={this.addParentInfo} value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Address:</label>

						<input id='formAddress' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>city:</label>

						<input id='formCity' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.city} />
					</fieldset>

					<fieldset className='form-group'>
						<label>State:</label>

						<input id='formState' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.state} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Zip:</label>

						<input id='formZip' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.zip} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' type='text' 
            onChange={ this.addParentInfo } value={this.state.phone} />
					</fieldset>

				</form>
			</div>


         <h1>Maximum Dance</h1>
         <div className='parentContainer'>
             <h4>Parent Information:</h4>
                 {this.props.parent ? <img className='avatar' src={this.props.parent.img} alt='' /> : null }
                
                <div>
                 <p>First Name: { this.props.parent ? this.props.parent.firstname : null }</p>
                 <p>Last Name: { this.props.parent ? this.props.parent.lastname : null }</p>
                </div>

                 <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
         </div>
      </section>
			</div>
    );
  }
}


function mapStateToProps(state){
  return {
    parent: state.parent
  }
}


export default connect( mapStateToProps, { getParentInfo, addParentInfo } )(Dashboard);
