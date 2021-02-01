import { useEffect } from "react";

const HandleBgScroll = (modalOpen) => {
  const MODAL_OPEN_CLASS = "openModal";
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add(MODAL_OPEN_CLASS);
    }

    return () => document.body.classList.remove(MODAL_OPEN_CLASS);
  }, [modalOpen]);
};

export { HandleBgScroll };
