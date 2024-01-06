import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice.js";
import { api } from "./api/apiSlice.js";

const createStore = async () => {
  try {
    const store = configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice,
      },
      middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(api.middleware),
    });

    return store;
  } catch (error) {
    throw new Error(error);
  }
};

export default createStore;
