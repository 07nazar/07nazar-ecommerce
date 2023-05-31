import { baseApi, TAGS } from 'shared/api';

import { mapProductsData, ProductTableList } from '../lib';
import { Product } from '../types';

import { productsFromServer } from './products-from-server';

export const productsList = productsFromServer.map(mapProductsData);

export { productFromServer } from './product-page-example';
export { productsLikes } from './likes-items';
export { productsRelated } from './related-items';
export { productsMin } from './min-products';
export { dealsItemsFromFakeApi } from './deals-items';
export { productsRowFromServer } from './products-row';

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
