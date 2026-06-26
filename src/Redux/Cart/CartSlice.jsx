import { createSlice } from "@reduxjs/toolkit";

const cartData =
  JSON.parse(localStorage.getItem("cartData")) || [];

const CartSlice = createSlice({
  name: "cart",
  initialState: cartData,

  reducers: {

    addcart: (state, action) => {

      const product = action.payload;

      const existingItem = state.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem(
        "cartData",
        JSON.stringify(state)
      );
    },

    increment: (state, action) => {

      const item = state.find(
        (product) =>
          product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem(
        "cartData",
        JSON.stringify(state)
      );
    },

    decrement: (state, action) => {

      const item = state.find(
        (product) =>
          product.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem(
        "cartData",
        JSON.stringify(state)
      );
    },

    removecart: (state, action) => {

      const updatedCart = state.filter(
        (item) =>
          item.id !== action.payload
      );

      localStorage.setItem(
        "cartData",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    },

    clearcart: () => {

      localStorage.removeItem("cartData");

      return [];
    },
  },
});

export const { addcart, increment, decrement, removecart, clearcart,} = CartSlice.actions;

export default CartSlice.reducer;