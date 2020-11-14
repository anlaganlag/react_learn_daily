import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import useKeyPress from "./usePressKeyHook";


function App() {
  const [count, setCount] = useState(CreateRandomNum());
  const [res, setRes] = useState(false);
  const [input, setInput] = useState(67);
  const pre = useRef(null);
  const [history, setHistory] = useState([]);
  const [progress, setProgress] = useState(true);
  const [record, setRecord] = useState([]);
  const [cur, setCur] = useState();

  const init = {
    count:CreateRandomNum(),
    res:false,
    
  }
  

  const subPress = useKeyPress("h");

  const addPress = useKeyPress("l");
  const subTenPress = useKeyPress("j");

  const addTenPress = useKeyPress("k");
  const togglePress = useKeyPress("w");
  const togglePress2 = useKeyPress("s");
  const rate = togglePress ? 5 :10
  const rate2 = togglePress2 ? 40 :0

  function CreateRandomNum() {
    return Math.ceil(Math.random() * 80 + 21);
  }

  function handleSub(){
    setInput(parseInt(input) - 1)

  }

  function handleTenSub(){
    
    setInput(parseInt(input) - rate-rate2)

  }


  function handleAdd(){
    
    setInput(parseInt(input) + 1)

  }


  function handleTenAdd(){
    
    setInput(parseInt(input) + rate+rate2)

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

  console.log(subPress,addPress,"rrrrr",rate);
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
            <p>{`rate=${rate+rate2}`}</p>
          <div className="displayNone">
          {subPress && setTimeout( handleSub,220)}

          {addPress && setTimeout( handleAdd,220)}
          {addTenPress && setTimeout( handleTenAdd,220)}
          {subTenPress && setTimeout( handleTenSub,220)}
          </div>

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
