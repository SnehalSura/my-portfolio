import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/contactFormapi/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Form submitted successfully:', response.data);
      onSubmit(e);
      setFormData({ name: '', email: '', message: '' });
    } 
    catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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
    <form onSubmit={handleSubmit} className="contact-right" autoComplete='off'>
    
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Write your message here</label>
      <textarea
        id="message"
        name="message"
        rows="7"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit" className="contact-submit" >
        Submit now
      </button>
    </form>
  );
};

export default ContactForm;
