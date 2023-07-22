import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://64674adeba7110b663b466b2.mockapi.io/";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["comments"],
    }),
    updateComment: builder.mutation({
      query: ({ id, comment }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body: {...comment},
      }),
      invalidatesTags: ["comments"],
    }),
    addComment: builder.mutation({
      query: ( comment ) => ({
        url: `${API_ENDPOINT}`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["comments"],
    }),
    deleteComment: builder.mutation({
      query: ( id ) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const { useGetAllCommentsQuery, useUpdateCommentMutation, useAddCommentMutation, useDeleteCommentMutation } = commentApi;
