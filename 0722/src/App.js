import React, { useState  , useContext,createContext, useReducer } from 'react';
 



function App(){
    const [count, setCount] = useState(0)
    const [firstName, setFirstName] = useState("")
    const handleReSet=()=>{
      setCount(0)
      setFirstName("")
    }


    return (
        <div className="App">
          <button onClick={()=> setCount(c=>c+1)}>+</button>
          <div>count:{count}</div>

          <input
            value={firstName}
            onChange={e=>{
              setFirstName(e.target.value)
              setCount(e=>e+1)
            }}
          />
          <button onClick={handleReSet}>Reset Count&Text</button>
        </div>
    );
}
export default App;