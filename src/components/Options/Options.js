import React from "react";
import "./Options.scss";
const Options = ({ projectTypes, controlContent, type }) => {
  return (
    <div className="Options">
      {projectTypes.map((projectType) => {
        return (
          <button key={projectType} onClick={() => controlContent(projectType)}>
            {projectType}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
