import { baseApi } from 'shared/api';

import { User } from '../types';

export * from './users-from-server';
export * from './seller-product';

const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: id => `/user/${id}`,
    }),
    getUsers: builder.query<User, { count: number }>({
      query: ({ count }) => `/user/count=${count}`,
    }),
    registerUser: builder.mutation<User, User>({
      query: newUser => ({
        url: '/user',
        method: 'POST',
        body: newUser,
      }),
    }),
    loginUser: builder.mutation<User, { username: string; password: string }>({
      query: credentials => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: id => ({
        url: '/user',
        method: 'DELETE',
        body: id,
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useDeleteUserMutation,
} = userApi;
