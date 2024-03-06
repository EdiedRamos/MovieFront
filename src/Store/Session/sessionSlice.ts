import { createSlice } from "@reduxjs/toolkit";

type UserT = {
  id: string;
};

type StateT = {
  isLogged: boolean;
  user: UserT | null;
};

const initialState: StateT = {
  isLogged: false,
  user: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

export const { login, logout } = sessionSlice.actions;
export const { reducer: sessionReducer } = sessionSlice;
