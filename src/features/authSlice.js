import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "anonymous",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, payload) => {
      state.status = "loggedIn";
      state.user = payload.payload;
    },
    logout: () => {},
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
