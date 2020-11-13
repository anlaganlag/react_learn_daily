import React, {  useContext } from 'react';
 

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },

  bfa: {
    foreground: "#000",
    background: "#bfa"
  }
};

const ThemeContext = React.createContext();

export default function App() {
  return (
    <ThemeContext.Provider value={themes.bfa}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}