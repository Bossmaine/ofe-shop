import apiSlice from "./apiSlice";
import { USERS_URL } from "../constants";
import { BASE_URL } from "../constants";

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}${USERS_URL}/register`,
        method: 'POST',
        body: data,
      })
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `${BASE_URL}${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogOutMutation, useRegisterMutation } = usersSlice;
