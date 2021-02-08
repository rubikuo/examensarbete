import React, { useState } from "react";
import "./Skills.scss";
import RubiOrigin from "../../assets/about/RubiOrigin.png";
import RubiAnime from "../../assets/about/Rubi.png";
import RightFace from "../../assets/about/RubiHalfRight.png";
import LeftFace from "../../assets/about/RubiHalfLeft.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Skills = ({ children }) => {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  return (
    // <>
    <section id="skill" className="Skills__section Skills__section-skill">
      {children}
      <div className="Skills__leftSide">
        <img
          className=" Skills__image Skills__image-leftFace"
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
              ? "Skills__link Skills__link-left Skills__link-left--hide"
              : "Skills__link Skills__link-left Skills__link-left--show"
          }
        >
          Developer
        </NavHashLink>
      </div>

      <div className="Skills__rightSide">
        <img className=" Skills__image-rightFace" src={RightFace} alt="" />
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
              ? "Skills__link Skills__link-right Skills__link-right--hide"
              : "Skills__link Skills__link-right Skills__link-right--show"
          }
        >
          Designer
        </NavHashLink>
      </div>

      <img
        className={
          showAnime
            ? " Skills__image Skills__image-anime Skills__image-anime--show"
            : " Skills__image Skills__image-anime Skills__image-anime--hide"
        }
        src={RubiAnime}
        alt=""
      />
      <img
        className={
          showOrigin
            ? "Skills__image Skills__image-origin Skills__image-origin--show"
            : "Skills__image Skills__image-origin Skills__image-origin--hide"
        }
        src={RubiOrigin}
        alt=""
      />
    </section>
    // {/* </> */}
  );
};

export default Skills;
