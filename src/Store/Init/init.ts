import { configureStore } from "@reduxjs/toolkit";

import { sessionReducer } from "..";

export const store = configureStore({
  reducer: {
    sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;