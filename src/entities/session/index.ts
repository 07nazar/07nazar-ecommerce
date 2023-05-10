import * as sessionApiImpl from './api';
import * as sessionModelImpl from './model';

export * as sessionTypes from './types';

export const sessionModel = {
  sessionSlice: sessionModelImpl.sessionSlice,
  reducer: sessionModelImpl.reducer,
};

export const sessionApi = {
  sessionApi: sessionApiImpl.sessionApi,
};
