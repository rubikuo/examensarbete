import React, { useEffect, useState } from "react";
import { data } from "../../utility/projects";
import "./Projects.scss";
import Options from "../Options/Options";
import Modal from "../Modal/Modal";
import AOS from "aos";

const Projects = () => {
  const [type, setType] = useState("All");
  const [className, setClassName] = useState("Projects__project");
  const [openModal, setOpenModal] = useState(null);
  const types = [
    "All",
    "ReactJS",
    "Angular7",
    "Node.js",
    "JavaScript",
    "jQuery",
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  const controlContent = (_type) => {
    console.log(_type);
    setType(_type);
    if (type === _type) return null;
    if (type === "All") {
      setClassName("Projects__project Projects__project--all");
    } else if (type !== _type) {
      setClassName("Projects__project Projects__project--anime");
    }
  };

  return (
    <div className="Projects">
      <Options types={types} controlContent={controlContent} />
      <div className="Projects__wrapper">
        {type === "All"
          ? data.map((ea, i) => {
              return (
                <div
                  key={ea.id}
                  className={`${className} Projects__project--${ea.project}`}
                >
                  <div className="Projects__project-overlay">
                    <p style={{ fontSize: "2.2rem" }}>{ea.type}</p>
                    {/* <p>{ea.hashtag}</p> */}

                    {openModal === ea.project && (
                      <Modal
                        project={ea}
                        open={openModal}
                        onClose={() => setOpenModal(null)}
                      />
                    )}
                    <button
                      onClick={() => setOpenModal(ea.project)}
                      onClose={() => setOpenModal(null)}
                    >
                      View Details
                    </button>
                  </div>
                  <img src={ea.imgSrc} alt="logo" />
                </div>
              );
            })
          : data
              .filter((p) => p.hashtag.some((t) => t === type))
              .map((ea, i) => {
                return (
                  <div
                    key={ea.id}
                    // data-aos="fade-up"
                    className={`${className} Projects__project--${ea.project}`}
                  >
                    <div className="Projects__project-overlay">
                      <p style={{ fontSize: "2.2rem" }}>{ea.type}</p>
                      {/* <p>{ea.hashtag}</p> */}

                      {openModal === ea.project && (
                        <Modal
                          projectName={ea.project}
                          open={openModal}
                          onClose={() => setOpenModal(null)}
                        >
                          hi
                        </Modal>
                      )}
                      <button
                        onClick={() => setOpenModal(ea.project)}
                        onClose={() => setOpenModal(null)}
                      >
                        View Details
                      </button>
                    </div>
                    <img src={ea.imgSrc} alt="logo" />
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
