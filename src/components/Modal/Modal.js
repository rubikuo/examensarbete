import React, { useEffect } from "react";
import "./Modal.scss";
import ReactDom from "react-dom";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import { HandleBgScroll } from "../../utility/functions";

const Modal = ({ open, onClose, project }) => {
  HandleBgScroll(open);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Modal__overlay" onClick={onClose} />
      <div className="Modal">
        <div className="Modal__imgCtn">
          <img
            className="Modal__img Modal__img-logo"
            src={project.imgSrc}
            alt={project.project}
          />
        </div>

        <div>
          <p className="Modal__details">{project.details}</p>
          <h2 className="Modal__subTitle">Technics</h2>
          <p className="Modal__technics">{project.technics}</p>
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
        <button className="Modal__btn-close" onClick={onClose}>
          Close
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
