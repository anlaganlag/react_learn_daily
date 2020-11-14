import React, { useState, useRef, useEffect, useReducer } from "react";
import "./App.css";
import useKeyPress from "./usePressKeyHook";

function App() {
  const [count, setCount] = useState(CreateRandomNum());
  const [res, setRes] = useState(false);
  // const [input, setInput] = useState(67);
  const pre = useRef(null);
  const pos = useRef(null);
  const [history, setHistory] = useState([]);
  const [progress, setProgress] = useState(true);
  const [record, setRecord] = useState([]);
  const [cur, setCur] = useState();
  // const [GlobalState, setGlobalState] = useState(init)

  const init = {
    count: CreateRandomNum(),
    res: false,
    input: 67,
    pre: null,
    history: [],
    progress: true,
    record: [],
    cur: null,
  };

  const subPress = useKeyPress("h");
  const addPress = useKeyPress("l");
  const subTenPress = useKeyPress("j");
  const addTenPress = useKeyPress("k");
  const togglePress = useKeyPress("w");
  const togglePress2 = useKeyPress("x");
  // const toggleTest1 = useKeyPress("r");
  // const toggleTest2 = useKeyPress("t");
  const rate = togglePress ? 5 : 10;
  const rate2 = togglePress2 ? 40 : 0;
  const [state, dispatch] = useReducer(reduce, { input: 67 });

  function CreateRandomNum() {
    return Math.ceil(Math.random() * 80 + 21);
  }

  function reduce(state, action) {
    switch (action.type) {
      case "add":
        return { input: parseInt(state.input) + 1 };
      case "sub":
        return { input: parseInt(state.input) - 1 };
      case "addx":
        return { input: parseInt(state.input) + rate + rate2 };
      case "subx":
        return { input: parseInt(state.input) - rate - rate2 };
      case "set":
        return { input: parseInt(action.payload) };

      default:
        return state;
    }
  }

  // function handleSub(){
  //   setInput(parseInt(input) - 1)

  // }

  // function handleTenSub(){

  //   setInput(parseInt(input) - rate-rate2)

  // }

  // function handleAdd(){

  //   setInput(parseInt(input) + 1)

  // }

  // function handleTenAdd(){

  //   setInput(parseInt(input) + rate+rate2)

  // }
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

  useEffect(() => {
    pos.current.focus();
  });

  console.log(subPress, addPress, "rrrrr", rate, "pppp", progress);
  return (
    <div>
      <p>{`${count}*${count}=${res ? count ** 2 : "?"}`}</p>
      <button
        ref={pos}
        onClick={() => {
          setCount(CreateRandomNum());
          setRes(false);
          pos.current.focus();
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
        <button onClick={() => setProgress(!progress)}>
          {progress ? "測試關" : "測試開"}
        </button>
      </p>

      {progress && (
        <div className="progress">
          <input
            value={state.input}
            onChange={(e) => {
              // setInput(e.target.value);
              dispatch({ type: "set", payload: e.target.value });
            }}
          />
          <p>{`rate=${rate + rate2}`}</p>
          <div className="displayNone">
            {/* {subPress && setTimeout( handleSub,220)}

          {addPress && setTimeout( handleAdd,220)}
          {addTenPress && setTimeout( handleTenAdd,220)}
          {subTenPress && setTimeout( handleTenSub,220)} */}

            {subPress && setTimeout(() => dispatch({ type: "sub" }), 220)}
            {addPress && setTimeout(() => dispatch({ type: "add" }), 220)}
            {subTenPress && setTimeout(() => dispatch({ type: "subx" }), 220)}
            {addTenPress && setTimeout(() => dispatch({ type: "addx" }), 220)}



            {/* {addPress && setTimeout(handleAdd, 220)}
            {addTenPress && setTimeout(handleTenAdd, 220)}
            {subTenPress && setTimeout(handleTenSub, 220)} */}

            {/* {toggleTest1 && setTimeout(setProgress(false),222220)} */}
            {/* {toggleTest2 && setTimeout(setProgress(true),2222220)} */}
          </div>

          {/* <div>
            <button onClick={() => setInput(parseInt(input) - 1)}>-</button>
            <button onClick={() => setInput(parseInt(input) + 1)}>+</button>
          </div> */}
          <div>{state.input ** 2}</div>
        </div>
      )}

      {/*       
      <form onSubmit={handleRecordSubmit}>
        <label>解答:</label>
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
      </form> */}

      {/* {history[0] !==undefined && <p>{`最近一次計算:${history[0]}*${history[0]} = ${history[1]}`}</p>} */}
      {history.length > 1 && <div>最近{history.length - 1}項:</div>}

      {history.length > 1 &&
        history.slice(1).map((h, idx) => (
          <div>
            {" "}
            {h[0]} * {h[0]} = {h[1]}{" "}
          </div>
        ))}
    </div>
  );
}
export default App;
