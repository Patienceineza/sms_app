import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import LoginThunk from '../actions/login';


export interface LoginState {
  access_token: string | null;

  isLoading: boolean;

  error: boolean;
  errorMessage: string | undefined;
}

export const initialState: LoginState = {
    access_token: localStorage.getItem('token'),

  isLoading: false,

  error: false,
  errorMessage: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state,{payload} )=> {
        console.log(payload)
        localStorage.setItem('token-Ishema', payload.access_token);
        state.access_token = payload.access_token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(LoginThunk.rejected, (state, action:any) => {
        state.isLoading = false;
        state.error = true;
      
       
          state.errorMessage =
            action.payload?.error?.response?.data?.message || 'error';
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      
        if (action.payload.error) {
          state.error = true;
          state.errorMessage =
            action.payload?.error?.response?.data?.message || 'Unknown error';
        } else if (action.payload.access_token) {
          localStorage.setItem('token', action.payload.access_token);
          state.error = false;
          state.access_token = action.payload.access_token;
        } else if (typeof action.payload.message === 'string' && action.payload.message.includes('check your email')) {
          state.error = false;
        } else {
          state.error = true;
          state.errorMessage = 'Unknown error';
        }
      })
      
    }})

export default loginSlice.reducer;
