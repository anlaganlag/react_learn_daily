import React from "react";
import ScoreStar from "./ScoreStar";

const createArray = length => [...Array(length)];


export default function ColorScore({
  className = "",
  MaxStars = 5,
  selectedStars = 0,
  onRate
}) 
{
  return (
    <div className={className}>
      <div>
        {createArray(MaxStars).map((n, i) => (
          <ScoreStar
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} 星 (满分{MaxStars}星)
      </p>
    </div>
  );
}
