import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: null,
};

export const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setAllLink: (state, payload) => {
      state.links = payload.payload;
    },
    addOne: (state, payload) => {
      state.links.push(payload.payload);
    },
  },
});

export const { setAllLink, addOne } = linkSlice.actions;
export default linkSlice.reducer;
