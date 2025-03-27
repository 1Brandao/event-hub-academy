
import { useTheme } from "@/context/ThemeContext";
import React from "react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-muted overflow-hidden"
      role="switch"
      aria-checked={theme === "dark"}
    >
      <span className="absolute inset-0 p-1 flex justify-between items-center text-xs">
        <span className="text-white/80 pl-0.5">☀️</span>
        <span className="text-white/80 pr-0.5">🌙</span>
      </span>
      <span
        className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
          theme === "dark" ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};
