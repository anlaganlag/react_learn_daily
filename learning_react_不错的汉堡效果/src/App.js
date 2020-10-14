import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <h1 className="font-bold text-xl">這是主頁..</h1>
        </Route>
        <Route path="/about">
          <h1 className="font-bold text-xl">關於本站..</h1>
        </Route>
        <Route path="/content">
          <h1 className="font-bold text-xl">内容页面..</h1>
        </Route>
      </Switch>

    </Router>
  );
}
export default App;
