import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  const [green, setGreen] = useState([]);
  const [red, setRed] = useState([]);

  function addGreen(todo) {
    // adds new todo to beginning of green array
    setGreen([todo, ...green]);
  }

  function addRed(todo) {
    // adds new todo to beginning of green array
    setRed([todo, ...red]);
  }


  function toggleComplete(id) {
    setGreen(
      green.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }
  function toggleCompleteRed(id) {
    setRed(
      red.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setGreen(green.filter(todo => todo.id !== id));
  }

  function removeTodoRed(id) {
    setRed(red.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
        React Todo
      <TodoForm addTodo={addGreen} />
      <TodoList
        todos={green}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <TodoForm addTodo={addRed} />

      <TodoList
        todos={red}
        removeTodo={removeTodoRed}
        toggleComplete={toggleCompleteRed}
      />

    </div>
  );
}

export default App;