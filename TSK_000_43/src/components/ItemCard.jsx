import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartItemSlice";

const ItemCard = ({ name, image, price }) => {
  const dispatch = useDispatch();

  return (
    <article className="my-2 mx-4 md:mx-0 shadow-xl hover:shadow-2xl duration-100 cursor-pointer rounded-b-2xl">
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
        <button
          onClick={() => dispatch(addToCart({ name, image, price }))}
          className="py-2 px-6 bg-primary"
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ItemCard;
