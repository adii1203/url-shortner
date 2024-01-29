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
    register: builder.mutation({
      query: (data) => ({
        url: "user/register",
        method: "POST",
        body: { ...data },
      }),
    }),
    verifyEmail: builder.query({
      query: (token) => `user/verify-email/${token}`,
    }),
    logout: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  usePersistenceLoginQuery,
  useLogoutMutation,
  useRegisterMutation,
  useVerifyEmailQuery,
} = authApi;
