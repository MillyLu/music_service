/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { render } from "@testing-library/react";
import {
  ThemeContext,
} from "./ThemeProvider";

// eslint-disable-next-line react/function-component-definition
const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
      return;
    }

    setCurrentTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });