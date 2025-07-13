import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // State
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    const willBeDark = !html.classList.contains("dark");

    html.classList.toggle("dark");
    setIsDark(willBeDark);
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
  };

  // Getting theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return { isDark, toggleDarkMode };
};
