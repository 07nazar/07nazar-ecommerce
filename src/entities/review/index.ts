import * as reviewApiImpl from './api';
import * as reviewLibImpl from './lib';
import * as reviewModelImpl from './model';

export * from './ui';
export * as reviewTypes from './types';

export const reviewLib = {
  calculateRating: reviewLibImpl.calculateRating,
};

export const reviewModel = {
  reviewSlice: reviewModelImpl.reviewSlice,
  reducer: reviewModelImpl.reducer,
};

export const reviewApi = {
  reviewApi: reviewApiImpl.reviewApi,
};
