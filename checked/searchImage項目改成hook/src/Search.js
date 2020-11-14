import React, { useState } from "react";
import { FormLabel, Input, FormHelperText } from "@chakra-ui/core";

export default function Search({ onSearchSubmit }) {
  const [state, setstate] = useState({ term: "" });
  const handleChange = (e) => {
    setstate({ ...state, term: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(state.term);
    setstate(...state, { term: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormLabel>圖片搜索</FormLabel>
        <Input value={state.term} onChange={handleChange} type="text" />
        <FormHelperText> Unsplash API</FormHelperText>
      </form>
    </div>
  );
}
