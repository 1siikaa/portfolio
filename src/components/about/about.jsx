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
                <small>6+ months working expierence</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Back-end Projects</h5>
                <small>5+ completed</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Front-end Projects</h5>
                <small>2+ completed</small>
              </article>
            </div>
            <p>
            I am a fresher having months Of backend experience
working and specializing in backend web technologies at FunctionUp and"Creative and detail-oriented web developer with a passion for building engaging and user-friendly interfaces. Armed with a solid foundation in HTML, CSS, and JavaScript, and experience in developing responsive websites, I am ready to apply my technical skills and collaborate with a team of like-minded professionals to drive innovation in the field of web development."

            </p>
           <a href='https://www.linkedin.com/mwlite/in/vanshika-dubey-479693227'  target='_blank' rel="noreferrer"   className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  );
}

export default about;
