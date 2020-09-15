import React from "react";
import classes from "./backdrop.module.css";
import Modal from "../Modal/modal";

export default function Backdrop(props) {
  return (
    <div>
      <div
        onClick={props.remove}
        className={props.backdropToggle ? classes.Backdrop : classes.NoBackdrop}
      ></div>
      <Modal
        modal={props.backdropToggle}
        finishEdit={props.editDone}
        prioError={props.priorityError}
        emptyInpError = {props.emptyInputError}
        arrayLimit={props.limit}
      />
    </div>
  );
}
