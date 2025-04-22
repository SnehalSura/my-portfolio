import React from 'react'
import './Projects.css'
import Projects_data from '../../assets/Projects_data' 

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {Projects_data.map((project, index) => {
          return <div key={index} className="project-card">
            <h3>{project.id}</h3>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-readmore">
              <p>Read more</p>
              <img src="" alt="arrow icon" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects