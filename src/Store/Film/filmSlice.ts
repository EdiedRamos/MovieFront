import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { CategoriesT, MovieT, MoviesT } from "@/Types";
import { CategoryService } from "@/Services";
import { MovieService } from "@/Services/Film/Movie/movie";

type StateT = {
  categories: CategoriesT;
  movies: MoviesT;
  isLoadingMovies: boolean;
  movie: MovieT | undefined;
};

export const setCategories = createAsyncThunk(
  "film/setCategories",
  async (): Promise<CategoriesT> => {
    const categories: CategoriesT = await CategoryService.getByUserId();
    return categories;
  }
);

export const setMovies = createAsyncThunk(
  "film/setMovies",
  async (categoryId: string): Promise<MoviesT> => {
    const movies: MoviesT = await MovieService.getByCategory(categoryId);
    return movies;
  }
);

export const setMovie = createAsyncThunk(
  "film/setMovie",
  async (movieId: string): Promise<MovieT | undefined> => {
    const movie: MovieT | undefined = await MovieService.getById(movieId);
    return movie;
  }
);

const initialState: StateT = {
  categories: [],
  movies: [],
  isLoadingMovies: true,
  movie: undefined,
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
        state.isLoadingMovies = false;
      })

      // setMovie
      .addCase(setMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.isLoadingMovies = false;
      });
  },
});

// export const { smoke } = categorySlice.actions;
export const { reducer: filmReducer } = filmSlice;
