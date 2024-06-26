import React from "react";
import styles from "./Hero.module.css";
import { galleryImages } from "../../assets/assets";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Left Portion */}
      <div className={styles.heroLeft}>
        <h1>Looking for a internship</h1>
        <h1>Get a Competitive Job</h1>
        <p>
          Internee.pk kickstart student's tech careers with first internships,
          providing industry exposure, practical skills, and networking
          opportunities, paving the way for their success in the tech industry.
        </p>

        {/* two buttons */}
        <div className={styles.btnContainer}></div>
      </div>
      {/* Right Portion */}
      <div className={styles.heroRight}>
        <img src={galleryImages.Gallery1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
