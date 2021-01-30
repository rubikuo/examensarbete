import React from "react";
import "./Modal.scss";
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Modal__overlay" onClick={onClose} />
      <div className="Modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
