import React from "react";
import "./Resume.scss";
import Timeline from "../../components/Timeline/Timeline";
import { Link } from "react-router-dom";
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
        </section>

        <Link to="JuIKuo-CV.pdf" target="_blank" download>
          Download
        </Link>
      </main>
    </>
  );
};

export default Resume;
