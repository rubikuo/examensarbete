import React from "react";
import "./Options.scss";
const Options = ({ types, controlContent }) => {
  return (
    <div className="Options">
      {types.map((type) => {
        return (
          <button key={type} onClick={() => controlContent(type)}>
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
