import * as orderModelImpl from './model';

export * as orderTypes from './types';

export const orderModel = {
  orderSlice: orderModelImpl.orderSlice,
  reducer: orderModelImpl.reducer,
};
