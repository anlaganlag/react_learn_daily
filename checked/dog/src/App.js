import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [wiki, setWiki] = useState("");
  const [wiki2, setWiki2] = useState("");
  const [main, setMain] = useState("");

  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(false);
  const dogURL = "https://dog.ceo/api/breeds/image/random";
  const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

  function handleFetchDog() {
    console.log("从API获取一只狗的图片");
    setData("");
    setLoading(true);
    fetch(dogURL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        // 即获取到数据等一秒再set,即等载入图片的时间
        // 否则文字出了图片还要等一会
        console.log(data.message, "圖片來源");

        const l1 = data.message.split("/")[4].split("-");
        if (l1.length === 2) {
          const [a, b] = l1;
          setBreed(b + "_" + a);
          setMain(a);
        } else {
          setBreed(l1);
          setMain(l1);
        }
        setLoading(false);
      })

      .catch((e) => {
        console.error("没有找到狗子", e);
        setLoading(false);
      });
  }

  function handleIntroDog() {
    console.log("獲取介紹狗狗的卡片");
    // setData("")
    fetch(wikiUrl + breed)
      .then((res) => res.json())
      .then((wiki) => {
        setWiki(wiki);
        console.log(wiki, "jjjjjjjj");
      });
  }

  function handleIntroDog2() {
    console.log(breed, "獲取介紹狗狗主類");
    if (breed[0]?.split("_").length === 1) return;
    console.log(breed);
    // setData("")
    fetch(wikiUrl + breed.split("_")[1])
      .then((res) => res.json())
      .then((wiki) => {
        setWiki2(wiki);
        console.log(wiki, "豬豬豬豬");
      });
  }

  // Alaskan_Malamute

  useEffect(() => {
    console.log("開始找狗了");
    handleFetchDog();
  }, []);

  useEffect(() => {
    console.log("breed變化了", breed);
    // setTimeout(
    //   ()=>handleIntroDog(),1000

    // )
    handleIntroDog();
    handleIntroDog2();

  }, [breed]);

  return (
    <>
      <h1>随机一狗项目</h1>
      {!loading && <img src={data} alt="狗子图片" onClick={handleFetchDog} />}
      {loading ? (
        <h4>载入中.....</h4>
      ) : (
        <a
          href={`http://www.baidu.com/s?wd=${breed + " 犬"}`}
          target={"_blank"}
        >
          {" "}
          <h1>主類 {main} </h1>
          {main !== breed && <h6>亞類 {breed.split("_").join(" ")}</h6>}
          {wiki2.title !== "Undefined" && <p>{wiki2.extract}</p>}
        </a>
      )}
      {/* <button onClick={handleIntroDog}>狗狗維基百科信息</button> */}
      {wiki.title !== "Not found." && <p>{wiki.extract}</p>}
    </>
  );
}
export default App;
