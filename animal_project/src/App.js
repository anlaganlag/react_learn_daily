import React,{useState,useEffect} from "react";
import { lists } from "./animal";



console.log(lists,"查看全部列表");

export default function App() {
  const [page, setPage] = useState(Math.ceil(Math.random()*1157))
  const [curList, setcurList] = useState(lists.slice(page-1,page+2))
  // const [submitPage, setsubmitPage] = useState(3)

  function handleSubmit(e){
    e.preventDefault()
    setcurList(lists.slice(parseInt(page)-1,parseInt(page)+2))
    console.log("当前列表",curList,"提交");

  }
  function handleInput(e) {
    if (e.target.value==="")
      setPage(1) 
    if (isNaN(e.target.value)) return;
    setPage(e.target.value);
  }
  useEffect(() => {
    console.log("cur",page);
  }, [page])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type={Number} value={page}   onChange={handleInput}
placeholder="输入页码" />
{page>0&&<p>{page}/{lists.length}</p>}
      </form>
      {curList.map((item, idx) => {
        return (
          <div>

        <span> 
        ({item.animal})
          {item.title} 
        </span>
        <img src={item.cover_src} />
          </div>
          )
      })}
    </>
  );
}
