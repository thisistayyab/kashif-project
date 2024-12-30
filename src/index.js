import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';

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

  return (
    <>
      <Navbar onScrollToSection={scrollToSection} />

      <div ref={HomeRef}>
        <Home />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
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
