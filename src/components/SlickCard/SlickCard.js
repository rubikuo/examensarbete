import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SlickCard.scss";
import Modal from "../Modal/Modal";

const SlickCard = ({ project, id, type, hashtag, current, url, imgSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`SlickCard SlickCard__${project}`}
      style={
        current
          ? { width: "100%", height: "100%", transition: `1s` }
          : { transition: `1s` }
      }
      id={id}
    >
      <div className="SlickCard__overlay">
        <p style={{ fontSize: "2.2rem" }}>{type}</p>
        <p>{hashtag}</p>
        {/* <Link className="SlickCard__link" to={url} target="_blank">
          Visit Website
        </Link> */}
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          hi
        </Modal>
        <button
          onClick={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          View Details
        </button>
      </div>

      <img src={imgSrc} alt="logo" />
    </div>
  );
};

export default SlickCard;
