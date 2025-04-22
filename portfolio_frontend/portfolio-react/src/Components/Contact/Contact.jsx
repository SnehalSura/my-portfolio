import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/> <span>Email: snehalsura@gmail.com</span>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faLocationDot} className='icon' /> <span>Solapur, India </span>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faPhone} className='icon'/> <span>Call: +91 860-539-6970</span>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="name">Your Name: </label>
                <input type="text" placeholder='Enter your name' name='name' id='name'/>

                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' id='email'/>

                <label htmlFor="msg">Write your message here</label>
                <textarea name="message" id="msg" rows="8" placeholder='Enter your message'></textarea>

                <button className='contact-submit' type='submit'>Submit now</button>
            </div>
        </div>
    
        
    </div>
    
  )
}

export default Contact