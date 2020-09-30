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
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(true)

  const handleOne = () => setOne(prev=>!prev)
  const handleTwo = () => setTwo(prev=>!prev)

  return (
    <Room>
      <Lamp lampOn={one} pos="left" />
      <Lamp lampOn={two} pos="right" />
      <LightSwitch 
        name='one'
        callback={handleOne}
        switchOn  = {one}
        pos = 'left'
      />
      <LightSwitch 
        name='two'
        callback={handleTwo}
        switchOn  = {two}
        pos = 'right'
      />
    </Room>

  )
}





