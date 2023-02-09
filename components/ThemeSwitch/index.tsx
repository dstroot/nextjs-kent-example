"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// icons
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";

// library
import { cn } from "../../lib/cn";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <div className="flex justify-between mx-auto bg-white border-2 border-gray-500 rounded-full dark:bg-gray-300 dark:border-gray-300 w-28">
        <button
          id="light"
          aria-label="light mode"
          className={cn(
            "hover:transition-all w-8 h-8 p-2 rounded-full hover:bg-gray-500 hover:text-white",
            theme === "light" ? "bg-gray-500 text-white" : "text-black"
          )}
          onClick={(e) => setTheme("light")}
        >
          <FiSun />
        </button>
        <button
          id="system"
          aria-label="system mode"
          className={cn(
            "hover:transition-all w-8 h-8 p-2 rounded-full hover:bg-gray-500 hover:text-white",
            theme === "system"
              ? "text-white bg-gray-500 dark:text-white"
              : "text-black"
          )}
          onClick={(e) => setTheme("system")}
        >
          <FiSettings />
        </button>
        <button
          id="dark"
          aria-label="dark mode"
          className={cn(
            "hover:transition-all w-8 h-8 p-2 rounded-full hover:bg-gray-500 dark:hover:text-white hover:text-white",
            theme === "dark" ? "bg-gray-500 text-white" : "dark:text-black"
          )}
          onClick={(e) => setTheme("dark")}
        >
          <FiMoon />
        </button>
      </div> */}

      <div className="inline-flex">
        <button
          onClick={(e) => setTheme("light")}
          // className="px-2 py-2 text-gray-800 bg-gray-300 rounded-l-full hover:bg-gray-400"
          className={cn(
            "hover:transition-all px-2 py-2 text-gray-800 bg-gray-300 rounded-l-full hover:bg-gray-500 dark:hover:text-white hover:text-white",
            theme === "light" ? "bg-gray-500 text-white" : "dark:text-black"
          )}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>

        <button
          onClick={(e) => setTheme("system")}
          // className="px-2 py-2 font-bold text-gray-800 bg-gray-300 hover:bg-gray-400"
          className={cn(
            "hover:transition-all px-2 py-2 text-gray-800 bg-gray-300 hover:bg-gray-500 dark:hover:text-white hover:text-white",
            theme === "system" ? "bg-gray-500 text-white" : "dark:text-black"
          )}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="3"></circle>

            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>

        <button
          onClick={(e) => setTheme("dark")}
          // className="px-2 py-2 font-bold text-gray-800 bg-gray-300 rounded-r-full hover:bg-gray-400"
          className={cn(
            "hover:transition-all px-2 py-2 text-gray-800 bg-gray-300 rounded-r-full hover:bg-gray-500 dark:hover:text-white hover:text-white",
            theme === "dark" ? "bg-gray-500 text-white" : "dark:text-black"
          )}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
