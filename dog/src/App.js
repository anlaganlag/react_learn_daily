import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [wiki, setWiki] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(false);
  const dogURL = "https://dog.ceo/api/breeds/image/random";
  const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

  function handleFetchDog() {
    console.log("从API获取一只狗的图片");
    setWiki("")
    setLoading(true);
    fetch(dogURL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        // 即获取到数据等一秒再set,即等载入图片的时间
        // 否则文字出了图片还要等一会
        console.log(data,"mmmm");

        const l1= data.message.split("/")[4].split("-")
        if (l1.length ===2){
          const [a,b]  = l1
          setBreed(b+"_"+a)
        } else {
          setBreed(l1)
        }
        
        // setBreed(data.message.split("/")[4].split("-").join("_"));
        console.log(breed,"bbbbbbbbb");
        setLoading(false);
        setWiki("")

      })

      .catch((e) => {
        console.error("没有找到狗子", e);
        setLoading(false);
      });
  }
  

  function handleIntroDog() {
      console.log("獲取介紹狗狗的卡片");
      fetch(wikiUrl + breed)
        .then((res) => res.json())
        .then((wiki) => {
          console.log(wiki, "jjjjjjjj");
          setWiki(wiki);
        }
        );
    }



  // Alaskan_Malamute

  useEffect(() => {
    console.log("调用useEffect");
    handleFetchDog();
  }, []);

  return (
    <>
      <h1>随机一狗项目</h1>
      <button onClick={handleIntroDog}>狗狗信息</button>
      {data && <img src={data} alt="狗子图片" onClick={handleFetchDog} />}
      {loading ? (
        <h4>载入中.....</h4>
      ) : (
        <a
          href={`http://www.baidu.com/s?wd=${breed + " 犬"}`}
          target={"_blank"}
        >
          {" "}
          <h4>品种:{breed}</h4>
        </a>
      )}
      {wiki.extract?
      <div>狗狗的wiki簡介:
        <p>{wiki.description}</p>


        <p>{wiki.extract}</p>
      </div>
      :<p>沒有數據</p>}
    </>
  );
}
export default App;
