import { configureStore } from "@reduxjs/toolkit";
import login, { LoginState } from "./slices/login";
import user, { userState } from "./slices/user";
import api, { ApiState } from "./slices/createApi";
import data, { dataState } from "./slices/getApiData";
import send, { sendState } from "./slices/sendSms";
import register, { registerState } from "./slices/register";

export const store = configureStore({
  reducer: {
    login: login,
    user: user,
    api: api,
    data: data,
    send: send,
    register: register,
  },
});

export type RootState = {
  login: LoginState;
  user: userState;
  api: ApiState;
  data: dataState;
  send: sendState;
  register: registerState;
};

export type AppDispatch = typeof store.dispatch;
