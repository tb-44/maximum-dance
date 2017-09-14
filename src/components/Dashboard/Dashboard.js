import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParentInfo } from '../../ducks/reducer';
import './Dashboard.css';

class Dashboard extends Component {

  componentDidMount(){
    this.props.getParentInfo()
  }

  render() {
    return (
       <div id="dashboard">

         <h1>Maximum Dance</h1>
         <div className='parentContainer'>
             <h4>Parent Information:</h4>
                 {this.props.parent ? <img className='avatar' src={this.props.parent.img} alt='' /> : null }
             <div>
                 <p>First Name: { this.props.parent ? this.props.parent.firstName : null }</p>
                 <p>Last Name: { this.props.parent ? this.props.parent.lastName : null }</p>
                 <p>Email: { this.props.parent ? this.props.parent.email : null }</p>
                 <p>ID: { this.props.parent ? this.props.parent.id : null }</p>

             </div>
                 <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
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

let outputActions = {
  getParentInfo: getParentInfo
}

export default connect(mapStateToProps, outputActions)(Dashboard);
