import React, { useState, useEffect } from 'react';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import x from './icons/x.svg';
import './CSS/Style.css';

const Navbar = ({ onScrollToSection }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set default active index to 0 (Home)
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar state
  const [isDarkMode, setIsDarkMode] = useState(false); // Detect dark mode

  useEffect(() => {
    const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(matchDarkMode); // Update state based on system preference

    // Add listener to detect system theme change
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQueryList.addListener(handleChange);

    // Cleanup the listener on component unmount
    return () => mediaQueryList.removeListener(handleChange);
  }, []);

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
      <div className={`nav ${isDarkMode ? 'dark' : ''}`}>
        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Main Navigation for Desktop */}
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

        {/* Social Media Links */}
        <div className="links">
          <a id="github" href="">
            <img className="icon" src={github} alt="" />
          </a>
          <a id="linkedin" href="">
            <img className="icon" src={linkedin} alt="" />
          </a>
          <a id="instagram" href="">
            <img className="icon" src={instagram} alt="" />
          </a>
          <a id="x" href="">
            <img className="icon" src={x} alt="" />
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
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
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
