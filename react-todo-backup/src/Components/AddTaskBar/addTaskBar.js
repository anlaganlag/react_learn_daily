import React from "react";
// get our fontawesome imports
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./addTaskBar.module.css";

function AddTaskBar(props) {
  return (
    <div className={classes.Container}>
      <input
        type="text"
        className={classes.InputBox}
        onChange={props.btnstate}
      />
      <button
        className={classes.AddTaskBtn}
        onClick={props.addTask}
        disabled={props.disbtn}
      >
        <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: "5px" }} />
        Add Task
      </button>
    </div>
  );
}

export default AddTaskBar;
