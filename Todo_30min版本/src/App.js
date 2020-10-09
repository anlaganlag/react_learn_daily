import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid/";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    inputRef.current.focus();
  }, [todos]);

  function toggleTodo(id) {
    //   const newTodos = [...todos];
    //   const todo = newTodos.find((todo) => todo.id === id);
    //   todo.complete = !todo.complete;
    //   setTodos(newTodos);
    // }
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );
  }

  function handleAddTodo(e) {
    const name = inputRef.current.value;
    if (name)
    setTodos(todos => 
       [...todos, { id: uuid(), name, complete: false }]
    );
    inputRef.current.value = "";
  }

  function handleClearTodos() {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {todos.length > 0 ? (
        <div >还有{todos.filter((todo) => !todo.complete).length}项待完成</div>
      ) : (
        <div>当前无需要完成的任务</div>
      )}
      <form onSubmit={handleAddTodo}>
        <input ref={inputRef} type="text" />
        <button onClick={handleClearTodos}>清除已完成</button>
      </form>
    </>
  );
}

export default App;
