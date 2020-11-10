import React, { useState } from 'react';
 



function App(){
    const [ count , setCount ] = useState(Math.floor(Math.random()*100)
    );
    const [res, setRes] = useState(false)
    return (
        <div>
            <p> {count} **2= </p>
            <button onClick={()=>{
              setCount(Math.floor(Math.random()*100))
              }}>更新</button>
            <button onClick={()=>setRes(!res)}>顯示</button>
{    res && <p>{count**2}</p>
}        </div>
    )
}
export default App;