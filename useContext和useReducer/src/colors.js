import React, { createContext } from "react";

// 创建 context
export const ColorContext = createContext({});

/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有子组件都可以通过调用 ColorContext 访问到 value
 */
export const Color = props => {
  return (
    <ColorContext.Provider value={{ color: "blue" }}>
      {props.children}
    </ColorContext.Provider>
  );
};
