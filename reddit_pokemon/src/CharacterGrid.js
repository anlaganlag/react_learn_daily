import React from "react";
// import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <p>
          {" "}
          key={item.id} item={item}>
        </p>
      ))}
    </section>
  );
};

export default CharacterGrid;
