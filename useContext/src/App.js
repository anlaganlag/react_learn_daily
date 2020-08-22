import React from 'react'

const EContext = React.createContext('shit')

function Contexttanhao(){
  return (
    <EContext.Consumer>
      {(word) => <span>Oh {word}!</span>}
    </EContext.Consumer>
  )
}

function VistGrandmasHouse(){
  return(
    <EContext.Provider value='poop'>
      <h1>Grandam's house</h1>
      <Contexttanhao/>
    </EContext.Provider>
  )
}


function VisitFriendsHouse(){
  return (
    <>
      <h1>Friend's House</h1>
      <Contexttanhao />
    </>
  )
}

function VisitAlienHouse(){
  return (
    <>
    <EContext.Provider value="yumy">
      <h1>Alien's House</h1>
      <Contexttanhao />
    </EContext.Provider>
    </>
  )
}
function App(){
    return (
        <>
          <VistGrandmasHouse/>
          <VisitFriendsHouse/>
          <VisitAlienHouse/>
        </>
    )
}
export default App;