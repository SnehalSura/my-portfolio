
import React, { useEffect, useState } from 'react';
import './About.css';
import profile_img from '../../assets/profile_photo.jpg';
import axios from 'axios';

const About = () => {
    const [about, setAbout] = useState([]);          // Initialize state as an empty array
    const [loading, setLoading] = useState(true);    // Add loading state

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/aboutmeapi/")     // DRF endpoint
            .then((response) => {
                setAbout(response.data);       // Save data to state
                setLoading(false);             // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching the About Me data:", error);
                setLoading(false);             // Even on error, stop the loading state
            });
    }, []);

    // Display a loading indicator while fetching the data
    if (loading) {
        return (
            <div className="about" id="about">
                <h1>Loading...</h1>
            </div>
        );
    }

    // Safely access about[0].desc with optional chaining
    return (
        <div className="about" id="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="profile image" height="500px" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>{about[0]?.desc1 || "No description available"}</p>
                        <p>{about[0]?.desc2 || "No description available"}</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: `${about[0]?.htmlCss || 0}%` }} />
                        </div>
                        <div className="about-skill">
                            <p>ReactJs</p>
                            <hr style={{ width: `${about[0]?.react || 0}%` }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: `${about[0]?.js || 0}%` }} />
                        </div>
                        <div className="about-skill">
                            <p>Django</p>
                            <hr style={{ width: `${about[0]?.dj || 0}%` }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p>
                            <hr style={{ width: `${about[0]?.sql || 0}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
