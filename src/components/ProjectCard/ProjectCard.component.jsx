import React from 'react'
import  './ProjectCard.styles.css'


const ProjectCard = ({Project}) => {
  return (
    <div className='card'>
      <h5 style={{ marginBottom: "1rem",textAlign:'center' }}>{Project.Name}</h5>
      <img src={Project.imgLink} alt='' />
      <div className='links'>
        <a href={Project.siteLink} className='visitMe' target='_blank'>
          Visit Site
        </a>
        <a href={Project.githubLink} className='visitMe' target='_blank'>
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard