import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_photo.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="profile image" height="420px" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores laboriosam laborum.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime, quasi labore totam voluptatibus facere!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>ReactJs</p><hr style={{width: "65%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>Django</p><hr style={{width: "70%"}} /></div>
                </div>
            </div>
            {/* <div className="about-achievements"></div> */}
        </div>
    </div>
  )
}

export default About