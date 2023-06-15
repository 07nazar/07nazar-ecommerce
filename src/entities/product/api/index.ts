import { baseApi, TAGS } from 'shared/api';

import { mapProductsData, ProductTableList } from '../lib';
import { NewProductType, Product } from '../types';

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
    createProduct: builder.mutation<Product, NewProductType>({
      query: data => {
        const formData = new FormData();

        if (data.mainPhoto !== null) {
          formData.append('mainPhoto', data.mainPhoto);
        }

        if (data.additionalPhotos) {
          const additionalPhotoFiles = Array.from(data.additionalPhotos);
          additionalPhotoFiles.forEach((file, index) => {
            formData.append(`additionalPhotos[${index}]`, file);
          });
        }

        formData.append('name', data.name);
        formData.append('advantages', JSON.stringify(data.advantages));
        formData.append('category', data.category);
        formData.append('deliveryCost', data.deliveryCost);
        formData.append('description', data.description);
        formData.append('price', JSON.stringify(data.price));
        formData.append('quantity', data.quantity);
        console.log(data);
        return {
          url: '/product',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});
export const {
  useGetProductByIdQuery,
  useGetProductsListQuery,
  useCreateProductMutation,
} = productsApi;
