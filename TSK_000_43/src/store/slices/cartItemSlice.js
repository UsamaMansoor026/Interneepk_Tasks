import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

/* Cart Slicer */
export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        id: nanoid(),
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
      };
      alert("Item added to cart successfully");
      state.items.push(newItem);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      alert("Item removed from cart");
    },
  },
});

export const { addToCart, removeFromCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;
