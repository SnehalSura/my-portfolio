import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [profile_image, setImage] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetching data from the Django REST API
    axios
      .get("http://127.0.0.1:8000/contactProfileapi/") // Update this URL if needed
      .then((response) => {
        console.log(response.data);
        setImage(response.data); // Save the fetched data
        setLoading(false); // Turn off the loading indicator
      })
      .catch((error) => {
        console.error("Error fetching the Projects data:", error);
        setLoading(false); // Turn off loading even if there is an error
      });
  }, []);

  if (loading) {
    return (
        <div className="about" id="about">
            <h1>Loading Profile Image...</h1>
        </div>
    );
  }

  return (
    <div className='hero' id='home'> 
        
        <img src={profile_image[0].image} alt={profile_image[0].img_alt} height="300px" />
        
        <h1><span>Hi, I'm Snehal Sura,</span> crafting user-friendly solutions with Python and React.</h1>

        <p>"Passionate Python and React developer, creating user-friendly interfaces and innovative solutions while striving for growth."</p>

        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div> 
  )
}

export default Hero