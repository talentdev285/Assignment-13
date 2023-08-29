"use client";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");

  const handleThemeClick = (themePreference) => {
    // Set the theme preference in a cookie
    document.cookie = `userPreference=theme:${themePreference}; path=/`;
    setTheme(themePreference);
  };

  return (
    <>
      <div className="button-home">
        <button onClick={() => handleThemeClick("dark")}>Dark</button>
        <button onClick={() => handleThemeClick("light")}>Light</button>
      </div>
    </>
  );
}
