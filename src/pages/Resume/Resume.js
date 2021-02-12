import React, { useState, useEffect } from "react";
import "./Resume.scss";
import Timeline from "../../components/Timeline/Timeline";
import Graph from "../../components/Graph/Graph";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import { devSkills, designSkills } from "../../utility/skills";
import { FaArrowLeft, FaChevronCircleDown } from "react-icons/fa";
import AOS from "aos";

const Resume = () => {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  const [showDevSkills, setShowDevSkills] = useState(false);
  const [showDesignSkills, setShowDesignSkills] = useState(false);
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
          <div
            data-aos="fade-left"
            className="Resume__title Resume__title-skills "
          >
            {showDevSkills ? (
              <button
                className="Resume__btn Resume__btn-arrowLeft"
                onClick={() => setShowDevSkills(false)}
              >
                <FaArrowLeft />
              </button>
            ) : showDesignSkills ? (
              <button
                className="Resume__btn Resume__btn-arrowLeft"
                onClick={() => setShowDesignSkills(false)}
              >
                <FaArrowLeft />
              </button>
            ) : null}
            <h1>
              {showDevSkills
                ? "Coding Skills"
                : showDesignSkills
                ? "Design Skills"
                : "Skills"}
            </h1>
          </div>
          <Graph
            showOrigin={showOrigin}
            setShowOrigin={setShowOrigin}
            showAnime={showAnime}
            setShowAnime={setShowAnime}
            showDevSkills={showDevSkills}
            setShowDevSkills={setShowDevSkills}
            showDesignSkills={showDesignSkills}
            setShowDesignSkills={setShowDesignSkills}
          />
          <div
            className={
              showDevSkills
                ? `Resume__ctn Resume__ctn-devSkills--show`
                : `Resume__ctn Resume__ctn-devSkills--hide`
            }
          >
            {devSkills.map((each, i) => {
              return (
                <div key={i} className="Resume__skillCtn">
                  <h1>{each.catagory}</h1>
                  {each.skills.map((skill, i) => {
                    return (
                      <p
                        key={skill}
                        className={`Resume__skill-dev Resume__skill-dev--${skill}`}
                      >
                        {skill === "Express" ? "Express.js" : skill}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className={
              showDesignSkills
                ? `Resume__ctn Resume__ctn-designSkills Resume__ctn-designSkills--show`
                : `Resume__ctn Resume__ctn-designSkills Resume__ctn-designSkills--hide`
            }
          >
            {designSkills.map((each, i) => {
              return (
                <div
                  key={each}
                  className={`Resume__skill-design Resume__skill-design--${each}`}
                >
                  <h1>{each}</h1>
                </div>
              );
            })}
          </div>
          <NavHashLink
            data-aos="fade-up"
            className="Resume__btn Resume__btn-arrowDown"
            to="/resume/#experience"
            smooth
          >
            <FaChevronCircleDown />
          </NavHashLink>
        </section>
        <section
          id="experience"
          className="Resume__section Resume__section-experience"
        >
          <div
            data-aos="fade-left"
            className="Resume__title Resume__title-experience"
          >
            <h1>Work Experience &amp; Education</h1>
          </div>

          <Timeline />
          <NavHashLink
            data-aos="fade-up"
            className="Resume__btn Resume__btn-arrowDown"
            to="/resume/#hackathon"
            smooth
          >
            <FaChevronCircleDown />
          </NavHashLink>
        </section>

        <section
          id="hackathon"
          className="Resume__section Resume__section-hackathon"
        >
          <div
            data-aos="fade-left"
            className="Resume__title
            Resume__title-hackathon"
          >
            <h1>Hackathon</h1>
          </div>
          <p data-aos="fade-up">
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
