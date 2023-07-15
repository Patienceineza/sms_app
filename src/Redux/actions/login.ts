import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../configs/config'
const LoginThunk = createAsyncThunk(
  'user/login',
  async (data:any, { rejectWithValue }) => {
   
    try {
      const res = await axios.post('/api/v1/users/login', data);
      console.log(res.data)
      return res.data;
     
    } catch (error) {
      console.log(error)
      return rejectWithValue({ error });
    }
  }
);

export default LoginThunk;
