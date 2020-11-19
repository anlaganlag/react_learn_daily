import React, { useState, useEffect, useContext, createContext } from "react";
import useKeyPress from "./usePressKeyHook";

const CountContext = createContext();

function Counter() {
  const count = useContext(CountContext);

  //  (CountContext)/16*10000).toString().split("0")[0])

  return (
    <>
      <h2>
        {count}/16={((count / 16) * 10000).toString().split("0")[0]}
      </h2>
      <p>
        {[...Array(15)].map((i, idx) => {
          console.log(idx);
          return (
            <p>
              {idx + 1}/16 = {((idx + 1) *10000/ 16).toString().split("0")[0]}
            </p>
          );
        })}
      </p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(1);
  const subPress = useKeyPress("j");
  const addPress = useKeyPress("k");
  const resetPress = useKeyPress("m");

  const addEightPress = useKeyPress("i");
  const subEightPress = useKeyPress("u");

  useEffect(() => {
    resetPress && setCount(1);
    if (count > 15) {
      setCount(1);
    }
    if (count <= 0) {
      setCount(15);
    }
  }, [resetPress, count]);
  return (
    <div>
      {/* {addPress && setTimeout(() => dispatch({ type: "add" }), 250)} */}

      <div style={{ display: "none" }}>
        {subPress && setTimeout(() => setCount(count - 1), 260)}
        {addPress && setTimeout(() => setCount(count + 1), 260)}
        {addEightPress && setTimeout(() => setCount(count + 8), 260)}
        {subEightPress && setTimeout(() => setCount(count - 8), 260)}
      </div>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
export default App;
