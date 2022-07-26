/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/crypto-api";
import { cryptoNewsApi } from "../services/crypto-news-api";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
