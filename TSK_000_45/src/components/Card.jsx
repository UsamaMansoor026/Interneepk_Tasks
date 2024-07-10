import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, price }) => {
  return (
    <article key={id}>
      <Link to="/cakes">
        <div className="overflow-hidden">
          <img
            className="w-full aspect-square object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="my-3">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-primary-color font-semibold">$ {price}</p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
