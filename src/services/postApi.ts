import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], null>({
      query: () => "posts",
    }),
    getPostById: builder.query<Post, { userId: string }>({
      query: ({ userId }) => `posts/${userId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;
