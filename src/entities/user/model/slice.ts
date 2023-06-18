import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserData } from './types';

const initialState: UserData = {
  userData: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // @todo добавить сохранение состояния (persistedState)
    setUserData: (state, action: PayloadAction<User>) => {
      const { payload } = action;

      state.userData = payload;
    },
    signOut: (state) => {
      state.userData = null;
    }
  }
});

export const { setUserData, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
