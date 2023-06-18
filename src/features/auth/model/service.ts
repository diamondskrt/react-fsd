import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from './types';
import { User, setUserData } from '@/entities/user';

export const auth = createAsyncThunk<User, UserData, { rejectValue: string; }>(
  'auth/authWithUserName',
  async (userData: UserData, thunkAPI) => {
    try {
      // @todo написать сервис
      // const response = await userAPI.auth(UserData);
      const token = uuidv4();

      const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': '*'
      };

      const response = await axios.post('http://localhost:8000/login', userData, { headers });

      thunkAPI.dispatch(setUserData(response.data));

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
