import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
});

// export const {} = reviewSlice.actions;

export const { reducer } = reviewSlice;
