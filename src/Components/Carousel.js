import React, { useState, useRef } from "react";
import "./CSS/Style.css"; // Keep your existing styles
import './CSS/Dark.css'
import rightarrow from './icons/rightarrow.svg';
import leftarrow from './icons/leftarrow.svg';
import quotes from './icons/quotes.svg';

const Carousel = (props) => {
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
  const touchStartX = useRef(0); 
  const [direction, setDirection] = useState("");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setDirection("left");
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setDirection("right");
  };

  // Handle swipe events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // Get the initial touch position
  };
  

  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent default behavior if you need to swipe without scrolling
  };


  
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX; // Get the touch end position
    const swipeThreshold = 50; // Minimum distance to detect a swipe

    // Detect swipe direction
    if (touchStartX.current - touchEndX > swipeThreshold) {
      nextSlide(); // Swipe left
    } else if (touchEndX - touchStartX.current > swipeThreshold) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div
      className={`slider-${props.mode}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`slider-container-${props.mode}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide swipe-${direction} ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <>
                <h2 style={{ fontSize: 50, marginTop: 50 }}>{slide.heading}</h2>
                <div className="slider-body">
                  <div className="quote">
                    <img
                      viewBox="0 0 10 10"
                      className={`quote-svg quote-svg-${props.mode}`}
                      style={{ width: 70, height: 50 }}
                      src={quotes}
                      alt=""
                    />
                  </div>
                  <p style={{ fontSize: 30 }}>{slide.text}</p>
                  <div className={`slider-profile`}>
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="profile-image"
                    />
                    <div className="profile-info">
                      <h2>{slide.name}</h2>
                      <p style={{ fontSize: 20 }} className="role">
                        {slide.role}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        {/* Navigation buttons */}
        <button className={`prev-btn btn-${props.mode}`} onClick={prevSlide}>
          <img src={leftarrow} alt="Left arrow" className={`slider-icon-${props.mode}`} />
        </button>
        <button className={`next-btn btn-${props.mode}`} onClick={nextSlide}>
          <img src={rightarrow} alt="Right arrow" className={`slider-icon-${props.mode}`} />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot-${props.mode} ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
