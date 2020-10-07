import React ,{useState} form "react";

import { useColors } from "./GlobalProvider"

import {css} from "emotion"

const useInput = initValue => {
    const [value, setValue] = useState(initValue);
    return [
      { value, onChange: e => setValue(e.target.value) },
      () => setValue(initValue)
    ];
  };

  