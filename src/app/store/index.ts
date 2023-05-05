import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { invalidateAccessTokenListener } from 'features/authentication/InvalidateAccessToken';
import { baseApi } from 'shared/api/baseApi';
import { isDevEnv } from 'shared/config';

import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      baseApi.middleware,
      invalidateAccessTokenListener.middleware
    ),
  devTools: isDevEnv,
});

setupListeners(store.dispatch);
