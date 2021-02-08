import React, { useEffect } from "react";
import "./Resume.scss";
import Timeline from "../../components/Timeline/Timeline";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import Skills from "../../components/Skills/Skills";
import AOS from "aos";

const Resume = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Rubi Kuo - Resume</title>
      </Helmet>
      <main className="Resume">
        <section id="skills" className="Resume__section Resume__section-skills">
          {/* <div className="Resume__titleWrapper">
            <hr className="Resume__hr Resume__hr-left" />
            <h1 className="Resume__title Resume__title-skills ">Skills</h1>
            <hr className="Resume__hr Resume__hr-right" />
          </div> */}
          <h1
            data-aos="fade-left"
            className="Resume__title Resume__title-skills "
          >
            Skills
          </h1>
          <Skills />
          <NavHashLink to="/resume/#experience" smooth>
            down
          </NavHashLink>
        </section>
        <section
          id="experience"
          className="Resume__section Resume__section-experience"
        >
          <h1
            data-aos="fade-left"
            className="Resume__title Resume__title-experience"
          >
            Work Experience &amp; Education
          </h1>
          {/* <div className="Resume__titleWrapper">
            <hr className="Resume__hr Resume__hr-left" />
            <h1 className="Resume__title Resume__title-experience">
              Work Experience &amp; Education
            </h1>
            <hr className="Resume__hr Resume__hr-right" />
          </div> */}

          <Timeline />
          <NavHashLink to="/resume/#hackathon" smooth>
            down
          </NavHashLink>
        </section>

        <section
          id="hackathon"
          className="Resume__section Resume__section-hackathon"
        >
          {/* <div className="Resume__titleWrapper">
            <hr className="Resume__hr Resume__hr-left" />
            <h1 className="Resume__title Resume__title-hackathon">Hackathon</h1>
            <hr className="Resume__hr Resume__hr-right" />
          </div> */}
          <h1
            data-aos="fade-left"
            className="Resume__title Resume__title-hackathon"
          >
            Hackathon
          </h1>
        </section>

        <Link to="JuIKuo-CV.pdf" target="_blank" download>
          Download
        </Link>
      </main>
    </>
  );
};

export default Resume;
