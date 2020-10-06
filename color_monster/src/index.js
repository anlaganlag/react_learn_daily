import React from "react";
import { render } from "react-dom";
import GlobalProvider from "./GlobalProvider";
import ColorInputForm from "./Components/ColorInputForm";
import ColorList from "./Components/ColorList";


export default function ColorScore() {
  return (
    <>
    <GlobalProvider>
      <ColorInputForm />
      <ColorList />
    </GlobalProvider>
    </>
  );
}

render(
    <ColorScore />,
  document.querySelector("#root")
);
