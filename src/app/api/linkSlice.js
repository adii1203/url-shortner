import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linkApi = createApi({
  reducerPath: "linkApi",
  tagTypes: ["Link"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.authToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLinks: builder.query({
      query: () => "link/fatchlinks",
      providesTags: ["Link"],
      // transformResponse: (res) => res.data.data,
    }),
    createLink: builder.mutation({
      query: (body) => {
        return {
          url: "link/short",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Link"],
    }),
    deleteLink: builder.mutation({
      query: (id) => {
        return {
          url: `link/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Link"],
    }),
  }),
});

export const {
  useGetLinksQuery,
  useCreateLinkMutation,
  useDeleteLinkMutation,
} = linkApi;
