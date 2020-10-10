import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './images/logo.svg';

const App = () => {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    const beer = await (await fetch('https://api.punkapi.com/v2/beers')).json();
    setBeer(beer);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className='App'>
      <img src={Logo} alt='logo' style={{ maxWidth: 200 }} />
      <h2>Punk IPA Beers</h2>
      {beer.map(beer => (
        <div key={beer.id}>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
