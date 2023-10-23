import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { toggleCart: true, cartItems: [], totalQty: "" };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      console.log(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems.pop();
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
