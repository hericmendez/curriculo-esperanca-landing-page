import React from "react";

import { useTheme } from "@/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  if (!theme) return null; // Evita erro caso o tema ainda esteja carregando

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
className=" absolute top-2 right-2   bg-transparent border-none  text-3xl"
    >
      {theme === "dark" ? <span className=" rounded-full  p-2 hover:bg-blue-500">☀️</span> : <span className="  rounded-full  p-2 hover:bg-blue-900">🌙</span> }
    </button>
  );
};

export default ThemeToggle;