import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithRetry } from './baseQueryWithRetry';
import { TAGS } from './tags';

export const baseApi = createApi({
  tagTypes: [
    TAGS.SESSION,
    TAGS.USER,
    TAGS.PRODUCT,
    TAGS.CATEGORIES,
    TAGS.CART,
    TAGS.ORDER,
    TAGS.REVIEW,
  ],
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
