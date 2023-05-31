import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../types';

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

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

export const { reducer } = productsSlice;
