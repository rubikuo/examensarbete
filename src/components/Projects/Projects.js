import React, { useState } from "react";
import { data } from "../../utility/projects";
import "./Projects.scss";
import Modal from "../Modal/Modal";

const Projects = ({ type, classes }) => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div
      className={
        openModal !== null ? "Projects Projects-pointEvent" : "Projects"
      }
    >
      <div className="Projects__wrapper">
        {type === "All"
          ? data.map((ea, i) => {
              return (
                <div
                  key={ea.id}
                  className={
                    ea.project === "HBG WifiFinder"
                      ? `${classes} Projects__project--WifiFinder`
                      : `${classes} Projects__project--${ea.project}`
                  }
                >
                  <div className="Projects__project-overlay">
                    <p style={{ fontSize: "2.2rem" }}>{ea.type}</p>
                    <p>{ea.technics}</p>
                    {openModal === ea.project && (
                      <Modal
                        project={ea}
                        open={openModal}
                        onClose={() => setOpenModal(null)}
                      >
                        hi
                      </Modal>
                    )}
                    <button
                      className="Projects__btn-detail"
                      onClick={() => setOpenModal(ea.project)}
                      onClose={() => setOpenModal(null)}
                    >
                      Learn More
                    </button>
                  </div>
                  <img src={ea.logoSrc} alt="logo" />
                </div>
              );
            })
          : data
              .filter((p) => p.hashtag.some((t) => t === type))
              .map((ea, i) => {
                return (
                  <div
                    key={ea.id}
                    className={
                      ea.project === "HBG WifiFinder"
                        ? `${classes} Projects__project--WifiFinder`
                        : `${classes} Projects__project--${ea.project}`
                    }
                  >
                    <div className="Projects__project-overlay">
                      <p style={{ fontSize: "2.2rem" }}>{ea.type}</p>
                      <p>{ea.technics}</p>
                      {openModal === ea.project && (
                        <Modal
                          project={ea}
                          open={openModal}
                          onClose={() => setOpenModal(null)}
                        >
                          hi
                        </Modal>
                      )}
                      <button
                        className="Projects__btn Projects__btn-detail"
                        onClick={() => setOpenModal(ea.project)}
                        onClose={() => setOpenModal(null)}
                      >
                        Learn More
                      </button>
                    </div>
                    <img src={ea.logoSrc} alt="logo" />
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Projects;
