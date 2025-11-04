import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "light" ? lightTheme : darkTheme;
    } catch (e) {
      return darkTheme;
    }
  });

  useEffect(() => {
    try {
      const themeName = theme === lightTheme ? "light" : "dark";
      localStorage.setItem("theme", themeName);
      document.documentElement.setAttribute("data-theme", themeName);
    } catch (e) {
      console.warn("localStorage not available");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} onToggle={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
