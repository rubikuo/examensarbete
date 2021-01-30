import React from "react";

const Options = ({ types, controlContent }) => {
  return (
    <div>
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
