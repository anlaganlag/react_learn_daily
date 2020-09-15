import React from "react";
import classes from "./modal.module.css";

export default function Modal(props) {
  return props.modal ? (
    <div className={classes.Container}>
      <div className={classes.EditBox}>
        {props.prioError ? (
          <div className={classes.Error}>
            Error <br />
            <p className={classes.ErrorText}>(No of Priority Exceed)</p>
          </div>
        ) : null}

        {props.emptyInpError? (
          <div className={classes.Error}>
            Error <br />
            <p className={classes.ErrorText}>(Empty Inputs)</p>
          </div>
        ) : null}

        <div style={{ width: "60%" }}>
          Priority
          <input
            id="position-input"
            className={classes.PositionInput}
            type="number"
            min="1"
            max={props.arrayLimit}
          />
        </div>

        <div style={{ width: "60%" }}>
          Task
          <input id="task-input" className={classes.TaskInput} type="text" />
        </div>
        <div style={{ width: "60%" }}>
          <button className={classes.FinishButton} onClick={props.finishEdit}>
            Finish
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
