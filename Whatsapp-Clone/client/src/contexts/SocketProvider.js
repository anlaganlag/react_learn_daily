import React, { useContext, useEffect, useState,createContext } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext)

//套接字需要id..
export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()
//io里面有两个参数一个是url一个是 q和id
//最后需要关闭套接字
  useEffect(() => {
    const newSocket = io(
      'http://localhost:5000',
      { query: { id } }
    )
    setSocket(newSocket)
    //用完即关闭io..
    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
