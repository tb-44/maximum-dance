import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDancerInfo } from '../../ducks/reducer';
import axios from 'axios';

class DashboardInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dancerInfo: []
    }
  }

  componentDidMount() {
    axios.get('auth/me').then((response) => {
      console.log(response.data.id);
      axios.post('http://localhost:3005/api/getDancerInfo/', { id: response.data.id }).then(res => {
        console.log(res);
        this.setState({
          dancerInfo: res.data
        })
      })
    })
  }

  render() {
    // console.log(this.state.dancerInfo)
    var classFees = 100;
    var dancers = this.state.dancerInfo.map((dancer, i) => {
      return (
        <div className="dancer" key={i}>
          <h3>Dancer Name : {dancer.firstname} <span> {dancer.lastname} </span></h3>
          <h3>Registered Class :  {dancer.classname} </h3>
          <h3>Age :  {dancer.age} </h3>
          <h3>Dance Fees: ${classFees} <span>per month</span></h3>
        </div>
      )
    })

    return (

      <div id="dashboardInfo">
        <div>
          <h2>Your student(s) are already registered!</h2>
          <h3>Please pay your monthly fees below with credit card:</h3>
        </div>
        {dancers}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    parent: state.parent

  }
}

export default connect(mapStateToProps, { getDancerInfo })(DashboardInformation);