import { configureStore } from "@reduxjs/toolkit";

// import { categoryReducer } from "../Category/categorySlice";

import { sessionReducer, filmReducer } from "..";

export const store = configureStore({
  reducer: {
    sessionReducer,
    filmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
