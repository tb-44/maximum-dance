import React, { Component } from 'react';
import Header from './../Header/Header';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super();

    this.state ={
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // axios.post('http://localhost:3005/api/parent').then(res => {
      this.setState({
        // messages: res.data
        
      })
}

handleChange(e) {
  this.setState({

    name: e.target.value,
    email: e.target.value,
    phone: e.target.value,
    subject: e.target.value,
    message: e.target.value,
  
  });
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
            onChange={(e) => this.state.handleChange(e)} value={this.state.name} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Email:</label>

						<input id='formEmail' className='form-input' name='email' type='text' 
            onChange={(e) => this.state.handleChange(e)} value={this.state.email} />
					</fieldset>

					<fieldset className='form-group'>
						<label>Phone:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' 
            onChange={(e) => this.state.handleChange(e)} value={this.state.phone} />
					</fieldset>

          <fieldset className='form-group'>
						<label>Subject:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' 
            onChange={(e) => this.state.handleChange(e)} value={this.state.subject} />
					</fieldset>

          <fieldset className='form-group'>
						<label>Message:</label>

						<input id='formPhone' className='form-input' name='phone' type='text' 
            onChange={(e) => this.state.handleChange(e)} value={this.state.message} />
					</fieldset>

				</form>

        <button>Send Message</button>
			</div>



      </div>
    );
  }
}

export default Contact;
