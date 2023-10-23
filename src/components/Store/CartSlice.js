import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { toggleCart: true, cartItems: [], totalQty: "" };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
