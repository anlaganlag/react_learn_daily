import React,{useState} from "react";
import { useColors } from "../GlobalProvider"; //使用打包过的应用端
import { css } from "emotion";

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initVal)
  ];
};

export default function ColorInputForm() {
  const [title, resetTitle] = useInput("基紫色"); //前者是 {value,onChange},后者是设置为初始值的函数
  const [color, resetColor] = useInput("#bfabfa");
  const { addColor } = useColors(); //应用端口只用add..

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(title.value, color.value);
    resetTitle();
    resetColor();
  };
  // console.log(title,color,"1111111111111")

  return (
    <form
      className={css`
        display: flex;
        justify-content: space-between;
        margin: 4em;
        button {
          margin: 0.25em;
        }
        input {
          margin: 0.25em;
          &:first-child {
            flex: 1;
          }
        }
      `}
      onSubmit={handleSubmit}
    >
      <input
        {...title} //就是将value和onchange解包出来..
        type="text"
        placeholder="颜色名称..."
        required
      />
      <input {...color} type="color" required />
      <button>添加</button>
    </form>
  );
}
