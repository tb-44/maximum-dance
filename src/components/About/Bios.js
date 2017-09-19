import React, { Component } from 'react';
import instructor1 from './JulieCordery.jpg';
import './About.css';

class Bios extends Component {
  render() {
    return (
 

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

    );
  }
}

export default Bios;