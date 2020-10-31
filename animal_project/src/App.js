import React, { useState, useEffect } from "react";
import { lists } from "./animal";
import { Image, Text } from "./Thumb.styles";
import Grid from "./Grid";

console.log(lists, "查看全部列表");

export default function App() {
  const [page, setPage] = useState(Math.ceil(Math.random() * 1157));
  const [curList, setcurList] = useState(lists.slice(page - 1, page + 2));
  // const [submitPage, setsubmitPage] = useState(3)

  function handleSubmit(e) {
    e.preventDefault();
    setcurList(lists.slice(parseInt(page) - 1, parseInt(page) + 2));
    console.log("当前列表", curList, "提交");
  }
  function handleInput(e) {
    if (e.target.value === "") setPage(1);
    if (isNaN(e.target.value)) return;
    setPage(e.target.value);
  }
  useEffect(() => {
    console.log("cur", page);
  }, [page]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={Number}
          value={page}
          onChange={handleInput}
          placeholder="输入页码"
        />
      </form>

      <Grid header={page > 0 ? `${page}/${lists.length}` : "动物世界"}>
        {curList.map((item, idx) => (
          <div className="Thumb">
            <Text>
              <h5>{item.animal}</h5>

            </Text>
            <Image src={item.cover_src} alt="动物图片" />
            <Text>
              {item.title}
            </Text>
          </div>
        ))}
      </Grid>
    </>
  );
}
