import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_photo.jpg'

const Hero = () => {
  return (
    <div className='hero'> 
        <img src={profile_img} alt="profile image" height="300px" />
        <h1><span>Hi, I'm Snehal Sura,</span> innovating web solutions with React.</h1>

        <p>"Passionate Python and React developer, creating user-friendly interfaces and innovative solutions while striving for growth."</p>

        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div> 
  )
}

export default Hero