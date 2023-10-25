import { createSlice } from "@reduxjs/toolkit";

const NotifSlice = createSlice({
  name: "Ui",
  initialState: { notification: null },
  reducers: {
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = NotifSlice.actions;

export default NotifSlice;
