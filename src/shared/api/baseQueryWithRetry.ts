import { retry } from '@reduxjs/toolkit/query/react';

import { baseQueryFactory } from './baseQueryFactory';

export const baseQueryWithRetry = retry(baseQueryFactory, { maxRetries: 3 });
