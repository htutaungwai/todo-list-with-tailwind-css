import { apiSlice } from "../apiSlice/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/api/posts",
      method: "GET",
    }),

    createNewPost: builder.mutation({
      query: (data) => ({
        url: "/api/posts",
        method: "POST",
        body: data,
      }),
    }),

    deleteSinglePost: builder.mutation({
      query: (data) => ({
        url: "/api/posts",
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useCreateNewPostMutation,
  useDeleteSinglePostMutation,
} = apiSlice;
