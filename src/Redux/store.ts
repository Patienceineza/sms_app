import { configureStore } from '@reduxjs/toolkit';
import login, { LoginState } from './slices/login';

export const store = configureStore({
  reducer: {
    login: login,
  },
});

export type RootState = {
  login: LoginState;
};

export type AppDispatch = typeof store.dispatch;
