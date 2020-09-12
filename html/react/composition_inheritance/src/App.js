import React from "react";

const Task = ({ title, msg ,text,children}) => (
  <>
    <p className="task_left">{title}</p>
    <p className="task_right">{msg}</p>
    <p className="task_c">{text}</p>
    <p className="cc">{children}</p>
  </>
);

const Aim = () => <h1>我要挑战110小时学习!!</h1>;

const Well = () => <h1>Welcome!!</h1>;

const App = () => (
  <>
  <Task>
    <Task title={<Aim />} msg={<Well />} text ="Always Good"/>
    <p style={{color:"red",fontWeight:"bold"}}>这是children的黄金孔哈哈</p>

    </Task>kjk
  </>
);

// function App() {
//   return (
//     <>
//       <h1>清单</h1>
//       <ul>
//         <Task children="Best P" />
//         <Task children="React Dev" />
//         <Task children="Coding Matching" />
//         <Task>Coding everyNight <p>haha</p></Task>
//       </ul>
//     </>
//   );
// }
export default App;
