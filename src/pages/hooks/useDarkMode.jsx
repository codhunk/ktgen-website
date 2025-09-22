// hooks/useDarkMode.js
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.documentElement.classList;
    if (darkMode) {
      bodyClass.add(className);
      localStorage.setItem("theme", "dark");
    } else {
      bodyClass.remove(className);
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
