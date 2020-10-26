import React, { useState  , useEffect } from 'react';
import "./App.css"
 

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    console.log('useEffect called!');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log('Oh noes!', err))
  }, []);

  return (
    <>
      <h1>随机一狗项目</h1>
    <div className="App">
      <img src={data} alt="狗狗图片" />
    </div>
    <div>

      <button>换狗了</button>
    </div>
    </>
  );
}

export default App;