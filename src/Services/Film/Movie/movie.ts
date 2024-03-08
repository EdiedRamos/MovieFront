import { MoviesT, MovieT } from "@/Types";
import axios, { AxiosResponse } from "axios";
import { UserCategoryService } from "../UserCategory/userCategory";

export const MovieService = {
  async getAll(): Promise<MoviesT> {
    const defaultResponse: MoviesT = [];
    try {
      const movies: AxiosResponse<MoviesT> = await axios.get<MoviesT>(
        "https://react-redux-crud-75194-default-rtdb.firebaseio.com/movies.json"
      );
      return movies.data;
    } catch {
      return defaultResponse;
    }
  },
  async getByOwner(): Promise<MoviesT> {
    const defaultResponse: MoviesT = [];
    try {
      const movies: MoviesT = await this.getAll();
      if (movies.length === 0) return defaultResponse;

      const userCategories: Array<string> =
        await UserCategoryService.getByUserId();
      if (userCategories.length === 0) return defaultResponse;

      console.log({ userCategories });

      return movies.filter((movie) =>
        userCategories.includes(movie.categoryId)
      );
    } catch {
      return defaultResponse;
    }
  },
  async getByCategory(categoryId: string): Promise<MoviesT> {
    const defaultResponse: MoviesT = [];
    try {
      const movies: MoviesT = await this.getByOwner();
      return movies.filter((movie) => movie.categoryId === categoryId);
    } catch {
      return defaultResponse;
    }
  },
  async getById(movieId: string): Promise<MovieT | undefined> {
    const defaultResponse: MovieT | undefined = undefined;
    try {
      const movies: MoviesT = await this.getByOwner();
      return movies.find((movie) => movie.id === movieId);
    } catch {
      return defaultResponse;
    }
  },
};
