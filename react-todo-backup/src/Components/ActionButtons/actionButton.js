import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./actionButton.module.css";

const ActionButton = (props) => {
  return (
    <div className = {classes.ButtonContainer}>
      <button onClick = {() =>{props.theedit(props.taskInd)}}>
        <FontAwesomeIcon
          icon={faPencilAlt}
          className={classes.ButtonItem}
          size="lg"
        />
      </button>

      <button
        onClick={() => {
          props.thedel(props.taskInd);
        }}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className={classes.ButtonItem}
          size="lg"
        />
      </button>
    </div>
  );
};

export default ActionButton;
