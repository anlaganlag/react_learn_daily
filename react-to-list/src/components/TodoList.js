import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList({ green, removeTodo, toggleComplete }) {
  return (
    <List>
      {green.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;