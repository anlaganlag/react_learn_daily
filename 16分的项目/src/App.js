import React, { useState  , useContext,createContext } from 'react';
import useKeyPress from "./usePressKeyHook";



const CountContext = createContext()

function Counter(){

 
  const count = useContext(CountContext)
  return (<h2>{count}/16={(count/16*10000).toString().split("0")[0]}</h2>)
}

function App(){
    const [ count , setCount ] = useState(1);
    const subPress = useKeyPress("h");
    const addPress = useKeyPress("l");
    return (
        <div>

            {/* {addPress && setTimeout(() => dispatch({ type: "add" }), 250)} */}

            <div style={{display:"none"}}>

            {subPress && setTimeout(()  => setCount(count+1), 250)}
            {addPress && setTimeout(()  => setCount(count-1), 250)}
            </div>
            <CountContext.Provider value={count}>
              <Counter />
            </CountContext.Provider>
        </div>
    )
}
export default App;