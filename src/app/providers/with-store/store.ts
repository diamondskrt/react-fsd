import counterReducer from '@/entities/counter/model/slice';
import { configureStore } from '@reduxjs/toolkit';

const webpackIsDev = process.env.MODE;

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  devTools: !!webpackIsDev
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
