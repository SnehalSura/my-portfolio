import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_photo.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="profile image" height="420px" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a front-end developer and Python programmer passionate about creating user-friendly, visually engaging web experiences. With strong skills in React, HTML, CSS, and JavaScript, I enjoy turning ideas into seamless digital solutions.</p>
                    <p>I thrive on building meaningful projects, staying curious through continuous learning, and collaborating with others.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>ReactJs</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>Django</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width: "60%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About