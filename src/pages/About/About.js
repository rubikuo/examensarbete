import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./About.scss";
import RubiOrigin from "../../assets/about/RubiOrigin.png";
import RubiAnime from "../../assets/about/Rubi.png";
import RightFace from "../../assets/about/RubiHalfRight.png";
import LeftFace from "../../assets/about/RubiHalfLeft.png";

const About = () => {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
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
              An ambitious front-end developer with 8 years of work experiences
              in international projects and 2.5 year experiences in web
              development and UX design. I come from Taiwan and for now I am
              based in Helsingborg Sweden.
              <br />I have a keen interest in arts, and I am an excessive
              monopoly player!
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
            <p
              onMouseEnter={(e) => {
                setShowOrigin(true);
                console.log(e.target);
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
            </p>
          </div>

          <div className="About__rightSide">
            <img className=" About__image-rightFace" src={RightFace} alt="" />
            <p
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
            </p>
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
