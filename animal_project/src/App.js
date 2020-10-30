import React,{useState} from "react";
import { lists } from "./animal";

// lists.forEach(
//   function(item, idx) {
//     item["name"] =idx**2
//   },
// );

console.log(lists,"iiiiiiiiiiiiii");

export default function App() {
  const [page, setPage] = useState(3)
  const [curList, setcurList] = useState(lists.slice(0,3))
  // const [submitPage, setsubmitPage] = useState(3)
  function handleAdd (){
    setPage(page+3);
    setcurList(lists.slice(page-3,page))
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log("page",page);
    setcurList(lists.slice(page-3,page))
    console.log("提交");

  }
  function handleInput(e) {
    if (isNaN(e.target.value)) return;
    setPage(e.target.value);
  }

  console.log(curList);
  return (
    <>
      <button onClick={handleAdd}>add</button>
      <form onSubmit={handleSubmit}>
        <input type={Number} value={page}   onChange={handleInput}
placeholder="输入页码" />
      </form>
      {curList.map((item, idx) => {
        return (
          <div>

        <p> {item.title} ({item.animal})</p>
        <img src={item.cover_src} />
          </div>
          )
      })}
    </>
  );
}
