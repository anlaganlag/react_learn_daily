import React, {useEffect,useRef } from 'react';

function App(){

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
        <div>
          <p>Best Coder</p>
          <input  type='text' />
          <input ref={inputRef} type='text' />
        </div>
    )
}
export default App;