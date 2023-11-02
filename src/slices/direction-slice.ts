import { createSlice } from "@reduxjs/toolkit";

const directionSlice = createSlice({
  name: "direction",
  initialState: null,
  reducers: {
    fromDirection: (state, action) => {
      return action.payload.from;
    },
    toDirection: (state, action) => {
      return action.payload.to;
    },
  },
});

export const { fromDirection, toDirection } = directionSlice.actions;
export default directionSlice.reducer;
