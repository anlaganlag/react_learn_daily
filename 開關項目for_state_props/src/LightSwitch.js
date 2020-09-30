import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    position:absolute;
    left:${props=>(props.pos === 'left' ? '20px' :'380px')};
    bottom:20px;
    background:white;
    color:black;
    border:1px solid black;
    border-radius:10px;
    width:100px;
    height:50px;
    cursor:pointer;
    `;


const LightSwitch = ({ callback,pos,switchOn }) => (
    <Button onClick={callback} pos={pos}>

        {switchOn? 'On' :'Off'}
    </Button>
)

export default LightSwitch
