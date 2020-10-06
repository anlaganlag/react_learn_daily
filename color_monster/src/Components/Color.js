import React from "react";
import ColorScore from "./ColorScore";
import { FaTrash } from "react-icons/fa";//一个垃圾桶的图标
import { useColors } from "../GlobalProvider";
import { css } from "emotion";

export default function Color({ id, title, color, score }) {
  const { handleRate, removeColor } = useColors();
  return (
    <section
      className={css`
        flex-basis: calc(25% - 2px - 0.5em);
        @media screen and (max-width: 1200px) {
          flex-basis: calc(33.3334% - 2px - 0.5em);
        }
        @media screen and (max-width: 800px) {
          flex-basis: calc(50% - 2px - 0.5em);
        }
        @media screen and (max-width: 500px) {
          flex-basis: calc(100% - 2px - 0.5em);
        }
        margin: 0.25em;
        border: 1px solid #ededed;
        h1 {
          margin: 0;
          text-align: center;
        }
      `}
    >
      <div
        className={css`
          position: relative;
        `}
      >
        <h1>{title}</h1>
        <button
          className={css`
            position: absolute;
            right: 0.25em;
            top: 0.25em;
            color: #c00;
          `}
          onClick={() => removeColor(id)}
        >
          <FaTrash />
        </button>
      </div>
      <div style={{ height: 150, backgroundColor: color }} />
      
      <ColorScore
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.5em;
          p {
            margin: 0;
          }
        `}
        selectedStars={score}
        onRate={score => handleRate(id, score)}
      />
    </section>
  );
}
