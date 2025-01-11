import React, { useState,useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const HomeRef= useRef(null);
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: HomeRef,
      aboutUs: aboutUsRef,
      projects: projectsRef,
      services: servicesRef,
      contact: contactRef,
    };
    if (refs[section]) {
      refs[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mode, setmode] = useState(() => {
    // Check if the system prefers dark mode
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPreference ? "dark" : "light"; // Default to 'dark' if system preference is dark
  });

  useEffect(() => {
    // Apply the initial theme on load
    document.body.style.backgroundColor = mode === "dark" ? "black" : "white";
  }, [mode]); // Update body background color when the mode changes

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar 
      onScrollToSection={scrollToSection} 
      mode={mode}
      toggleMode={toggleMode}
      />

      <div ref={HomeRef}>
        <Home
        mode={mode}
        />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={projectsRef}>
        <Projects 
        mode={mode}
        />
      </div>
      <div ref={servicesRef}>
        <Services 
          mode={mode}
        />
      </div>
      <div ref={contactRef}>
        <Contact 
        mode={mode}
        />
        <Footer
        mode={mode}
        />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
