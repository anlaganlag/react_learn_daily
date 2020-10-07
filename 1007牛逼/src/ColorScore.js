import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];//有多少颗星星就创建多长的列表..

//一个小星星
function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}


export default function ColorScore({
  className = "",
  MaxStars = 5,
  selectedStars = 0,
  onRate,
}) {
  return (
    <div className={className}>
      <div>
        {createArray(MaxStars).map((_, i) => (
          <Star
            key={i}
            selected={i<selectedStars}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>

    </div>
  );
}
