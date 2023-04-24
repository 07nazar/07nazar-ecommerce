import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryFactory } from 'shared/api';

import type { User } from '../types';

const USER_KEY = 'user';

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

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryFactory('/user'),
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: id => `user/${id}`,
    }),
    getUsers: builder.query<User, { count: number }>({
      query: ({ count }) => `/count=${count}`,
    }),
    registerUser: builder.mutation<User, User>({
      query: newUser => ({
        url: '/',
        method: 'POST',
        body: newUser,
      }),
    }),
    loginUser: builder.mutation<User, { username: string; password: string }>({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: id => ({
        url: '/',
        method: 'DELETE',
        body: id,
      }),
    }),
  }),
});

const userSlice = createSlice({
  name: USER_KEY,
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
