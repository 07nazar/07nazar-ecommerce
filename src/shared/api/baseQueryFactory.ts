import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../config';

export const baseQueryFactory: BaseQueryFn = fetchBaseQuery({
  baseUrl: API_URL,
  mode: 'cors',
  prepareHeaders: headers => {
    // get token from HTTPOnly Cookie
    const token = true;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
