import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from "react";
import {sevens} from './data'
import "./App.css";
const c = createContext();
const KEY1 = "项目7";
const KEY2 = "项目7Input";
let initState = [];

function Counter() {
  const { randomNum, flag } = useContext(c);
  const getBase = (n) => {
    const b = Math.floor(n / 70) * 70;
    return [b, n - b];
  };

  const getR = (n) => Math.ceil(n  / 10)
  const getL = (n) => (n % 10) * 2;
  const getClose = (n) => [Math.floor(n / 7) * 7, Math.floor(n / 7) * 7 + 7];
  const res = (n) => Math.abs(getR(n) - getL(n));
  const [x, y] = getBase(randomNum);
  const [c1, c2] = getClose(randomNum);

  return (
    <>
    {/* 成功的方块信息 */}
      {flag > 0 && (
        <p className="successMsg">
          {res(randomNum)}&nbsp; &nbsp;{x}+{y}
        </p>
      )}

      {/* 失败的方块信息 */}

      {!flag && (
        <p className="errorMsg">
          <p>{res(randomNum)}&nbsp; </p>
          {c1} &nbsp; {x}+{y - randomNum + c1} &nbsp;&nbsp;{c2} &nbsp;{x}+
          {y + c2 - randomNum}{" "}
        </p>
      )}
    </>
  );
}

export default function App() {
  const [flag, setFlag] = useState(true);
  const [records, setRecords] = useState(initState);
  const [isMsg, setIsMsg] = useState(false);
  const [randomNum, setRandomNum] = useState(0);
//確保 submit完畢後,focus在input裏面
  const inputRef = useRef();

  useEffect(() => {
    setFlag(false);

    const keyWordJson1 = localStorage.getItem(KEY1);
    const keyWordJson2 = localStorage.getItem(KEY2);
    if (keyWordJson1) {
      setRecords(JSON.parse(keyWordJson1));
    }
    if (keyWordJson2) {
      setRandomNum(JSON.parse(keyWordJson2));
      if (JSON.parse(keyWordJson2) % 7 === 0) setFlag(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY1, JSON.stringify(initState));
    localStorage.setItem(KEY2, JSON.stringify(randomNum));
  }, [records, randomNum]);
  function handleInput(e) {
    setFlag(false);
    if (!e.target.value) setFlag(false);
    if (isNaN(e.target.value)) return;
    console.log(e.target.value);
    if (e.target.value && e.target.value % 7 === 0) setFlag(true);
    setRandomNum(e.target.value);
  }
  function handleWord(e) {
    if (!e.target.textContent) return;
    if (e.target.textContent % 7 === 0) setFlag(true);

    setRandomNum(e.target.textContent);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (randomNum === "") {
      return;
    }
    if (!records.includes(randomNum)) {
      setRecords([...records, randomNum]);
    }
    setRandomNum(Math.floor(Math.random() * 100)+1)
    inputRef.current.focus();
  };

  return (
    <>
      <button
        onClick={() => {
          setRecords(sevens);
        }}
      >
        填充数据7
      </button>
      <button
        onClick={() => {
          setRecords([]);
        }}
      >
        清空数据
      </button>
      <h1>能被7整除的项目</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={Number}
          value={randomNum}
          onChange={handleInput}
          ref={inputRef}
        />
      </form>
      <button onClick={() => setRandomNum(-7 + parseInt(randomNum))}>-</button>
      <button onClick={() => setRandomNum(7 + parseInt(randomNum))}>+</button>
      <c.Provider value={{ randomNum, flag }}>
        <Counter />
      </c.Provider>

      <div>
        <button
          onClick={() => {
            initState = [...records];
            setIsMsg(true);
            setTimeout(() => {
              setIsMsg(false);
            }, 500);
          }}
        >
          存档
        </button>
        <button onClick={() => setRecords(initState)}>读取</button>
      </div>
      <button
        onClick={() =>
          setTimeout(setRandomNum(Math.floor(Math.random() * 100)), 3000)
        }
      >
        {randomNum}
      </button>
      <div>
        {isMsg && <p>已经保存</p>}
        {records.map((record) => (
          <button onClick={(e) => handleWord(e)} title={record}>
            {record?record:0}
          </button>
        ))}
      </div>
    </>
  );
}
