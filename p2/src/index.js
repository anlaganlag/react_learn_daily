import React from "react";
import { render } from "react-dom";
import GlobalProvider from "./GlobalProvider";
import ColorInputForm from "./ColorInputForm";
import ColorList from "./ColorList";

function App() {
  return (
    <>
      <GlobalProvider>
        <ColorInputForm />
        <ColorList />
      </GlobalProvider>
    </>
  );
}

render(<App />, document.querySelector("#root"));
