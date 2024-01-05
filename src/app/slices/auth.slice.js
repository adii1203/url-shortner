import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../actions/authActions";

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
    refrechCredentials: (state, action) => {
      state.authToken = action.payload.data.accessToken;
      state.user = action.payload.data.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.authToken = payload.data.accessToken;
      state.user = payload.data.user;
      state.loading = false;
      state.loginError = null;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      console.log(action);
      state.loginError = action.payload;
      state.loading = false;
    });
  },
});

export const { refrechCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.authToken;
