import React, {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import "./App.css"
const c = createContext();
const KEY1 = "项目7";
const KEY2 = "项目7Input";
const ori = []
let initState = []
let sevens = [
  7,
  70,
  140,
  210,
  280,
  350,
  420,
  490,
  560,
  630,
  700,
  770,
  840,
  910,
  980,
];

function Counter() {
  const { input, flag } = useContext(c);
  const getBase = (n) => {
    const b = Math.floor(n / 70) * 70;
    return [b, n - b];
  };

  const getH = (n) => Math.floor(n / 100);
  const getT = (n) => Math.floor((n % 100) / 10);
  const getR = n => (n-n%10)/10;
  const getL = (n) => (n % 10)*2;
  const getClose = n => [Math.floor(n/7)*7,Math.floor(n/7)*7+7]
  const res = n => Math.abs(getR(n)-getL(n))
  const [x, y] = getBase(input);
  const [c1, c2] = getClose(input);

  console.log(input, flag);
  console.log(res(input));
  return (
    <>

      {/* {flag?<p>{`${input / 7}*7=${input}是7的倍数由{${input/7}}获得`}</p>:""} */}
      {/* <p>百位数:{getH(input)}</p>
      <p>十位数:{getT(input)}</p> */}

     {/* <span>高位:{getR(input)}</span> */}

     {/* <span>个位数:{getL(input)}</span>{ */}
    {flag>0 && <p className="successMsg">{res(input)}&nbsp; &nbsp;{x}+{y}</p>}

    {!flag&&<p className="errorMsg"><p>{res(input)}&nbsp; </p>{c1} &nbsp; {x}+{y-input+c1} &nbsp;&nbsp;{c2} &nbsp;{x}+{y+c2-input}  	 </p>}
      {/* {flag&&<p>{input/7}/143</p>} */}
    </>
  );
}

export default function App() {
  const [input, setInput] = useState(7);
  const [flag, setflag] = useState(false);
  const [records, setRecords] = useState(initState);
  const [isMsg, setIsMsg] = useState(false)

  useEffect(() => {
    setflag(false);

    const keyWordJson1 = localStorage.getItem(KEY1);
    const keyWordJson2 = localStorage.getItem(KEY2);
    if (keyWordJson1) {
      setRecords(JSON.parse(keyWordJson1));
    }
    if (keyWordJson2) {
      setInput(JSON.parse(keyWordJson2));
      if (JSON.parse(keyWordJson2)% 7 === 0) setflag(true);

    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY1, JSON.stringify(initState));
    localStorage.setItem(KEY2, JSON.stringify(input));
  }, [records, input]);
  function handleInput(e) {
    setflag(false);
    if (!e.target.value) 
      setflag(false)
    if (isNaN(e.target.value)) return
    console.log(e.target.value);
    if (e.target.value && e.target.value % 7 === 0) setflag(true);
    setInput(e.target.value);
  }
  // function handleRecords(e){
  //   setRecords(e.target.value)
  // }
  function handleWord( e) {
    if (!e.target.textContent) return;
    if (e.target.textContent %7 ===0)
      setflag(true)

    setInput(e.target.textContent);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    if (!records.includes(input)) {
      setRecords([...records, input]);
    }
  };

  return (
    <>
      <button onClick={()=> {
        setRecords(sevens)
        }}
        >填充数据7</button>
              <button onClick={()=> {
        setRecords(ori)
        }}
        >清空数据</button>
      <h1>能被7整除的项目</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={Number}
          value={input}
          onChange={handleInput}
        />
      </form>
      <button onClick={() => setInput(-7 + parseInt(input))}>-</button>
      <button onClick={() => setInput(7 + parseInt(input))}>+</button>
      <c.Provider value={{ input, flag }}>
        <Counter />
      </c.Provider>

      {/* <input  type={Number} value={input} onChange={e=>setInput(e.target.value)}/> */}
      <div>


      <button
        onClick={() => {
          initState = [...records];
          setIsMsg(true)
          setTimeout(() => {
            setIsMsg(false)
          }, 500);
        }}
        >
        存档
      </button>
        <button onClick={() => setRecords(initState)}>读取</button>
        </div>
      <div>
        {isMsg&&<p>已经保存</p>}
      {records.map((record) => (
        <button onClick={(e) => handleWord(e)} title={record}>
          {record}
        </button>
      ))}
      </div>
    </>
  );
}
