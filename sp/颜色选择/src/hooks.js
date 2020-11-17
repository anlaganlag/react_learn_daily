import { useState } from "react";


//就是回复到初始值的技术..


export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [

    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};
