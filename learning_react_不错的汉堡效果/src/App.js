import React, { useState, useContext, createContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CountContext = createContext();

function Counter() {
  const count = useContext(CountContext);
  return (
    <div className="bg-white-200 border_b text-center text-lg p-3">{count}</div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Router>
        <Header />
        <p className=" p-3">當前已經點擊了 {count} 次</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-5"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          點擊這裏
        </button>
        <CountContext.Provider value={count}>
          <Counter />
        </CountContext.Provider>

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-xl">這是主頁..</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-xl">關於本站..</h1>
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}
export default App;
