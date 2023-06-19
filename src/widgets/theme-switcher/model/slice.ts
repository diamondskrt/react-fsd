import { createSlice } from '@reduxjs/toolkit';
import { SwitchTheme } from './types';

const initialState: SwitchTheme = {
  darkMode: true
};

export const switchThemeSlice = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const { toggleDarkMode } = switchThemeSlice.actions;

export const switchThemeReducer = switchThemeSlice.reducer;
