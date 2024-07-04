import React, { useEffect, useState } from "react";
import "./color.css";

function Color() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "white";
  });

  const themeClass = theme === "white" ? "white-bg" : "dark-bg";

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "#1F1B24" : "white"));
  };

  return (
    <div style={{ backgroundColor: `${theme}` }} className={themeClass}>
      <h1>Hi there!!!!!</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Color;
