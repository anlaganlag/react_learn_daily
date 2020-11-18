import React, { useState, useRef, useEffect, useReducer } from "react";
import "./App.css";
import useKeyPress from "./usePressKeyHook";

function App() {
  // const [list, setlist] = useState([64,88,61,71,81,69,79,89])
  const [list, setlist] = useState([])
  const CreateRandomNum = ()=> {
    //选择了0到29,0可能性非常小..最少60
    //组合及60到89..极少60..
    let randomNum = Math.ceil(Math.random() * 29 + 60);
    while (randomNum % 5 === 0  || list.includes(randomNum))  {
      randomNum = Math.ceil(Math.random() * 29 + 60);
    }
    return randomNum;
  }
  const [count, setCount] = useState(CreateRandomNum());
  const [res, setRes] = useState(false);
  // const [input, setInput] = useState(67);
  const pre = useRef(null);
  const pos = useRef(null);
  const [history, setHistory] = useState([]);
  const [black, setBlack] = useState([]);
  const [progress, setProgress] = useState(true);
  const [record, setRecord] = useState([]);
  const [cur, setCur] = useState();

  const [table, setTable] = useState(29);
  // const [GlobalState, setGlobalState] = useState(init)

  const init = {
    count: CreateRandomNum(),
    res: false,
    input: 66,
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
  const togglePress2 = useKeyPress("c");
  // const toggleTest1 = useKeyPress("r");
  // const toggleTest2 = useKeyPress("t");
  const rate = togglePress ? 5 : 10;
  const rate2 = togglePress2 ? 40 : 0;
  const [state, dispatch] = useReducer(reduce, { input: CreateRandomNum() });

  //0的可能性存在但是很小..前者是表示的空间
  //后者表示的基准,即min+


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
        if (!action.payload) {
          return { input: 0 };
        } else {
          return { input: parseInt(action.payload) };
        }

      default:
        return state;
    }
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

  // }
  useEffect(() => {
    setHistory([[count, count ** 2], ...history]);
    setlist([...list,count])
  }, [count]);

  useEffect(() => {
    setTimeout(() => pos.current.focus(), 0);
    // setTimeout(() => setRes(!res), 1000);
  });
  console.log(list,"list")

  return (
    <div onClick = {()=>{
      
      setCount(CreateRandomNum())
      setRes(false)
      setTimeout(()=>setRes(true),7000)
      
      }} className="whole">
      <p>{`${count}*${count}=${res ? count ** 2 : "?"}`}</p>
      <button
        ref={pos}
        onClick={() => {
          setCount(CreateRandomNum());
          setRes(false);
          // pos.current.focus();
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
          {/* <input
            value={state.input || 0}
            onChange={(e) => {
              // setInput(e.target.value);
              dispatch({ type: "set", payload: e.target.value });
            }}
          />
          <p>{`rate=${rate + rate2}`}</p> */}
          <div className="displayNone">
            {/* {subPress && setTimeout( handleSub,220)}

          {addPress && setTimeout( handleAdd,220)}
          {addTenPress && setTimeout( handleTenAdd,220)}
          {subTenPress && setTimeout( handleTenSub,220)} */}

            {subPress && setTimeout(() => dispatch({ type: "sub" }), 250)}
            {addPress && setTimeout(() => dispatch({ type: "add" }), 250)}
            {subTenPress && setTimeout(() => dispatch({ type: "subx" }), 250)}
            {addTenPress && setTimeout(() => dispatch({ type: "addx" }), 250)}

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
          <div>{state.input}&nbsp;{state.input ** 2}</div>
          {[...Array(29)].map((x, i) =>
            (i + 61) ** 2 % 5 
            && 
            ![ ...list].includes(i + 61)
              ? ` ${i + 61}*${i + 61} = ${(i + 61) ** 2} `
              : ""
          )}
          
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
            ({history.length-idx-1})
            {h[0]} * {h[0]} = {h[1]}{" "}
          </div>
        ))}
    </div>
  );
}
export default App;
