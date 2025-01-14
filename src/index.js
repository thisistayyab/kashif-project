import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Components/CSS/Style.css'
import './Components/CSS/Dark.css'

const App = () => {
  const HomeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0); // Store active section index

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

  // Function to handle scroll and set active index
  const handleScroll = () => {
    const sections = [
      { ref: HomeRef, index: 0 },
      { ref: aboutUsRef, index: 1 },
      { ref: projectsRef, index: 2 },
      { ref: servicesRef, index: 3 },
      { ref: contactRef, index: 4 },
    ];

    sections.forEach(({ ref, index }) => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        setActiveIndex(index); // Update active index based on the section in view
      }
    });
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  const [mode, setMode] = useState(() => {
    // Check if the system prefers dark mode
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPreference ? 'dark' : 'light'; // Default to 'dark' if system preference is dark
  });

  useEffect(() => {
    // Apply the initial theme on load
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
  }, [mode]); // Update body background color when the mode changes

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar
        onScrollToSection={scrollToSection}
        mode={mode}
        toggleMode={toggleMode}
        activeIndex={activeIndex} // Pass activeIndex to Navbar to highlight active item
      />

      <div ref={HomeRef}>
        <Home mode={mode} />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs mode={mode} />
      </div>
      <div ref={projectsRef}>
        <Projects mode={mode} />
      </div>
      <div ref={servicesRef}>
        <Services mode={mode} />
      </div>
      <div ref={contactRef}>
        <Contact mode={mode} />
        <Footer mode={mode} />
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
