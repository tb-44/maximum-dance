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
  
  render() {

    BigCalendar.momentLocalizer(moment);

    return (
      
      <div className="schedule_container">
        <Header />

        <section>
          <div className="Class_schedule">
            <h1>Class Schedule</h1>
            </div>

          <div className="schedule_class_container">
              <div className="jazz1_text">
                <h2>JAZZ/TECHNIQUE</h2>
              </div>

              <div className="jazz2_text">
                <h3><strong>Advanced</strong></h3>
                  11 years old and up - Monday @ 4:30 - 5:30 pm
                <h3><strong>Intermediate</strong></h3>
                  8-14 years old - Monday @ 7:45 - 9:30 pm
                <h3><strong>Beginner/Intermediate</strong></h3>
                  6-10 years old - Tuesday @ 4:30 - 5:30 pm
                <h3><strong>Beginner/Intermediate - (Technique)</strong></h3>
                  6-10 years old - Tuesday @ 6:30 - 7:30 pm
                <h3><strong>Advanced</strong></h3>
                  11 years old and up - Tuesday @ 8:00 - 9:00 pm
              </div>
            </div>

            <div className="schedule_class_container">
              <div className="jazz1_text">
                <h2>BALLET</h2>
              </div>

              <div className="jazz2_text">
                <h3><strong>Beginner</strong></h3>
                  Thursday @ 4:30 - 5:30 pm
                <h3><strong>Intermediate</strong></h3>
                  Thursday @ 5:30 - 6:45 pm
                <h3><strong>Advanced</strong></h3>
                  Thursday @ 6:45 - 8:15 pm
              </div>
            </div>

            <div className="schedule_class_container">
              <div className="jazz1_text">
                <h2>HIP-HOP</h2>
              </div>

              <div className="jazz2_text">
                <h3><strong>Beginner/Intermediate</strong></h3>
                  Wednesday @ 7:00 - 8:00 pm
                <h3><strong>Intermediate/Advanced</strong></h3>
                  Thursday @ 8:15 - 9:15 pm
              </div>
            </div>

            <div className="schedule_class_container">
              <div className="jazz1_text">
                <h2>TURNS</h2>
              </div>

              <div className="jazz2_text">
                <h3><strong>Intermediate/Advanced</strong></h3>
                  Friday @ 4:30 - 5:30 pm
              </div>
            </div>

            <div className="schedule_class_container">
              <div className="jazz1_text">
                <h2>JAZZ/BALLET COMBO</h2>
              </div>

              <div className="jazz2_text">
                <h3><strong>Intermediate/Advanced</strong></h3>
                  <p>3-5 year olds - Monday @ 11:00 - 12:00 pm</p>
                  3-5 year olds - Monday @ 1:00 - 2:00 pm
              </div>
            </div>

            <div className="schedule_class_container">
              <div className="jazz1_text">
                <h2>CHOREOGRAPHY</h2>
              </div>

              <div className="jazz2_text">
                <h3><strong>Enchant</strong></h3>
                  <p>Monday @ 5:30 - 6:30 pm</p>
                <h3><strong>Prestige</strong></h3>
                  <p>Monday @ 6:30 - 6:45 pm</p>
                <h3><strong>Illusion</strong></h3>
                  <p>Tuesday @ 5:30 - 6:30 pm</p>
              </div>
            </div>

          </section>
          <br/>
          {/* <div className="big_calender">
            <BigCalendar
              events={myEventsList}
              startAccessor='startDate'
              endAccessor='endDate' />
          </div> */}
       
      </div>
    );
  }
}

export default Schedule;
