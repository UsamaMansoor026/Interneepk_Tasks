import React from "react";
import styles from "./Jobs.module.css";
import { icons, jobsImages } from "../../assets/assets";

const Jobs = () => {
  return (
    <section className={styles.jobSection}>
      {/* 1st Job */}
      <div className={styles.jobWrapper}>
        <div
          style={{ marginLeft: "-300px" }}
          className={styles.jobImagePortion}
        >
          <img src={jobsImages.Task} alt="" />
        </div>
        <div className={styles.jobContentPortion}>
          <p className={styles.subHeading}>Our own task portal</p>
          <h1 className={styles.heading}>Manage Project Via Own Task Portal</h1>
          <p className={styles.tagline}>
            Welcome to internee.pk task portal. Where Tasks Transform Into
            Skills
          </p>

          {/* Remaining Content */}
          <div className={styles.innerWrapper}>
            {/* 1st Row */}
            {/* 1st child */}
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <img src={icons.Play} alt="" />
              </div>
              <p className={styles.itemDesc}>
                <span>Hands on Projects</span> we believe in learning by doing.
                Dive into hands-on projects that simulate real-world scenarios.
                From coding challenges to creative projects, every task is
                crafted to impart practical skills that resonate in professional
                environments.
              </p>
            </div>

            {/* 2nd child */}
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.itemIcon} src={icons.Account} alt="" />
              </div>
              <p className={styles.itemDesc}>
                <span>How to represent yourself</span> More than just completing
                tasks, It empowers you to showcase your journey. Every completed
                task contributes to your digital portfolio, a dynamic
                representation of your skills and accomplishments. Let your work
                speak volumes about your capabilities.
              </p>
            </div>

            {/* 2nd Row */}
            {/* 3rd child */}
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.itemIcon}
                  src={icons.CellphoneLink}
                  alt=""
                />
              </div>
              <p className={styles.itemDesc}>
                <span>SDLC Techniques</span> Understanding the Software
                Development Life Cycle (SDLC) is pivotal in the tech world.
                Acquire skills that align with industry standards and boost your
                project management proficiency.
              </p>
            </div>

            {/* 4th child */}
            <div className={styles.item}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.itemIcon}
                  src={icons.PlaylistCheck}
                  alt=""
                />
              </div>
              <p className={styles.itemDesc}>
                <span>Easy to understand</span> Learning shouldn't be
                complicated. Our tasks are designed to be easily comprehensible,
                ensuring a smooth learning experience for everyone. Whether
                you're a seasoned professional or a beginner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
