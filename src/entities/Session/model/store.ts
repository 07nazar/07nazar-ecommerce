import { createSlice } from '@reduxjs/toolkit';

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

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

// export const {} = sessionSlice.actions;

export const { reducer } = sessionSlice;
