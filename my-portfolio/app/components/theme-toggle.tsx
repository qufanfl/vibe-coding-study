"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("theme") as Theme | null;

  return storedTheme ?? "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-10 w-[136px] grid-cols-2 rounded-full border border-zinc-200 bg-white p-1 text-xs font-semibold shadow-sm transition hover:border-[#6600CC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6600CC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf8] dark:border-zinc-700 dark:bg-zinc-900 dark:focus-visible:ring-[#9b5cff] dark:focus-visible:ring-offset-[#080b08]"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      suppressHydrationWarning
    >
      <span
        className={`flex items-center justify-center rounded-full px-3 transition ${
          isDark
            ? "text-zinc-500 dark:text-zinc-400"
            : "bg-[#6600CC] text-white shadow-sm"
        }`}
        aria-hidden="true"
      >
        Light
      </span>
      <span
        className={`flex items-center justify-center rounded-full px-3 transition ${
          isDark
            ? "bg-[#003300] text-white shadow-sm dark:bg-[#b7f5b7] dark:text-[#071007]"
            : "text-zinc-500"
        }`}
        aria-hidden="true"
        suppressHydrationWarning
      >
        Dark
      </span>
    </button>
  );
}
