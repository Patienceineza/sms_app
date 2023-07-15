import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../configs/config'
const RegisterThunk = createAsyncThunk(
  'user/register',
  async (data:any, { rejectWithValue }) => {
   
    try {
      const res = await axios.post('/api/v1/users/register', data);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
export default RegisterThunk;
