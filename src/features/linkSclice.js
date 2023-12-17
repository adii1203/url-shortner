import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [
    {
      key: "H38jds",
      originUrl: "https://www.google.com",
      clicks: 0,
      isActive: true,
      icon: "",
      image: "",
      title: "",
      description: "",
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
