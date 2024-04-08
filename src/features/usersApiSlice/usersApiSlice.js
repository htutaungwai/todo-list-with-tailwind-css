import { apiSlice } from "../apiSlice/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/users/login",
        method: "POST",
        body: data,
      }),
    }),

    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/users/register",
        method: "POST",
        body: data,
      }),
    }),

    signout: builder.mutation({
      query: (data) => ({
        url: "/auth/users/logout",
        method: "POST",
        body: data,
      }),
    }),

    checkStatus: builder.query({
      query: () => ({
        url: "/auth/users/auth-status",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSignoutMutation,
  useCheckStatusQuery,
} = usersApiSlice;
