import React, { useState  , useContext,createContext } from 'react';
import Header from './Header' 
import Footer from './Footer' 

const CountContext = createContext()

function Counter(){
  const count = useContext(CountContext)
  return (<div className="bg-white-200 border_b text-center text-lg p-3">{count}</div>)
}

function App(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <Header />
            <p className=" p-3">
               當前已經點擊了 {count} 次
            </p>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-5"
                     onClick={()=>{setCount(count+1)}}>
              點擊這裏
            </button>
            <CountContext.Provider value={count}>
              <Counter />
            </CountContext.Provider>
            <Footer />
        </div>
    )
}
export default App;