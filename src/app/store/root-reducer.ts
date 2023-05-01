import {combineReducers} from '@reduxjs/toolkit';

import {baseApi} from 'shared/api';
import {cartModel} from 'entities/cart';
import {categoriesModel} from 'entities/categories';
import {orderModel} from 'entities/order';
import {productModel} from 'entities/product';
import {sessionModel} from 'entities/session';
import {userModel} from 'entities/user';

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
