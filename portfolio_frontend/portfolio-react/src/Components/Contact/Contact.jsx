import React from 'react'
import './Contact.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Fetching data from the Django REST API
    axios
      .get("http://127.0.0.1:8000/contactProfileapi/") // Update this URL if needed
      .then((response) => {
        console.log(response.data);
        setContact(response.data);                // Save the fetched data
        setLoading(false);                         // Turn off the loading indicator
      })
      .catch((error) => {
        console.error("Error fetching the Projects data:", error);
        setLoading(false); // Turn off loading even if there is an error
      });
  }, []);

  if (loading) {
    return (
        <div className="contact">
            <h1>Loading contact data...</h1>
        </div>
    );
}
    
    return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/> <span>{contact[0].email}</span>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faLocationDot} className='icon' /> <span>{contact[0].loc}</span>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faPhone} className='icon'/> <span>+91 {contact[0].ph_no}</span>
                    </div>
                </div>
            </div>
            
            <ContactForm/>
        </div>
    
        
    </div>
    
  )
}

export default Contact