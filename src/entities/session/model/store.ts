import { createSlice } from '@reduxjs/toolkit';

import { sessionApi } from '../api';
import { SessionUserId } from '../types';

type SessionSliceState =
  | {
      accessToken: string;
      userId: SessionUserId;
      isAuth: true;
    }
  | {
      isAuth: false;
      accessToken?: string;
      userId?: SessionUserId;
    };

const initialState: SessionSliceState = {
  isAuth: false,
};

// query actions ( async )

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      sessionApi.endpoints.loginUser.matchFulfilled,
      (state: SessionSliceState, { payload }) => {
        state.isAuth = true;

        if (state.isAuth) {
          state.accessToken = payload.accessToken;
        }
      }
    );
  },
});

// export const {} = sessionSlice.actions;

export const { reducer } = sessionSlice;
