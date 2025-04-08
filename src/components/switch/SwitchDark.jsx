import React, { useState, useEffect } from "react";
import lightImage from "../../assets/img/sun.png";

const SwitchDark = () => {
  // Check initial state based on body class
  const [isDark, setIsDark] = useState(() => {
    return !document.querySelector("body").classList.contains("light");
  });

  useEffect(() => {
    // Apply initial class
    if (isDark) {
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    } else {
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    }
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
      setIsDark(true);
    }
  };

  return (
    <label className={`theme-switcher-label d-flex ${!isDark ? "active" : ""}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
        checked={!isDark}
        readOnly
      />
      <div className="switch-handle">
        <span className="light-text">
          <img src={lightImage} alt="switcher" className="filter_1" />
        </span>
        <span className="dark-text">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;
