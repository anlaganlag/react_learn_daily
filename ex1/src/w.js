import React, { useContext, createContext } from "react";

const CTX = createContext({name:"wwww"});
export const useCTX = () =>  useContext(CTX)


export default function Wrapper({ children }) {
  return <CTX.Provider value={{name:"牛逼了從value裏過啦的"}}>{children}</CTX.Provider>;
}
