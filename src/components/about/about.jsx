import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Vanshika Dubey" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>5+ months working expierence</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>5+ completed</small>
              </article>
            </div>
            <p>
            I am a fresher having  month Of  backend  experience
working and specializing in backend web technologies  at
FunctionUp  and  I  am currently looking  forward  to be a part  of an  organization  that  would  help
me  keeping  myself  on  top  of this  fast  changing  technological  environment.  

            </p>
           <a href='/contact' className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  );
}

export default about;
