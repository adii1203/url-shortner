import { api } from "../../app/api/apiSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (cred) => ({
        url: "user/login",
        method: "POST",
        body: { ...cred },
      }),
    }),
    persistenceLogin: builder.query({
      query: () => "user/refresh-token",
    }),
    logout: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, usePersistenceLoginQuery, useLogoutMutation } =
  authApi;
