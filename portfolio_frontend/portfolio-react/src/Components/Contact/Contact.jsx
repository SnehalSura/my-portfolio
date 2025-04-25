import React from 'react'
import './Contact.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

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
    // Taken this below fn from web3Forms website 
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "93188113-70c5-4e17-9c2f-8ddb44f3c16e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

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
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name'/>

                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' id='email'/>

                <label htmlFor="msg">Write your message here</label>
                <textarea name="message" id="msg" rows="8" placeholder='Enter your message'></textarea>

                <button className='contact-submit' type='submit'>Submit now</button>
            </form>
        </div>
    
        
    </div>
    
  )
}

export default Contact