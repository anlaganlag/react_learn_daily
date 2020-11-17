import React, { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        },
      ];
    case "remove":
      return state.filter((item, index) => action.index !== index);
    default:
      return state;
  }
}

function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  function submit(e) {
    e.preventDefault();
    dispatch({type: "add",name : inputRef.current.value});
    inputRef.current.value = "";
  }
  return (
    <>
      <form onSubmit={submit}>
        <input ref={inputRef} />
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
