import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";

function App() {
  const [val, setVal] = useState("");
  const [phrase, setPhrase] = useState("屎海蝶泳");
  const inputRef = useRef();

  const handleSubmit = (e) => {
      e.preventDefault()
      setVal("");
      setPhrase(val);
      inputRef.current.focus();
  };

  useEffect(() => {
    console.log(`输入"${val}"`);
  },[val]);


  useEffect(() => {
    console.log(`保存的名言: "${phrase}"`);
  },[phrase]);


  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label> 最喜欢的名言</label>
        <input
          value={val}
          placeholder={phrase}
          onChange={(e) => setVal(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">
          存储
        </button>
      </form>
    </>
  );
}
render(<App />, document.querySelector("#root"));
