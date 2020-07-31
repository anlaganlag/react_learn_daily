import React, {useState} from 'react';


const App = () => {
  const stories = [
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
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>My gal Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />
      <p>{searchTerm}</p>

      <List list={stories}/>

    </div>
  );
};

const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));


  const Search = props => (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );

export default App;
