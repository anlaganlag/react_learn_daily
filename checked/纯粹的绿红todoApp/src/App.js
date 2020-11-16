import Typography from "@material-ui/core/Typography";
import React, { useState,useEffect} from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoFormRed from "./components/TodoFormRed";
import TodoList from "./components/TodoList";


const LOCAL_STORAGE_KEY_GREEN = "react-todo-list-todos-green";
const LOCAL_STORAGE_KEY_RED = "react-todo-list-todos_red";
function App() {
  const [green, setGreen] = useState([]);
  const [red, setRed] = useState([]);

  useEffect(() => {
    const storageTodosGreen = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_GREEN));
    if (storageTodosGreen) {
      setGreen(storageTodosGreen);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_GREEN, JSON.stringify(green));
  }, [green]);

  useEffect(() => {
    const storageTodosRed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RED));
    if (storageTodosRed) {
      setRed(storageTodosRed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_RED, JSON.stringify(red));
  }, [red]);

  function addGreen(todo) {
    setGreen([todo, ...green]);
  }

  function addRed(todo) {
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
      <Typography style={{ padding: 16 ,color:"orange"}} variant="h1">
        <span style={{color:'green'}}>要做</span>&&<span style={{color:'red'}}>不要做</span>
      </Typography>
      <TodoForm addTodo={addGreen} />
      <TodoList 
        todos={green}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
     
      <TodoFormRed addTodo={addRed} />

      <TodoList
        todos={red}
        removeTodo={removeTodoRed}
        toggleComplete={toggleCompleteRed}
      />

    </div>
  );
}

export default App;