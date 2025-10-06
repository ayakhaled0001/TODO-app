import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(
    function () {
      localStorage.setItem("theme", theme);
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme == "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    },
    [theme]
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("cannot use this context outside the provider");
  }
  return context;
}

export { useTheme, ThemeProvider };
