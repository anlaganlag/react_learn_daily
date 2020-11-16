import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    position:absolute;
    left:${props=>(props.pos === 'left'?'20px':'380px')};
    top:20px;
    background:${props=> (props.lampOn?'red':'black')};
    width:100px;
    height:100px;
    border-radius:50%;
`;


const Lamp = ({ lampOn,pos}) => (

    <Wrapper lampOn={lampOn} pos={pos}/>
)

export default Lamp
