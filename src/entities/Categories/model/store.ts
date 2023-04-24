import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryFactory } from 'shared/api';

import type { Category } from '../types';

const CATEGORIES_KEY = 'categories';

const initialState: Category[] = [];

// query actions ( async )

const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: baseQueryFactory('/categories'),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => '/',
      extraOptions: {},
    }),

    deleteCategory: builder.mutation<void, number>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

const categoriesSlice = createSlice({
  name: CATEGORIES_KEY,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      categoriesApi.endpoints.getCategories.matchFulfilled,
      (state, { payload }) => payload
    );
  },
});

// export const {} = categoriesSlice.actions;

export const { useGetCategoriesQuery, useDeleteCategoryMutation } =
  categoriesApi;

export const { reducer } = categoriesSlice;
