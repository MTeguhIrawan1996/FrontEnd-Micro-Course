import { createSlice } from "@reduxjs/toolkit";

const signUp = createSlice({
  name: "signUp",
  initialState: {
    emailState: "",
  },
  reducers: {
    setEmailSignUp: (state, actions) => {
      state.emailState = actions.payload.emailState;
    },
  },
});

export const { setEmailSignUp } = signUp.actions;
export default signUp.reducer;
