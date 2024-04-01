import { apiSlice } from "../apiSlice/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = apiSlice;
