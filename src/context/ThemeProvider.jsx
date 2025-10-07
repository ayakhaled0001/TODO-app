import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // Use functional initialization to read from localStorage immediately
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      console.log("Initializing theme from localStorage:", savedTheme);
      return savedTheme === "dark" ? "dark" : "light";
    }
    return "light";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    console.log("Saving theme to localStorage:", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Debug: log current theme
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

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
