import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../configs/config'

const ApiThunk = createAsyncThunk(
  '',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        '/api/v1/clients',
     data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Ishema-token')}`,
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
