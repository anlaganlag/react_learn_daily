import React,{useState} from "react";
import { lists } from "./animal";


export default function App() {
  const [page, setPage] = useState(3)
  const [curList, setcurList] = useState(lists.slice(0,3))
  function handleAdd (){
    setPage(page+3);
    setcurList(lists.slice(page-3,page))
  }
  console.log(curList);
  return (
    <>
      <button onClick={handleAdd}>add</button>
      {curList.map((item, idx) => {
        return (
          <div>

        <p> {item.title} </p>
        <img src={item.cover_src} />
          </div>
          )
      })}
    </>
  );
}
