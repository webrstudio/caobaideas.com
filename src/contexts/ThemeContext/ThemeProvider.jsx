"use client";
import { createContext, useState, useEffect, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);

  const changeMode = useCallback(() => {
    setLightMode((prev) => {
      const next = !prev;
      localStorage.setItem("lightMode", JSON.stringify(next));
      return next;
    });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("lightMode");
    if (saved !== null) {
      setLightMode(JSON.parse(saved));
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setLightMode(prefersLight);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("lightMode", "darkMode");
    html.classList.add(lightMode ? "lightMode" : "darkMode");
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ lightMode, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
