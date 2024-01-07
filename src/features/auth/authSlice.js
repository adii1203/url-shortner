import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: "",
  loginError: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refrechCredentials: (state, { payload }) => {
      state.authToken = payload.accessToken;
      state.user = payload.user;
    },
    logout: (state) => {
      state.authToken = null;
      state.user = null;
    },
  },
});

export const { refrechCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.authToken;
