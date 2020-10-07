import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuid} from "uuid"; 

function TodoFormRed({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    green:false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField 
        label="請輸入不應做事項.."
        type="text" 
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">提交</Button>
    </form>
  );
}

export default TodoFormRed;