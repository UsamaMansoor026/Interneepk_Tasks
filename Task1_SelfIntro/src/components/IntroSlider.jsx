import React, { useState, useEffect } from "react";
import "./IntroSlider.css";
import { IntroQuesAns } from "./Intro";

const IntroSlider = () => {
  /* This state handles the current slide status */
  const [currentSlide, setCurrentSlide] = useState(0);

  /* This function handles the Next Slide functionality */
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === IntroQuesAns.length - 1 ? 0 : prevSlide + 1
    );
  };

  /* This function handles the Previous Slide functionality */
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? IntroQuesAns.length - 1 : prevSlide - 1
    );
  };

  /* This useEffect is used to automate the slider after every 3 seconds */
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="main__wrapper">
      <div className="slideshow-container">
        {IntroQuesAns.map((ques, index) => (
          <div
            key={index}
            className={`mySlides ${currentSlide === index ? "active" : ""}`}
          >
            <p className="question">{ques.question}</p>
            <p className="answer">{ques.answer}</p>
            {/* <div className="mySlidesContainer">
              
            </div> */}
          </div>
        ))}

        <a className="prev" onClick={handlePrevSlide}>
          &#10094;
        </a>
        <a className="next" onClick={handleNextSlide}>
          &#10095;
        </a>
      </div>
    </section>
  );
};

export default IntroSlider;
