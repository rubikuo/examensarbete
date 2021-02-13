import React, { useState, useEffect } from "react";
import "./Resume.scss";
import Timeline from "../../components/Timeline/Timeline";
import Graph from "../../components/Graph/Graph";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import { devSkills, designSkills } from "../../utility/skills";
import {
  FaArrowLeft,
  FaChevronCircleDown,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
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
          <div className="Resume__wrapper">
            <div data-aos="fade-up" className="Resume__card">
              <img
                src="https://i.ibb.co/ZVPj3HQ/Last-Mile-Hack-Dapp-Prize.jpg"
                alt="last mile hack prize"
              />
              <div className="Resume__cardBody">
                <p>Last Mile Hack 2019</p>
                <span>@Helsingborg, Sweden</span>
              </div>
            </div>
            <article
              data-aos="fade-left"
              className="Resume__article Resume__article-hack"
            >
              <img
                className="Resume__image Resume__image-dapp"
                src="https://i.ibb.co/GfmNCXJ/DAPP-Logo.png"
                alt="DAPP Logo"
              />
              <p className="Resume__para">
                <strong>
                  <Link target="_blank" to="https://www.lastmilehack.com/">
                    Last Mile Hack
                  </Link>
                </strong>{" "}
                was my debut Hackathon event. My team pitched an idea with an
                app called <q>Dapp</q>
                .
                <br />
                <br />
                The purpose of the app is to provide not only a transparent
                delivery and returning process, but also a better communication
                platform between brands and customers. UX was the main
                technology our team used to present the ideas, and honorably we
                won a prize.
                <br />
                <br />
                It was a special and inspiring experience for me. I am looking
                forward to participating in the next Hackathon event.
              </p>
            </article>
          </div>
          <NavHashLink
            data-aos="fade-up"
            className="Resume__btn Resume__btn-arrowDown"
            to="/resume/#contact"
            smooth
          >
            <FaChevronCircleDown />
          </NavHashLink>
        </section>
        <section
          id="contact"
          className="Resume__section Resume__section-contact"
        >
          <div
            data-aos="fade-left"
            className="Resume__title
            Resume__title-contact"
          >
            <h1>Contact</h1>
          </div>

          <div className="Resume__wrapper Resume__wrapper-contactLinks ">
            <Link
              data-aos="fade-up"
              data-aos-duration="200"
              to={{ pathname: "https://github.com/rubikuo" }}
              target="_blank"
              className="Resume__links"
            >
              <FaGithubSquare />
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="300"
              to={{ pathname: "https://www.linkedin.com/in/rubikuo" }}
              target="_blank"
              className="Resume__links"
            >
              <FaLinkedin />
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="400"
              to={{ pathname: "https://www.instagram.com/voyagederubi/" }}
              target="_blank"
              className="Resume__links"
            >
              <FaInstagram />
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="500"
              to={{ pathname: "mailto:rubitiara@gmail.com" }}
              target="_blank"
              className="Resume__links"
            >
              <FaEnvelope />
            </Link>
          </div>

          <Link
            data-aos="zoom-in"
            className="Resume__btn  Resume__btn-download"
            to="JuIKuo-CV.pdf"
            target="_blank"
            download
          >
            <FaDownload /> Resume
          </Link>
          <h2
            data-aos="fade-up"
            className="Resume__subtitle Resume__subtitle-contact"
          >
            Looking forward to hearing from you!{" "}
          </h2>
          <NavHashLink
            data-aos="fade-up"
            className="Resume__btn Resume__btn-arrowTop"
            to="/resume/#skills"
            smooth
          >
            TOP
          </NavHashLink>
        </section>
      </main>
    </>
  );
};

export default Resume;
