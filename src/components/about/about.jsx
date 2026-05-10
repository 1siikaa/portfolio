import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
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
                <small>3+ years of working experience</small>
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
  Dedicated and results-driven <strong>Software Engineer</strong> with{" "}
  <strong>3+ years of experience</strong> in backend development using{" "}
  <strong>Node.js</strong> and <strong>Express.js</strong>. Currently working at{" "}
  <strong>Part Analytics (acquired by Altium)</strong>, where I design and
  develop <strong>scalable</strong>, <strong>secure</strong>, and{" "}
  <strong>high-performance backend systems</strong>. Experienced in building{" "}
  <strong>RESTful APIs</strong>, implementing{" "}
  <strong>Azure SSO using OAuth 2.0 and JWT</strong>, developing{" "}
  <strong>RBAC</strong> and <strong>audit logging systems</strong>, and
  automating complex <strong>RFQ workflows</strong> using{" "}
  <strong>Amazon SQS</strong> for asynchronous processing.
  <br />
  <br />
  Strong expertise in <strong>PostgreSQL</strong>,{" "}
  <strong>MongoDB</strong>, <strong>database optimization</strong>,{" "}
  <strong>partitioning</strong>, <strong>indexing</strong>, and{" "}
  <strong>Sequelize ORM tuning</strong> to improve application performance and
  scalability. Successfully designed{" "}
  <strong>supplier prioritization</strong> and{" "}
  <strong>automated bidder selection systems</strong>, optimized database
  storage through <strong>archival strategies</strong>, and resolved{" "}
  <strong>large-scale data inconsistencies</strong> across{" "}
  <strong>2K+ BOM datasets</strong>.
  <br />
  <br />
  Skilled in <strong>AWS cloud services</strong>,{" "}
  <strong>system design</strong>,{" "}
  <strong>performance optimization</strong>, and{" "}
  <strong>production-level backend architecture</strong>.
</p>
           <a href='https://www.linkedin.com/in/vanshika-dubey-479693227'  target='_blank' rel="noreferrer"   className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  );
}

export default about;
