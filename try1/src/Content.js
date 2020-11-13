import React from 'react'
import {useCTX} from './Wrapper'

function Content() {
  const {msg} = useCTX()
  return (
    <div>
      {msg}
    </div>
  )
}

export default Content
