import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFetchDog() {
    console.log("从API获取一只狗的图片");
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        // 即获取到数据等一秒再set,即等载入图片的时间
        // 否则文字出了图片还要等一会
        setTimeout(()=>{
          setBreed(data.message.split("/")[4])
          setLoading(false)
        },1000)
        console.log(data);
      })
      .catch((e) => {
        console.error("没有找到狗子", e);
        setLoading(false);
      });
  }
  useEffect(() => {
    console.log("调用useEffect");
    handleFetchDog();
  }, []);

  return (
    <>
      <h1>随机一狗项目</h1>
      <button onClick={handleFetchDog}> 换张狗子图片</button>
      {data && <img src={data} alt="狗子图片" onClick={handleFetchDog} />}
      {loading 
        ? <h4>载入中.....</h4> 
        : <a href={`http://www.baidu.com/s?wd=${breed +" 犬"}`} target={"_blank"}> <h4>品种:{breed}</h4> 
          </a>
      }

      </>
      
  );
}
export default App;
