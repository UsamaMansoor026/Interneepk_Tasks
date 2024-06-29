import React from "react";
import styles from "./Testimonial.module.css";
import { testimonialsData } from "../../assets/assets";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <h1 className={styles.heading}>
        What Students are saying <br />
        about internee.pk
      </h1>

      <div className={styles.wrapper}>
        {testimonialsData.map((testimonial) => {
          return <TestimonialCard data={testimonial} />;
        })}
      </div>
    </section>
  );
};

export default Testimonial;
