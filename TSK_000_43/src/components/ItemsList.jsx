import React from "react";
import { food_list } from "../assets/assets";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {food_list.map((item) => (
        <ItemCard
          key={item._id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ItemsList;
