import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const [breed, setBreed] = useState();
  const [image, setImage] = useState("");
  const [wiki, setWiki] = useState("");

  const breedsURL = "https://dog.ceo/api/breeds/list";
  const randomURL = "https://dog.ceo/api/breeds/image/random";
  const selectBreedURL = `https://dog.ceo/api/breed/${breed}/images/random`
  const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
  function fetchBreedImage () {
    fetch(selectBreedURL)
      .then((resp) => resp.json())
      .then((img) => setImage(img.message));


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

  useEffect(() => {
    fetch(breedsURL)
      .then((resp) => resp.json())
      .then((data) => setData(data.message));
  }, []);

  useEffect(() => {
    fetch(randomURL)
      .then((resp) => resp.json())
      .then((img) => 
        setImage(img.message));
  }, []);


  useEffect(() => {
    console.log("breed變化了", breed);
    // setTimeout(
    //   ()=>handleIntroDog(),1000

    // )
    handleIntroDog();
  }, [breed]);




  console.log(data, "數據");
  console.log(image, "圖片");
  return (
    <>
      <header>
        <h1 className="logo">選狗項目</h1>
      </header>
      <div className="container">
        <label htmlFor="breeds">選擇狗品種</label>
        <select
          className="u-full-width"
          onChange={(e) => setBreed(e.target.value)}
          value = {breed}
          id="breeds"
        >
          {data.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {
          <div onClick={fetchBreedImage}>
          <button>當前:{image.split("/")[4]}</button>
            <img src={image} alt="請選擇品種" />
      {wiki.type !== "disambiguation" && <p>維基百科:{wiki.extract}</p>}


          </div>
        }

        <div ></div>
      </div>
    </>
  );
}
export default App;
