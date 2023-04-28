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

export const productsSlice = createSlice({
  name: PRODUCTS_KEY,
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

export const { useGetProductByIdQuery } = productsApi;

export const { reducer } = productsSlice;
