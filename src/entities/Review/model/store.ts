import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

// query actions ( async )

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
});

// export const {} = reviewSlice.actions;

export const { reducer } = reviewSlice;
