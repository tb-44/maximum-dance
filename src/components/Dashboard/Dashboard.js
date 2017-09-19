import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParentInfo } from '../../ducks/reducer';
import Header from './../Header/Header';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      imagePreviewUrl: ''
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

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl ) {
      $imagePreview = ( <img src={imagePreviewUrl} alt="" /> );
    }

    return (

       <div id="dashboard"><Header pageTitle="Dashboard"/>
        <section className="dashpage">
        
        <form onSubmit={this.handleSubmit}>
        <label className="form">
          First Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>

        <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
        </div>




         <h1>Maximum Dance</h1>
         <div className='parentContainer'>
             <h4>Parent Information:</h4>
                 {this.props.parent ? <img className='avatar' src={this.props.parent.img} alt='' /> : null }
             <div>
                 <p>First Name: { this.props.parent ? this.props.parent.firstname : null }</p>
                 <p>Last Name: { this.props.parent ? this.props.parent.lastname : null }</p>
                 <p>Email: { this.props.parent ? this.props.parent.email : null }</p>
                 {/* <p>ID: { this.props.parent ? this.props.parent.id : null }</p> */}
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
