import React, { Component } from 'react';
import Header from './../Header/Header';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Schedule.css';

class Schedule extends Component {
  render() {

    BigCalendar.momentLocalizer(moment);
    const myEventsList = [];

    return (

      <div className="schedule_container">
      
          <Header />
        

      <section className="schedule_page">
        <div>
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
