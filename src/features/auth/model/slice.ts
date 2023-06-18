import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthForm } from './types';
import { auth } from './service';

const initialState: AuthForm = {
  name: '',
  password: '',
  isLoading: false,
  error: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.name = payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.password = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(auth.pending, (state) => {
      state.error = '';
      state.isLoading = true;
    });
    builder.addCase(auth.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(auth.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;

      const { payload } = action;

      if (!payload) return;

      state.error = payload;
    });
  }
});

export const { setName, setPassword } = authSlice.actions;

export const authReducer = authSlice.reducer;
