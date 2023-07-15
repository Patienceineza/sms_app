import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import DataThunk from "../actions/getApidata";

export interface dataState {
  data: null;
  loading: boolean;

  error: boolean;
  errorMessage: string | undefined;
}

export const initialState: dataState = {
  data: null,

  loading: false,

  error: false,
  errorMessage: undefined,
};

export const UserSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DataThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(DataThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(DataThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.error) {
          state.error = true;
          state.errorMessage =
            payload?.error?.response?.data?.message || "error";
        } else {
          state.error = false;
          state.data = payload;
        }
      });
  },
});

export default UserSlice.reducer;
