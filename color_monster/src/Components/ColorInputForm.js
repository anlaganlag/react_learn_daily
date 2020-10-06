import React,{useState} from "react";
// import { useInput } from "./hooks"; //是一个列表,两个对象第一个是 {值,onChange} 第二个是设定为初始值的函数...
import { useColors } from "../GlobalProvider"; //使用打包过的应用端
import { css } from "emotion";

const useInput = iniVal => {
  const [value, setValue] = useState(iniVal);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(iniVal)
  ];
};

export default function ColorInputForm() {
  const [title, resetTitle] = useInput("紫色"); //前者是 {value,onChange},后者是设置为初始值的函数
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
