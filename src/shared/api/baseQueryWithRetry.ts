import { retry } from '@reduxjs/toolkit/query/react';

import { baseQueryFactory } from './baseQueryFactory';
import { invalidateAccessToken } from './invalidateTokenEvent';

// export const baseQueryWithRetry = retry(baseQueryFactory, { maxRetries: 3 });
export const baseQueryWithRetry = retry(
  async (args, api, extraOptions) => {
    const result = await baseQueryFactory(args, api, extraOptions);

    if (result.error?.status === 401) {
      api.dispatch(invalidateAccessToken());
    }

    return result;
  },
  { maxRetries: 3 }
);
