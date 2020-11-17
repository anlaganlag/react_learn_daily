import React, { useState, useEffect } from "react";
// import Header from "./Header";
import CharacterGrid from "./CharacterGrid";
import axios from "axios";
const App = () => {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon/");
      console.log(result.data,"rrrrrrrrrrrrr");
      setItems(result.data);
      setList(result.data.results)
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      {/* <Header /> */}
      {/* <CharacterGrid isLoading={isLoading} items={items} /> */}
      <p>
      精灵：{items.count}
      <a href={items.next}>{items.previous}</a>
      <a href={items.next}>{items.next}</a>
      ></p>
      <ul>
        {list.map(i=><li>{i.name +" "+ i.url}</li>)}
      </ul>




    </div>
  );
};

export default App;
