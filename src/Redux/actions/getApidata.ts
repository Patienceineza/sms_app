import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../configs/config'

const DataThunk = createAsyncThunk('client', async () => {
  try {
    const res = await axios.get('/api/v1/clients', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Ishema-token')}`,
      },
    });

    return res.data;
  } catch (error) {
  
    return { error };
  }
});

export default DataThunk;
