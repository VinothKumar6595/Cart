import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import NotifSlice from "./Notification-slice";

const Store = configureStore({
  reducer: { cartReducer: CartSlice.reducer, Ui: NotifSlice.reducer },
});

export default Store;
