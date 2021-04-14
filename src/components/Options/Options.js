import React from "react";
import "./Options.scss";

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
                    transform: "scale(1.3)",
                  }
                : {}
            }
            onClick={() => controlContent(projectType)}
          >
            <p
              style={
                type === projectType
                  ? {
                      color: "black",
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
