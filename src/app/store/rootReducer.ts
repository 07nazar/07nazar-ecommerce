import { combineReducers } from '@reduxjs/toolkit';

import { cartModel } from 'entities/Cart';
import { categoriesModel } from 'entities/Categories';
import { orderModel } from 'entities/Order';
import { productModel } from 'entities/Product';
import { sessionModel } from 'entities/Session';
import { userModel } from 'entities/User';
import { baseApi } from 'shared/api/baseApi';

export const rootReducer = combineReducers({
  [cartModel.cartSlice.name]: cartModel.cartSlice.reducer,
  [categoriesModel.categoriesSlice.name]:
    categoriesModel.categoriesSlice.reducer,
  [orderModel.orderSlice.name]: orderModel.orderSlice.reducer,
  [userModel.userSlice.name]: userModel.userSlice.reducer,
  [sessionModel.sessionSlice.name]: sessionModel.sessionSlice.reducer,
  [productModel.productsSlice.name]: productModel.productsSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
