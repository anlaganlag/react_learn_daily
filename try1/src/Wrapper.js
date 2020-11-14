import React, { useContext, createContext } from "react";

const ctx = createContext();
export const useCTX = () => useContext(ctx);

function Wrapper({ children }) {
  return <ctx.Provider value={{ name: "Gal" }}>{children}</ctx.Provider>;
}

export default Wrapper;
