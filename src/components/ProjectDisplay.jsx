import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} className='bgImage'/>
     
      <p style={{fontSize:"30px"}}><b>Skills:</b></p>
      <p style={{marginBottom:"20px"}}>
         {project.skills}
      </p>
      {project.git &&( <a href={project.git}> <GitHubIcon /></a>)}
      
    </div>
  );
}

export default ProjectDisplay;