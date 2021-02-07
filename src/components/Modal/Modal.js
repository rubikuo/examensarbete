import React from "react";
import "./Modal.scss";
import ReactDom from "react-dom";
import { FaGithub } from "react-icons/fa";
import { MdWeb, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { HandleBgScroll } from "../../utility/functions";
import screen from "../../assets/portfolio/Screen.png";
import trello from "../../assets/portfolio/trello.png";

const Modal = ({ open, onClose, project }) => {
  HandleBgScroll(open);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Modal__overlay" onClick={onClose} />
      <div className="Modal">
        <div className="Modal__section Modal__section-left">
          <h1 className="Modal__project-title">{project.project}</h1>
          <p className="Modal__project-details">{project.details}</p>
          <h2 className="Modal__project-subTitle">Technologies</h2>
          <p className="Modal__project-technology">{project.technics}</p>
          <div className="Modal__wrapper">
            <Link
              target="_blank"
              to={project.gitHubUrl}
              className="Modal__link"
            >
              <FaGithub className="Modal__icon" />
              Github
            </Link>
            <Link target="_blank" to={project.url} className="Modal__link">
              <MdWeb className="Modal__icon" />
              Visit Site
            </Link>
          </div>
        </div>
        <div className="Modal__section Modal__section-right">
          <img className="Modal__img-screen" src={screen} alt="" />
          <img className="Modal__img Modal__img-project" src={trello} alt="" />
        </div>
        <button className="Modal__btn Modal__btn-close" onClick={onClose}>
          <MdClose />
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
