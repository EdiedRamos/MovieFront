import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { CategoriesT } from "@/Types";
import { UserCategoryService } from "@/Services";

type StateT = {
  categories: CategoriesT;
};

export const setCategories = createAsyncThunk(
  "film/setCategories",
  async (): Promise<CategoriesT> => {
    const categories: CategoriesT = await UserCategoryService.getByUserId();
    return categories;
  }
);

const initialState: StateT = {
  categories: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

// export const { smoke } = categorySlice.actions;
export const { reducer: filmReducer } = filmSlice;