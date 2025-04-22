import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Projects_data from '../../assets/projects_data'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {
          Projects_data.map((project, index) => {

            return <div key={index} className="project-card">

                      <h3>{project.id}</h3>
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                      <div className="project-readmore">
                        <p>Read more</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                  </div>  
          })
        }
      </div>
    </div>
  )
}

export default Projects