import { store } from './index';

declare type RootState = ReturnType<typeof store.getState>;

declare type SliceNames = keyof RootState;

declare type AppDispatch = typeof store.dispatch;
