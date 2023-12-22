import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  user: null,
  authToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, payload) => {
      state.status = "loggedIn";
      state.user = payload.payload.data.user;
      state.authToken = payload.payload.data.accessToken;
    },
    logout: (state) => {
      state.status = null;
      state.user = null;
      state.authToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
