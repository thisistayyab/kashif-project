// Import necessary libraries
import React, { useState } from "react";
import "./CSS/Style.css"; // Create this file for styling
import rightarrow from './icons/rightarrow.svg'
import leftarrow from './icons/leftarrow.svg'
import quotes from './icons/quotes.svg'
const Carousel = () => {
  const slides = [
    {
      id: 1,
      heading: "Happy Clients Feedback",
      text: "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
      image: "https://via.placeholder.com/100",
      name: "John Doe",
      role: "Designer",
    },
    {
      id: 2,
      heading: "Happy Clients Feedback",
      text: "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
      image: "https://via.placeholder.com/100",
      name: "Jane Smith",
      role: "Developer",
    },
    {
      id: 3,
      heading: "Happy Clients Feedback",
      text: "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
      image: "https://via.placeholder.com/100",
      name: "Mike Brown",
      role: "Project Manager",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              {index === currentIndex && (
                <>
                  <h2 style={{ fontSize: 50, marginTop: 50 }}>{slide.heading}</h2>
                  <div className="slider-body">
                  <div class="quote">
                    <img viewBox="0 0 10 10" className="quote-svg" style={{width:70, height:50}} src={quotes} alt="" />
                  </div>
                    <p style={{ fontSize: 30 }}>{slide.text}</p>
                    <div className="slider-profile">
                      <img src={slide.image} alt={slide.name} className="profile-image" />
                      <div className="profile-info">
                        <h2>{slide.name}</h2>
                        <p style={{ fontSize: 20 }} className="role">{slide.role}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <button className="prev-btn" onClick={prevSlide}>
            <img src={leftarrow} alt="Left arrow" className="slider-icon" />
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <img src={rightarrow} alt="Right arrow" className="slider-icon" />
          </button>
        </div>
        <div className="dots-container">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};  

export default Carousel;
