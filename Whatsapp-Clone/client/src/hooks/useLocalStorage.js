//state和Effect是最常见的hook..
import { useEffect, useState } from 'react'

const PREFIX = 'whatsapp-clone-'


//相当与给useState继续了一个封装..变成了ls...
                  //key是ls必要的,,init是useState必要的..
export default function useLocalStorage(key, initialValue) {
  //组合成新的key,即key的完成体
  const prefixedKey = PREFIX + key
  //useSate有三种情况..即value有三种情况..
    //ls,fn()或init...
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue) return JSON.parse(jsonValue)
    // 这里判断传入的初始值是不是函数,因为typeof会返回function等
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
