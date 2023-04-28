import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Cart, CartItem, Coupon } from '../types';

const initialState: Cart = {
  items: [],
  coupon: null,
  subtotal: 0,
  discount: 0,
  tax: 0,
  total: 0,
  createdDate: new Date().toISOString(),
  updatedDate: new Date().toISOString(),
};

// query actions ( async )

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartItem>) => {
      state.items.push(payload);
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.items.filter(item => item.id !== payload);
    },
    applyCoupon: (state, { payload }: PayloadAction<Coupon>) => {
      state.coupon = payload;
    },
    removeCoupon: state => {
      state.coupon = null;
    },
    calculateTotal: state => {
      const subtotal = state.items.reduce(
        (acc, item) => acc + item.price.current,
        0
      );
      const discount = state.coupon?.discount || 0;
      // TODO вынести tax в конфиг shared
      const tax = subtotal * 0.1;
      const total = subtotal - discount + tax;

      state.subtotal = subtotal;
      state.discount = discount;
      state.tax = tax;
      state.total = total;
    },
    clearCart: state => {
      state.items = [];
      state.coupon = null;
      state.subtotal = 0;
      state.discount = 0;
      state.tax = 0;
      state.total = 0;
    },
  },
});

// selectors

export const {
  addToCart,
  removeFromCart,
  applyCoupon,
  removeCoupon,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

export const { reducer } = cartSlice;
