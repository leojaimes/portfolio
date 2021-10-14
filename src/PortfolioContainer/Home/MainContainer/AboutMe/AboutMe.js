import React from 'react';
import PropTypes from 'prop-types';


import photo from 'assets/images/Home/Profile/profilephoto.jpg';
import "./AboutMe.css"
const AboutMe = () => {
  return (
    <main className="main">
    <section className="about-me">
    <div className="container-menu">
      <div className="photo">
        <img 
          src= {photo}
          width="115" 
          height="115" 
          alt="Leonardo Jaimes Estévez"/>
      </div>
    
      <div className="text">
        <h3 className="title">About me</h3>
        <p>This is <span className="bold">Photoshop's version</span> of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis <span class="bold">bibendum auctor</span>, nisi elit consequat ipsum.</p>
      </div>
    </div>
  </section>
  </main>
  );
}

AboutMe.propTypes = {};
 
export default AboutMe;