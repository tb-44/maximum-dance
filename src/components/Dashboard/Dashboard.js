import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParentInfo, addParentInfo } from '../../ducks/reducer';
import Header from './../Header/Header';
import AddDancer from './AddDancer';
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
   }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (

       <div id="dashboard">
         <Header />

        <div className="dash-container">
        <section className="dashpage">

        {/* <div className="welcome-container">
          <h1>Welcome to your Maximum Dance Dashboard: </h1> 
          <h1>{ this.props.parent ? this.props.parent.firstname : null }</h1>
          <h1>{ this.props.parent ? this.props.parent.lastname : null }</h1>
        </div>  */}
        
        <div id="parent-form">
				  <form className='parent_form'>

          <div className="flex-inner-wrapper">

					<fieldset className='form-parents'>
            <p>*All fields are required for Parent Registration below</p>
						<label for="text">First Name:</label>
						<input id='formFirstName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "firstName") } value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Last Name:</label>
						<input id='formLastName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "lastName") } value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Email:</label>
						<input id='formEmail' className='form-input' name="email" type='text' 
            onChange={ (e) => this.handleChange(e, "email") } value={this.state.email} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Address:</label>
						<input id='formAddress' className='form-input' name="address" type='text' 
            onChange={ (e) => this.handleChange(e, "address") } value={this.state.address} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>city:</label>
						<input id='formCity' className='form-input' name="city" type='text' 
            onChange={ (e) => this.handleChange(e, "city") } value={this.state.city} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>State:</label>
						<input id='formState' className='form-input' name="state" type='text' 
            onChange={ (e) => this.handleChange(e, "state") } value={this.state.state} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Zip:</label>
						<input id='formZip' className='form-input' name="zip" type='text' 
            onChange={ (e) => this.handleChange(e, "zip") } value={this.state.zip} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Phone:</label>
						<input id='formPhone' className='form-input' name="phone" type='text' 
            onChange={ (e) => this.handleChange(e, "phone") } value={this.state.phone} />
					</fieldset>

          <button className="submit-button" onClick={ () => this.props.addParentInfo(this.state) } >Submit</button>
        </div>

				</form>
			</div>

      <div className="add-dancer-container">
      <AddDancer/>
      </div>

         {/* <h1>Maximum Dance</h1> */}
         {/* <div className='parentContainer'> */}
             {/* <h4>Parent Information:</h4>
                 {this.props.parent ? <img className='avatar' src={this.props.parent.img} alt='' /> : null }
                
                <div>
                 <p>First Name: { this.props.parent ? this.props.parent.firstname : null }</p>
                 <p>Last Name: { this.props.parent ? this.props.parent.lastname : null }</p>
                </div> */}

                 <a href={process.env.REACT_APP_LOGOUT}><button className="submit-button">Logout</button></a>
         {/* </div> */}


      </section>
      </div>
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
