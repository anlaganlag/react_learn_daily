import React from "react";
import { render } from "react-dom";
import GlobalProvider from "./GlobalProvider";
import ColorInputForm from "./Components/ColorInputForm";
import ColorList from "./Components/ColorList";

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
