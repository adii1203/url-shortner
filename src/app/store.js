import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/linkSclice.js";
const store = configureStore({
  reducer: linkReducer,
});

export default store;
