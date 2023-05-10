import * as categoriesApiImpl from './api';
import * as categoriesLibImpl from './lib';
import * as categoriesModelImpl from './model';

export * as categoriesTypes from './types';

export const categoriesApi = {
  useGetCategoriesQuery: categoriesApiImpl.useGetCategoriesQuery,
  useGetFeaturedCategoriesQuery:
    categoriesApiImpl.useGetFeaturedCategoriesQuery,
  useUpdateCategoryMutation: categoriesApiImpl.useUpdateCategoryMutation,
  useDeleteCategoryMutation: categoriesApiImpl.useDeleteCategoryMutation,
  useCreateCategoryMutation: categoriesApiImpl.useCreateCategoryMutation,
};

export const categoriesModel = {
  categoriesSlice: categoriesModelImpl.categoriesSlice,
  setCategories: categoriesModelImpl.setCategories,
  reducer: categoriesModelImpl.reducer,
};

export const categoriesLib = {
  mapCategory: categoriesLibImpl.mapCategory,
  mapCategoryWithInfo: categoriesLibImpl.mapCategoryWithInfo,
  findObjectInArray: categoriesLibImpl.findObjectInArray,
};
