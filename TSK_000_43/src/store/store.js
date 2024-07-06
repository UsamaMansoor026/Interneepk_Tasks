import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartItemSlice";

export const store = configureStore({
  reducer: cartReducer,
});
