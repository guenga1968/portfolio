import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/Projects.css';

const Proyectos = () => {
  return (
    <div className="projects">
      <h1>Mis Proyectos</h1>
      <div className="projectList">
      {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  )
};

export default Proyectos;
