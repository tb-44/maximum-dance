import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParentInfo } from '../../ducks/reducer';
import Header from './../Header/Header';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.getParentInfo()
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {

    return (

       <div id="dashboard"><Header pageTitle="Dashboard"/>
        <section className="dashpage">

          <h1>Welcome to your Dashboard</h1>
          <p>First Name: { this.props.parent ? this.props.parent.firstname : null }</p>
        
        
        {/* <form onSubmit={this.handleSubmit}>
        <label className="form">
          First Name:
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form> */}

        {/* <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
        </div> */}


        <div id="profile-form">
				<p>{this.props.error}</p>

	
				<form className='react-form'>

					<fieldset className='form-group'>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name='first_name' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.firstname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name='last_name' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.lastname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' name='email' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Address:</label>

						<input id='formAddress' className='form-input' name='address' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>city:</label>

						<input id='formCity' className='form-input' name='city' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.city} />
					</fieldset>

					<fieldset className='form-group'>
						<label>State:</label>

						<input id='formState' className='form-input' name='state' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.state} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Zip:</label>

						<input id='formZip' className='form-input' name='zip' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.zip} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.phone} />
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
                 <p>Email: { this.props.parent ? this.props.parent.email : null }</p>
                 <p>Address: { this.props.parent ? this.props.parent.address : null }</p>
                 <p>City: { this.props.parent ? this.props.parent.city : null }</p>
                 <p>State: { this.props.parent ? this.props.parent.state : null }</p>
                 <p>Zip: { this.props.parent ? this.props.parent.zip : null }</p>
                 <p>Phone: { this.props.parent ? this.props.parent.phone : null }</p>

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

let parentActions = {
  getParentInfo: getParentInfo
}

export default connect(mapStateToProps, parentActions)(Dashboard);
