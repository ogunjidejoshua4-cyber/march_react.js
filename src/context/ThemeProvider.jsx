import React, { useState } from 'react'
import ThemeContext from './themeContext';

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("Dark");
    const toggleTheme = ()=>{
        setTheme(()=> theme == "Light" ? "Dark" : "Light")
    }
     const values = {
        theme,
        toggleTheme
    } 
    
  return <ThemeContext.Provider value={values} >
    {children}
  </ThemeContext.Provider>
}