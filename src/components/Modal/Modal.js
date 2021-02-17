import React from "react";
import "./Modal.scss";
import ReactDom from "react-dom";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { HandleBgScroll } from "../../utility/functions";
import screen from "../../assets/portfolio/Screen.png";

const Modal = ({ open, onClose, project }) => {
  HandleBgScroll(open);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Modal__overlay" onClick={onClose} />
      <div className="Modal">
        <div className="Modal__ctn">
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
                View Code
                <MdKeyboardArrowRight />
              </Link>
              <Link target="_blank" to={project.url} className="Modal__link">
                Visit Site
                <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>
          <div className="Modal__section Modal__section-right">
            <img className="Modal__img-screen" src={screen} alt="" />
            <img
              className="Modal__img Modal__img-project"
              src={project.imgSrc}
              alt=""
            />
          </div>
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
