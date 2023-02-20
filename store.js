import { configureStore } from "@reduxjs/toolkit";
import stickySlice from "./features/stickySlice";
import signUpSlice from "./features/signUpSlice";

export const store = configureStore({
  reducer: {
    sticky: stickySlice,
    signUp: signUpSlice,
  },
});
