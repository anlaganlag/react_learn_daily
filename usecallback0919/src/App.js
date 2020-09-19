import React, { useState,useCallback } from "react";
import Button from "./Button";

function App() {
  const [appText, setAppText] = useState("");

  const appStyle = {
    background: "white",
    margin: "40px",
    textAlign: "center",
    fontSize: "40px",
  };
  const btnCallback = useCallback((e) => {
    console.log("點擊");
    setAppText(50+Math.floor(Math.random() * 60));
  },[])
  return (
    <div style={appStyle}>
      <div>预测你的寿命是:{appText}</div>
      <Button callback={btnCallback} />
    </div>
  );
}
export default App;
