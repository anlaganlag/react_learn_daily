import React, { useState   } from 'react';
import styled from 'styled-components'
import Lamp from './Lamp'
import LightSwitch from './LightSwitch'

const Room = styled.div`
  position:relative;
  width:500px;
  height:500px;
  border:10px solid black;
  margin:0 auto;
  `;


export default function App() {

  const [lights, setLights] = useState([false,true])

  const handleLights = (id) => {

    setLights( [...lights.slice(0,id),!lights[id],...lights.slice(id+1)])
}

console.log(lights);
  return (
    <Room>
      <Lamp lampOn={lights[0]} pos="left" />
      <Lamp lampOn={lights[1]} pos="right" />
      <LightSwitch 
        name='one'
        callback={()=>handleLights(0)}
        switchOn  = {lights[0]}
        pos = 'left'
      />
      <LightSwitch 
        name='two'
        callback={()=>handleLights(1)}
        switchOn  = {lights[1]}
        pos = 'right'
      />
    </Room>

  )
}





