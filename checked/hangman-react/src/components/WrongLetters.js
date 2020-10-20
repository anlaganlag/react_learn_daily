import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <p>輸入過的錯誤字母</p>
        }
{
  wrongLetters.map((w,i)=>
    <span key={i} >{w}</span>).reduce((total,cur)=>total===""?[cur]:[total,",",cur],"")
}
      </div>
    </div>
  )
}

export default WrongLetters
