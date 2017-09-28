import React, { Component } from 'react';
import Header from './../Header/Header';
import instructor1 from '.././img/Taralee_resized.jpg';
import instructor2 from '.././img/JulieCordery_resized.jpg';
import instructor3 from '.././img/AllysonCrapo_resized.jpg';
import instructor4 from '.././img/Deborah_resized.jpg';

class About extends Component {
  render() {
    return (
      <div className="About-main-container">
        <Header/>

          <section>
            <div className="about_us_container">
              <div className="about1_text">
                <h1>ABOUT US</h1>
              </div>

              <div className="about2_text">
                Maximum Dance has been in operation for 16 years.
                Maximum Dance is a healthy environment where your dancer will learn and grow in the art of Dance.
                Maximum Dance  is offering classes in the following styles: 
                Jazz, Ballet, Hip hop, Technique, Turns, and Combo classes.
                Come be a part of our amazing Competition teams or just come take class. 
                At Maximum we believe Dancing is the closest thing to Magic. Register today! 
                We are operating in our Riverton studio.
              </div>
            </div>
          </section> 

          <section>
            <div className="bio_container">
              <div className="about1_text">
                <h1>INSTRUCTOR BIOS</h1></div>
                <div className="pic1">
                <img src={instructor1} alt="" /></div>
              
              <div className="about2_text"><strong>Taralee Lowrance</strong></div>
              <div className="about3_text">
                <p>Taralee is the Owner/Director of Maximum Dance which has been in operation since 2001. 
                  She has had extensive training in Jazz, Hip Hop, Ballet, Modern, and Tap for over 30 years
                  and trained under the direction of Laura King Spinning, Jennifer Burn Lewis, Jenn Turner, Scott Watts, and Trey Barber.
                <br/>
                <p>She is a former professional NBA Utah Jazz Dancer (2001-2002). She was selected as an ambassador dancer for the 2002 Winter Olympics held in Utah.  
                  Taralee was a member of the Bingham Minerettes Drill Team and has been a High School Drill team instructor. 
                  She has won numerous awards over the years with her choreography. 
                  She choreographed for the Utah Jazz Dancers and multiple Drill Teams. 
                  She was also the technique teacher for Herriman High School Drill Team. </p>
               
                <p>She's been a Guest Choreographer/Teacher for numerous dance studios in multiple states.
                  Most of her dancers move on to make their High School Drill Teams, Dance Co., and Cheerleading squads across the Salt Lake valley. 
                  Several have moved on to Collegiate dance teams and Professional dancing careers. 
                  She has been a Professional Judge for dance competitions and also beauty pageants in the Utah Miss America Circuit.
                  Taralee is passionate about dance and sharing her talents and love with her students. </p>
                <p>She also has a wonderful husband and three beautiful kids that she loves spending time with when she isn't busy with her Dancers!</p>
                </p>
              </div>
            </div>
          </section> 

          <section>
            <div className="bio_container2">
              <div className="about1_text">
                <h1>HIP HOP</h1></div>
                <img src={instructor2} alt="" />
             
              <div className="about2_text"><strong>Julie Cordery</strong></div>
              <div className="about3_text">
                <p>Julie started dancing at the age of 11.  She began dancing because of her twin sister and completely fell in love with the art. 
                  She was trained in jazz, ballet, hip hop, and lyrical. She danced on West Jordan High School's drill team her junior and senior year. 
                  In her first year of college, she was on Salt Lake Community College's dance company. 
                  She later received her associates degree and moved on to receive her bachelors degree from the University of Utah. 
                  She has been teaching dance for 10+ years. She has been teaching jazz technique, flexibility, and dance combinations. 
                  She has also critiqued and cleaned multiple dance routines to get ready for competitions. She enjoys teaching and helping dancers reach their highest potential. 
                <br/>
                </p>
              </div>
            </div>
          </section> 

          <section>
            <div className="bio_container3">
              <div className="about1_text">
                <h1>JAZZ</h1></div>
                <img src={instructor3} alt="" />
             
              <div className="about2_text"><strong>Allyson Crapo</strong></div>
              <div className="about3_text">
                <p>Allyson Crapo first started dancing when she was 9 years old with Maximum Dance. 
                  This is where she came to develop her love of dancing and what she wanted to do her whole life. 
                  She trained with Taralee for 7 years until she was on for the Copper Hills High School Drill team her Junior and Senior year of high school. 
                  She was awarded Drill All-State her senior year. She has trained in an all-styles professional dance company called Underground Crew for a year. 
                  With this company she learned styles from popping to hip hop to contemporary. 
                  She then went to UVU and studied Modern Dance for 3 years where she worked with notable choreographers like Carl Flink, Angie Banchero-Kelleher, Rosie Banchero, and Amy Markgraf Jacobson. 
                  She was on a pre professional company at UVU called Contemporary Dance Ensemble (CDE). While she was on CDE they traveled to Copenhagen, Denmark where she danced and presented at an international dance conference. 
                  She was on the UVU hip hop company Mosaic for a year. She completed her Associate in Dance in 2015. She is now working on getting a Bachelors in Exercise Science from UVU. 
                  She ultimately wants to keep her passion of dance alive and become a dance professor. 
                  Where she wants to teach dancers the amazing art of dance, but also educate them on their bodies and what an important tool it is to achieve movement. 
                <br/>
                </p>
              </div>
            </div>
          </section> 

          <section>
            <div className="bio_container4">
              <div className="about1_text">
                <h1>BALLET</h1></div>
                <img src={instructor4} alt="" />

              <div className="about2_text"><strong>Deborah R Latimer</strong></div>
              <div className="about3_text">
                <p>Deborah was born in Mexico City and graduated from Royal Academy of Dance, London in classical ballet.
                  At the age of 21 she participated at the National Ballet of Cuba under Alicia Alonso direction.
                  In 2002 she was part of the Metropolitan Dance Company in Mexico City.  She was a special Guest
                  dancer with Luxembourg Ballet during their international tour.
                  From 2005-2008 she was part of the San Diego City Ballet under direction of Steven and Elizabeth Wistrich.
                  She performed all classical and contemporary pieces including Bayadere, Swan Lake, Giselle, Nutcracker,
                  Paquita, La Fille Mal Gardee, Coppelia, Rubies, and Serenade from Balanchine.
                  She decided to transition from professional ballet to develop Pilates expertise. Debbie specilized in training
                  high level gymnasts such as Aria Rodii when she is part of the US National Team, as well as principal ballet 
                  dancers in San Diego and Mexico.  
                  Deborah is a Safety and Instructor certified professional member of the US Gymnastics Association. 
                <br/>
                </p>
              </div>
            </div>
          </section> 

        <section className="section parallax parallax-1">
          <div className="container">
            <h1>Dance</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container1">

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
          <div className="container2">

            <h3>DANCING IS LIKE DREAMING WITH YOUR FEET</h3>
            
          </div>
        </section>
        <section className="section parallax parallax-3">
          <div className="container">
            <h1>MAGIC</h1>
          </div>
        </section>
        <section className="section content">
          <div className="container1">

            <h2>DANCE CLASSES AVAILABLE</h2>
            <p>Hip Hop <br />

                Beginning/Intermediate Wednesday 7-8 pm <br/>
                Intermediate/Advanced Thursday 8:15-9:15 pm<br/>
                <br/>

                Jazz/Technique <br />

                Mon 4:30-5:30 Adv. Jazz Technique  11 years and up <br />
                Monday Inter. 7:45-9:30 pm 8-14 years old  <br />
                Tuesday 4:30-5:30 Beg/Inter 6-10 years old  <br />
                Tuesday 6:30-7:30 Beg/Inter 6-10 years old  <br />
                Tues Adv. 8-9 pm ages 11 years and up   <br />
                <br />

                Ballet <br />
                4:30-5:30<br />
                Thurs, Beginning 4:30-5:30 pm<br />
                Thurs Intermediate 5:30-6:45 pm<br />
                Thurs. Adv 6:45-8:15 pm<br />
                <br />
                Choreograpy<br />
                Monday 5:30-6:30 Enchant<br />
                Monday 6:30-6:45 Prestige<br />
                Tuesday 5:30-6:30 Illusion<br />
                <br />
                Turns<br />
                Intermediate/Adv.
                Friday 4:30-5:30 pm<br />

                3-5 year old Jazz/Ballet combo class<br />
                Mon 11-12 pm<br />
                Mon 1-2 pm<br />
              </p>
              
          </div>
        </section>
      </div>
    );
  }
}

export default About;