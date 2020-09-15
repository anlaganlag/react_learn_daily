import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, About, Events, Products, Contact, Whoops404 } from "./pages";
import "./App.css"
function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />
        <Switch>
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
          <Route path="*">
            <Whoops404 />{" "}
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
