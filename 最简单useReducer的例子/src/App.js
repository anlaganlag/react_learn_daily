import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
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
      // keep every item except the one we want to remove
      return state.filter((_, index) => index !== action.idx);
    default:
      return state;
  }
};

function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, idx) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: "remove", idx })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
