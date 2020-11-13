import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import useKeyPress from "./usePressKeyHook";

function App() {
  const [count, setCount] = useState(CreateRandomNum());
  const [res, setRes] = useState(false);
  const [input, setInput] = useState(41);
  const pre = useRef(null);
  const [history, setHistory] = useState([]);
  const [progress, setProgress] = useState(false);
  const [record, setRecord] = useState([]);
  const [cur, setCur] = useState();

  const happyPress = useKeyPress("h");

  const sadPress = useKeyPress("l");

  function CreateRandomNum() {
    return Math.ceil(Math.random() * 80 + 21);
  }

  function handleRecordSubmit(e) {
    e.preventDefault();

    if (cur === "") {
      return;
    }
    setRecord([cur, ...record]);
    setCount(CreateRandomNum());
    setCur("");
    setRes(false);
  }

  useEffect(() => {
    setHistory([[count, count ** 2], ...history]);
  }, [count]);

  return (
    <div>
      <p>{`${count}*${count}=${res ? count ** 2 : "?"}`}</p>
      <button
        onClick={() => {
          setCount(CreateRandomNum());
          setRes(false);
          pre.current.focus();
        }}
      >
        更新
      </button>
      {/* <button
        onClick={() => {
          // const curHistory = [...history,[count,count**2]]
          // setHistory(curHistory)
          setRes(true);

          console.log(history);
          setTimeout(()=>{

            const newNum = Math.floor(Math.random() * 30 + 20);
            setCount(newNum);
            setRes(false)
          },2000)

        }}
      >
        顯示
      </button> */}
      <p>
        <button onClick={() => setProgress(!progress)}>開啓測試</button>
      </p>

      {progress && (
        <div className="progress">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          {happyPress && "😊"}

          {sadPress && "😢"}
          <div>
            <button onClick={() => setInput(parseInt(input) - 1)}>-</button>
            <button onClick={() => setInput(parseInt(input) + 1)}>+</button>
          </div>
          <p>{input ** 2}</p>
        </div>
      )}
      <form onSubmit={handleRecordSubmit}>
        <input
          type="number"
          ref={pre}
          value={cur}
          onChange={(e) => {
            setCur(e.target.value);
          }}
        />
        <p>
          {record.map((i) => (
            <span>{i}&nbsp;</span>
          ))}
        </p>
      </form>
      {/* {history[0] !==undefined && <p>{`最近一次計算:${history[0]}*${history[0]} = ${history[1]}`}</p>} */}
      {history.length > 1 && <p>最近{history.length - 1}項:</p>}

      {history.length > 1 &&
        history.slice(1).map((h, idx) => (
          <p>
            {" "}
            {h[0]} * {h[0]} = {h[1]}{" "}
          </p>
        ))}
    </div>
  );
}
export default App;
