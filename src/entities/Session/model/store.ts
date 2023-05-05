import { createSlice } from '@reduxjs/toolkit';

import { baseApi, TAGS } from 'shared/api';

import { SessionUserId } from '../types';

type SessionSliceState =
  | {
      accessToken: string;
      userId: SessionUserId;
      isAuth: true;
    }
  | {
      accessToken?: string;
      userId?: SessionUserId;
      isAuth: false;
    };

const initialState: SessionSliceState = {
  isAuth: false,
};

// query actions ( async )

export const sessionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    refreshToken: builder.mutation({
      query: tokens => ({
        url: 'auth/refresh',
        body: tokens,
      }),
    }),
  }),
});

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

// export const {} = sessionSlice.actions;

export const { reducer } = sessionSlice;
