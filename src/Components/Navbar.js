import React, { useState, useEffect, useRef } from "react";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";
import instagram from "./icons/instagram.svg";
import x from "./icons/x.svg";
import dark from "./icons/dark.svg";
import light from "./icons/light.svg";
import "./CSS/Style.css";
import "./CSS/Dark.css"

const Navbar = ({ onScrollToSection, toggleMode, mode }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  // Create a ref for the sidebar to check if the click is inside it
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Check the system's theme preference initially
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Load dark mode state from localStorage if it's set
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    // If no saved preference, use system preference
    const initialDarkMode = savedDarkMode || systemPreference;

    setIsDarkMode(initialDarkMode);

    // Apply the initial theme to body
    document.body.classList.toggle("dark-mode", initialDarkMode);
  }, []);

  useEffect(() => {
    // Event listener to close sidebar if the user clicks outside of it
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    // Update body class for dark mode
    document.body.classList.toggle("dark-mode", newDarkModeState);

    // Save preference to localStorage
    localStorage.setItem("darkMode", newDarkModeState);
  };

  const handleClick = (index, section) => {
    setActiveIndex(index);
    onScrollToSection(section);
    setSidebarOpen(false); // Close sidebar on navigation
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`nav ${isDarkMode ? "dark" : ""}`}>
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleSidebar}>
          <div className={`line-${mode}`}></div>
          <div className={`line-${mode}`}></div>
          <div className={`line-${mode}`}></div>
        </div>

        {/* Main Navigation */}
        <div className="list">
          <ul>
            <li
              className={`item ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleClick(0, "home")}
            >
              Home
            </li>
            <li
              className={`item ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleClick(1, "aboutUs")}
            >
              About Us
            </li>
            <li
              className={`item ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleClick(3, "projects")}
            >
              Projects
            </li>
            <li
              className={`item ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleClick(2, "services")}
            >
              Services
            </li>
            <li
              className={`item ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => handleClick(4, "contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Social Media Links and Dark Mode Toggle */}
        <div className="links">
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img className="icon" src={github} alt="GitHub" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img className="icon" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img className="icon" src={instagram} alt="Instagram" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img className="icon" src={x} alt="Twitter" />
          </a>
          <button style={{ border: "none", background: "transparent" }} onClick={() => {
    toggleMode();
    toggleDarkMode();
  }}>
            <img className="icon" src={isDarkMode ? light : dark} alt="Theme Toggle" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""} ${isDarkMode ? "dark" : ""}`}
      >
        <ul className="sidebar-list">
          <li
            className={`item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleClick(0, "home")}
          >
            Home
          </li>
          <li
            className={`item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleClick(1, "aboutUs")}
          >
            About Us
          </li>
          <li
            className={`item ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleClick(3, "projects")}
          >
            Projects
          </li>
          <li
            className={`item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleClick(2, "services")}
          >
            Services
          </li>
          <li
            className={`item ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => handleClick(4, "contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className={`overlay ${isDarkMode ? "dark" : ""}`}
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
