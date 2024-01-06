import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.authToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
  tagTypes: ["Link"],
});
