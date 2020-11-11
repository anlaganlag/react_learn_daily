import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const breedsURL = "https://dog.ceo/api/breeds/list";
  const randomURL = "https://dog.ceo/api/breeds/image/random";
  const selectBreedURL = `https://dog.ceo/api/breed/${breed}/images/random`

  useEffect(() => {
    fetch(breedsURL)
      .then((resp) => resp.json())
      .then((data) => setData(data.message));
  }, []);

  useEffect(() => {
    fetch(randomURL)
      .then((resp) => resp.json())
      .then((img) => setImage(img.message));
  }, []);

  function fetchBreedImage () {
    fetch(selectBreedURL)
      .then((resp) => resp.json())
      .then((img) => setImage(img.message));


  }

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
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
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
            <img src={image} alt />

            <button >查看品種:{breed}</button>
          </div>
        }

        <div className="card"></div>
      </div>
    </>
  );
}
export default App;
