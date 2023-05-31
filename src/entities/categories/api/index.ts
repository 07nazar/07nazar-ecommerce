import { baseApi, TAGS } from 'shared/api';

import { mapCategoryWithInfo } from '../lib';
import { Category, CategoryDto, CategoryWithAdditionalInfo } from '../types';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/category/all',
      providesTags: [TAGS.CATEGORIES],
    }),
    getFeaturedCategories: builder.query<CategoryWithAdditionalInfo[], void>({
      query: () => '/category/featured',
      transformResponse: (response: CategoryDto[]) =>
        response.map(mapCategoryWithInfo),
      providesTags: [TAGS.CATEGORIES],
    }),
    createCategory: builder.mutation<
      Category,
      { name: string; parentId: string | null }
    >({
      query: ({ name, parentId }) => ({
        url: '/category/create',
        method: 'POST',
        body: { name, parentId },
      }),
      invalidatesTags: [TAGS.CATEGORIES],
    }),
    UpdateCategory: builder.mutation<
      void,
      { id: string; name?: string; parentName?: string }
    >({
      query: ({ id, name, parentName }) => ({
        url: '/category/update',
        method: 'PUT',
        body: { id, name, parentName },
      }),
      invalidatesTags: [TAGS.CATEGORIES],
    }),
    deleteCategory: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `/category/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: [TAGS.CATEGORIES],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetFeaturedCategoriesQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
} = categoriesApi;
