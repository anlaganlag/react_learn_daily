import React, { useReducer } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
const currTodos = storageTodos ? storageTodos.todos : [];
const todosInitialState = {
  todos: currTodos,
};

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
}

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      const addTodos = {
        ...state,
        todos: [...state.todos, { id: uuid(), text: action.payload }],
      }; // todo原列表+新增
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addTodos));
      return addTodos;
    case "delete":
      const delTodos = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }; // //todo原列表-要刪除的
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(delTodos));
      return delTodos;
    case "edit":
      const idx = state.todos.findIndex((t) => t.id === action.payload.id);
      const editTodos = {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          { ...action.payload },
          ...state.todos.slice(idx + 1),
        ],
      }; //  前面 + 編輯 + 後面
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(editTodos));
      return editTodos;
    default:
      return state;
  }
}

export default App;
