import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import RegisterThunk from "../actions/register";

export interface registerState {
  access_token: string | null;

  isLoading: boolean;

  error: boolean;
  errorMessage: string | undefined;
}

export const initialState: registerState = {
  access_token: localStorage.getItem("Ishema-token"),

  isLoading: false,

  error: false,
  errorMessage: undefined,
};

export const RegisterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    register: (state, { payload }) => {
    
      localStorage.setItem("Ishema-token", payload.access_token);
      state.access_token = payload.access_token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(RegisterThunk.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = true;
        state.errorMessage =
          action.payload?.error?.response?.data?.message || "error";
      })
      .addCase(RegisterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("Ishema-token", action.payload.access_token);
        if (action.payload.error) {
          state.error = true;
          state.errorMessage =
            action.payload?.error?.response?.data?.message || "Unknown error";
        } else if (action.payload.access_token) {
          localStorage.setItem("Ishema-token", action.payload.access_token);
          state.error = false;
          state.access_token = action.payload.access_token;
        } else {
          state.error = true;
          state.errorMessage = "Unknown error";
        }
      });
  },
});

export default RegisterSlice.reducer;
