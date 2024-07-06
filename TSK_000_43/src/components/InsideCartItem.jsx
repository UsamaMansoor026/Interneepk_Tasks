import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartItemSlice";

const InsideCartItem = ({ id, name, image, price }) => {
  const dispatch = useDispatch();

  return (
    <article className="flex justify-between w-[80%] mx-auto py-4 px-6 my-4 rounded-xl  bg-[#7a797a]">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img className="w-[80px]" src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(id))}
        className="bg-primary flex justify-center items-center w-[60px] h-[60px] rounded-full relative"
      >
        <span className="text-red-600 text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </div>
    </article>
  );
};

export default InsideCartItem;
