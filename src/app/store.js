import { configureStore } from "@reduxjs/toolkit";
import { linkApi } from "./api/linkSlice.js";
import authSlice from "./slices/auth.slice.js";
import linkSlice from "./slices/link.slice.js";

const createStore = async () => {
  try {
    const store = configureStore({
      reducer: {
        [linkApi.reducerPath]: linkApi.reducer,
        auth: authSlice,
        links: linkSlice,
      },
      middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(linkApi.middleware),
    });

    return store;
  } catch (error) {
    throw new Error(error);
  }
};

export default createStore;
