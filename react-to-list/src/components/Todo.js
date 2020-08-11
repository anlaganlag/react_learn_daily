import { Checkbox, IconButton, ListItem} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo, toggleComplete, removeTodo ,}) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex"}}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <p style={{
          textDecoration: todo.completed ? "line-through" : null,
          
          color:todo.completed ? "orange":todo.green ? "green":"red",
        }}
      >
        {todo.task}
      </p>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;