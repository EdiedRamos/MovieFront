import { configureStore } from "@reduxjs/toolkit";

// import { categoryReducer } from "../Category/categorySlice";

import { sessionReducer, categoryReducer } from "..";

export const store = configureStore({
  reducer: {
    sessionReducer,
    categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
