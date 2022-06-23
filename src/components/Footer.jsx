import React from 'react';
import "../styles/Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {



  return (
    <div className='footer'>
        <div className='socialMedia'>
           <a href="https://www.linkedin.com/in/gustavogallesio/"> <LinkedInIcon/></a>
           
          <a href="https://github.com/guenga1968">  <GitHubIcon/></a>
        </div>
        <p>&copy; 2022</p>
    </div>
  )
}

export default Footer