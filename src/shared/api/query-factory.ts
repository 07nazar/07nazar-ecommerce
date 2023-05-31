import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { API_URL } from '../config';

export const baseQueryFactory: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  Record<string, unknown>,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: API_URL,
  mode: 'cors',
  credentials: 'include',

  prepareHeaders: headers => {
    // get token from HTTPOnly Cookie
    const token = false;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
