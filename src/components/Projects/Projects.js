import React, { useEffect, useState } from "react";
import { data } from "../../utility/projects";
import "./Projects.scss";
import Options from "../Options/Options";
import AOS from "aos";

const Projects = () => {
  const [type, setType] = useState("All");
  const [className, setClassName] = useState("Projects__project");
  const types = ["All", "Javascript", "ReactJS", "Angular7", "Node.js"];
  useEffect(() => {
    AOS.init();
  }, []);

  const controlContent = (_type) => {
    setType(_type);
    if (className === "Projects__project") {
      setClassName("Projects__project Projects__project-anime");
    } else {
      setClassName("Projects__project");
    }
  };

  return (
    <div className="Projects">
      <Options types={types} controlContent={controlContent} />
      <div className="Projects__wrapper">
        {type === "All"
          ? data.map((ea, i) => {
              return <div className={className}>{ea.project}</div>;
            })
          : data
              .filter((p) => p.hashtag.some((t) => t === type))
              .map((ea, i) => {
                return (
                  <div className={className}>
                    <p className="Projects__project-title">{ea.project}</p>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

// let filteredArray = arrayOfElements
//   .filter((element) =>
//     element.subElements.some((subElement) => subElement.surname === 1)
//   )
//   .map((element) => {
//     let newElt = Object.assign({}, element); // copies element
//     newElt.subElements = newElt.subElements.filter(
//       (subElement) => subElement.surName === "1"
//     );
//     return newElt;
//   });
export default Projects;
