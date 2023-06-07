import { RootState } from '@/app/providers/with-store/store';
import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from './type';

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState): number => state.counter.value;

export default counterSlice.reducer;
