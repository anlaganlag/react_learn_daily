import React from "react";

function Image({ image, alt }) {
  return (
    <div className="image-list">
      <img src={image} alt={alt} />
    </div>
  );
}

export default Image;
