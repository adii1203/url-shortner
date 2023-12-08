import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [
    {
      route: "H38jds",
      destinationUrl: "https://www.google.com",
      clicks: 0,
      isActive: true,
    },
  ],
};

export const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, payload) => {
      state.links.push(payload.payload);
    },
  },
});

export const { addLink } = linkSlice.actions;
export default linkSlice.reducer;
