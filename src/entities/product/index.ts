import * as productApiImpl from './api';
import * as productModelImpl from './model';

export * from './ui';
export * as productTypes from './types';

export const productApi = {
  productsApi: productApiImpl.productsApi,
  productsList: productApiImpl.productsList,
  useGetProductByIdQuery: productApiImpl.useGetProductByIdQuery,
  useGetProductsListQuery: productApiImpl.useGetProductsListQuery,
  productFromServer: productApiImpl.productFromServer,
  productsLikes: productApiImpl.productsLikes,
  productsRelated: productApiImpl.productsRelated,
  productsMin: productApiImpl.productsMin,
  dealsItemsFromFakeApi: productApiImpl.dealsItemsFromFakeApi,
  productsRowFromServer: productApiImpl.productsRowFromServer,
};

export const productModel = {
  productsSlice: productModelImpl.productsSlice,
  reducer: productModelImpl.reducer,
};
