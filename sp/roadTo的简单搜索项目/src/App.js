import React, { useState,useEffect } from "react";

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

const InputwithLabel = ({ 
  id, 
  label,
  value,
  type='text',
  onInputChange,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input 
      id={id} 
      type={type}
      value={value} 
      onChange={onInputChange} 
    />
  </>
);


const useSemiPersistentState = (key,initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key,value);
    }, [value,key]);
  return [value,setValue];
}

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
    {
      title: "BestPro",
      url: "https://galfond.js.org/",
      author: "Best builder",
      num_comments: 7,
      points: 13,
      objectID: 3,
    },
  ];
  const [searchTerm,setSearchTerm] = useSemiPersistentState('search','Vue');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedLists = list.filter((list) =>
    list.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1>GalFond 的項目</h1>

      <InputwithLabel
        id="search"
        label="搜索框"
        value={searchTerm}
        onInputChange={handleSearch}
      >
      <strong style={{color:"orangered"}}>
      搜一搜
      </strong>
      </InputwithLabel>
      
      <p>
        {" "}
        正在搜索: <strong>{searchTerm}</strong>{" "}
      </p>

      <hr />

      <List list={searchedLists} />
    </>
  );
};
export default App;
