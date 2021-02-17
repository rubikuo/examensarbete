import "./Graph.scss";
// import RubiOrigin from "../../assets/about/RubiOrigin.png";
// import RubiAnime from "../../assets/about/Rubi.png";
// import RightFace from "../../assets/about/RubiHalfRight.png";
// import LeftFace from "../../assets/about/RubiHalfLeft.png";
import RubiOrigin from "../../assets/about/RubiOrigin.jpg";
import RubiAnime from "../../assets/about/Rubi.jpg";
import RightFace from "../../assets/about/RubiHalfRight.jpg";
import LeftFace from "../../assets/about/RubiHalfLeft.jpg";

const Graph = ({
  children,
  showOrigin,
  setShowOrigin,
  showAnime,
  showDevSkills,
  setShowDevSkills,
  setShowAnime,
  showDesignSkills,
  setShowDesignSkills,
}) => {
  return (
    <section id="skill" className="Graph__section Graph__section-skill">
      {children}
      <div className="Graph__leftSide">
        <img
          className=" Graph__image Graph__image-leftFace"
          src={LeftFace}
          alt=""
          style={showDevSkills || showDesignSkills ? { display: "none" } : {}}
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
            showAnime || showDesignSkills
              ? "Graph__link Graph__link-left Graph__link-left--hide"
              : "Graph__link Graph__link-left Graph__link-left--show"
          }
          style={showDevSkills ? { display: "none" } : { display: "flex" }}
        >
          Developer
        </div>
      </div>

      <div className="Graph__rightSide">
        <img
          style={
            showDevSkills || showDesignSkills
              ? { display: "none" }
              : { display: "block" }
          }
          className=" Graph__image-rightFace"
          src={RightFace}
          alt=""
        />
        <div
          onClick={() => {
            setShowDesignSkills(true);
          }}
          onMouseEnter={() => {
            setShowAnime(true);
          }}
          onMouseLeave={() => {
            setShowAnime(false);
          }}
          id="designer"
          className={
            showOrigin || showDevSkills
              ? "Graph__link Graph__link-right Graph__link-right--hide"
              : "Graph__link Graph__link-right Graph__link-right--show"
          }
          style={showDesignSkills ? { display: "none" } : { display: "flex" }}
        >
          Designer
        </div>
      </div>
      <img
        className={
          showAnime
            ? " Graph__image Graph__image-anime Graph__image-anime--show"
            : " Graph__image Graph__image-anime Graph__image-anime--hide"
        }
        src={RubiAnime}
        alt=""
      />
      <img
        style={
          showDesignSkills
            ? { display: "block", left: "75%" }
            : { display: "none", left: "50%" }
        }
        className=" Graph__image Graph__image-anime Graph__image-anime--showMove"
        src={RubiAnime}
        alt=""
      />

      <img
        className={
          showOrigin
            ? "Graph__image Graph__image-origin Graph__image-origin--show"
            : "Graph__image Graph__image-origin Graph__image-origin--hide"
        }
        src={RubiOrigin}
        alt=""
      />
      <img
        className="Graph__image Graph__image-origin Graph__image-origin--showMove"
        style={
          showDevSkills
            ? { left: "25%", display: "block" }
            : { left: "50%", display: "none" }
        }
        src={RubiOrigin}
        alt=""
      />
    </section>
  );
};

export default Graph;
