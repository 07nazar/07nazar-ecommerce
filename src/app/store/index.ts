import { configureStore } from '@reduxjs/toolkit';

import { cartModel } from 'entities/Cart';
import { categoriesModel } from 'entities/Categories';
import { productModel } from 'entities/Product';
import { userModel } from 'entities/User';
import { isDevEnv } from 'shared/config';

export const store = configureStore({
  reducer: {
    products: productModel.reducer,
    cart: cartModel.reducer,
    user: userModel.reducer,
    categories: categoriesModel.reducer,
  },
  devTools: isDevEnv,
});
