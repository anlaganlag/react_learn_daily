import React, {useReducer} from 'react';
import ToDoList from './ToDoList'
import { v4 as uuid } from 'uuid';
// const LOCAL_STORAGE_KEY = "react-hooks-todo";


const todosInitialState = { 
  todos:[{ id:1, text: "finishing writing hooks chapter"},
    { id:2, text: "play with kids"},
    { id:3, text: "read bible"}
  ]
};
// const todosInitialState = {todos:[]}

export const TodosContext = React.createContext()

function App (){
  const [state, dispatch] = useReducer(todosReducer,todosInitialState)
  

  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTodos) {
  //     // setTodos(storageTodos);
  //     dispatch({type:"fill",
  //               payload:[...storageTodos],
  //     })
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  // }, [state]);




  return (
    <TodosContext.Provider value={{state,dispatch}}>      
      <ToDoList />
    </TodosContext.Provider>    
  )
}

function todosReducer(state, action){ 
  switch(action.type){     
    case 'add':
      const newToDo = {id: uuid(), text: action.payload}
      const addedToDos = [...state.todos,newToDo]
      return {...state,todos:addedToDos}
    case 'delete':
      const filteredTodoState = state.todos.filter( todo => todo.id !== action.payload.id)
      return {...state, todos: filteredTodoState}
    
    case 'edit':   
      const updatedToDo = {...action.payload} 
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0,updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return {...state, todos: updatedToDos} 
    case 'fill':   
      return [...action.payload]
    default:
      return todosInitialState
  }
}

export default App;
