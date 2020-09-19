import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [appText, setAppText] = useState(20);

  const appStyle = {
    background: "white",
    margin: "40px",
    textAlign: "center",
    fontSize: "40px",
  };
  const btnCallback = (e) => {
    console.log("點擊");
    setAppText(Math.floor(Math.random() * 100));
  };
  return (
    <div style={appStyle}>
      <div>隨機數是:{appText}</div>
      <Button callback={btnCallback} />
    </div>
  );
}
export default App;
