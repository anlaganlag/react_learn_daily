import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";
import ColorProvider from "./ColorProvider"

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  );
}
