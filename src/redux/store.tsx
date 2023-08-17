import { configureStore } from "@reduxjs/toolkit";
import downloadReducer from "./features/downloadSlice";

export const store = configureStore({
  reducer: {
    downloadReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
