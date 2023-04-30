import { createSlice } from '@reduxjs/toolkit';

import { baseApi } from 'shared/api';

import { Product } from '../types';

const PRODUCTS_KEY = 'products';

type ProductStateType = {
  products: Product[];
  page: number;
  pageLimit: number;
};

const initialState: ProductStateType = {
  products: [],
  page: 1,
  pageLimit: 10,
};

// query actions ( async )

export const productsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, string>({
      query: id => ({ url: `/product/${id}` }),
    }),
  }),
});
// TODO нужен эндпоинт на товары с наибольшой разницей в цене который возвращает такого рода объект
export const dealsItemsFromFakeApi = {
  title: 'This title can be modifed',
  items: [
    {
      id: '1ztwsb35z3awbv436',
      name: 'Smart watches',
      discount: 34,
      mainPhoto: { url: img, thumbUrl: img },
    },
    {
      id: '2ztwsb35z3awbv436',
      name: 'Smart watches',
      discount: 34,
      mainPhoto: {
        url: img,
        thumbUrl: img,
      },
    },
    {
      id: '3ztwsb35z3awbv436',
      name: 'Smart watches',
      discount: 15,
      mainPhoto: {
        url: img,
        thumbUrl: img,
      },
    },
    {
      id: '4ztwsb35z3awbv436',
      name: 'Smart watches',
      discount: 54,
      mainPhoto: {
        url: img,
        thumbUrl: img,
      },
    },
    {
      id: '5ztwsb35z3awbv436',
      name: 'Smart watches',
      discount: 24,
      mainPhoto: {
        url: img,
        thumbUrl: img,
      },
    },
  ],
};

export const productsSlice = createSlice({
  name: PRODUCTS_KEY,
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

export const { useGetProductByIdQuery } = productsApi;

export const { reducer } = productsSlice;
