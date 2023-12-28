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
    deleteOne: (state, payload) => {
      state.links = state.links.filter((link) => link._id !== payload.payload);
    },
  },
});

export const { setAllLink, addOne, deleteOne } = linkSlice.actions;
export default linkSlice.reducer;
