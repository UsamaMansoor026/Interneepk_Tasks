import React from "react";
import styles from "./Testimonial.module.css";
import { icons, testimonialsData } from "../../assets/assets";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <h1 className={styles.heading}>
        What Students are saying <br />
        about internee.pk
      </h1>

      {/* Testimonial Card Wrapper */}
      <div className={styles.wrapper}>
        {testimonialsData.map((testimonial) => {
          return <TestimonialCard data={testimonial} />;
        })}
      </div>

      {/* small section */}
      <div className={styles.smallWrapper}>
        <div className={styles.smallItem}>
          <img src={icons.Shield} alt="" />
          <div className={styles.smallContent}>
            <h2>Safe and Secure</h2>
            <ul>
              <li>Powered by Microsoft Azure cloud technology.</li>
              <li>Encrypted at rest and in transit.</li>
              <li>Data resides in US-based data centers.</li>
            </ul>
          </div>
        </div>
        <div className={styles.smallItem}>
          <img src={icons.Card} alt="" />
          <div className={styles.smallContent}>
            <h2>Free From Internship To Certification</h2>
            <ul>
              <li>Profile Building & Optimization.</li>
              <li>Free Learning Management System.</li>
              <li>Hands on Tasks with Certification.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
