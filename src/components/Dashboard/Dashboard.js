import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getParentInfo } from '../../ducks/reducer';
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
    this.addNewParent = this.addNewParent.bind(this);
    this.handleParentInfo = this.handleParentInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.post('http://localhost:3005/api/').then(res => {
      this.setState({
        parents: res.data
      })
      console.log(this.state.parents)
    }) 
  }

  // componentDidMount(){
    // this.props.getParentInfo()

    addNewParent() {
      var parents = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone,
        email: this.state.email
      }
      axios.post('http://localhost:3005/api/parent').then(res => {
        console.log(res.data)
        this.setState({
          parent: res.data
          
        })
        // console.log()
      })
  }

  handleParentInfo(e) {
    this.setState({
      firstname: e.target.value,
      lastname: e.target.value,
      address: e.target.value,
      city: e.target.value,
      state: e.target.value,
      zip: e.target.value,
      phone: e.target.value,
      email: e.target.value

    });
  }

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
            onChange={this.handleParentInfo} value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Address:</label>

						<input id='formAddress' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>city:</label>

						<input id='formCity' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.city} />
					</fieldset>

					<fieldset className='form-group'>
						<label>State:</label>

						<input id='formState' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.state} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Zip:</label>

						<input id='formZip' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.zip} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' type='text' 
            onChange={(e) => this.state.handleParentInfo(e)} value={this.state.phone} />
					</fieldset>

				</form>
			</div>




        {/* <div>
          <h1>Please register for Student (Dancer)</h1>
          </div>

          <div id="profile-form">
				<p>{this.props.error}</p>

	
				<form className='react-form'>

					<fieldset className='form-group'>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name='firstname' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.firstname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name='lastname' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.lastname} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Age:</label>

						<input id='formEmail' className='form-input' name='age' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Gender:</label>

						<input id='formAddress' className='form-input' name='gender' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.address} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Class</label>

						<input id='formCity' className='form-input' name='class' type='text' onChange={(e) => this.props.handleChange(e)} value={this.props.city} />
					</fieldset>

			
				</form>
			</div> */}



         <h1>Maximum Dance</h1>
         <div className='parentContainer'>
             <h4>Parent Information:</h4>
                 {this.props.parent ? <img className='avatar' src={this.props.parent.img} alt='' /> : null }
             {/* <div>
                 <p>First Name: { this.props.parent ? this.props.parent.firstname : null }</p>
                 <p>Last Name: { this.props.parent ? this.props.parent.lastname : null }</p>
                 <p>Email: { this.props.parent ? this.props.parent.email : null }</p>
                 <p>Address: { this.props.parent ? this.props.parent.address : null }</p>
                 <p>City: { this.props.parent ? this.props.parent.city : null }</p>
                 <p>State: { this.props.parent ? this.props.parent.state : null }</p>
                 <p>Zip: { this.props.parent ? this.props.parent.zip : null }</p>
                 <p>Phone: { this.props.parent ? this.props.parent.phone : null }</p>
             </div> */}

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
