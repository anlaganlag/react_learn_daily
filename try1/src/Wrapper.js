import React, { useContext, createContext } from "react";

const ctx = createContext({msg:"Love"});
export const useCTX = () => useContext(ctx);

function Wrapper({ children }) {
  return <ctx.Provider value={{ msg: "BestPro" }}>{children}</ctx.Provider>;
}

export default Wrapper;
