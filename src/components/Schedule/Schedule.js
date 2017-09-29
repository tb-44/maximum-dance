import React, { Component } from 'react';
import Header from './../Header/Header';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


class Schedule extends Component {
  constructor(){
    super();
    
    this.state = {
      classInfo: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3005/api/getClasses').then(res => {
  //     this.setState({
  //       classInfo: res.data
  //     })
  //     console.log(this.state.classInfo)
  //   })
  // }
  
  render() {

    // var classDisplay = this.state.classInfo.map((classes,i) => {
    //   return (<div key={i} >
    //     <h2> { } </h2>
    //     <h3> { } </h3>
    //     </div>
    //   )
    // })

    BigCalendar.momentLocalizer(moment);
    const myEventsList = [];

    return (
      
      <div className="schedule_container">
        <Header />
       
        <section className="schedule_page">
          <div className="class_schedule">
            This is the Schedule Page
          </div>
        </section>

        <section>
          <div className="big_calender">
            <BigCalendar
              events={myEventsList}
              startAccessor='startDate'
              endAccessor='endDate' />
          </div>
        </section>
      </div>
    );
  }
}

export default Schedule;
