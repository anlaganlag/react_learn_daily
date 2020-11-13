import React from "react";
import { useCTX } from "./Wrapper";

function Content() {
  const { name } = useCTX();
  return (
    <div>
      <p>I'm {name}</p>
    </div>
  );
}

export default Content;
