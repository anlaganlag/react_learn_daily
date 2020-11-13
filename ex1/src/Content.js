import React from "react";
import { useCTX } from "./w";
function Content() {
  const ctx = useCTX();
  console.log(ctx,useCTX,useCTX);
  return (
    <div>
      <p>{ctx.name} from children</p>
    </div>
  );
}

export default Content;
