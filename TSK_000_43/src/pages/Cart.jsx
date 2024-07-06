import React from "react";
import { useSelector } from "react-redux";
import InsideCartItem from "../components/InsideCartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  return (
    <div className="mt-6 ">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <InsideCartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))
      ) : (
        <p className="text-center mx-auto">No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
