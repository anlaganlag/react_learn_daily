import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img}  alt='' />
        </div>
        <div className='card-back'>

          <h1>{item.name} 或 {item.nickname}</h1>
          <ul>
            <li>
              <strong>演员名字:</strong> {item.portrayed}
            </li>
            <li>
              <strong>生日:</strong> {item.birthday}
            </li>
            <li>
              <strong>存活情况:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
