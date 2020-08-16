import React,{useState,useContext} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


export  function useTheme() {
    return useContext(ThemeContext)
}

export  function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

