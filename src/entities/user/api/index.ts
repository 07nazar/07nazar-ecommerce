import { baseApi } from 'shared/api';

import { mapUsersData, UserTableList } from '../lib';
import { User } from '../types';

export { usersFromServer } from './users-from-server';
export { sellerFromServer } from './seller-product';

type GetUsersPayload = {
  count: number;
  search: string;
  sortBy: string;
};

const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: id => `/user/${id}`,
    }),
    getUsers: builder.query<UserTableList[], GetUsersPayload>({
      query: ({ count, search, sortBy }) => ({
        url: '/users',
        method: 'GET',
        params: {
          count,
          search,
          sortBy,
        },
        transformResponse: (response: unknown[]) => response.map(mapUsersData),
      }),
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
