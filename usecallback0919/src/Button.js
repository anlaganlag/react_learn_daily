import React from 'react'

const buttonStyle = {
    width:"200px",
    padding:"20px",
    background:"black",
    color:"white",
    fontsize:"20px",
    margin:"40px"
}
const Button = React.memo(({callback}) => (
    <button style={buttonStyle} onClick={callback}>
        {console.log("button重新渲染")}
         点击!
    </button>
))

export default Button
