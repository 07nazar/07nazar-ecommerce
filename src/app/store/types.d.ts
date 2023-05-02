import {rootReducer} from './root-reducer';

import {store} from './index';

declare global {
  type RootState = ReturnType<typeof rootReducer>;
  type SliceNames = keyof RootState;
  type AppDispatch = typeof store.dispatch;
}
