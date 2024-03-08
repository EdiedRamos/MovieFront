import { LocalData } from "@/Domain/Utils";
import { Auth } from "@/Services";
import { UserInfoT } from "@/Types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type UserT = {
  id: string;
};

type StateT = {
  isLogged: boolean;
  isCheckingToken: boolean;
  user: UserT | null;
};

const initialState: StateT = {
  isLogged: !!LocalData.getUserId(),
  isCheckingToken: !!LocalData.getUserId(),
  user: null,
};

type StatusT = {
  state: boolean;
};

export const verifyToken = createAsyncThunk(
  "session/verifyToken",
  async (): Promise<StatusT> => {
    const token = localStorage.getItem("userId");
    if (!token) return { state: false };
    const validation = await Auth.verifyUser(token);
    return { state: validation };
  }
);

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfoT>) => {
      state.isLogged = true;
      localStorage.setItem("userId", action.payload.id);
    },
    logout: (state) => {
      state.isLogged = false;
      localStorage.removeItem("userId");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      if (!action.payload.state) {
        localStorage.removeItem("userId");
        state.isLogged = false;
        state.isCheckingToken = false;
        return;
      }
      state.isLogged = true;
      state.isCheckingToken = false;
    });
  },
});

export const { login, logout } = sessionSlice.actions;
export const { reducer: sessionReducer } = sessionSlice;
