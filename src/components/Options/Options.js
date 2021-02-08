import React from "react";
import "./Options.scss";
import flower from "../../assets/portfolio/Blossom.png";

const Options = ({ projectTypes, controlContent, type }) => {
  return (
    <div className="Options">
      {projectTypes.map((projectType) => {
        return (
          <button
            className="Options__btn"
            key={projectType}
            style={
              type === projectType
                ? {
                    transform: "scale(1.2) translateX(15px)",
                  }
                : {}
            }
            onClick={() => controlContent(projectType)}
          >
            {type === projectType && (
              <div className="Options__imgWrapper">
                <img className="Options__img" src={flower} alt="" />
              </div>
            )}
            <p
              style={
                type === projectType
                  ? {
                      color: "#e085c2",
                    }
                  : {}
              }
            >
              {projectType}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default Options;
