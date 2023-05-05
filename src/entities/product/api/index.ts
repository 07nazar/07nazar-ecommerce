import { baseApi, TAGS } from 'shared/api';

import { mapProductsData, ProductTableList } from '../lib';
import { Product } from '../types';

import { productsFromServer } from './products-from-server';

export const productsList = productsFromServer.map(mapProductsData);

export * from './product-page-example';
export * from './likes-items';
export * from './related-items';
export * from './min-products';
export * from './deals-items';
export * from './products-row';

type GetProductsPayload = {
  count: number;
  search?: string;
  sortBy: string;
};

export const productsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, string>({
      query: id => ({ url: `/product/${id}` }),
    }),
    getProductsList: builder.query<ProductTableList[], GetProductsPayload>({
      query: ({ count, search, sortBy }) => ({
        url: '/products',
        method: 'GET',
        params: {
          count,
          search,
          sortBy,
        },
        transformResponse: (response: unknown[]) =>
          response.map(mapProductsData),
        providesTags: [TAGS.PRODUCT],
      }),
    }),
  }),
});
export const { useGetProductByIdQuery, useGetProductsListQuery } = productsApi;
