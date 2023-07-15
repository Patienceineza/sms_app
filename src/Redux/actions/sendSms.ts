import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../configs/config'

const ApiThunk = createAsyncThunk(
  'sms/add',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        '/api/v1/notifications/send-sms',
     data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Ishema-token')}`,
            ApiKey:import.meta.env.VITE_API_SECRET
          },
        }
      );
     
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default ApiThunk;
