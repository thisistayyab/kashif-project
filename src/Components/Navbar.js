import React, { useState } from 'react';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import x from './icons/x.svg';
import './CSS/Style.css';

const Navbar = ({ onScrollToSection }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set default active index to 0 (Home)

  const handleClick = (index, section) => {
    setActiveIndex(index);
    onScrollToSection(section);
  };

  return (
    <>
      <div className="nav">
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
    </>
  );
};

export default Navbar;
