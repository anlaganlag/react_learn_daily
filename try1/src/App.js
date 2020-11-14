import React, { useReducer } from "react";

const init = { count: 0 };
function reduce(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reduce,  init)
  return (
    <>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"add"})}>+</button>
      <button onClick={()=>dispatch({type:"sub"})}>-</button>
    </>
  );
}

export default App;
