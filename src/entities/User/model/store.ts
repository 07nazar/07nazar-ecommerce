import { createSlice } from '@reduxjs/toolkit';

import { baseApi } from 'shared/api';

import type { User } from '../types';

type UserType = Pick<User, 'id' | 'name' | 'photo' | 'address' | 'contacts'>;

type UserState = UserType;

const initialState: UserState = {
  id: '',
  name: '',
  photo: '',
  contacts: {},
  address: {},
};

// query actions ( async )

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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export const {
  useGetUserByIdQuery,
  useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useDeleteUserMutation,
} = userApi;

export const { reducer } = userSlice;
