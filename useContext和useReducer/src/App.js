import React, { Component, useState, createContext } from 'react';
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

class Child extends Component {
    render() {
        return(
            <CountContext.Consumer>
                { count => <h1>count: { count }</h1> }
            </CountContext.Consumer>
        )
    }
}
export default App;

