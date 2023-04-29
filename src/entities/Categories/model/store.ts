import { createSlice } from '@reduxjs/toolkit';

import { baseApi, TAGS } from 'shared/api';

import type {
  Category,
  CategoryDto,
  CategoryWithAdditionalInfo,
} from '../types';

import { mapCategory, mapCategoryWithAdditionalInfo } from '../lib';

const initialState: Category[] = [];

// query actions ( async )

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/category/all',
      transformResponse: (response: CategoryDto[]) => response.map(mapCategory),
      providesTags: [TAGS.CATEGORIES],
    }),
    getFeaturedCategories: builder.query<CategoryWithAdditionalInfo[], void>({
      query: () => '/category/featured',
      transformResponse: (response: CategoryDto[]) =>
        response.map(mapCategoryWithAdditionalInfo),
      providesTags: [TAGS.CATEGORIES],
    }),
    deleteCategory: builder.mutation<void, number>({
      query: id => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => payload,
  },
});

export const { setCategories } = categoriesSlice.actions;

export const {
  useGetCategoriesQuery,
  useGetFeaturedCategoriesQuery,
  useDeleteCategoryMutation,
} = categoriesApi;

export const { reducer } = categoriesSlice;
