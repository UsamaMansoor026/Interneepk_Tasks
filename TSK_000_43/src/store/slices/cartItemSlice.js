import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  cartItems: [{}],
};

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialValue,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        id: action.payload,
        name: action.payload,
        image: action.payload,
        price: action.payload,
      };
      state.cartItems.push(newItem);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;
