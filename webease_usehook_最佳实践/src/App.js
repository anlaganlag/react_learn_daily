import React from 'react';
import FCC from './FCC'
import { ThemeProvider } from './ThemeContext'
 


export default function App() {
  return (
    <>
    <ThemeProvider>
      <FCC />
    </ThemeProvider>
    </>
  )
}
