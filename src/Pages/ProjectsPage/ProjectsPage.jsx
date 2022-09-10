import React from 'react'
import "./ProjectsPage.styles.css"
import ProjectCard from './../../components/ProjectCard/ProjectCard.component';

import { ProjectDetails } from "../../ProjectDetails.js";

const ProjectsPage = () => {
  return (
    <section className='S1'>
      <div className='mainContainer'>
        <h3 style={{ textAlign: "center" ,marginTop:"1rem"}}>Projects</h3>
        <div className='Projects'>
          {ProjectDetails.map((Project) => {
            return <ProjectCard key={Project.id} Project={Project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage