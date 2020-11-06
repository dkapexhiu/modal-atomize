import React from "react";
import atomize from "@quarkly/atomize";
import "./styles.css";

const Modal = ({
  handleClose,
  show,
  children,
  closeBtnLabel = "Close",
  ...props
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div {...props} className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>{`${closeBtnLabel}`}</button>
      </section>
    </div>
  );
};

const ModalContainer = atomize(Modal)({
  name: "Modal",
  description: "",
  propInfo: {
    closeBtnLabel: {
      control: "input",
      category: "Main"
    }
  }
});

export default ModalContainer;
