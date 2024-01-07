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
  }),
});

export const { useLoginMutation, usePersistenceLoginQuery } = authApi;
