import { configureStore } from "@reduxjs/toolkit";
import stickySlice from "./features/stickySlice";

export const store = configureStore({
  reducer: {
    sticky: stickySlice,
  },
});
