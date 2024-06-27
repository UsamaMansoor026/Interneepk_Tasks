import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";

const Card = ({ internship }) => {
  return (
    <>
      <article className="text-center mx-[10px] mt-[20px] mb-[50px]">
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
            <Button isBackground={true}>Apply Now</Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
