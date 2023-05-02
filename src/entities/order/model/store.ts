import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
});

// export const {} = orderSlice.actions;

export const { reducer } = orderSlice;
