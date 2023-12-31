import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../configs/config'
const LoginThunk = createAsyncThunk(
  'user/login',
  async (data:any, { rejectWithValue }) => {
   
    try {
      const res = await axios.post('/api/v1/users/login', data);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
export default LoginThunk;
