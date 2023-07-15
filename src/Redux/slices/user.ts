import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import UserThunk from "../actions/user";

export interface userState {
  user: null;

  loading: boolean;

  error: boolean;
  errorMessage: string | undefined;
}

export const initialState: userState = {
  user: null,

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
      .addCase(UserThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(UserThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(UserThunk.fulfilled, (state, { payload }) => {
   
        state.loading = false;
        if (payload.error) {
          state.error = true;
          state.errorMessage =
            payload?.error?.response?.data?.message || "error";
        } else {
          state.error = false;
          state.user = payload;
        }
      });
  },
});

export default UserSlice.reducer;
