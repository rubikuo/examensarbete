import React, { useState, useEffect } from "react";
import "./Resume.scss";
import Timeline from "../../components/Timeline/Timeline";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import Skills from "../../components/Skills/Skills";
import AOS from "aos";

const Resume = () => {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  const [showDevSkills, setShowDevSkills] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1
            data-aos="fade-left"
            className="Resume__title Resume__title-skills "
          >
            Skills
          </h1>
          <Skills
            showOrigin={showOrigin}
            setShowOrigin={setShowOrigin}
            showAnime={showAnime}
            setShowAnime={setShowAnime}
            showDevSkills={showDevSkills}
            setShowDevSkills={setShowDevSkills}
          />
          <div
            className="Resume__devSkills"
            style={showDevSkills ? { right: "0%" } : { right: "-50%" }}
          >
            <p>HTML</p>
            <p>CSS / Sass</p>
            <p>JavaScript</p>

            <button onClick={() => setShowDevSkills(false)}> >> </button>
          </div>
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

          <Timeline />
          <NavHashLink to="/resume/#hackathon" smooth>
            down
          </NavHashLink>
        </section>

        <section
          id="hackathon"
          className="Resume__section Resume__section-hackathon"
        >
          <h1
            data-aos="fade-left"
            className="Resume__title Resume__title-hackathon"
          >
            Hackathon
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iste
            molestiae, quae fuga, sapiente quaerat delectus veritatis autem
            aspernatur iure quo? Dolorum, accusantium. Quia maxime rerum vero
            quidem nam vitae.
          </p>
        </section>

        <Link to="JuIKuo-CV.pdf" target="_blank" download>
          Download
        </Link>
      </main>
    </>
  );
};

export default Resume;
