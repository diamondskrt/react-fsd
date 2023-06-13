import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

const webpackIsDev = process.env.MODE;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  devTools: !!webpackIsDev
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
