import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_photo.jpg'

const Hero = () => {
  return (
    <div className='hero'> 
        <img src={profile_img} alt="profile image" height="300px" />
        <h1><span>Hi, I'm Snehal Sura,</span></h1>
        <p>I am a passionate developer skilled in Python and front-end technologies like React.I enjoy crafting user-friendly web interfaces and developing efficient solutions. 
        I'm eager to build innovative projects and grow as a developer.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div> 
  )
}

export default Hero