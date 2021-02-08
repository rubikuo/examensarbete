import React from "react";
import "./Resume.scss";
import Timeline from "../../components/Timeline/Timeline";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Rubi Kuo - Resume</title>
      </Helmet>
      <main className="Resume">
        <section className="Resume__section Resume__section-experience">
          <h1 className="Resume__section-title">
            Work Experience &amp; Education
          </h1>
          <Timeline />
          <NavHashLink to="/resume/#skills" smooth>
            down
          </NavHashLink>
        </section>
        <section id="skills" className="Resume__section Resume__section-skills">
          <h1 className="Resume__section-title">Skills</h1>
          <NavHashLink to="/resume/#hackathon" smooth>
            down
          </NavHashLink>
        </section>
        <section
          id="hackathon"
          className="Resume__section Resume__section-hackathon"
        >
          <h1 className="Resume__section-title">Hackathon</h1>
        </section>

        <Link to="JuIKuo-CV.pdf" target="_blank" download>
          Download
        </Link>
      </main>
    </>
  );
};

export default Resume;
