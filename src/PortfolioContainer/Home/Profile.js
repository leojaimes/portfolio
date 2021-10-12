import React from 'react';
import PropTypes from 'prop-types';

const Profile = () => {
  return (
    <div className="profile-container">
      Profile
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
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
      </div>
    </div>
  );
}




Profile.propTypes = {
  name: PropTypes.string
};

export default Profile;