import { createSlice } from '@reduxjs/toolkit';
import { UserData } from './types';

const initialState: UserData = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const userReducer = userSlice.reducer;
