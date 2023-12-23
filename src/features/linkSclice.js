import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: null,
};

export const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, payload) => {
      state.links = payload.payload;
    },
  },
});

export const { addLink } = linkSlice.actions;
export default linkSlice.reducer;
