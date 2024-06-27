import React from "react";
import styles from "./Card.module.css";

const Card = ({ internship }) => {
  return (
    <>
      <article className={styles.verticalCard}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.internshipImage}
            src={internship.image}
            alt=""
          />
        </div>
        <div className={styles.internshipContent}>
          <h3>{internship.name}</h3>
          <p>{internship.desc}</p>
          <div>
            <button className={styles.smallBtn}>Apply Now</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;

export const InternshipImageCard = ({ item }) => {
  return (
    <article className={styles.internshipCard}>
      <div>
        <img className={styles.internshipCardImage} src={item.image} alt="" />
      </div>
      <div className={styles.internshipCardContent}>
        <h2 className={styles.internshipCardName}>{item.name}</h2>
        <hr />
        <button className={styles.smallBtn}>Apply Now</button>
      </div>
    </article>
  );
};
