import React, { Component, useState, createContext,useContext } from 'react';
const CountContext = createContext();
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button
                type='button'
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                addCount：{count}
            </button>
            <CountContext.Provider value={count}>
                <Child />
            </CountContext.Provider>
        </div>
    )
}



function Child() {
    const count = useContext(CountContext);
    return(
        <h1>count：{count}</h1>
    )
}
export default App;

