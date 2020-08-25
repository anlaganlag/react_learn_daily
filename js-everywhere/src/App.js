import React from 'react';
import './App.css';

import Sparkle from './Sparkle'

function App() {
  const name = 'Galfond';
  let now = (new Date()).toLocaleDateString();
  return (
    <div className="App">
      <p>Hello {name}!</p>
      <p>The current date is {now}</p>
      <p>Two plus two is {2+2}</p>
      <Sparkle />
    </div>
  );
}

export default App;
