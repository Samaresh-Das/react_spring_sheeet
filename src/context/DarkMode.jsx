import { createContext, useContext, useState, useEffect } from "react";

const DarkMode = createContext();

export const DarkModeEnabler = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkMode.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export const useDarkMode = () => useContext(DarkMode);
