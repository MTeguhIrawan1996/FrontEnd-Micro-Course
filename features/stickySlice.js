import { createSlice } from "@reduxjs/toolkit";

const sticky = createSlice({
  name: "sticky",
  initialState: {
    isSticky: true,
  },
  reducers: {
    setSticky: (state, actions) => {
      state.isSticky = actions.payload.isSticky;
    },
  },
});

export const { setSticky } = sticky.actions;
export default sticky.reducer;
