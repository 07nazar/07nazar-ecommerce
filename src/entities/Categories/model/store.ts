import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryFactory } from 'shared/api';

import type { Category } from '../types';

const CATEGORIES_KEY = 'categories';

const initialState: Category[] = [];

// query actions ( async )

export const categoriesApi = createApi({
  reducerPath: CATEGORIES_KEY,
  baseQuery: baseQueryFactory('/category'),
  endpoints: builder => ({
    getCategories: builder.query<Category, void>({
      query: () => '/all',
    }),
    deleteCategory: builder.mutation<void, number>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
// TODO данные все равно записываются в стор, хотя нигде не указывал этого
const categoriesSlice = createSlice({
  name: CATEGORIES_KEY,
  initialState,
  reducers: {
    setCategories: (state, { payload }) => payload,
  },
});

export const { setCategories } = categoriesSlice.actions;

export const { useGetCategoriesQuery, useDeleteCategoryMutation } =
  categoriesApi;

export const { reducer } = categoriesSlice;
