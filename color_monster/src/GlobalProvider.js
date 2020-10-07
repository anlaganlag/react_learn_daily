import React, { createContext, useState, useContext } from "react";
import colorData from "./InitialData/color-data.json";
import { v4 as uuid } from "uuid";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext); //这是应用的封装到useColors里面

export default function GlobalProvider({ children }) {
  //这是提供端
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) =>
    setColors([
      ...colors,
      {
        id: uuid(),
        score: 0,
        title,
        color,
      },
    ]);
  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  const handleRate = (id, score) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, score } : color))
    );

  return (
    <ColorContext.Provider
      value={{ colors, addColor, removeColor, handleRate }}
    >
      {children}
    </ColorContext.Provider>
  );
}


export const useColors  = () => useContext(ColorContext)
