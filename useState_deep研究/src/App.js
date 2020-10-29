import React, { useState, useContext, createContext,useEffect } from "react";

const c = createContext();
const KEY = "项目7";


function Counter() {
  const {input,flag} = useContext(c);
  const getBase = (n) => {
    const b = Math.floor(n / 70) * 70;
    return [b, n - b];
  };

  // const getH = (n) => Math.floor(n / 100);
  // const getT = (n) => Math.floor((n % 100) / 10);
  // const getL = (n) => n % 10;
  const [x, y] = getBase(input);
  console.log(input,flag);
  return (
    <>
      <p>{input}</p>

      {/* {flag?<p>{`${input / 7}*7=${input}是7的倍数由{${input/7}}获得`}</p>:""} */}
    {/* <p>百位数:{getH(input)}</p> */}
      {/* <p>十位数:{getT(input)}</p> */}

      <p>基准:{x}</p>
      <p>基准:{x}</p>
  <p>个位数</p> 
      <p>增量:{y}</p>
    {flag&&<p>{input/7}/143</p>}
    </>
  );
}

export default function App() {
  const [input, setInput] = useState(7);
  const [flag, setflag ] = useState(true);
  const [records, setRecords] = useState([70,140,210,280,350,420,490,560,630,700,770,840,910,980])

  useEffect(() => {
    const keyWordJson = localStorage.getItem(KEY);
    if (keyWordJson) {
      setRecords(JSON.parse(keyWordJson));
    }
  }, []);

  useEffect(
    () => localStorage.setItem(KEY, JSON.stringify(records)),

    [records]
  );
  function handleInput (e) {
    setflag(false)
    if (!e.target.value ) return
    if (e.target.value % 7===0)
      setflag(true)
    setInput(e.target.value)
  }
  // function handleRecords(e){
  //   setRecords(e.target.value)
  // }
  function handleWord (record,e){
    if (!e.target.textContent ) return

    setInput(e.target.textContent);


  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    if (!records.includes(input)){
      setRecords([...records, input]);
    }

  };

  return (
    <>
      <h1>7的项目</h1>
      <form onSubmit={handleSubmit}>
      <input  type={Number} value={input} onChange={handleInput}/>
      </form>
      <button onClick={() => setInput(-7+parseInt(input) )}>-</button>
      <button onClick={() => setInput(7+parseInt(input) )}>+</button>
      <c.Provider value={{input,flag}}>
        <Counter />
      </c.Provider>

      {/* <input  type={Number} value={input} onChange={e=>setInput(e.target.value)}/> */}
      {records.map((record) => (
            <button onClick={(e) => handleWord(record, e)} title={record}>
              {record}
            </button>
          ))}

    </>
  );
}
