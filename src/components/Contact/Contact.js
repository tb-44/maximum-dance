import React, { Component } from 'react';
import Header from './../Header/Header';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {

      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''

    }

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleMessageChange(e, inputName) {
  this.setState({
    [inputName]: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
}

  render() {
    return (
      <div className="Contact">
        <Header/>
        
        <div id="profile-form">
          <br/>
          <p>Have a question or feedback? Drop us a line below! 
            We will get back to you as soon as we can.</p>

				<form className='react-form'>

					<fieldset className='form-group'>
						<label >Name:</label>

						<input id='formFirstName' className='form-input' name='name' type='text' 
            onChange={(e) => this.state.handleMessageChange(e)} value={this.state.name} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' name='email' type='text' 
            onChange={(e) => this.state.handleMessageChange(e)} value={this.state.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' 
            onChange={(e) => this.state.handleMessageChange(e)} value={this.state.phone} />
					</fieldset>

          <fieldset className='form-group'>
						<label>Subject:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' 
            onChange={(e) => this.state.handleMessageChange(e)} value={this.state.subject} />
					</fieldset>

          <fieldset className='form-group'>
						<label>Message:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' 
            onChange={(e) => this.state.handleMessageChange(e)} value={this.state.message} />
					</fieldset>

				</form>

        <button className="submit-button" onClick={ () => this.props.handleSubmit(this.state) }>Submit</button>
			</div>

      </div>
    );
  }
}

export default Contact;
