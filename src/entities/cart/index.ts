import * as cartModelImpl from './model';

export * as cartTypes from './types';

export const cartApi = {};

export const cartModel = {
  cartSlice: cartModelImpl.cartSlice,
  addToCart: cartModelImpl.addToCart,
  removeFromCart: cartModelImpl.removeFromCart,
  applyCoup: cartModelImpl.applyCoupon,
  removeCoupon: cartModelImpl.removeCoupon,
  calculateTotal: cartModelImpl.calculateTotal,
  clearCart: cartModelImpl.clearCart,
  reducer: cartModelImpl.reducer,
};
