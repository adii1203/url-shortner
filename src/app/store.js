import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/linkSclice.js";
import userReducer from "../features/authSlice.js";
const store = configureStore({
  reducer: {
    links: linkReducer,
    user: userReducer,
  },
  // reducer: linkReducer,
});

export default store;
