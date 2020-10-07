import React, { createContext, useState, useContext } from "react";
import colorData from "./InitialData/color-data.json";
import { v4 as uuid } from "uuid";
// 核心语句创建ctx
const ColorContext = createContext();
// 封装成只要调用(),就可以使用到useContext(ctx),也不是特别难
export const useColors = () => useContext(ColorContext); //这是应用的封装到useColors里面

//Pv里面有c..可以有sueState
export default function GlobalProvider({ children }) {
  const [colors, setColors] = useState(colorData);
//就是原列表+1的模式..
//增加需要提供标题和颜色..
//都是用setXxx来操作..
  const handleAddColor = (title, color) =>
    setColors([
      ...colors,
      {
        id: uuid(),
        score: 0,
        title,
        color,
      },
    ]);
  //移除需要提供id...即不是该id都进行删除..
  const handleRemoveColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  const handleRateColor = (id, score) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, score } : color))
    );

  return (
    <ColorContext.Provider
      value={{ colors, handleAddColor, handleRemoveColor, handleRateColor }}
      //居然是双层的..
    >
      {children}
    </ColorContext.Provider>
  );
}
