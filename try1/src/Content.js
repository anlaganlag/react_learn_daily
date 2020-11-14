import React from "react";
import {useCTX} from "./Wrapper";

function Content() {
  const { name } = useCTX();
  return <div>{name}</div>;
}

export default Content;
