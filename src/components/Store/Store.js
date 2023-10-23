import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: { cartReducer: CartSlice.reducer },
});

export default Store;
