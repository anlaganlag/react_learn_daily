import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(Math.ceil(Math.random() * 29 + 20));
  const [res, setRes] = useState(false);
  const [input, setInput] = useState(41);
  const pre = useRef();
  const [history, setHistory] = useState([]);
  const [progress, setProgress] = useState(false) 
  const  [record, setRecord] = useState([])
  const [cur, setCur] = useState()  


  function handleRecordSubmit (e) {
    e.preventDefault()
    setRecord([cur,...record]);

    console.log(cur,record);

    if (cur === "") {
      return;
    }
    if (!record.includes(cur)) {
      setRecord([cur,...record]);
    }
    console.log(cur,record);

  }

  useEffect(() => {
    setHistory([[count, count ** 2], ...history].slice(0, 4));
  }, [count]);

  return (
    <div>
      <p>{`${count}*${count}=${res ? count ** 2 : "?"}`}</p>
      <button
        onClick={() => {
          setCount(Math.floor(Math.random() * 30 + 20));
          setRes(false);
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


      <button onClick={()=>setProgress(!progress)}>開啓測試</button>
      </p>

      {progress && 
      <div className="progress">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div>
          <button onClick={() => setInput(parseInt(input) - 1)}>-</button>
          <button onClick={() => setInput(parseInt(input) + 1)}>+</button>
        </div>
        <p>{input ** 2}</p>
      </div>}
      <form onSubmit={handleRecordSubmit}>
        <input type="number" value={cur}  onChange={(e) => {
            setCur(e.target.value);
          }}/>
      </form>
      {/* {history[0] !==undefined && <p>{`最近一次計算:${history[0]}*${history[0]} = ${history[1]}`}</p>} */}
      {history.length > 1 && <p>最近{history.length-1}項:</p>}

      {history.length > 1 &&

        history.slice(1).map((h, idx) => 
          <p>
            {idx+1}.{" "}{h[0]} * {h[0]} = {h[1]}
          </p>
        )
      }
    </div>
  );
}
export default App;
