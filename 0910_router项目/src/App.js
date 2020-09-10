import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, About, Events, Products, Contact } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />{" "}
        </Route>
        <Route path="/about">
          <About />{" "}
        </Route>
        <Route path="/events">
          <Events />{" "}
        </Route>
        <Route path="/products">
          <Products />{" "}
        </Route>
        <Route path="/contact">
          <Contact />{" "}
        </Route>
      </Router>
    </div>
  );
}
export default App;
