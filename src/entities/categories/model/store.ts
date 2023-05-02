import { createSlice } from '@reduxjs/toolkit';

import type { Category } from '../types';

const initialState: Category[] = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => payload,
  },
});

export const { setCategories } = categoriesSlice.actions;

export const { reducer } = categoriesSlice;
