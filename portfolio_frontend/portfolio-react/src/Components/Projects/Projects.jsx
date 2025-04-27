import React from 'react'
import './Projects.css'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-detail-overlay">
      <div className="project-detail">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h1>{project.name}</h1>
        <p>{project.long_desc}</p>
        <p id='github-link'><a href={project.gitLink} target='_blank'>GitHub Link</a></p>
      </div>
    </div>
  );
};


const Projects = () => {
  const [projects_data, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Fetching data from the Django REST API
    axios
      .get("http://127.0.0.1:8000/projectsapi/") // Update this URL if needed
      .then((response) => {
        console.log(response.data);
        setProjects(response.data); // Save the fetched data
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
            <h1>Loading...</h1>
        </div>
    );
}

  return (
    <div className='projects' id='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {
          projects_data.map((project, index) => {

            return <div key={index} className="project-card">

                      <h3>{project.id}</h3>
                      <h2>{project.name}</h2>
                      <p>{project.short_desc}</p>
                      <div className="project-readmore" onClick={() => setSelectedProject(project)}>
                        <p>Read more</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                      
                  </div>  
          })
        }
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  )
}

export default Projects;
