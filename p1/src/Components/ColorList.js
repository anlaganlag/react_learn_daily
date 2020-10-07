import React from "react";
import Color from "./Color";
import { useColors } from "../GlobalProvider";
import { css } from "emotion";

export default function ColorList() {
  const { colors } = useColors();

  if (colors.length===0) return <div> 列表为空</div>;

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {colors.map(color => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
