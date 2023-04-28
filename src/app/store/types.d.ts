import { rootReducer } from './rootReducer';

import { store } from './index';

declare global {
  type RootState = ReturnType<typeof rootReducer>;
  type SliceNames = keyof RootState;
  type AppDispatch = typeof store.dispatch;
}
