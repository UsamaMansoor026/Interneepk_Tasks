import React from "react";
import styles from "./Card.module.css";

const Card = ({ internship }) => {
  return <div>{internship.name}</div>;
};

export default Card;
