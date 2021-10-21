import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
const Header = () => {
  return (
    <header>
		<div className="container-menu">
			<nav className="menu">
				<a href="#.">About me</a>
				<a href="#.">Resume</a>
				<a href="#.">Testimonial</a>
        <a href="#.">Contact Me</a>
			</nav>
			
			<div className="container-text">
				<div className="text">
					<h1 className="name">Leonardo Jaimes E.</h1>
					<h2 className="profession">Desarrollador Web</h2>
				</div>
			</div>
		</div>
	</header>
  );
}
 
Header.propTypes = {
  name: PropTypes.string
};
 
export default Header;