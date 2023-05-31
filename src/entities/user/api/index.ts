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
    registerUser: builder.mutation<
      User,
      { name: string; email: string; password: string }
    >({
      query: newUser => ({
        url: '/user',
        method: 'POST',
        body: newUser,
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
  endpoints,
  useGetUserByIdQuery,
  useGetUsersQuery,
  useRegisterUserMutation,
  useDeleteUserMutation,
} = userApi;
