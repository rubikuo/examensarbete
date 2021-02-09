import React, { useState } from "react";
import "./Skills.scss";
import RubiOrigin from "../../assets/about/RubiOrigin.png";
import RubiAnime from "../../assets/about/Rubi.png";
import RightFace from "../../assets/about/RubiHalfRight.png";
import LeftFace from "../../assets/about/RubiHalfLeft.png";

import { NavHashLink } from "react-router-hash-link";

const Skills = ({
  children,
  showOrigin,
  setShowOrigin,
  showAnime,
  showDevSkills,
  setShowDevSkills,
  setShowAnime,
}) => {
  return (
    <section id="skill" className="Skills__section Skills__section-skill">
      {children}
      <div className="Skills__leftSide">
        <img
          className=" Skills__image Skills__image-leftFace"
          src={LeftFace}
          alt=""
          style={showDevSkills ? { display: "none" } : null}
        />
        <div
          onClick={() => setShowDevSkills(true)}
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
          style={showDevSkills ? { display: "none" } : { display: "flex" }}
        >
          Developer
        </div>
      </div>

      <div className="Skills__rightSide">
        <img
          style={showDevSkills ? { display: "none" } : { display: "block" }}
          className=" Skills__image-rightFace"
          src={RightFace}
          alt=""
        />
        <div
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
        </div>
      </div>

      <img
        // style={showDevSkills ? { display: "none" } : { display: "block" }}
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
      <img
        className="Skills__image Skills__image-origin Skills__image-origin--showMove"
        style={
          showDevSkills ? { left: "25%" } : { left: "50%", display: "none" }
        }
        src={RubiOrigin}
        alt=""
      />
    </section>
  );
};

export default Skills;
