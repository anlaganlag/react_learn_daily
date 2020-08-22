import React,{useState} from "react";

const List = props =>
  props.list.map((item) => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event)
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p> Searching for <strong>{searchTerm}</strong> </p>


    </div>
  );
};

const App = () => {
  const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    {
      title: 'KingOfCode',
      url: 'https://kingofcode.js.org/',
      author: 'Best Coder',
      num_comments: 5,
      points: 10,
      objectID: 2,
      },
  ]

  const handleSearch = event => {
    console.log(event.target.value)
  }
  return (
    <>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>
      
      <hr />

      <List list={list}/>
    </>
  );
};
export default App;
