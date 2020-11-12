import React, { useReducer } from "react";

const init = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return { ...state, count: state.count + 1 };
    }
    case "sub": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, init);
  function handleClickAdd() {
    return dispatch({ type: "add" });
  }

  function handleClickSub() {
    return dispatch({ type: "sub" });
  }
  return (
    <div>
      <button onClick={handleClickSub}>-</button>

      <button onClick={handleClickAdd}>+</button>
      <p>{state.count}</p>
    </div>
  );
}
export default App;
