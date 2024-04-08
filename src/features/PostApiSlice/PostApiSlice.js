import { apiSlice } from "../apiSlice/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/api/posts",
      method: "GET",
    }),
  }),
});

export const { useGetAllPostsQuery } = apiSlice;
