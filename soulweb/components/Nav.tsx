"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;
    setIsDarkMode(el.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border">
      <div>
        <Image
          src="/soullogo.jpg"
          alt="Soul Yatri Logo"
          width={120}
          height={32}
          className="h-auto max-h-10 w-auto object-contain"
        />
      </div>
      <div className="ml-auto flex items-center gap-1">
        <Button
          onClick={toggleDark}
          variant="ghost"
          className="ml-auto flex items-center gap-1.5"
        >
          {isDarkMode ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
