import React from "react";

const ItemCard = ({ name, image, price }) => {
  return (
    <article className="my-2 shadow-xl hover:shadow-2xl duration-100 cursor-pointer rounded-b-2xl">
      <div className="overflow-hidden">
        <img
          className="w-full object-cover rounded-t-2xl"
          src={image}
          alt={name}
        />
      </div>

      {/* Content */}
      <div className="text-center my-2">
        <h2 className="text-xl">{name}</h2>
        <p className="font-semibold my-2">$ {price}</p>
      </div>
    </article>
  );
};

export default ItemCard;
