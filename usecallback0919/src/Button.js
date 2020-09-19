import React from 'react'

const buttonStyle = {
    width:"200px",
    padding:"20px",
    background:"black",
    color:"white",
    fontsize:"20px",
    margin:"40px"
}
const Button = ({callback}) => (
    <button style={buttonStyle} onClick={callback}>
        {console.log("button重新渲染")}
         點擊!
    </button>
)

export default Button
