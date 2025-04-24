import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div className='hero' id='home'> 
        <img src={profile_img} alt="profile image" height="300px" />
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