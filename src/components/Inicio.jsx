import '../styles/Home.css';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Inicio = () => {
 
  return (
    
       <div className='home'>
        <div className='about'>
          <h2>Hola, mi nombre es Gustavo</h2>
          <div className="prompt">
            <p>Full Stack Developer con pasión por aprender y crear</p>
          <a href="mailto:gustavogallesio@hotmail.com"> <EmailIcon /></a>
           <a href="https://www.linkedin.com/in/gustavogallesio/"> <LinkedInIcon/></a>
           <a href="https://github.com/guenga1968"> <GitHubIcon/></a>
          </div>
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className="item">
              <h2>Front-End</h2>
              <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>
              NodeJS, ExpressJS, MySQL, MongoDB, Postgresql, Sequelize, Mongoose
              </span>
            </li>
            <li className="item">
              <h2>Lenguajes</h2>
              <span>JavaScript, Python</span>
            </li>

          </ol>
        </div>
       </div>
        
    
               

  )
};

export default Inicio;
