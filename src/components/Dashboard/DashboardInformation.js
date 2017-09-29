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
    console.log(this.state.dancerInfo)

    var dancers = this.state.dancerInfo.map((dancer, i) => {
      return (
        <div key={i}>
          <h3> {dancer.id} </h3>
          <h3> {dancer.firstname} </h3>
          <h3> {dancer.lastname} </h3>
          <h3> {dancer.classname} </h3>
          <h3> {dancer.age} </h3>
        </div>
      )
    })

    return (

      <div id="dashboardInfo">
        <div>
          <h2>Your student(s) have now been registered!</h2>
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