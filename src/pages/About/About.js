import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavHashLink } from "react-router-hash-link";
import "./About.scss";
import RubiOrigin from "../../assets/about/RubiOrigin.png";
import RubiAnime from "../../assets/about/Rubi.png";
import RightFace from "../../assets/about/RubiHalfRight.png";
import LeftFace from "../../assets/about/RubiHalfLeft.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Rubi Kuo - About</title>
      </Helmet>
      <main className="About">
        <section className="About__section About__section-intro">
          <article className="About__article-intro">
            <h1 className="About__title About__title-name">Rubi Kuo</h1>
            <p className="About__para-intro">
              Hi! I am an ambitious front-end developer with 8 years of work
              experiences in international projects and 2.5 year experiences in
              web development and UX design. I come from Taiwan and for now I am
              based in Helsingborg Sweden.
              <br />
              <br />
              Besides coding, I have a keen interest in arts, and I am an
              excessive monopoly player!
            </p>
          </article>
        </section>

        <section id="skill" className="About__section About__section-skill">
          <div className="About__leftSide">
            <img
              className=" About__image About__image-leftFace"
              src={LeftFace}
              alt=""
            />
            <NavHashLink
              to="/portfolio/#develop"
              onMouseEnter={(e) => {
                setShowOrigin(true);
              }}
              onMouseLeave={() => {
                setShowOrigin(false);
              }}
              id="developer"
              className={
                showAnime
                  ? "About__link About__link-left About__link-left--hide"
                  : "About__link About__link-left About__link-left--show"
              }
            >
              Developer
            </NavHashLink>
          </div>

          <div className="About__rightSide">
            <img className=" About__image-rightFace" src={RightFace} alt="" />
            <NavHashLink
              smooth
              to="/portfolio/#design"
              onMouseEnter={() => {
                setShowAnime(true);
              }}
              onMouseLeave={() => {
                setShowAnime(false);
              }}
              id="designer"
              className={
                showOrigin
                  ? "About__link About__link-right About__link-right--hide"
                  : "About__link About__link-right About__link-right--show"
              }
            >
              Designer
            </NavHashLink>
          </div>

          <img
            className={
              showAnime
                ? " About__image About__image-anime About__image-anime--show"
                : " About__image About__image-anime About__image-anime--hide"
            }
            src={RubiAnime}
            alt=""
          />
          <img
            className={
              showOrigin
                ? "About__image About__image-origin About__image-origin--show"
                : "About__image About__image-origin About__image-origin--hide"
            }
            src={RubiOrigin}
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default About;
