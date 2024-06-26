import React from "react";
import styles from "./Hero.module.css";
import { galleryImages } from "../../assets/assets";
import TypingText from "../TypingText/TypingText";
import Button from "../Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Left Portion */}
      <div className={styles.heroLeft}>
        <h1 className={styles.tagline}>Looking for dream internship?</h1>

        <TypingText />
        <p className={styles.subText}>
          Internee.pk kickstart student's tech careers with first internships,
          providing industry exposure, practical skills, and networking
          opportunities, paving the way for their success in the tech industry.
        </p>

        {/* two buttons */}
        <div className={styles.btnContainer}>
          <div className={styles.innerContainer}>
            <Button isBackground={false}>Job Portal</Button>
            <p className="italic font-semibold">Coming soon</p>
          </div>
          <div className={styles.innerContainer}>
            <Button isBackground={true}>Our LMS</Button>
            <p className="italic font-semibold">90% course in Urdu</p>
          </div>
        </div>
      </div>
      {/* Right Portion */}
      <div className={styles.heroRight}>
        <img src={galleryImages.Gallery1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
