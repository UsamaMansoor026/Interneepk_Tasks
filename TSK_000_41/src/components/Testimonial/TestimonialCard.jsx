import React from "react";
import styles from "./Testimonial.module.css";

const TestimonialCard = ({ data }) => {
  return (
    <article className={styles.testimonialCard} key={data.id}>
      <q>{data.desc}</q>
      <h2>{data.name}</h2>
      <p>{data.location}</p>
    </article>
  );
};

export default TestimonialCard;
