import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./Notification-slice";

const initialCartState = { toggleCart: true, cartItems: [], changed: false };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    replaceCart: (state, action) => {
      state.cartItems = action.payload.cartItems;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      console.log(existingItem);
      state.changed = true;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      // state.cartItems.push(action.payload);
      // console.log(action.payload);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.changed = true;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
