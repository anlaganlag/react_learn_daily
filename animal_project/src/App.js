import React, { useState, useEffect } from "react";
import { lists } from "./animal";
import Grid from "./Grid";
import { Image, Text } from "./Thumb.styles";


export default function App() {
  //每页展示多少个项目
  const [perPage, setPerPage] = useState(60);
  //随机展示页码,总项目/每页的ceil即总页数..再根据总页数随机
  const [page, setPage] = useState(Math.ceil(Math.random() * Math.ceil(lists.length/perPage)));
  const [curList, setCurList] = useState(
    lists.slice(perPage * (page - 1), page * perPage)
  );

  function handleSubmit(e) {
    e.preventDefault();
    setCurList(
      lists.slice(perPage * (parseInt(page) - 1), parseInt(page) * perPage)
    );
    console.log("当前列表", curList, "提交");
  }
  function handleInput(e) {
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

      <Grid
        header={
          page > 0
            ? `页码 ${page}/${Math.ceil(lists.length / perPage)}`
            : "动物书封面"
        }
      >
        {curList.map((item, idx) => (
          <div className="Thumb">
            <Text>
              <small>{item.animal}</small>
            </Text>
            <Image src={item.cover_src} alt="动物图片" />
            <Text>
              <h5>{item.title}</h5>
            </Text>
          </div>
        ))}
      </Grid>
      <form onSubmit={handleSubmit}>
        <input
          type={Number}
          value={page}
          onChange={handleInput}
          placeholder="输入页码"
        />
      </form>
      <h4>{page > 0 && `页码 ${page}/${Math.ceil(lists.length / perPage)}`}</h4>
    </>
  );
}
