import {createSlice} from '@reduxjs/toolkit';

import img from 'assets/rasm.png';
import {baseApi} from 'shared/api';

import {Product, ProductMin} from '../types';

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

export const productsMin: ProductMin[] = [
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Brown winter coat medium size',
    price: {
      current: 51.31,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Leather wallet',
    price: {
      current: 518.33,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Brown winter coat medium size 2',
    price: {
      current: 22.35,
      old: 25,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Brown winter coat medium size 4',
    price: {
      current: 51.34,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'Brown winter coat medium size 5',
    price: {
      current: 518.32,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'product6',
    price: {
      current: 22.31,
      old: 25,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'product7',
    price: {
      current: 51.33,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'product88',
    price: {
      current: 518.36,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'product73',
    price: {
      current: 51.37,
    },
  },
  {
    id: 'das2wtgv412',
    mainPhoto: { url: img, thumbUrl: '' },
    name: 'product8841',
    price: {
      current: 5138.63,
    },
  },
];

export const productsSlice = createSlice({
  name: PRODUCTS_KEY,
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

export const { useGetProductByIdQuery } = productsApi;

export const { reducer } = productsSlice;
