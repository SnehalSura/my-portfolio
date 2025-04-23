import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum voluptate corporis minima accusantium pariatur.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                  <FontAwesomeIcon icon={faUser} />
                  <input type="email" placeholder='Enter your email' />
                </div>
                <div className='footer-subscribe'>
                  Subscribe
                </div>
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