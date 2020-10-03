import React, { useState, useContext, createContext } from "react";
//首先创建bb机通讯系统
const RoomContext = createContext();
function RoomStore({ children }) {
  const [isLit, setLit] = useState(false);
  const onToggleLight = () => setLit(!isLit);
  return (
    <RoomContext.Provider
      value={{
        isLit,
        onToggleLight,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

const Room = () => {
  //有点类似decode Context
  const { isLit, onToggleLight } = useContext(RoomContext);
  return (
    <div className={`room ${isLit ? "亮了" : "暗了"}`}>
        房间{isLit ? "亮了" : "暗了"}.
      <br />
      <button onClick={onToggleLight}>电源开关</button>
    </div>
  );
};
const App = () => (
  <RoomStore>

  <div className="app">
    <Room />
  </div>
  </RoomStore>
);

export default App;
