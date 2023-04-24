import { store } from './index';

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type SliceNames = keyof RootState;
  type AppDispatch = typeof store.dispatch;
}
