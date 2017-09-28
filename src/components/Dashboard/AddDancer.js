import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDancerInfo } from '../../ducks/reducer';

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

						<input id='formFirstName' placeholder="First Name" className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "firstName") } value={this.state.firstname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Last Name:</label>

						<input id='formLastName' placeholder="Last Name" className='form-input' name="name" type='text' 
            onChange={ (e) => this.handleChange(e, "lastName") } value={this.state.lastname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Classname:</label>

						<input id='formClassName' placeholder="Classname" className='form-input' name="classname" type='text' 
            onChange={ (e) => this.handleChange(e, "classname") } value={this.state.classname} />
					</fieldset>

					<fieldset className='form-parents'>
						<label>Age:</label>

						<input id='formAge' placeholder="Student's Age" className='form-input' name="age" type='text' 
            onChange={ (e) => this.handleChange(e, "age") } value={this.state.age} />
					</fieldset>

          <button className="submit-button" onClick={ () => this.props.addDancerInfo(this.state, this.props.parent.id) }>Submit</button>
            
				</form>
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

export default connect( mapStateToProps, { addDancerInfo } )(AddDancer);