import { createSlice, current, original } from '@reduxjs/toolkit';

import type { Category } from '../types';

import { categoriesApi } from '../api';
import { findObjectInArray } from '../lib';

type CategoriesSliceState = {
  categories: Category[];
  currentCategory: {
    name: string;
    id: string;
    productsCount: number;
  };
};

const initialState: CategoriesSliceState = {
  categories: [],
  currentCategory: {
    name: '',
    id: '',
    productsCount: 0,
  },
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentCategory: (
      state: CategoriesSliceState,
      { payload }: { payload: string }
    ) => {
      state.currentCategory.id = payload;

      const categoriesArray = current(state.categories);

      const foundObject =
        categoriesArray && findObjectInArray(categoriesArray, payload);

      state.currentCategory.name = foundObject?.name || '';
      state.currentCategory.productsCount = foundObject?.productsCount || 0;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      categoriesApi.endpoints.getCategories.matchFulfilled,
      (state: CategoriesSliceState, { payload }) => {
        state.categories = payload;
      }
    );
  },
});

export const { setCurrentCategory } = categoriesSlice.actions;

export const { reducer } = categoriesSlice;
