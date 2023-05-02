import { createSlice } from '@reduxjs/toolkit';

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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export const { reducer } = userSlice;
