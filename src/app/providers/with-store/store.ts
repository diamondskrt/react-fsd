import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { authReducer } from '@/features/auth';
import { configureStore } from '@reduxjs/toolkit';

const webpackIsDev = process.env.MODE;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer
  },
  devTools: !!webpackIsDev
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
