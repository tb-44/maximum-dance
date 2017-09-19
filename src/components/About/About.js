import React, { Component } from 'react';
import Header from './../Header/Header';
import instructor1 from './JulieCordery.jpg';
// import Bios from './Bios';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="Contact">
        <Header />
        

        <div className='about_container'>
            <h1>ALL ABOUT US </h1>
            <div className="outer_container">
              <div className='text_container'>

                <p>Maximum Dance has been in operation for 16 years.
                  Maximum Dance is a healthy environment where your dancer will learn and grow in the art of Dance.
                  Maximum Dance  is offering classes in the following styles: Jazz, Ballet, Hip hop, Technique, Turns, and Combo classes.
                  Come be apart of our amazing Competition teams or just come take class. 
                  At Maximum we believe Dancing is the closest thing to Magic. Register today! 
                  We are currently operating in Riverton.
                </p>

              </div>

              <div className='list_container'>
              </div>
            </div>
          </div>



          <div className='about_container'>
            <h1>INSTRUCTOR BIOS</h1>
            <div className="outer_container">
              <div className='text_container'>
                <div className="pics">
                  <img src={instructor1} alt="" />
                  <h3>Julie Cordery</h3>
                  <p> Julie started dancing at the age of 11.  She began dancing because of her twin sister and completely fell in love with the art.
                  She was trained in jazz, ballet, hip hop, and lyrical. She danced on West Jordan High School's drill team her junior and senior year.
                  In her first year of college, she was on Salt Lake Community College's dance company.
                  She later received her associates degree and moved on to receive her bachelors degree from the University of Utah.
                  She has been teaching dance for 10+ years. She has been teaching jazz technique, flexibility, and dance combinations.
                  She has also critiqued and cleaned multiple dance routines to get ready for competitions.
                  She enjoys teaching and helping dancers reach their highest potential.
                </p>
                </div>
              </div>
            </div>
          </div>




        <section className="section parallax parallax-1">
          <div className="container">
            <h1>Dance</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container">

            <h2>OUR MISSION</h2>
            <p>Maxium Dance is fully committed to providing all dancers with an encouraging environment
              to excel with well rounded technique
            </p>
            <h2>OUR MOTTO</h2>
            <p>Dancing is the closest thing to Magic</p>
            
          </div>
        </section>
        <section className="section parallax parallax-2">
          <div className="container">
            <h1>PRACTICE</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container">

            <h2>DANCE INSTRUCTOR BIOS</h2>
            
          </div>
        </section>
        <section className="section parallax parallax-3">
          <div className="container">
            <h1>MAGIC</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container">

            <h2>DANCE CLASSES</h2>
            <p>Hip Hop <br />

                Beginning/Intermediate Wednesday 7-8pm <br/>
                Intermediate/Advanced Thursday 8;15-9:15pm<br/>
                <br/>

                Ballet <br />

                Jazz/Technique <br />

                Mon 4:30-5:30 Adv. Jazz Technique  11 years and up <br />
                Monday Inter. 7:45-9:30 pm 8-14 years old  <br />
                Tuesday 4:30-5:30 Beg/Inter 6-10 years old  <br />
                Tuesday 6:30-7:30 Beg/Inter 6-10 years old  <br />
                Tues Adv. 8-9 pm ages 11 years and up   <br />
                <br />

                Ballet <br />

                4:30-5:30<br />
                Thurs, Beginning 4:30-5:30<br />
                Thurs Intermediate 5:30-6:45<br />
                Thurs. Adv 6:45- 8:15<br />
                <br />
                Choreograpy<br />
                Monday 5:30-6:30 Enchant<br />
                Monday 6:30-6:45 Prestige<br />
                Tuesday 5:30-6:30 Illusion<br />
                <br />
                Turns<br />
                Friday 4:30-5:30 Inter./Adv<br />

                3-5 year old Jazz/Ballet combo class<br />
                Mon 11-12pm<br />
                Mon 1-2pm<br />
              </p>

            
          </div>
        </section>
      </div>
    );
  }
}

export default About;