import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { CategoriesT, MoviesT } from "@/Types";
import { UserCategoryService } from "@/Services";
import { MovieService } from "@/Services/Film/Movie/movie";

type StateT = {
  categories: CategoriesT;
  movies: MoviesT;
};

export const setCategories = createAsyncThunk(
  "film/setCategories",
  async (): Promise<CategoriesT> => {
    const categories: CategoriesT = await UserCategoryService.getByUserId();
    return categories;
  }
);

export const setMovies = createAsyncThunk(
  "film/setMovies",
  async (): Promise<MoviesT> => {
    const movies: MoviesT = await MovieService.getAll();
    return movies;
  }
);

const initialState: StateT = {
  categories: [],
  movies: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // setCategories
      .addCase(setCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      // setMovies
      .addCase(setMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

// export const { smoke } = categorySlice.actions;
export const { reducer: filmReducer } = filmSlice;
