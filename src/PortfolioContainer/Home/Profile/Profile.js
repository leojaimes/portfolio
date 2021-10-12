import React from 'react';
import PropTypes from 'prop-types';
import Typical from "react-typical";
import './Profile.css'
const Profile = () => {
  return (
    <div className="profile-container">
    <div className="profile-parent">
      <div className="profile-details">
        <div className="colz">
          <div className="colz-icon">
          <a href="https://www.facebook.com/profile.php?id=100006489615076" target="_blank" rel="noreferrer" >
              <i className="fa fa-facebook-square"></i>
            </a>
            
            <a href="https://www.linkedin.com/in/leonardo-jaimes-est%C3%A9vez-a6b018126/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin-square "></i>
            </a>


            <a href="https://github.com/leojaimes" target="_blank" rel="noreferrer">
              <i className="fa fa-github-square"></i>
            </a>

            <a href="https://twitter.com/EstevezJaimes" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter-square"></i>
            </a>

          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello, I'M <span className="highlighted-text">Ehiedu</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 😎",
                  1000,
                  "Full stack Developer 💻",
                  1000,
                  "Mern stack Dev 📱",
                  1000,
                  "Cross Platform Dev 🔴",
                  1000,
                  "React/React Native 🌐",
                  1000,
                ]}
              />
            </h1>
          </span>
          <span className="profile-role-tagline">
            Knack of building applications with front and back end operations.
          </span>
        </div>

        <div className="profile-options">
          <button className="btn primary-btn"
          onClick={() => {}}
          > Hire Me </button>
          <a href="../../../assets/cvs/leonardo-jaimes-estevez-cv.pdf" download="Leonardo Jaimes.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  </div>
  );
}




Profile.propTypes = {
  name: PropTypes.string
};

export default Profile;