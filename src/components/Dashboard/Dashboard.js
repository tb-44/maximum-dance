import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParentInfo, addParentInfo } from '../../ducks/reducer';
import Header from './../Header/Header';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: ''

    }

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  componentDidMount(){
    this.props.getParentInfo();
  }

   handleChange(e, inputName) {
     this.setState({
       [inputName]: e.target.value
     });
    //  console.log(this.state);
   }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (

       <div id="dashboard"><Header pageTitle="Dashboard"/>
        <section className="dashpage">

        {/* <br/>
          <h1>Welcome to your Maximum Dance Dashboard: </h1> 
          <h1>{ this.props.parent ? this.props.parent.firstname : null }</h1>
          <h1>{ this.props.parent ? this.props.parent.lastname : null }</h1>
        <br/>  */}
        

        <div id="profile-form">
				  <form className='react-form'>

					<fieldset className='form-group'>
            <p>All fields are required for Registration below</p>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "firstName") } value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "lastName") } value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' name="email" type='text' 
            onChange={ (e) => this.handleChange(e, "email") } value={this.state.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Address:</label>

						<input id='formAddress' className='form-input' name="address" type='text' 
            onChange={ (e) => this.handleChange(e, "address") } value={this.state.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>city:</label>

						<input id='formCity' className='form-input' name="city" type='text' 
            onChange={ (e) => this.handleChange(e, "city") } value={this.state.city} />
					</fieldset>

					<fieldset className='form-group'>
						<label>State:</label>

						<input id='formState' className='form-input' name="state" type='text' 
            onChange={ (e) => this.handleChange(e, "state") } value={this.state.state} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Zip:</label>

						<input id='formZip' className='form-input' name="zip" type='text' 
            onChange={ (e) => this.handleChange(e, "zip") } value={this.state.zip} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' name="phone" type='text' 
            onChange={ (e) => this.handleChange(e, "phone") } value={this.state.phone} />
					</fieldset>

          <button className="submit-button" onClick={ () => this.props.addParentInfo(this.state) } >Submit</button>

				</form>
			</div>




      {/* <div id="profile-form">
				  <form className='react-form'>

					<fieldset className='form-group'>
            <p>All fields are required for Registration of your dancer</p>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "firstName") } value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "lastName") } value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Class:</label>

						<input id='formAddress' className='form-input' name="address" type='text' 
            onChange={ (e) => this.handleChange(e, "classname") } value={this.state.classname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Age:</label>

						<input id='formCity' className='form-input' name="city" type='text' 
            onChange={ (e) => this.handleChange(e, "age") } value={this.state.age} />
					</fieldset>

          <button className="submit-button-dancer" onClick={ () => this.props.addDancerInfo(this.state) } >Submit</button>

				</form>
			</div> */}




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
