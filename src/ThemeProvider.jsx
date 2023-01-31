/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState} from "react";
// import { themes} from './Themes'

// eslint-disable-next-line no-bitwise
const Theme = "light" | "dark";
export const ThemeContext = React.createContext({
    theme: Theme,
    toggleTheme: () => {},
  });

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
    /* const color = theme === "light" ? "#1C1C1C" : "#FFFFFF";
    const backgroundColor = theme === "light" ? "#F5F5F5" : "1C1C1C";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor; */

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
           {children} 
        </ThemeContext.Provider>
    )
}

/* export const useTheme = () => {
    const value = useContext(ThemeContext);

    return value;
} */





