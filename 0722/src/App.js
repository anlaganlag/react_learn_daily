import React, { useState  , useContext,createContext } from 'react';
 



function App(){
    const [count, setCount] = useState(0)
    const [firstName, setFirstName] = useState("")

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
        </div>
    );
}
export default App;