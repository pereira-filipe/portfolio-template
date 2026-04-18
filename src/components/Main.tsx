import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.imgur.com/arPHVch.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pereira-filipe" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/filipe-pereira-silva/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Filipe Pereira</h1>
          <p>Software Developer and Future Researcher</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pereira-filipe" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/filipe-pereira-silva/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;