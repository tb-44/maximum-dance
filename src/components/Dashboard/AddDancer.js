import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDancerInfo } from '../../ducks/reducer';
// import Header from './../Header/Header';
// import './Dashboard.css';

class AddDancer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      classname: '',
      age: ''
      
    }
    
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
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
        <section className="dashpage">

        <div id="parent-form">
				  <form className='parent_form'>

					<fieldset className='form-parents'>
            <p>*All fields are required for Dancer Registration below</p>
						<label >First Name:</label>

						<input id='formFirstName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "firstName") } value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Last Name:</label>

						<input id='formLastName' className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "lastName") } value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Classname:</label>

						<input id='formClassName' className='form-input' name="classname" type='text' 
            onChange={ (e) => this.handleChange(e, "classname") } value={this.state.classname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Age:</label>

						<input id='formAge' className='form-input' name="age" type='text' 
            onChange={ (e) => this.handleChange(e, "age") } value={this.state.age} />
					</fieldset>

          <button className="submit-button" onClick={ () => this.props.addDancerInfo(this.state, this.props.parent.id) }>Submit</button>

				</form>
			</div>

         {/* <h1>Maximum Dance</h1> */}
         {/* <div className='parentContainer'> */}
             {/* <h4>Parent Information:</h4>
                 {this.props.parent ? <img className='avatar' src={this.props.parent.img} alt='' /> : null }
                
                <div>
                 <p>First Name: { this.props.parent ? this.props.parent.firstname : null }</p>
                 <p>Last Name: { this.props.parent ? this.props.parent.lastname : null }</p>
                </div> */}

                 {/* <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
         </div> */}

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

export default connect( mapStateToProps, { addDancerInfo } )(AddDancer);