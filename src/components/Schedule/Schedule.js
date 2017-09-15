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
        <div className="header">
        <Header/>
        </div>

        <div>
        This is the Schedule Page
        </div>

    <div className="big_calender">
    <BigCalendar 
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'/>
    </div>


      </div>
    );
  }
}

export default Schedule;
