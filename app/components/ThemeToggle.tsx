"use client";

import React, { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startDark = stored ? stored === "dark" : prefersDark;
    setDark(startDark);
    html.classList.toggle("dark", startDark);
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const next = !dark;
    setDark(next);
    html.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 dark:border-white/15 w-10 h-10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
    >
      {dark ? <SunMedium className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
