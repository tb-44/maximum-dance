import React, { Component } from 'react';
import Header from './../Header/Header';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Typist from 'react-typist';


class Schedule extends Component {
  constructor(){
    super();
    
    this.state = {
      classInfo: []
    }
  }
  
  render() {

    BigCalendar.momentLocalizer(moment);
    const myEventsList = [];

    return (
      
      <div className="schedule_container">
        <Header />

        <div className="type">
        <Typist className="new_type">
  						Dance Schedule
					</Typist>
          </div>

    
            <div className="schedule_jazz_container">
              <div className="jazz_text">
                <h1>JAZZ/TECHNIQUE</h1>
              </div>

              <div className="jazz2_text">
                <h3><strong>SCHEDULE</strong></h3>
              
              <p>Advanced 11 years and up</p>
              <p>Monday 4:30-5:30</p>
              Monday Inter. 7:45-9:30 pm 8-14 years old  <br />
              Tuesday 4:30-5:30 Beg/Inter 6-10 years old  <br />
              Tuesday 6:30-7:30 Beg/Inter 6-10 years old  <br />
              Tues Adv. 8-9 pm ages 11 years and up   <br /><br/>
              
              </div>
            </div>
        
        
          <div className="big_calender">
            <BigCalendar
              events={myEventsList}
              startAccessor='startDate'
              endAccessor='endDate' />
          </div>
       
      </div>
    );
  }
}

export default Schedule;
