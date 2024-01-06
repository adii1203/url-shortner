import { api } from "../../app/api/apiSlice";

const linkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLinks: builder.query({
      query: () => "link/fatchlinks",
      providesTags: ["Link"],
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
