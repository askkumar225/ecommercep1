import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});