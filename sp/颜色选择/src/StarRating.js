import React from "react";
import { createArray } from "./lib";
import Star from "./Star";

export default function StarRating({
  className = "",
  totalStars = 5,
  selectedStars = 0,
  //只是说明是函数..
  onRate = f => f
}) {
  return (
    <div className={className}>
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            //相当与idx+1
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
