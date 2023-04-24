import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../config';

export const baseQueryFactory = (basePath: string) =>
  fetchBaseQuery({
    baseUrl: API_URL + basePath,
    prepareHeaders: headers => {
      // get token from localstorage
      const token = true;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });
