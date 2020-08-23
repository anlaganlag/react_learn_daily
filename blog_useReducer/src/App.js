import React, {useReducer} from 'react';

 
const TodoList = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn JS',
    complete: false,
  },

  {
    id: 'c',
    task: 'Become bestP ',
    complete: true,
  },
  {
    id: 'd',
    task: 'build great project',
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DONE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
 
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, TodoList);

  const handleChange = todo => {
    dispatch({ type: todo.complete ? 'UNDO':'DONE',
               id:todo.id })
  };
 
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={()=>handleChange(todo)}
            />
            {todo.task}
        </li>
      ))}
    </ul>
  );
};
 
export default App;