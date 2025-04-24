import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialIcons from '../SocialIcons/SocialIcons';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1 className='logo'>Snehal</h1>
                <p>Crafting Solutions with Passion and Precision! <span className='last-para'>Let’s Build Something Together!</span></p>
                <p>
                  <FontAwesomeIcon icon={faLaptop} style={{ marginRight: "12px", color: "#fff" }} />
                  Python Enthusiast | Front-End Developer | React Learner
                </p>
            </div>
            <div className="footer-top-right">
              <SocialIcons/>
            </div>
            
        </div>
        <hr />
            <div className="footer-bottom">
              <p className="footer-bottom-left">&copy; 2025 Snehal Sura. All rights reserved.</p>
              <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
              </div>
            </div>
    </footer>
  )
}

export default Footer