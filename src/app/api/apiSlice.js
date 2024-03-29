import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { refrechCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://openurl.me/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.authToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

const reAuthQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 403) {
    const refreshResult = await baseQuery(
      "user/refresh-token",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      api.dispatch(refrechCredentials(refreshResult.data.data));
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const api = createApi({
  baseQuery: reAuthQuery,
  endpoints: (builder) => ({}),
  tagTypes: ["Link"],
});
