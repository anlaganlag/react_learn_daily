import React, { useState } from "react";

// const List = ({ list }) =>
//   list.map(({ objectID, ...item}) =>
//       <Item key={objectID} {...item} />
//   )

// const Item = ({ title, url, author, num_comments, points, }) =>
//   <div>
//     <span>
//       <a href={url}>{title}</a>
//     </span>
//     <span>{author}</span>
//     <span>{num_comments}</span>
//     <span>{points}</span>
//   </div>

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />);
  
const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);

const Search = ({ searchTerm, handleSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={searchTerm} onChange={handleSearch} />
  </div>
);

const App = () => {
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "KingOfCode",
      url: "https://kingofcode.js.org/",
      author: "Best Coder",
      num_comments: 5,
      points: 10,
      objectID: 2,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedLists = list.filter((list) =>
    list.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1>My Hacker Stories</h1>

      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <p>
        {" "}
        Searching for <strong>{searchTerm}</strong>{" "}
      </p>

      <hr />

      <List list={searchedLists} />
    </>
  );
};
export default App;
