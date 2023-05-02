import { baseApi, TAGS } from 'shared/api';

import { mapCategory, mapCategoryWithInfo } from '../lib';
import { Category, CategoryDto, CategoryWithAdditionalInfo } from '../types';

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
        response.map(mapCategoryWithInfo),
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

export const {
  useGetCategoriesQuery,
  useGetFeaturedCategoriesQuery,
  useDeleteCategoryMutation,
} = categoriesApi;
