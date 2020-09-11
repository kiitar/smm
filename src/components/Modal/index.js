import React from "react";
import Button from "../Button";
// import { ModalContext } from "../../pages/Tranning";
import "./style.css";

const Modal = () => {
  // const Modal = React.useContext(ModalContext);

  // const handleClick = () => {
  //   console.log("close");
  //   Modal.setModal(false);
  // };

  return (
    <div className="modal">
      <div className="container-modal">
        <div className="name-modal flex center">{/* <i className="fa fa-warning"></i> */}</div>
        <div className="name-modal flex center">
          <h2>ยืนยันการทำรายการ</h2>
        </div>
        <div className="flex center">
          <div className="padding-btn">
            <Button name="ตกลง" styleBtn="create" />
          </div>
          <div className="padding-btn">
            <Button name="ยกเลิก" styleBtn="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
