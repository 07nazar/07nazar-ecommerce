import { baseApi } from 'shared/api';

import { Product } from '../types';

export * from './products-from-server';
export * from './product-page-example';
export * from './likes-items';
export * from './related-items';
export * from './min-products';
export * from './deals-items';
export * from './products-row';

export const productsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, string>({
      query: id => ({ url: `/product/${id}` }),
    }),
  }),
});
export const { useGetProductByIdQuery } = productsApi;
