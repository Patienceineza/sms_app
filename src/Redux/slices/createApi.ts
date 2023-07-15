import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ApiThunk from "../actions/createApi";

export interface ApiState {
  data: string | null;

  isLoading: boolean;

  error: boolean;
  errorMessage: string | undefined;
}

export const initialState: ApiState = {
  data: null,

  isLoading: false,

  error: false,
  errorMessage: undefined,
};

export const loginSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    api: (state, { payload }: PayloadAction<string | null>) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ApiThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(ApiThunk.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = true;

        state.errorMessage =
          action.payload?.error?.response?.data?.message || "error";
      })
      .addCase(ApiThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.error) {
          state.error = true;
          state.errorMessage =
            action.payload?.error?.response?.data?.message || "Unknown error";
        } else if (action.payload.access_token) {
          state.error = false;
          state.data = action.payload;
        } else {
          state.error = true;
          state.errorMessage = "Unknown error";
        }
      });
  },
});

export default loginSlice.reducer;
