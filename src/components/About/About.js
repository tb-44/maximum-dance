import React, { Component } from 'react';
import Header from './../Header/Header';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="Contact">
        <Header />

        <section className="section parallax parallax-1">

          <div className="container">
            <h1>Section 1</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container">

            <h2>OUR MISSION</h2>
            <p>Maxium Dance is fully committed to providing all dancers with an encouraging environment
              to excel with well rounded technique
            </p>
            <h2>OUR MOTTO</h2>
            <p>'Dancing is the closest thing to Magic!'</p>
            
          </div>
        </section>
        <section className="section parallax parallax-2">
          <div className="container">
            <h1>Section 2</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container">

            <h2>BIOS</h2>
            <p>Dance Bios</p>
            <p>Pics</p>
            
          </div>
        </section>
        <section className="section parallax parallax-3">
          <div className="container">
            <h1>Section 3</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container">

            <h2>DANCE CLASSES</h2>
            <p>LIST OF CLASSES</p>
            <p>Students with pictures</p>
            
          </div>
        </section>
      </div>
    );
  }
}

export default About;
