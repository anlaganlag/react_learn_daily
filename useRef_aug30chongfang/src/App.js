import React, { useState  , useEffect,useRef } from 'react';



function App(){
    const [ name , setName ] = useState("");
    const prevName = useRef('')

    useEffect(() => {
      console.log('調用Effect')
      prevName.current = name
    }, [name])

    return (
        <div>
          <input value={name} onChange={e=>setName(e.target.value)} />
          <div> My name is {name} and it used to be {prevName.current}</div>
        </div>
    )
}
export default App;