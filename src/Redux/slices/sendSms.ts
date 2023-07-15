import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import SendThunk from "../actions/sendSms";

export interface sendState {
  data: string | null;

  isLoading: boolean;

  error: boolean;
  errorMessage: string | undefined;
}

export const initialState: sendState = {
  data: null,

  isLoading: false,

  error: false,
  errorMessage: undefined,
};

export const sendSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    api: (state, { payload }: PayloadAction<string | null>) => {

      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SendThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(SendThunk.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = true;

        state.errorMessage =
          action.payload?.error?.response?.data?.message || "error";
      })
      .addCase(SendThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.error) {
          state.error = true;
        } else if (action.payload.access_token) {
          state.error = false;
          state.data = action.payload;
        }
      });
  },
});

export default sendSlice.reducer;
